# Technical Research & Decisions
**Branch**: `001-mns-bank-website`
**Feature**: MNS Bank Website Build

## 1. Instant Navigation in Next.js 16 (App Router)
**Decision**: Configure all product and static pages to use `unstable_instant` with static prefetching.
**Rationale**: As discovered in the local `node_modules/next/dist/docs/01-app/02-guides/instant-navigation.md` documentation, Next.js 16 requires wrapping uncached data in `<Suspense>` boundaries and explicitly exporting `unstable_instant = { prefetch: 'static' }` from route segments to ensure instant client-side navigations and static shells. This prevents the root layout suspense from blocking route transitions.
**Alternatives Considered**: Standard Suspense without the export (rejected, as it causes unresponsive client navigations in Next.js 16).

## 2. Content Management System (CMS)
**Decision**: Built-in Next.js password-protected admin routes editing local JSON/Markdown files.
**Rationale**: Based on Clarification Question 5, a built-in solution is preferred over external headless CMS platforms to avoid subscription costs and API dependencies. It perfectly handles the required What's New, Rates, and Policy documents updates in under 15 minutes.
**Alternatives Considered**: Sanity.io (proposed originally but rejected to minimise infrastructure footprint), Strapi.

## 3. Map Provider for Branch & ATM Locators
**Decision**: OpenStreetMap (OSM) via Leaflet.js.
**Rationale**: Based on Clarification Question 3, OSM avoids Google Maps billing account requirements and API keys. It is sufficient for the 3 branch pins required.
**Alternatives Considered**: Google Maps Embed API (rejected due to API key/billing dependency).

## 4. Form Submission Routing
**Decision**: Dedicated bank email (e.g. `inquiries@mnsbankbhopal.com`) via server-side HTTPS POST.
**Rationale**: Based on Clarification Question 1, this represents the lowest-friction integration for Phase 1 without relying on external CRMs.
**Alternatives Considered**: Third-party CRM integration (e.g., Zoho) or direct CBS injection (deferred/rejected for Phase 1).

## 5. DEAF Data Ingestion
**Decision**: Manual CSV/Excel upload by an admin via a protected Next.js admin upload panel.
**Rationale**: Based on Clarification Question 2, this removes the need for complex CBS API integration while ensuring the bank has direct control over the published list.
**Alternatives Considered**: Automated CBS API feed (rejected due to integration complexity).

## 6. reCAPTCHA Fallback
**Decision**: Hard block on form submission with a friendly error message if reCAPTCHA v3 is unavailable.
**Rationale**: Based on Clarification Question 4, this is the safest posture for a regulated bank to prevent spam/abuse entering the system.
**Alternatives Considered**: Server-side honeypot fallback (rejected due to higher abuse risk).
