# Feature Specification: MNS Bank Complete Website Build

**Feature Branch**: `001-mns-bank-website`
**Created**: 2026-03-26
**Status**: Draft
**Source Documents**: BRD/PRD-MNS-2026-01, Constitution v1.2.0, FRS-MNS-2026-03

---

## Clarifications

### Session 2026-03-26

- Q: Where should inquiry form submissions be routed? → A: Dedicated bank email address (e.g. inquiries@mnsbankbhopal.com) via server-side HTTPS POST — no external CRM dependency.
- Q: How will DEAF account data reach the website? → A: Manual CSV/Excel upload by admin via a protected admin upload panel — no CBS API dependency required.
- Q: Which map provider for branch/ATM locator? → A: OpenStreetMap via Leaflet.js — free, no billing account or API key required.
- Q: What happens when reCAPTCHA v3 is unavailable? → A: Block form submission and show friendly message: “Verification unavailable, please try again shortly.” No data is sent.
- Q: Which CMS platform for content editing? → A: Built-in admin panel using password-protected Next.js routes with JSON/Markdown files — no external CMS service or subscription required.

### Session 2026-04-04 (Rebrand)

- Q: Primary Red Hex? → A: #E11D48 (Vibrant Red extracted from logo).
- Q: Secondary Palette? → A: Strict Red, White, & Grey (with deep charcoal for text/depth).
- Q: Dark Mode? → A: Vibrant Red accents on Deep Charcoal/Black backgrounds.

---

## User Scenarios & Testing _(mandatory)_

### User Story 1 — Fix All Navigation & Zero Broken Pages (Priority: P1)

As any site visitor, I want every menu link, footer link, and URL to open a real, content-filled page, so that I never encounter a dead end or blank page.

**Why this priority**: This is the most critical failure of the current site. All other stories depend on functional navigation existing first.

**Independent Test**: Run an automated link checker across all 67 URLs — zero 404s, zero blank pages, zero HTTP port errors.

**Acceptance Scenarios**:

1. **Given** a visitor clicks any primary or secondary navigation link, **When** the page loads, **Then** a content-filled page with a proper title, breadcrumb, and main content section is shown.
2. **Given** a visitor navigates to `/deef-inactive-accounts.php`, **When** the server responds, **Then** a 301 redirect is issued to `/deaf-unclaimed-deposits`.
3. **Given** a visitor visits `/deaf-unclaimed-deposits`, **When** the page loads, **Then** either a searchable table with DEAF account data or an explicit nil statement is displayed — never a blank table.
4. **Given** any footer link is clicked, **When** the target page loads, **Then** the page returns HTTP 200 with real content.

---

### User Story 2 — Full Hindi Language Support (Priority: P1)

As Suresh (48, Hindi-first user, mobile), I want to switch the entire site to Hindi with a single toggle, so that I can browse all products and services in my preferred language.

**Why this priority**: Legal requirement via NFR-10 and Constitution Principle III. Affects all 67 pages simultaneously.

**Independent Test**: Toggle to HI — verify every visible text element (nav, headings, buttons, form labels, placeholders, table headers, footer, error messages, legal disclaimers) renders in Hindi with no English fallback.

**Acceptance Scenarios**:

1. **Given** a Hindi-first user opens any page, **When** they click the EN/HI toggle in the header, **Then** all visible text switches to Hindi instantly without page reload.
2. **Given** a user switches to Hindi, **When** they navigate to another page, **Then** the Hindi preference persists (stored via localStorage).
3. **Given** a Hindi-first user submits a form, **When** validation fails, **Then** all error messages appear in Hindi.
4. **Given** a Hindi-first user views a KFS panel or EMI calculator, **When** the page renders, **Then** all labels, units, disclaimers, and result text appear in Hindi.

---

### User Story 3 — Complete Homepage with Trust Signals (Priority: P1)

As Priya (34, first-time customer, mobile), I want to see a professional, trustworthy homepage that shows current products, trust signals, and quick navigation, so that I feel confident the bank is legitimate.

**Why this priority**: Homepage is the primary landing page for all acquisition traffic.

**Independent Test**: Load homepage on mobile (375px viewport) — verify carousel, What's New, product cards, Quick Links bar, fraud banner, trust bar (DICGC/RBI/NPCI logos), and deposit rates are all present and functional.

**Acceptance Scenarios**:

1. **Given** a first-time visitor opens the homepage, **When** the page loads, **Then** a hero carousel with minimum 3 unique slides, overlay text, and optional CTA buttons auto-plays at 5-second intervals.
2. **Given** a visitor scrolls the homepage, **When** they reach the trust bar, **Then** DICGC insured badge, RBI membership logo, NPCI/RuPay logo, and years-of-service are visible — each linking to the respective organisation's website.
3. **Given** a visitor opens the homepage, **When** the page renders, **Then** a persistent amber Fraud Awareness Banner warning about phishing, UPI fraud, and OTP scams is visible with a link to `/cyber-awareness`.
4. **Given** a visitor views the homepage, **When** they look at the deposit rates section, **Then** current rates with tenure labels and a rate disclaimer are shown, editable via CMS.
5. **Given** a visitor clicks the Quick Links bar, **When** they select any shortcut (EMI Calculator, Interest Rates, Branch Locator, Download Forms, Contact, Grievance), **Then** they are taken to the correct page.
6. **Given** a visitor views the What's New section, **When** the page renders, **Then** at least 3 date-stamped entries with categories, headlines, and excerpts are shown.

---

### User Story 4 — All Product Pages with Tabs, KFS, and Inquiry (Priority: P1)

As Ramesh (52, existing member, desktop), I want dedicated, content-rich pages for every loan and deposit product with organised tabs, a Key Facts Statement, and an inline inquiry form, so that I can understand each product fully and express interest without extra navigation.

**Why this priority**: 18 loan pages lack KFS (RBI violation). All product pages are empty or broken. Resolving these is a Phase 1–2 regulatory obligation.

**Independent Test**: Visit each of the 18 loan pages — verify 5-tab layout, KFS panel, inline inquiry form, related products grid, and EMI calculator link are all present with real content.

**Acceptance Scenarios**:

1. **Given** a user opens any product SP, **When** the page loads, **Then** a 5-tab layout (Overview / Features / Eligibility / Documents / Apply) is displayed with tab switching that never causes a page reload.
2. **Given** a user opens any of the 18 loan product pages, **When** they view the Apply tab, **Then** a prominently boxed KFS panel is present showing: indicative interest rate, processing fee, repayment tenure, estimated monthly EMI (example amount), total cost of credit, prepayment charges, and the static disclaimer: _"Rates are indicative. Actual terms determined at sanction based on applicant profile."_
3. **Given** a user views any product SP, **When** they scroll to the inquiry form, **Then** the form shows pre-filled product name, branch dropdown (Bairagarhi HO / TT Nagar / Karond), and reCAPTCHA v3.
4. **Given** a user submits the inquiry form with valid data, **When** the submission succeeds, **Then** an on-screen confirmation with a unique reference number is shown, and an email/SMS confirmation is sent to the customer.
5. **Given** a user views any product SP, **When** they scroll to the bottom, **Then** 3–4 related product cards from the same category are displayed.

---

### User Story 5 — EMI Calculator (Priority: P2)

As Ramesh (52, existing member), I want a real-time EMI calculator with sliders and an amortisation schedule, so that I can determine my monthly repayment before applying.

**Why this priority**: The current EMI calculator is a dead link. Critical for loan inquiries.

**Independent Test**: Enter ₹5,00,000 at 10% for 5 years — verify EMI = ₹10,624, total interest, total payable, and a 5-row year-wise amortisation table using the correct RBI formula.

**Acceptance Scenarios**:

1. **Given** a user opens the EMI Calculator, **When** they adjust any slider (amount, rate, or tenure), **Then** Monthly EMI, Total Interest Payable, and Total Amount Payable update in real time.
2. **Given** a user enters Loan Amount ₹P, Rate R% p.a., Tenure N months, **When** the calculator computes, **Then** EMI = [P × (R/1200) × (1 + R/1200)^N] / [(1 + R/1200)^N − 1] — matching the RBI standard formula exactly.
3. **Given** a user views the calculator results, **When** results are displayed, **Then** a year-wise amortisation table shows: Year, Principal Paid, Interest Paid, Total Paid, Outstanding Balance.
4. **Given** a user finishes calculating, **When** they click "Apply for This Loan", **Then** they are taken to the inline inquiry form for the relevant product (or a generic loan inquiry form).

---

### User Story 6 — Grievance Redressal & RBI Compliance Pages (Priority: P1)

As Meena (42, complaint filer), I want a clear, complete Grievance Redressal page with full escalation path to the RBI Ombudsman, so that I know exactly how to escalate if my complaint is not resolved.

**Why this priority**: Current site has no Grievance page — this is a direct RBI UCB compliance violation.

**Independent Test**: Visit `/grievance-redressal` — verify 3-level escalation matrix with all required details is present, cms.rbi.org.in link works, toll-free 14448 is shown, and Nodal Officer details (name, designation, phone, email) are displayed inline.

**Acceptance Scenarios**:

1. **Given** a visitor opens `/grievance-redressal`, **When** the page loads, **Then** a 3-level escalation matrix is shown: Level 1 (Branch Manager, 7-day TAT), Level 2 (Nodal Officer/HO, 15-day TAT), Level 3 (RBI Integrated Ombudsman at cms.rbi.org.in and toll-free 14448, available if Level 2 unresolved in 30 days).
2. **Given** a visitor views the Grievance page, **When** they look for the Nodal Officer, **Then** name, designation, phone number, and email are displayed inline on the page.
3. **Given** a visitor wants the policy document, **When** they click the download link, **Then** a Grievance Redressal Policy PDF downloads successfully.

---

### User Story 7 — DEAF / Unclaimed Deposits Page (Priority: P1)

As Rajesh (60, legal heir), I want to search a complete DEAF list with a real-time filter, so that I can identify and claim my deceased relative's unclaimed deposits.

**Why this priority**: Current page is blank — a direct RBI mandatory disclosure violation.

**Independent Test**: Visit `/deaf-unclaimed-deposits` — verify either searchable 11-column table or explicit nil statement with last-updated timestamp. Typing in search box filters table in real time. Old URL `/deef-inactive-accounts.php` must 301-redirect here.

**Acceptance Scenarios**:

1. **Given** a user visits `/deaf-unclaimed-deposits`, **When** the page loads, **Then** either a populated table or an explicit nil statement `"No accounts have been transferred to the DEAF fund as of [date]."` is displayed — never a blank or empty state without a message.
2. **Given** a user types in the search field, **When** they enter any character, **Then** the table filters in real time across Account Name, Account Number, and Customer ID columns.
3. **Given** a user visits the old URL `/deef-inactive-accounts.php`, **When** the server responds, **Then** a 301 redirect to `/deaf-unclaimed-deposits` is returned.
4. **Given** a user views the page, **When** data is present, **Then** the table has all 11 required columns: S.No., Customer ID, GL Code, New AC Number, DEAF New AC No., Account Name, Address, State, District, Transaction Date, DEAF Amount.

---

### User Story 8 — Membership Page for Cooperative Members (Priority: P2)

As Vikram (35, prospective member), I want a dedicated Membership page explaining how to join the cooperative, so that I can understand eligibility, share capital requirements, and member rights.

**Why this priority**: No membership section currently exists — a gap for a cooperative bank.

**Independent Test**: Visit `/membership` — verify eligibility criteria, share capital details, member rights, and downloadable application form are all present.

**Acceptance Scenarios**:

1. **Given** a prospective member visits `/membership`, **When** the page loads, **Then** eligibility criteria, minimum share capital, member rights, and governance participation details are displayed.
2. **Given** a user wants to apply, **When** they click the application form download link, **Then** the membership application form PDF downloads successfully.

---

### User Story 9 — Accessible Sitewide Experience (Priority: P2)

As any visitor including those with visual impairments, I want a sitewide accessibility toolbar and a WCAG-compliant interface, so that I can use the website with my preferred accessibility settings.

**Why this priority**: WCAG 2.1 AA is a legal requirement (NFR-06).

**Independent Test**: Run WAVE accessibility audit on 5 representative pages — zero critical contrast errors. Accessibility toolbar present and functional on all pages.

**Acceptance Scenarios**:

1. **Given** any visitor opens any page, **When** they use the accessibility toolbar, **Then** zoom in/out, contrast toggle, invert, greyscale, word spacing, and reset functions all operate correctly.
2. **Given** a visually impaired user navigates the site via keyboard, **When** they tab through page elements, **Then** focus indicators are visible and logical tab order is maintained.
3. **Given** a screen reader user accesses the site, **When** images are displayed, **Then** all images have descriptive alt text (available in both English and Hindi).

---

### Edge Cases

- What happens when the DEAF table has zero records? → Explicit nil statement with date; no blank table.
- What happens when a form is submitted without CAPTCHA completion? → Form must not submit; user sees error message.
- What happens when a user submits an inquiry with an invalid Indian mobile number? → Client-side and server-side rejection with Hindi/English error message.
- What happens if the Net Banking portal is unreachable? → The link still uses port 443; the bank's IT infrastructure error, not a site error.
- What happens on the Other Services pages (Insurance, Mutual Funds) if the bank is not licensed? → Pages must not go live until IRDAI/SEBI/AMFI sign-off is obtained (scoped to Phase 3).
- What happens when a user dismisses the Fraud Awareness Banner? → Dismissed for the session; re-appears on next session.
- What if annual report PDFs are not yet approved for publication? → Annual Reports page shows the most recent approved year only; placeholder for pending years.
- What happens if Google reCAPTCHA v3 is unavailable? → Form submission is blocked; user sees “Verification unavailable, please try again shortly.” No data is sent.

---

## Requirements _(mandatory)_

### Functional Requirements

#### Navigation & Structure

- **FR-NAV-01**: The site must implement dual top-level tab navigation: Personal Banking and Business Banking, each with 5 sub-categories (Accounts, Deposits, Loans, Services, Stay Connected).
- **FR-NAV-02**: The Global Header must be sticky (fixed to viewport on scroll) on all pages.
- **FR-NAV-03**: On mobile viewports, the header must collapse to a hamburger icon that opens a full-screen navigation drawer.
- **FR-NAV-04**: All 67 URLs listed in the page inventory must return HTTP 200 with content-filled pages.
- **FR-NAV-05**: A 301 redirect must be in place from `/deef-inactive-accounts.php` to `/deaf-unclaimed-deposits`.
- **FR-NAV-06**: The Global Footer must have 5 columns: About Us links, Personal Banking links, Business Banking links, Compliance & Legal links, and Contact info + social icons.
- **FR-NAV-07**: Footer copyright year must auto-update via JavaScript.
- **FR-NAV-08**: All 5 social media icons (Facebook, Instagram, Twitter/X, LinkedIn, YouTube) must open in a new tab.

#### Language & i18n

- **FR-I18N-01**: An EN/HI language toggle must be present in the Global Header on all pages.
- **FR-I18N-02**: All text on every page must be available in Hindi: nav labels, headings, body copy, form labels, placeholders, error messages, table headers, KFS panels, legal disclaimers, EMI calculator labels, breadcrumbs, alt text, confirmation messages, and footer text.
- **FR-I18N-03**: Hindi locale files must mirror English locale files exactly with no missing keys.
- **FR-I18N-04**: Language preference must persist across page navigations via localStorage.
- **FR-I18N-05**: Hindi translations must be reviewed by a native speaker before Phase 2 go-live — this is a mandatory release gate.

#### Homepage

- **FR-HOME-01**: Hero carousel with minimum 3 unique slides, each with a full-width image, headline, sub-headline, and optional CTA button. Auto-plays at 5-second intervals with manual prev/next controls and swipe on mobile.
- **FR-HOME-02**: What's New section with minimum 3 entries: date, category tag, headline, 2-line excerpt, Read More link. Managed via CMS.
- **FR-HOME-03**: Product/Services cards in a responsive grid (4 columns desktop, 2 tablet, 1 mobile). Two sets: Personal and Business.
- **FR-HOME-04**: Quick Links bar with 6 shortcuts: EMI Calculator, Interest Rates, Branch Locator, Download Forms, Contact Us, Grievance Redressal.
- **FR-HOME-05**: Featured deposit rates section showing current rates with tenure labels, editable via CMS, with rate disclaimer present.
- **FR-HOME-06**: Fraud Awareness Banner — persistent amber banner on homepage and all Digital Services pages, dismissible per session, re-appears on next session, links to `/cyber-awareness`.
- **FR-HOME-07**: Trust bar on homepage and sitewide footer — DICGC insured badge, RBI membership logo, NPCI/RuPay logo, years-of-service. Each links to respective organisation's website.

#### Product Pages (All 62 product/service SPs)

- **FR-PROD-01**: Every product and service SP must use the standard Product Page Shell: Hero Banner (title, breadcrumb, short description, CTA) → 5 Tabs (Overview / Features / Eligibility / Documents / Apply) → KFS Panel (loan pages only) → Inline Inquiry Form → Related Products Grid (3–4 cards).
- **FR-PROD-02**: Tab switching must not cause a page reload on any product SP.
- **FR-PROD-03**: The Related Products grid must show 3–4 cards from the same product category.
- **FR-LOAN-01**: KFS panel mandatory on all 18 loan product pages (gold-loan, car-loan, consumer-loan, personal-loan, festival-loan, education-loan, home-loan, house-construction-loan, loan-against-fd, loan-against-nsc, loan-against-property, mortgage-overdraft, working-capital-loan, transport-loan, professional-loan, micro-finance, self-employed-loan, overdraft-facility).
- **FR-LOAN-02**: KFS panel must display: loan type, indicative interest rate (% p.a.), processing fee, repayment tenure, estimated monthly EMI (for a standard example amount), total cost of credit (example), and prepayment charges.
- **FR-LOAN-03**: KFS panel must include the static disclaimer: _"Rates are indicative. Actual terms determined at sanction based on applicant profile."_

#### Inline Inquiry Form (all product/service SPs)

- **FR-FORM-01**: Every product/service SP must have an inline inquiry form with fields: Full Name (required), Mobile Number (required), Email (optional), Product/Service (pre-filled from page context, dropdown), Preferred Branch (dropdown: Bairagarhi HO / TT Nagar / Karond), Message (optional, 250 char max). Submissions must be routed to a designated bank email address (e.g. inquiries@mnsbankbhopal.com) via server-side HTTPS POST — no external CRM dependency.
- **FR-FORM-02**: Mobile number must be validated with regex `^[6-9]\d{9}$` on both client-side and server-side.
- **FR-FORM-03**: Google reCAPTCHA v3 must be present on every public form. No honeypot-only solution. If the reCAPTCHA service is unavailable, form submission must be blocked and a message displayed: “Verification unavailable, please try again shortly.” No data must be transmitted in this state.
- **FR-FORM-04**: On successful submission, an on-screen confirmation with a unique reference number must be displayed.
- **FR-FORM-05**: An email and/or SMS confirmation must be sent to the customer on successful submission.
- **FR-FORM-06**: No PII may be stored in localStorage, sessionStorage, or cookies. All form data transmitted via HTTPS POST only.

#### EMI Calculator

- **FR-CALC-01**: EMI Calculator must accept: Loan Amount (slider + numeric, ₹10,000–₹50,00,000), Interest Rate (slider + field, 6%–24%), Tenure (slider + toggle Months/Years, 1–30 years).
- **FR-CALC-02**: Calculator must display in real time: Monthly EMI, Total Interest Payable, Total Amount Payable.
- **FR-CALC-03**: Calculator must use the RBI standard formula: `EMI = [P × R × (1+R)^N] / [(1+R)^N − 1]` where P = Principal, R = monthly interest rate (annual rate / 12 / 100), N = tenure in months.
- **FR-CALC-04**: A year-wise amortisation table must be shown: Year, Principal Paid, Interest Paid, Total Paid, Outstanding Balance.
- **FR-CALC-05**: An "Apply for This Loan" CTA below results must link to the relevant product inquiry form.

#### RBI Compliance Pages

- **FR-DEAF-01**: `/deaf-unclaimed-deposits` must show either a populated searchable table or an explicit nil statement — never blank. Data is ingested via a password-protected admin upload panel that accepts CSV/Excel files matching the 11-column DEAF schema; records are stored server-side and rendered into the public table.
- **FR-DEAF-06**: The admin upload panel must validate the uploaded file against the expected 11-column DEAF schema and reject files with missing required columns or malformed data, showing an error message to the admin.
- **FR-DEAF-02**: The table must have 11 columns: S.No., Customer ID, GL Code, New AC Number, DEAF New AC No., Account Name, Address, State, District, Transaction Date, DEAF Amount.
- **FR-DEAF-03**: Real-time search input must filter the table by Account Name, Account Number, and Customer ID.
- **FR-DEAF-04**: A "Last Updated" timestamp must be displayed above the table.
- **FR-DEAF-05**: A 301 redirect must exist from `/deef-inactive-accounts.php` to `/deaf-unclaimed-deposits`.
- **FR-GRP-01**: `/grievance-redressal` must display a 3-level escalation matrix: Level 1 (Branch Manager, 7-day TAT), Level 2 (Nodal Officer/HO, 15-day TAT), Level 3 (RBI Integrated Ombudsman, cms.rbi.org.in, toll-free 14448, available after 30 days unresolved).
- **FR-GRP-02**: Nodal Officer name, designation, phone number, and email must be displayed inline on the Grievance page.
- **FR-GRP-03**: A downloadable Grievance Redressal Policy PDF must be available on the page.
- **FR-POL-01**: Policy Centre (`/policy-centre`) must include downloadable documents: Fair Practices Code, KYC/CKYC Policy, Penal Charges schedule, Citizens' Charter, and KFS templates.
- **FR-PRIV-01**: Privacy Policy must be compliant with DPDP Act 2023 and cover: data collection, storage, processing, retention, user rights, and contact for data grievances.

#### Digital Services

- **FR-LOC-01**: Branch Locator (`/branch-locator`) and ATM Locator (`/atm-locator`) must use OpenStreetMap tiles rendered via Leaflet.js — no Google Maps or Mapbox API key required. Each branch/ATM pin must show a popup with name, address, phone, hours, and a "Get Directions" link.
- **FR-SVC-01**: Net Banking page must use only standard HTTPS (port 443). Port 8444 must not appear anywhere in the codebase.
- **FR-SVC-02**: Mobile Banking page must show verified Play Store and App Store links.
- **FR-SVC-03**: All 13 Digital Services pages must have real content and not be blank.

#### About & Governance

- **FR-ABT-01**: Annual Reports page must show minimum 3 years of annual report PDFs with key financial highlights, CRAR, and tier classification.
- **FR-ABT-02**: Board of Directors page must show names, designations, and photos.
- **FR-MEM-01**: Membership page must show eligibility, share capital requirements, member rights, and a downloadable membership application form.

#### Accessibility & Toolbar

- **FR-ACC-01**: A sitewide accessibility toolbar must be present on all pages with: zoom in, zoom out, contrast toggle, invert, greyscale, word spacing, and reset functions.
- **FR-ACC-02**: All pages must meet WCAG 2.1 Level AA guidelines.

#### SEO & Analytics

- **FR-SEO-01**: Every page must have a unique `<title>` (≤ 60 chars) and `<meta description>` (≤ 160 chars).
- **FR-SEO-02**: LocalBusiness JSON-LD structured data with correct NAP for each branch on relevant pages.
- **FR-SEO-03**: BreadcrumbList schema on all inner pages.
- **FR-SEO-04**: `sitemap.xml` must be generated and submitted to Google Search Console.
- **FR-ANA-01**: Google Analytics 4 must be installed on all pages, tracking events: `pageview`, `form_submit`, `cta_click`, `calculator_use`, `language_toggle`.

#### Security & Infrastructure

- **FR-SEC-01**: All pages must be served over HTTPS. HTTP must 301-redirect to HTTPS.
- **FR-SEC-02**: Forms must use reCAPTCHA v3. No PII in client-side storage.
- **FR-SEC-03**: Insurance, Mutual Funds, Demat, and ASBA pages must only go live after IRDAI/SEBI/AMFI compliance sign-off.
- **FR-CMS-01**: Content editing for rates, What’s New entries, DEAF data, and policy document links must be achievable by non-technical staff via a password-protected admin panel built into the site (Next.js admin routes + JSON/Markdown files). No external CMS subscription or separate service is required. Content updates must be completable in under 15 minutes.

### Complete Page Inventory (67 pages)

| Category       | URL                      | Type | Phase |
| -------------- | ------------------------ | ---- | ----- |
| Root           | /                        | SP   | 1     |
| About Us       | /about-us                | CP   | 2     |
| About Us       | /board-of-directors      | CP   | 2     |
| About Us       | /committees              | CP   | 2     |
| About Us       | /management              | CP   | 2     |
| About Us       | /annual-reports          | CP   | 2     |
| About Us       | /membership              | SP   | 2     |
| About Us       | /careers                 | SP   | 1     |
| Personal       | /savings-account         | SP   | 2     |
| Personal       | /double-deposit          | SP   | 2     |
| Personal       | /time-deposit            | SP   | 2     |
| Personal       | /recurring-deposit       | SP   | 2     |
| Personal Loans | /gold-loan               | SP   | 2     |
| Personal Loans | /car-loan                | SP   | 2     |
| Personal Loans | /consumer-loan           | SP   | 2     |
| Personal Loans | /personal-loan           | SP   | 2     |
| Personal Loans | /festival-loan           | SP   | 2     |
| Personal Loans | /education-loan          | SP   | 2     |
| Personal Loans | /home-loan               | SP   | 2     |
| Personal Loans | /house-construction-loan | SP   | 2     |
| Personal Loans | /loan-against-fd         | SP   | 2     |
| Personal Loans | /loan-against-nsc        | SP   | 2     |
| Personal Loans | /loan-against-property   | SP   | 2     |
| Personal Loans | /mortgage-overdraft      | SP   | 2     |
| Shared         | /interest-rates          | CP   | 1     |
| Shared         | /service-charges         | CP   | 1     |
| Shared         | /emi-calculator          | CP   | 2     |
| Shared         | /offers                  | CP   | 2     |
| Business       | /current-account         | SP   | 2     |
| Business       | /biz-double-deposit      | SP   | 2     |
| Business       | /biz-time-deposit        | SP   | 2     |
| Business       | /biz-recurring-deposit   | SP   | 2     |
| Business Loans | /working-capital-loan    | SP   | 2     |
| Business Loans | /transport-loan          | SP   | 2     |
| Business Loans | /professional-loan       | SP   | 2     |
| Business Loans | /micro-finance           | SP   | 2     |
| Business Loans | /self-employed-loan      | SP   | 2     |
| Business Loans | /overdraft-facility      | SP   | 2     |
| Digital        | /net-banking             | SP   | 1     |
| Digital        | /mobile-banking          | SP   | 1     |
| Digital        | /atm                     | SP   | 2     |
| Digital        | /debit-cards             | SP   | 2     |
| Digital        | /upi-qr                  | SP   | 2     |
| Digital        | /imps                    | SP   | 2     |
| Digital        | /bbps                    | SP   | 2     |
| Digital        | /sms-banking             | SP   | 2     |
| Digital        | /pan                     | SP   | 2     |
| Digital        | /locker                  | SP   | 2     |
| Digital        | /neft-rtgs               | SP   | 2     |
| Digital        | /pm-jeevan-yojana        | SP   | 2     |
| Digital        | /pm-suraksha-yojana      | SP   | 2     |
| Stay Connected | /locate-us               | CP   | 3     |
| Stay Connected | /branch-locator          | CP   | 3     |
| Stay Connected | /atm-locator             | CP   | 3     |
| Stay Connected | /ifsc-codes              | CP   | 2     |
| Stay Connected | /tenders                 | CP   | 1     |
| Stay Connected | /feedback                | CP   | 3     |
| Stay Connected | /contact-us              | CP   | 1     |
| Compliance     | /deaf-unclaimed-deposits | SP   | 1     |
| Compliance     | /privacy-policy          | SP   | 1     |
| Compliance     | /grievance-redressal     | SP   | 1     |
| Compliance     | /policy-centre           | CP   | 2     |
| Compliance     | /kyc-ckyc                | SP   | 2     |
| Compliance     | /cyber-awareness         | SP   | 2     |
| Compliance     | /positive-pay            | SP   | 2     |
| Compliance     | /download-forms          | CP   | 1     |
| Compliance     | /sitemap                 | SP   | 2     |

### Key Entities

- **Product**: A loan or deposit product with name, category (personal/business/loan/deposit), features, eligibility, required documents, and indicative KFS data (for loans).
- **InquirySubmission**: Name, masked mobile, product slug, branch, message, reference number, submission timestamp. Never stored client-side.
- **DEAFRecord**: S.No., Customer ID, GL Code, New AC Number, DEAF New AC No., Account Name, Address, State, District, Transaction Date, DEAF Amount.
- **Branch**: Name (Bairagarhi HO / TT Nagar / Karond), address, phone, email, business hours, GPS coordinates.
- **NewsEntry**: Date, category tag, headline, excerpt, full content, published flag.
- **InterestRate**: Product name, tenure, rate (%), senior citizen differential, staff differential, effective date.

---

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: An automated link checker run across all 67 URLs returns zero 404 errors and zero blank pages.
- **SC-002**: Google PageSpeed Insights mobile score is ≥ 90 on the homepage and at least 5 representative inner pages.
- **SC-003**: Largest Contentful Paint (LCP) is under 3 seconds on simulated 4G throttling for all pages.
- **SC-004**: A WCAG 2.1 AA audit reports zero critical accessibility errors across all 67 pages.
- **SC-005**: A native Hindi speaker reviews and approves 100% of Hindi translations before Phase 2 launch.
- **SC-006**: The EMI Calculator result for a standard ₹5,00,000 loan at 10% p.a. for 5 years matches the RBI standard formula output (EMI ≈ ₹10,624) to within ₹1.
- **SC-007**: All 18 loan product pages display a KFS panel with all required fields and the mandatory disclaimer.
- **SC-008**: The Grievance Redressal page passes a compliance checklist: 3-level matrix present, Nodal Officer details inline, cms.rbi.org.in link active, 14448 displayed, policy PDF downloadable.
- **SC-009**: The DEAF page shows either a populated searchable table or an explicit nil statement with a Last Updated timestamp — never blank.
- **SC-010**: The 301 redirect from `/deef-inactive-accounts.php` to `/deaf-unclaimed-deposits` returns HTTP 301 as verified by a curl command.
- **SC-011**: The Net Banking link uses only port 443. A codebase search for "8444" in any user-facing file returns zero matches.
- **SC-012**: Google Analytics 4 is verified firing all 5 required events (`pageview`, `form_submit`, `cta_click`, `calculator_use`, `language_toggle`) via GA4 debug mode before go-live.
- **SC-013**: All form submissions generate a unique reference number displayed on-screen and sent to the customer's mobile/email.

---

## Assumptions

- The bank holds rights to all images, logos, and content published on the website.
- All interest rates and fees published have been approved by bank management and comply with RBI guidelines before publication.
- A designated content approver is nominated by bank management before Phase 2 begins.
- Online loan applications (full digital processing) are out of scope. Phase 3 covers inquiry/interest forms only.
- The existing domain (mnsbankbhopal.com) and hosting contract are retained.
- 'Other Services' pages (Insurance, Mutual Funds, Demat, ASBA) will only be built for services MNS Bank is currently licensed to offer, pending IRDAI/SEBI/AMFI sign-off.
- The Grievance Redressal Policy document exists internally and will be provided by Legal/Compliance by end of Phase 1 Week 1.
- DEAF account data export from CBS will be provided by the IT team within Phase 1. If unavailable, an explicit nil statement is used.
- CMS platform: A built-in admin panel using password-protected Next.js routes with JSON/Markdown files is the selected approach. No external CMS service or subscription is needed.
- Branch data (Bairagarhi HO, TT Nagar, Karond) with addresses, phones, and hours will be supplied by bank management.
- Hindi translator is engaged and briefed by start of Phase 2.
- The reference design template (tjsbbank.co.in) is a UX/layout reference only. MNS Bank's own brand identity (#E11D48 primary red, #111827 deep charcoal, Satoshi/Noto Sans) is used throughout.
- Annual Reports (minimum 3 years) must be approved by Legal and Management before web publication.
- Social media account URLs (Facebook, Instagram, Twitter/X, LinkedIn, YouTube) will be provided by bank management.
- reCAPTCHA v3 keys (site key + secret key) will be provisioned by the IT team for integration.
- Google Analytics 4 measurement ID will be provisioned by the IT/Marketing team.
