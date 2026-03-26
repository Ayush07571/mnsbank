<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:feature-context-001-mns-bank-website -->
# Feature Context: MNS Bank Website
- **Framework**: Next.js 16.2.1 App Router
- **Styling**: Tailwind CSS v3
- **Forms**: React Hook Form + Zod + reCAPTCHA v3
- **i18n**: next-i18next (en / hi)
- **CMS Environment**: Local JSON/Markdown editable via built-in Next.js admin routes
- **Navigation Rule**: Use `export const unstable_instant = { prefetch: 'static' }` on routes to ensure instant navigation.
<!-- END:feature-context-001-mns-bank-website -->
