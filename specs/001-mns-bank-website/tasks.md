# Tasks: MNS Bank Website Build

**Input**: Design documents from `specs/001-mns-bank-website/` (spec.md, plan.md, data-model.md, contracts/submit-inquiry.md)
**Organization**: Tasks are grouped by logical phase and user story to enable independent implementation and testing of each story, strictly following the `/speckit-tasks` checklist format.

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure. Maps to NFR-04, NFR-05, NFR-08.

- [x] T001 Initialize Next.js 16.2.1 (App Router) project in `src/` and configure ESLint, Prettier, and Husky pre-commit hooks
- [x] T002 Configure Tailwind CSS v3 with MNS Bank design tokens `#1A3A6B` and `#C8A84B` in `tailwind.config.ts`
- [x] T003 [P] Set up `next-i18next` for `en` and `hi` locales in `next-i18next.config.js` and structure `/src/locales/` (`common.json`, `home.json`, etc.)
- [x] T004 [P] Set up GitHub repo with branch protection (main+develop) and configure Vercel CD pipeline
- [x] T005 [P] Configure SSL (port 443 only) and strictly ENFORCE NO port 8444 in codebase

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core UI components and infrastructure required by almost all user stories.

- [x] T006 Implement base typography (Noto Sans) and UI component variants (Buttons, Cards, Inputs, Accessibility Toolbar widget) in `src/components/ui/`
- [x] T007 Initialize CMS local storage structure (`src/data/rates.json`, `src/data/news.json`) per data-model.md
- [x] T008 [US-001] Implement Global Header (C-001) with sticky scroll, EN/HI toggle, Hamburger menu, Accessibility widget, and dual-tab nav in `src/components/common/Header.tsx`
- [x] T009 [US-001] Implement Global Footer (C-002) with 5 columns, DICGC trust bar, Social Media icons (5 links), and auto-year in `src/components/common/Footer.tsx`
- [x] T010 [US-011] Create `POST /api/submit-inquiry` endpoint mapping to Zod schema in `src/app/api/submit-inquiry/route.ts`
- [x] T011 [US-011] Implement Inline Inquiry Form Component (C-004) with reCAPTCHA v3 and mobile regex `^[6-9]\d{9}$` in `src/components/forms/InquiryForm.tsx`
- [x] T012 [US-009] Implement Product Page Shell (C-003) with 5 tabs and Related Products slot in `src/components/product/PageShell.tsx`
- [x] T013 [US-012] Implement KFS Panel Component (C-012) in `src/components/product/KFSPanel.tsx`
- [x] T014 [US-018] Implement EMI Calculator logic (RBI formula) and UI widget (C-010) in `src/components/product/EMICalculator.tsx`

---

## Phase 3: High-Priority Compliance Stories

**Goal**: Establish the mandatory RBI compliance pages immediately.

- [x] T015 [US-027] Implement DEAF CSV Admin Upload Route mapped to `DEAFRecord` in `src/app/(admin)/deaf-upload/page.tsx`
- [x] T016 [P] [US-027] Implement DEAF Search Table (C-013) in `src/components/compliance/DEAFTable.tsx`
- [x] T017 [US-027] Build `/deaf-unclaimed-deposits` page with 301 redirect from old PHP URL
- [x] T018 [P] [US-024] Implement Grievance Escalation Matrix UI (C-014) in `src/components/compliance/EscalationMatrix.tsx`
- [x] T019 [US-024] Build `/grievance-redressal` page with RBI CMS link (cms.rbi.org.in) and toll-free number
- [x] T020 [P] [US-019] Build `/net-banking` SP (HTTPS 443 CTA only)
- [x] T021 [P] [US-028] Build `/policy-centre` CP with PDF downloads (Fair Practices, Citizens' Charter)
- [x] T022 [P] Build `/privacy-policy` SP (DPDP Act 2023 mapped)
- [x] T023 [P] Build `/download-forms` CP with all categorised PDF downloads
- [x] T024 [P] Build `/kyc-ckyc` SP with CKYC lookup info

---

## Phase 4: Core Product Catalog Stories

**Goal**: Deliver all loan and deposit product pages utilizing foundational shells.

- [x] T025 [US-015] Build `/gold-loan` SP
- [x] T026 [P] [US-015] Build `/car-loan` SP
- [x] T027 [P] [US-015] Build `/consumer-loan` SP
- [x] T028 [P] [US-015] Build `/personal-loan` SP
- [x] T029 [P] [US-015] Build `/festival-loan` SP
- [x] T030 [P] [US-015] Build `/home-loan` SP
- [x] T031 [P] [US-015] Build `/house-construction-loan` SP
- [x] T032 [P] [US-015] Build `/loan-against-property` SP
- [x] T033 [P] [US-015] Build `/loan-against-fd` SP
- [x] T034 [P] [US-015] Build `/loan-against-nsc` SP
- [x] T035 [P] [US-015] Build `/mortgage-overdraft` SP
- [x] T036 [P] [US-016] Build `/education-loan` SP with moratorium details
- [x] T037 [P] [US-017] Build `/working-capital-loan` SP
- [x] T038 [P] [US-017] Build `/transport-loan` SP
- [x] T039 [P] [US-017] Build `/professional-loan` SP
- [x] T040 [P] [US-017] Build `/micro-finance` SP
- [x] T041 [P] [US-017] Build `/self-employed-loan` SP
- [x] T042 [P] [US-017] Build `/overdraft-facility` SP
- [x] T043 [P] [US-013] Build `/savings-account` SP
- [x] T044 [P] Build `/double-deposit` SP
- [x] T045 [P] Build `/time-deposit` SP
- [x] T046 [P] Build `/recurring-deposit` SP
- [x] T047 [P] Build `/current-account` SP
- [x] T048 [P] Build `/biz-double-deposit` SP
- [x] T049 [P] Build `/biz-time-deposit` SP
- [x] T050 [P] Build `/biz-recurring-deposit` SP
- [x] T051 [P] [US-014] Build `/interest-rates` CP with Differential tables
- [x] T052 [P] Build `/service-charges` CP with fee tables
- [x] T053 [P] [US-018] Build `/emi-calculator` CP (standalone page embed)
- [x] T054 [P] Build `/contact-us` CP with branch locator

---

## Phase 5: Homepage & Discovery Stories

**Goal**: Assemble the dynamic homepage and locators.

- [x] T055 [US-004] Implement Homepage Carousel (C-005) in `src/components/home/Carousel.tsx`
- [x] T056 [P] [US-005] Implement What's New Section (C-006) consuming `NewsEntry` data in `src/components/home/WhatsNew.tsx`
- [x] T057 [P] [US-008] Implement Featured Deposit Rates widget in `src/components/home/FeaturedRates.tsx`
- [x] T058 [P] [US-007] Implement session-dismissible Fraud Awareness Banner (C-009) in `src/components/home/FraudBanner.tsx`
- [x] T059 [US-004] Assemble full Homepage (`/`) connecting all widgets (C-005, C-006, C-007, C-008, C-009) and fix explicit text typos ('Priviledges' -> 'Privileges', 'Mahanager' -> 'Mahanagar')
- [x] T060 [US-022] Implement OpenStreetMap Locator Map (C-011) via Leaflet in `src/components/maps/LocatorMap.tsx`
- [x] T061 [P] [US-022] Build `/locate-us` CP
- [x] T062 [P] [US-022] Build `/branch-locator` CP
- [x] T063 [P] [US-022] Build `/atm-locator` CP
- [x] T064 [P] [US-023] Build `/contact-us` CP with branch contacts and inquiry form

---

## Phase 6: Informational & Digital Services Stories

**Goal**: Publish remaining corporate pages and digital service guides.

- [x] T065 [P] [US-020] Build `/upi-qr` SP
- [x] T066 [P] [US-021] Build `/bbps` SP
- [x] T067 [P] Build `/atm` SP
- [x] T068 [P] Build `/debit-cards` SP
- [x] T069 [P] Build `/imps` SP
- [x] T070 [P] Build `/sms-banking` SP
- [x] T071 [P] Build `/pan` SP
- [x] T072 [P] Build `/locker` SP
- [x] T073 [P] Build `/neft-rtgs` SP
- [x] T074 [P] Build `/pm-jeevan-yojana` SP
- [x] T075 [P] Build `/pm-suraksha-yojana` SP
- [x] T076 [P] Build `/mobile-banking` SP with verified app store links
- [x] T077 [P] [US-026] Build `/annual-reports` CP with financial highlights
- [x] T078 [P] [US-025] Build `/membership` SP with shareholding eligibility
- [x] T079 [P] Build `/about-us` CP
- [x] T080 [P] Build `/board-of-directors` CP
- [x] T081 [P] Build `/committees` CP
- [x] T082 [P] Build `/management` CP
- [x] T083 [P] Build `/careers` SP
- [x] T084 [P] Build `/tenders` CP
- [x] T085 [P] [US-029] Build `/cyber-awareness` SP with phishing/OTP warnings
- [x] T086 [P] [US-030] Build `/positive-pay` SP with PPS rules
- [x] T087 [P] Build `/ifsc-codes` CP with searchable table
- [x] T088 [P] Build `/feedback` CP with complaint form mapping to `submit-inquiry` handler
- [x] T089 [P] Build `/sitemap` SP with all 60+ links
- [x] T090 [P] Build Optional `/insurance` CP (If Licensed)
- [x] T091 [P] Build Optional `/mutual-funds` CP (If Licensed)
- [x] T092 [P] Build Optional `/demat` SP (If Licensed)
- [x] T093 [P] Build Optional `/asba` SP (If Licensed)

---

## Phase 7: Polish, i18n Verification & Delivery (Cross-Cutting Rules)

**Goal**: Ensure all BRD standards, performance metrics, and complete translations are met.

- [x] T094 [US-002] Final Hindi i18n extraction to `/locales/hi/*.json` and trigger native-speaker text review
- [x] T095 Implement SEO logic (Title, Meta, JSON-LD Location schema, Breadcrumbs) globally in `src/app/layout.tsx`
- [x] T096 Google Analytics 4 implementation (pageviews, form_submit, language_toggle, calculator_use)
- [x] T097 Add Header Site Search functionality logic
- [x] T098 Ensure `export const unstable_instant = { prefetch: 'static' }` is on every page file for instant navigations
- [x] T099 Run `npm run build` to validate `unstable_instant` static shells strictly render
- [x] T100 Final automated zero-broken-link checker run against full 67-page inventory (ensuring zero 404s)
- [x] T101 Accessibility & UX audit (Toolbar present, WCAG 2.1 AA validation, responsive checks across 5 breakpoints, zero dark patterns)
- [x] T102 Performance audit (PageSpeed Mobile ≥ 90 target, LCP < 3s over 4G, WebP implementation, CDN, JS defer)
