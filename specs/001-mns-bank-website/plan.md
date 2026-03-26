# Implementation Plan: MNS Bank Website Build

**Branch**: `001-mns-bank-website` | **Date**: 2026-03-26 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `specs/001-mns-bank-website/spec.md`

## Summary

A complete redesign and enhancement of **mnsbankbhopal.com** — a cooperative bank website serving Bhopal. The site must be fully functional with zero broken pages, complete English ↔ Hindi language switching across every element, and full RBI compliance for Urban Cooperative Banks.

## Technical Context

**Language/Version**: Next.js 16.2.1 App Router, TypeScript strict mode
**Primary Dependencies**: React 19, Tailwind CSS v3, `next-i18next`, React Hook Form, Zod, Leaflet.js
**Storage**: Local JSON/Markdown files for CMS data
**Testing**: Playwright for e2e instant navigation tests, Jest for unit tests
**Target Platform**: Vercel (or VPS with Nginx reverse proxy, SSL, port 443 enforced)
**Project Type**: Full-stack web application
**Performance Goals**: Google PageSpeed ≥ 90 (Mobile), LCP < 3s, SSL Labs A-grade
**Constraints**: No PII in local storage, HTTPS POST only, RBI compliance mandatory
**Scale/Scope**: 67 pages, 8 personas, dual-language (EN/HI)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Check | Status |
|-----------|-------|--------|
| I. Compliance | KFS, DEAF, Grievance, NetBanking (443), reCAPTCHA, DICGC, Fraud Banner, EMI formula, Form routing | PASS |
| II. Zero Broken Pages | Full 67-page inventory covers all links | PASS |
| III. Hindi i18n | `next-i18next` configured for full EN/HI coverage | PASS |
| IV. Performance | Next.js App Router + `unstable_instant` prefetching used to hit LCP < 3s | PASS |
| V. Design System | Tailwind CSS + custom tokens (#1A3A6B, #C8A84B, Noto Sans), Standard Product Page Shell | PASS |
| VI. Accessibility | Sitewide toolbar specified, WCAG 2.1 AA target | PASS |
| VII. Code Quality | TypeScript strict mode, reusable components | PASS |
| VIII. Security & HTTPS | Port 443 enforced, reCAPTCHA block fallback | PASS |
| IX. Legal & Data Protection | DPDP Act compliant privacy policy, no online KYC/accounts in scope | PASS |
| X. SEO, Analytics & CMS | Built-in Next.js admin routes chosen for < 15min edits. GA4 + schemas defined | PASS |
| XI. Responsive/Browsers | Tailwind responsive breakpoints (sm:480, md:768, lg:1024, xl:1440) for Chrome/FF/Safari/Edge | PASS |

## Project Structure

### Documentation

```text
specs/001-mns-bank-website/
├── spec.md              # Original feature specification
├── research.md          # Technical research & decisions (e.g. Next.js 16 requirements)
├── plan.md              # This file
├── data-model.md        # Data models and schema definitions
├── quickstart.md        # Local development setup guide
└── contracts/           # Integration and boundary contracts
```

### Source Code

```text
src/
├── app/
│   ├── (public)/                 # Public-facing site routes
│   │   ├── about-us/
│   │   ├── ... (product routes)
│   │   ├── page.tsx              # Homepage
│   │   └── layout.tsx            # Global layout with header/footer
│   ├── (admin)/                  # Password-protected CMS routes
│   │   ├── deaf-upload/          # DEAF CSV ingestion
│   │   └── editor/               # JSON/MD editor for rates/news
│   ├── api/                      # API Routes
│   │   └── submit-inquiry/       # Form handler -> Bank Email
│   └── locales/                  # i18n translation files
│       ├── en/
│       └── hi/
├── components/
│   ├── common/                   # Header, Footer, Toolbar, Breadcrumbs
│   ├── product/                  # KFS Panel, Product Tabs, EMI Calc
│   ├── forms/                    # Inquiry Form, Feedback Form
│   └── maps/                     # OSM Leaflet components
├── data/                         # CMS local storage
│   ├── rates.json
│   ├── deaf/
│   └── news/
├── lib/                          # Utilities (RBI formulas, Zod schemas)
└── types/                        # TypeScript interfaces
```

## 2. Site Architecture — All Pages (67 total)

### Navigation Structure
```text
Personal Banking          Business Banking
├── Accounts              ├── Accounts
├── Deposits              ├── Deposits
├── Loans                 ├── Loans
├── Services              ├── Services
└── Stay Connected        └── Stay Connected

About Us | Other Services | Compliance & Legal (footer)
```

(See `spec.md` for full 67-page inventory with phases).

## 3. Phased Delivery Plan

### Phase 1 — Fix & Foundation (Weeks 1–4)
**Goal:** Remove all regulatory violations and critical usability failures. Site legally compliant.

- Project setup: Next.js scaffold, Tailwind config, i18n setup (en + hi)
- Global Header component (sticky, EN/HI toggle, Net Banking CTA at port 443)
- Global Footer (auto-copyright year, compliance links, trust bar)
- Homepage (carousel, What's New, Product Cards, Quick Links, Fraud Banner)
- `/interest-rates` — full differential rate table
- `/service-charges` — complete fee table
- `/careers` — live with job listings
- `/tenders` — active tenders
- `/download-forms` — all PDFs downloadable
- `/privacy-policy` — live
- `/contact-us` — all branch contacts + inquiry form
- `/deaf-unclaimed-deposits` — 301 redirect + populated table/nil statement + working search (powered by admin CSV upload)
- `/grievance-redressal` — escalation matrix, Nodal Officer, RBI CMS link, 14448
- `/net-banking` — standard HTTPS (port 443, no 8444)
- `/mobile-banking` — verified Play Store + App Store links

### Phase 2 — Redesign & Content (Weeks 5–10)
**Goal:** Full visual redesign, all product pages live, all tools operational.

- Dual tab navigation (Personal / Business), 5 sub-nav categories each
- All 18 loan SPs (tabs + KFS panel + inline inquiry form + EMI link)
- All 8 deposits/accounts SPs
- All 13 digital services SPs
- EMI Calculator — real-time, amortisation schedule, RBI formula
- About Us, Board, Committees, Management, Annual Reports
- Membership / Shareholding SP
- IFSC Codes CP
- Policy Centre CP
- KYC/CKYC SP
- Cyber Security & Fraud Awareness SP
- Positive Pay System SP
- Offers CP
- DEAF admin panel for CSV uploads
- Language toggle (EN/HI) sitewide — full Hindi translation of ALL content
- Accessibility toolbar sitewide
- DICGC badge sitewide
- Social media links (5 platforms)
- PageSpeed ≥ 90 mobile, WCAG 2.1 AA audit pass
- `/sitemap` — full site map

### Phase 3 — Grow & Acquire (Weeks 11–16)
**Goal:** Customer acquisition, locators, SEO, analytics, optional services.

- Branch Locator interactive map (OSM/Leaflet)
- ATM Locator interactive map (OSM/Leaflet)
- Locate Us CP
- Feedback / Complaint form with reference number generation
- Email notifications for Inquiry forms
- Unique `<title>` + `<meta description>` on every page
- `sitemap.xml` submitted to Google Search Console
- LocalBusiness JSON-LD structured data per branch
- GA4 — events: pageview, form_submit, cta_click, calculator_use, language_toggle
- What's New: min. 4 published posts
- Insurance, Mutual Funds pages (if licensed)
- Site search in header

## 4. Component Architecture

### Global Components
| ID | Component | Description |
|----|-----------|-------------|
| C-001 | Global Header | Logo, EN/HI toggle, Net Banking CTA, dual-tab nav, hamburger mobile |
| C-002 | Global Footer | 5 columns, trust bar, social icons, compliance links, auto-year copyright |
| C-003 | Product Page Shell | Hero → Tab Bar (Overview/Features/Eligibility/Documents/Apply) → KFS → Inline Form → Related Products |
| C-004 | Inline Inquiry Form | Name, Mobile, Email, Product, Branch, Message + reCAPTCHA v3 |

### Homepage Components
| ID | Component | Description |
|----|-----------|-------------|
| C-005 | Carousel | 3+ slides, auto-play 5s, swipe on mobile, CMS-editable |
| C-006 | What's New | Min. 3 entries, date-stamped, CMS-managed |
| C-007 | Product Cards | 3–4 col grid, icon + name + CTA, Personal/Business tabs |
| C-008 | Quick Links Bar | EMI Calc, Interest Rates, Branch Locator, Download Forms, Contact, Grievance |
| C-009 | Fraud Awareness Banner | Amber banner, dismissible, re-appears next session |

### Self-Service Tools
| ID | Component | Description |
|----|-----------|-------------|
| C-010 | EMI Calculator | Sliders for Amount/Rate/Tenure, real-time EMI/Total/Amortisation |
| C-011 | Branch/ATM Locator | OpenStreetMap (Leaflet.js) embed, pins with popup details |

### Compliance Components
| ID | Component | Description |
|----|-----------|-------------|
| C-012 | KFS Panel | Rate, fee, tenure, EMI example, total cost, prepayment charges |
| C-013 | DEAF Search Table | Searchable HTML table with 11 columns + last updated timestamp |
| C-014 | Grievance Escalation Matrix | 3-level step diagram: Branch → Nodal Officer → RBI Ombudsman |

## 5. Design System Tokens

```css
Brand Primary:    #1A3A6B  (deep navy blue — cooperative bank trust)
Brand Accent:     #C8A84B  (gold — CTA buttons, Net Banking, trust)
Text Primary:     #1A1A1A
Text Secondary:   #555555
Background:       #FFFFFF
Surface:          #F5F7FA
Border:           #E0E4EC
Success:          #2E7D32
Error:            #C62828
Font:             'Noto Sans' (Latin + Devanagari — supports Hindi)
Heading Weight:   700
Body Weight:      400
Border Radius:    8px (cards), 4px (inputs)
```

## 6. Verification Plan

### Automated Tests
1. **Link Checker (Phase 1):** Run `npx broken-link-checker` against locally running dev server to verify 0 dead links out of 67 routes.
2. **EMI Formula (Jest):** `npm run test` for `/lib/calculators/emi.ts` to verify standard input (₹5L, 10%, 5yr) equals ₹10,624.
3. **Regex Validator (Jest):** `npm run test` against mobile number schema to ensure `^[6-9]\d{9}$` logic works exactly.

### E2E / Browser Tests (Playwright)
1. **Instant Navigation Test:** Run `@next/playwright` `instant()` test simulating navigation between two product pages to verify static prefetching succeeds without fallback layout blips.
2. **Form Submission flow:** Script Playwright test to enter dummy info, intercept `POST /api/submit-inquiry`, mock reCAPTCHA validation, and verify that the UI shows the reference number confirmation screen.

### Manual Verification
1. **Compliance Gate (Phase 1):** Load `/deaf-unclaimed-deposits` and `/grievance-redressal` manually to verify 11 columns / nil state, and 3-level matrix respectively.
2. **KFS Check (Phase 2):** Launch any loan product page and physically verify the presence of the static "Rates are indicative..." disclaimer.
3. **i18n Switcher (Phase 2):** Toggle language in the top right to HI, ensure entire screen reflects Devanagari font (Noto Sans) from local storage setting, then refresh to verify persistence.
