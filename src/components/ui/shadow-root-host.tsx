import {
  type HTMLAttributes,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

type ShadowRootHostProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  mode?: ShadowRootInit['mode'];
  delegatesFocus?: boolean;
};

export default function ShadowRootHost({
  children,
  className,
  mode = 'open',
  delegatesFocus = false,
  ...rest
}: ShadowRootHostProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const shadowRef = useRef<ShadowRoot | null>(null);
  const [shadowEl, setShadowEl] = useState<ShadowRoot | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) {
      return;
    }

    const existingShadow = host.shadowRoot;
    if (existingShadow) {
      shadowRef.current = existingShadow;
      setShadowEl(existingShadow);
      return;
    }

    if (!shadowRef.current) {
      shadowRef.current = host.attachShadow({ mode, delegatesFocus });
    }

    setShadowEl(shadowRef.current);
  }, [mode, delegatesFocus]);

  return (
    <div ref={hostRef} className={className} {...rest}>
      {shadowEl ? createPortal(children, shadowEl as unknown as Element) : null}
    </div>
  );
}
