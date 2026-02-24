'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { businessProfile } from '@/lib/business-entity';

export default function FascinanteContact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'loading') {
      return;
    }

    setErrorMessage(null);
    setStatus('loading');

    const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!apiBase) {
      setErrorMessage('No pudimos enviar tu mensaje. Intenta de nuevo.');
      setStatus('error');
      return;
    }

    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim();
    const trimmedSubject = subject.trim();
    const trimmedMessage = message.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setErrorMessage('Completa los campos obligatorios para continuar.');
      setStatus('error');
      return;
    }

    if (!emailRegex.test(trimmedEmail)) {
      setErrorMessage('Ingresa un email válido.');
      setStatus('error');
      return;
    }

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch(`${apiBase}/emails/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedSubject
            ? `${trimmedSubject}\n\n${trimmedMessage}`
            : trimmedMessage,
          source: 'web-contact',
        }),
      });

      if (!response.ok) {
        if (response.status === 429) {
          setErrorMessage(
            'Hiciste demasiadas solicitudes. Intenta de nuevo en unos minutos.',
          );
        } else if (response.status >= 500) {
          setErrorMessage('No pudimos enviar tu mensaje. Intenta de nuevo.');
        } else {
          setErrorMessage('Revisa los datos e intenta de nuevo.');
        }
        setStatus('error');
        return;
      }

      setStatus('success');
      setErrorMessage(null);
      setFullName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        setErrorMessage('La solicitud tardó demasiado. Intenta de nuevo.');
      } else {
        setErrorMessage('No pudimos enviar tu mensaje. Intenta de nuevo.');
      }
      setStatus('error');
    } finally {
      window.clearTimeout(timeoutId);
    }
  };

  return (
    <section
      id="fascinante-contact"
      className="bg-background relative px-6 lg:px-0"
    >
      <div className="bg-features-hero pointer-events-none absolute inset-x-0 top-0 z-0 container h-[600px]" />

      <div className="relative z-10 container px-0">
        <div className="pt-20 text-center sm:pt-24 md:pt-28">
          <h1 className="text-foreground text-3xl leading-tight font-semibold tracking-tighter sm:text-5xl">
            Let’s Talk
          </h1>
          <p className="text-muted-foreground mx-auto mt-3 max-w-2xl text-sm sm:text-base">
            Join us as we explore tailored solutions, discuss industry insights,
            and collaborate to find the best strategies for your success.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-[12px] border border-slate-200/70 bg-white/90 p-5 text-left shadow-sm sm:mt-10 sm:p-6">
          <h3 className="text-foreground text-lg font-semibold tracking-tight">
            Business details
          </h3>
          <p className="text-muted-foreground mt-3 text-sm">
            {businessProfile.address.streetAddress},{' '}
            {businessProfile.address.addressLocality},{' '}
            {businessProfile.address.addressRegion}{' '}
            {businessProfile.address.postalCode}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <a
              href={`tel:${businessProfile.phoneE164}`}
              className="text-foreground underline-offset-4 hover:underline"
            >
              {businessProfile.phoneDisplay}
            </a>
            <a
              href={`mailto:${businessProfile.email}`}
              className="text-foreground underline-offset-4 hover:underline"
            >
              {businessProfile.email}
            </a>
            <a
              href={businessProfile.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline-offset-4 hover:underline"
            >
              View on Google Maps
            </a>
          </div>
          <ul className="text-muted-foreground mt-3 space-y-1 text-sm">
            {businessProfile.displayHours.map((hoursLine) => (
              <li key={hoursLine}>{hoursLine}</li>
            ))}
          </ul>
        </div>

        <div className="relative z-10 mt-10 sm:mt-12 md:mt-16">
          <div className="bg-card border-border-light shadow-light mx-auto max-w-3xl rounded-[12px] border p-6 sm:p-8 md:p-10">
            <h3 className="text-foreground mb-6 text-center text-2xl font-medium">
              Speak to us
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="fullName"
                  className="text-muted-foreground mb-2 block text-sm"
                >
                  Full name
                </label>
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  className="h-11 rounded-[8px]"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-muted-foreground mb-2 block text-sm"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="johndoe@mail.com"
                  className="h-11 rounded-[8px]"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-muted-foreground mb-2 block text-sm"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Create a subject..."
                  className="h-11 rounded-[8px]"
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-muted-foreground mb-2 block text-sm"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Enter your message..."
                  className="min-h-[150px] resize-y rounded-[8px]"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </div>

              <Button
                type="submit"
                variant="marketing"
                className="mt-2 w-full"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </Button>
              {status === 'success' ? (
                <p className="text-center text-sm text-emerald-600">
                  Mensaje enviado correctamente.
                </p>
              ) : null}
              {status === 'error' ? (
                <p className="text-center text-sm text-red-600">
                  {errorMessage ||
                    'No pudimos enviar tu mensaje. Intenta de nuevo.'}
                </p>
              ) : null}
            </form>
          </div>
        </div>

        <div className="h-10 sm:h-12 md:h-14" />
      </div>
    </section>
  );
}
