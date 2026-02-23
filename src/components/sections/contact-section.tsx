'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function FascinanteContact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );
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
            'Hiciste demasiadas solicitudes. Intenta de nuevo en unos minutos.'
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
          <h2 className="text-foreground text-3xl leading-tight font-medium tracking-tight sm:text-5xl">
            Let’s Talk
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-2xl text-sm sm:text-base">
            Join us as we explore tailored solutions, discuss industry insights,
            and collaborate to find the best strategies for your success.
          </p>
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
                className="bg-foreground text-primary-foreground hover:bg-foreground/90 mt-2 h-12 w-full rounded-[8px]"
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
                  {errorMessage || 'No pudimos enviar tu mensaje. Intenta de nuevo.'}
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
