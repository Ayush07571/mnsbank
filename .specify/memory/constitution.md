<!--
Sync Impact Report:
- Version change: 1.1.0 → 1.2.0
- Modified principles:
  - I. Compliance — added DICGC trust bar sitewide, persistent fraud awareness banner,
    EMI Calculator RBI standard formula, form submission confirmation + reference number,
    email/SMS confirmation to customer, Indian mobile number validation
  - V. Design System — added sticky header and dual-tab navigation (Personal/Business)
    as mandatory structural requirements
- Added sections: None
- Removed sections: None
- Templates requiring updates:
  - .specify/templates/plan-template.md (⚠ pending — Constitution Check gates must
    reference principles I–XI in full)
- Follow-up TODOs: None — all BRD NFRs, user stories, and component specs are now captured.
-->
# MNS Bank Constitution

## Core Principles

### I. Compliance Principles (NON-NEGOTIABLE)

Every page must be RBI UCB compliant. The following are hard, non-negotiable rules:

- **DEAF/Unclaimed Deposits**: Always shows populated data or an explicit nil statement.
  Never blank. Last Updated timestamp must be displayed. Real-time search must work.
- **Grievance Redressal**: Must show a 3-level escalation matrix (Branch Manager →
  Nodal Officer → RBI Ombudsman), Nodal Officer name/phone/email inline,
  cms.rbi.org.in link, and toll-free 14448. Policy PDF must be downloadable.
- **KFS Panel**: Mandatory on all 18 loan product pages. Must display: loan type,
  indicative interest rate, processing fee, repayment tenure, estimated monthly EMI
  (example amount), total cost of credit, prepayment charges. Static disclaimer:
  *"Rates are indicative. Actual terms determined at sanction based on applicant profile."*
- **Net Banking link**: MUST use port 443 standard HTTPS. Port 8444 MUST NOT appear
  anywhere in the codebase or any user-facing URL.
- **Dark patterns**: Strictly prohibited — no pre-ticked checkboxes, no hidden fees,
  no misleading CTAs, no bundled consents. Per RBI Responsible Business Conduct
  Amendment Directions 2026.
- **CAPTCHA**: Google reCAPTCHA v3 mandatory on every public-facing form. No
  honeypot-only solution.
- **PII handling**: No PII stored in localStorage, sessionStorage, or cookies. All
  form data via HTTPS POST only.
- **DICGC Trust Bar**: DICGC insured badge, RBI membership, NPCI/RuPay logo, and
  years-of-service indicator MUST appear sitewide (footer trust bar and homepage).
  Each badge must link to the respective organisation's website.
- **Fraud Awareness Banner**: A persistent amber banner warning about phishing, UPI
  fraud, and OTP scams MUST appear on the homepage and all Digital Services pages.
  It must link to /cyber-awareness. It may be dismissible per session but must
  re-appear on next session.
- **EMI Calculator formula**: The EMI Calculator MUST use the RBI standard formula:
  `EMI = [P × R × (1+R)^N] / [(1+R)^N − 1]` where P = Principal, R = monthly rate,
  N = tenure in months. Any other formula is non-compliant.
- **Form submission confirmation**: Every public form submission must display an
  on-screen confirmation with a unique reference number. An email and/or SMS
  confirmation must be sent to the customer.
- **Mobile number validation**: Indian mobile number fields must validate against
  `^[6-9]\d{9}$` on both client-side and server-side.
- **Financial disclosures**: The website must not make representations about
  guaranteed returns or violate RBI advertising regulations for Urban Cooperative Banks.
- **Other Services licensing gate**: Insurance, Mutual Funds, Demat, and ASBA pages
  may ONLY be published after IRDAI/SEBI/AMFI compliance sign-off.

### II. Zero Broken Pages Principle

Every single URL in the site must return a 200 response with zero 404s. Every navigation
item and footer link must resolve to a real, content-filled page. A 301 redirect must
exist from `/deef-inactive-accounts.php` to `/deaf-unclaimed-deposits`.

### III. Hindi i18n Principle

100% of the website must be available in Hindi, including every word (headings, nav labels,
button text, form labels, placeholders, error messages, table headers, legal disclaimers,
KFS panels, EMI calculator labels, breadcrumbs, alt text, confirmation messages, and footer
text). Hindi locale files must mirror English exactly with no missing keys. The language
toggle persists via localStorage and the font must be Noto Sans.
**Native-speaker review of all Hindi translations is a mandatory go-live gate** — no Phase 2
launch may proceed without signed-off translation review.

### IV. Performance Principles

The Google PageSpeed mobile score must be ≥ 90 on every page. All images must employ WebP
format with lazy loading. The Largest Contentful Paint (LCP) must be under 3 seconds on a
simulated 4G network. PageSpeed must be tested continuously during Phase 2—not only at the
end.

### V. Design System Principles

- No ad-hoc inline styles; all styling via Tailwind CSS utility classes and defined design
  tokens.
- Brand Primary: #1A3A6B (navy). Brand Accent: #C8A84B (gold). Font: Noto Sans.
- The **Global Header** must be sticky (fixed to viewport on scroll). On mobile it must
  collapse to a hamburger with a full-screen drawer.
- The site uses a **dual top-level tab navigation** (Personal Banking / Business Banking),
  each exposing five consistent sub-nav categories: Accounts · Deposits · Loans ·
  Services · Stay Connected.
- Every product and service SP must use the standard **Product Page Shell**:
  Hero → Tabs (Overview / Features / Eligibility / Documents / Apply) → KFS Panel →
  Inline Inquiry Form → Related Products (3–4 cards).
- Tab switching must never cause a page reload.
- Footer copyright year MUST auto-update via JavaScript (`new Date().getFullYear()`).
- Footer must include columns for: About Us · Personal Banking · Business Banking ·
  Compliance & Legal · Contact info + social icons (Facebook, Instagram, Twitter/X,
  LinkedIn, YouTube — all open in new tab).

### VI. Accessibility

WCAG 2.1 AA compliance is required on every single page. A sitewide accessibility toolbar
must be present, featuring: zoom in/out, contrast toggle, invert, greyscale, word spacing,
and reset functions. The toolbar must be QA-verified across a minimum of 5 browsers.

### VII. Code Quality

TypeScript strict mode is mandatory. Components must be strictly reusable without copy-paste
operations per page. Internationalization (i18n) keys must be consistently utilized—never
hardcode text strings within components.

### VIII. Security & HTTPS

All pages must be served over HTTPS with a valid SSL certificate achieving SSL Labs A-grade.
HTTP must 301-redirect to HTTPS. No non-standard ports (e.g. 8444) may appear in any
user-facing link. Site availability must meet a 99.5% monthly uptime SLA, excluding
communicated maintenance windows.

### IX. Legal & Data Protection

All customer PII collected via forms must comply with the Digital Personal Data Protection
(DPDP) Act 2023. The website must not make representations about guaranteed returns or
violate RBI advertising regulations for Urban Cooperative Banks. Full digital KYC and online
account opening are excluded from scope until regulatory compliance is confirmed.

### X. SEO, Analytics & CMS

Every page must have a unique `<title>` (≤ 60 chars) and `<meta description>` (≤ 160 chars).
`sitemap.xml` must be submitted to Google Search Console. LocalBusiness structured data
(JSON-LD) with correct NAP for each branch and BreadcrumbList schema on all inner pages must
pass Google Rich Results Test. Google Analytics 4 must be installed on all pages, tracking:
`pageview`, `form_submit`, `cta_click`, `calculator_use`, `language_toggle`. All product
content, rates, charges, news, and policy documents must be editable by non-technical staff
via a CMS admin panel in under 15 minutes without developer involvement.

### XI. Responsive Design & Browser Compatibility

All pages must render correctly at breakpoints: 320px, 480px, 768px, 1024px, and 1440px.
The site must function correctly on: Chrome, Firefox, Safari, Edge (latest 2 versions each),
and Chrome for Android.

## Governance

Amendments to this constitution require structured documentation, justification, and a
migration plan. All Pull Requests and code reviews must verify compliance with principles I–XI.

**Versioning Policy:**
- MAJOR: Backward incompatible governance/principle removals or redefinitions.
- MINOR: New principle/section added or materially expanded guidance.
- PATCH: Clarifications, wording, typo fixes, non-semantic refinements.

**Version**: 1.2.0 | **Ratified**: 2026-03-26 | **Last Amended**: 2026-03-26
