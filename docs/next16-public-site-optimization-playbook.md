# Next.js 16 Public Site Optimization Playbook

## Nombre sugerido del documento

Puedes llamarlo:

- Bitacora de optimizacion y ejecucion
- Playbook de optimizacion Next.js 16
- Plan maestro web publica

Este archivo usa el nombre `Next.js 16 Public Site Optimization Playbook` y sirve para responder:

- que hicimos
- que estamos haciendo
- que vamos a hacer
- con que contrato tecnico

## 1) Estado actual

### Hecho

- Se audito el proyecto con enfoque oficial Next.js 16 App Router.
- Se confirmo arquitectura publica estatica con `output: 'export'` en `next.config.ts`.
- Se confirmo build de produccion exitosa con rutas estaticas y blog SSG.
- Se confirmo que hoy el acople backend visible es formulario de contacto por `NEXT_PUBLIC_API_BASE_URL`.
- Se confirmo ausencia de integracion directa de Auth0 en este frontend (decision valida si auth vive en backend).

### En curso

- Definir contrato de versionado (Node, Next, React, TypeScript, npm).
- Definir contrato de variables de entorno para auth externa y contacto.
- Preparar limpieza de componentes cliente para reducir JavaScript enviado al navegador.

### Por hacer

- Mover links Login/Signup a URLs externas por variables de entorno (con fallback temporal `#`).
- Completar SEO por ruta (`metadata` / `generateMetadata`) para blog y paginas clave.
- Agregar `sitemap.ts` y `robots.ts` en App Router.
- Corregir script de lint para Next 16 y dejar pipeline estable.

## 2) Decisiones de arquitectura (alineadas con docs oficiales)

### Decision A: Sitio publico estatico

Se mantiene `output: 'export'` porque el sitio es publico (marketing + blog + formularios).

Efecto:

- excelente performance por CDN
- menor complejidad de runtime
- menor superficie de ataque en frontend

### Decision B: Backend centralizado en Fastify + Auth0

La logica de negocio, auth, email, seguridad y observabilidad vive en backend.

Efecto:

- frontend mas liviano y mantenible
- seguridad centralizada
- contratos API claros

### Decision C: Login/Signup como destinos externos

Desde la web publica se puede iniciar sesion, pero via URL externa (configurada por variables de entorno).

## 3) Best practices Next.js 16 aplicadas al caso

## 3.1 Server vs Client Components

Patron oficial:

- Server Components por defecto
- usar `'use client'` solo cuando hay estado, eventos, efectos o APIs de navegador

Accion:

- eliminar `'use client'` en vistas estaticas sin interactividad real

## 3.2 SEO App Router

Patron oficial:

- metadata por ruta
- `generateMetadata` para contenido dinamico (ej. blog por slug)
- `metadataBase`, Open Graph, Twitter
- `robots` y `sitemap` en App Router

Accion:

- completar SEO mas alla de metadata global del layout

## 3.3 Caching y revalidation (importante)

Para este proyecto actual (export estatico):

- no hay ISR runtime real
- no hay revalidacion en tiempo real desde servidor Next
- el contenido cambia con nuevo build/deploy

Nota de diseno:

- Si en el futuro se necesita ISR on-demand o revalidation por tag/path, hay que quitar `output: 'export'`.

## 4) Contrato de versiones recomendado

Objetivo: evitar drift entre local, CI y Vercel.

- Node.js: `>=20.9 <25` (objetivo operativo: Node 24)
- Next.js: `16.1.x`
- React / React DOM: `19.x`
- TypeScript: `>=5.1` (actual ya compatible)
- npm: `>=10`

Sugerencia en `package.json`:

```json
{
  "engines": {
    "node": ">=20.9 <25",
    "npm": ">=10"
  }
}
```

## 5) Contrato de variables de entorno (frontend publico)

Requeridas:

- `NEXT_PUBLIC_API_BASE_URL` (formulario de contacto)

Recomendadas:

- `NEXT_PUBLIC_AUTH_LOGIN_URL`
- `NEXT_PUBLIC_AUTH_SIGNUP_URL`
- `NEXT_PUBLIC_AUTH_FORGOT_PASSWORD_URL` (opcional)

Comportamiento temporal:

- si no existe URL de auth, usar fallback `#`

## 6) Plan de ejecucion por fases

### Fase 1 - Base publica y enlaces externos

- Reemplazar links de login/signup por env vars.
- Convertir paginas login/signup en pagina puente (sin formularios fake).
- Mantener experiencia de usuario clara (boton directo a auth externa).

### Fase 2 - SEO tecnico y contenido

- Agregar metadata por pagina.
- Agregar `generateMetadata` en blog por slug.
- Implementar `sitemap.ts` y `robots.ts`.

### Fase 3 - Performance y calidad

- Reducir `'use client'` innecesario.
- Revisar `priority` en imagenes solo para elementos LCP reales.
- Corregir lint y dejar checks en CI (`build`, `lint`, `typecheck`).

## 7) Definition of Done (DoD)

Se considera completado cuando:

- arquitectura publica + backend central esta documentada y aplicada
- auth publica redirige por variables de entorno
- SEO App Router completo en rutas clave
- blog publica metadata social correcta por post
- sitemap y robots existen y son validos
- build/lint/typecheck pasan sin errores

## 8) Referencias oficiales usadas (via Context7)

- Static Exports (App Router):
  - https://github.com/vercel/next.js/blob/v16.1.1/docs/01-app/02-guides/static-exports.mdx
- Server and Client Components:
  - https://github.com/vercel/next.js/blob/v16.1.1/docs/01-app/01-getting-started/05-server-and-client-components.mdx
- Production Checklist:
  - https://github.com/vercel/next.js/blob/v16.1.1/docs/01-app/02-guides/production-checklist.mdx
- Metadata and generateMetadata:
  - https://github.com/vercel/next.js/blob/v16.1.1/docs/01-app/03-api-reference/04-functions/generate-metadata.mdx
- Caching and Revalidating:
  - https://github.com/vercel/next.js/blob/v16.1.1/docs/01-app/01-getting-started/09-caching-and-revalidating.mdx

## 9) Flujo estandar de industria (2026-2028) validado

Validado con referencias oficiales (Next.js 16, Fastify, Auth0) consultadas via Context7.

### Frontend publico (Next.js 16)

- Sitio publico + blog estatico con `output: 'export'`.
- Server Components por defecto y Client Components solo para interactividad.
- SEO por ruta con metadata completa, Open Graph, Twitter, sitemap y robots.

### Autenticacion (Auth0)

- Flujo recomendado: Authorization Code + PKCE.
- Login/Signup desde web publica hacia proveedor externo (Auth0/backend gateway).
- Backend valida `iss`, `aud`, `exp`, firma y scopes del access token.

### Backend API (Fastify)

- Contratos de entrada/salida con JSON Schema en rutas.
- Validacion automatica y respuestas consistentes de error.
- Seguridad operativa: CORS restringido, rate limiting, logs, timeouts, health checks.

### Entornos y despliegue (Vercel)

- Estandar: Development + Preview + Production.
- Variables publicas solo para datos no sensibles (`NEXT_PUBLIC_*`).
- Secretos reales solo en backend/proyectos server-side.

### Caching y revalidation (criterio correcto)

- Con `output: 'export'`, el contenido se actualiza por build/deploy.
- ISR y revalidation runtime no aplican en modo estatico.
- Si se requiere invalidacion en caliente, migrar a runtime Next (sin static export).
