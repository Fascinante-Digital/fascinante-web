# Fascinante Digital NextJS Template

Fascinante Digital NextJS Template is a premium template built by https://www.fascinantedigital.com

- [Demo](https://fascinante-digital-nextjs-template.vercel.app/)
- [Documentation](https://docs.fascinantedigital.com/templates/getting-started)

## Screenshot

![Fascinante Digital NextJS Template screenshot](./public/og-image.jpg)

## Getting Started

```bash
npm install
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- Nextjs 15 / App Router
- Tailwind 4
- shadcn/ui

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com)

## Environment Variables

Manage environment variables in Vercel using three standard environments:

- Development
- Preview
- Production

Public website variables used by this project:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_API_BASE_URL`
- `NEXT_PUBLIC_AUTH_LOGIN_URL`
- `NEXT_PUBLIC_AUTH_SIGNUP_URL`
- `NEXT_PUBLIC_AUTH_FORGOT_PASSWORD_URL` (optional)

Important:

- Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.
- Do not store secrets (API private keys, Auth0 client secrets, tokens) in this frontend.
- Keep private credentials in the backend project (Fastify/Auth0 services) and Vercel server-side environments for that backend.
