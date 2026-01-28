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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');

    const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!apiBase) {
      setStatus('error');
      return;
    }

    try {
      const response = await fetch(`${apiBase}/emails/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullName,
          email,
          message: subject ? `${subject}\n\n${message}` : message,
          source: 'web-contact',
        }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setStatus('success');
      setFullName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      setStatus('error');
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
                  No pudimos enviar tu mensaje. Intenta de nuevo.
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
