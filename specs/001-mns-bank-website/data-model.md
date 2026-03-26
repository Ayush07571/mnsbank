# Data Model: MNS Bank Website

## Overview

The MNS Bank website uses a file-based CMS approach (JSON and Markdown files) for content managed by the bank's non-technical staff. The only dynamic data submission is the Inquiry Form, which is stateless on the server (it immediately fires an email/SMS and does not persist PII in a database).

## Core Entities

### 1. `InquirySubmission`
Represents a user's interest in a product or a general contact request. This data is **not stored** in a database per the PII requirements; it is validated and immediately transmitted via email.

| Field | Type | Required | Validation Rules | Description |
|-------|------|----------|------------------|-------------|
| `fullName` | `string` | Yes | Min 2 chars, max 100. | User's full name. |
| `mobile` | `string` | Yes | `^[6-9]\d{9}$` | Strict Indian 10-digit mobile number. |
| `email` | `string` | No | Valid email format if provided | Optional contact email. |
| `productSlug` | `string` | Yes | Must match known product ID | Auto-filled from the page context. |
| `branch` | `enum` | Yes | `BAIRAGARHI_HO`, `TT_NAGAR`, `KAROND` | Which branch to route the inquiry to. |
| `message` | `string` | No | Max 250 chars. | Optional user message. |
| `recaptchaToken` | `string` | Yes | Must verify via Google API | v3 token from the client. |

### 2. `DEAFRecord`
Represents an unclaimed deposit account per RBI mandates. These records are uploaded via CSV by administrators and stored collectively as a JSON file or parsed CSV in the `data/deaf/` directory.

| Field | Type | Source Header | Description |
|-------|------|---------------|-------------|
| `serialNumber` | `number` | S.No. | Sequential ID for rendering. |
| `customerId` | `string` | Customer ID | Masked/partial ID for search. |
| `glCode` | `string` | GL Code | General Ledger code. |
| `newAcNumber` | `string` | New AC Number | Masked account number. |
| `deafNewAcNo` | `string` | DEAF New AC No. | The DEAF ledger identifier. |
| `accountName` | `string` | Account Name | Primary search vector. |
| `address` | `string` | Address | Registered address. |
| `state` | `string` | State | e.g. "Madhya Pradesh". |
| `district` | `string` | District | e.g. "Bhopal". |
| `transactionDate`| `string` | Transaction Date | Date of DEAF transfer. |
| `deafAmount` | `number` | DEAF Amount | The unclaimed balance transferred. |

### 3. `NewsEntry`
Represents an announcement or notice displayed in the "What's New" section. Stored in `data/news.json`.

| Field | Type | Description |
|-------|------|-------------|
| `id` | `string` | URL-friendly slug (e.g. `agm-notice-2026`). |
| `date` | `string` | ISO 8601 date string for chronological sorting. |
| `category` | `enum` | `NOTICE`, `UPDATE`, `OFFER`, `TENDER` |
| `headline` | `string` | EN headline. |
| `headlineHi`| `string` | HI headline. |
| `excerpt` | `string` | 2-line EN excerpt for the homepage card. |
| `excerptHi` | `string` | 2-line HI excerpt. |
| `content` | `string` | Markdown EN content body. |
| `contentHi` | `string` | Markdown HI content body. |
| `published` | `boolean` | If false, excluded from static generation. |

### 4. `InterestRate`
Represents the current interest rates for various deposit durations. Stored in `data/rates.json`.

| Field | Type | Description |
|-------|------|-------------|
| `category` | `enum` | `SAVINGS`, `TERM_DEPOSIT`, `LOAN` |
| `tenure` | `string` | E.g. "1 Year to 2 Years" (maps to i18n keys if possible, or stores EN/HI pairs). |
| `baseRate` | `number` | The standard public interest rate (%). |
| `seniorCitizenRate` | `number` | The rate including the senior citizen premium (%). |
| `staffRate` | `number` | The rate including the staff premium (%). |
| `effectiveDate` | `string` | ISO 8601 date indicating from when these rates apply. |

## CMS Storage Strategy

Because a built-in local CMS approach was chosen, data will be structured as follows in the repository:

```text
src/data/
├── rates.json        # Array of InterestRate objects
├── news.json         # Array of NewsEntry objects
└── deaf.csv          # The raw CSV uploaded by the admin panel
```

The Next.js App Router will read these files at build time (and at request time via Server Actions/API routes depending on `use cache` directives) to render the public pages. When an admin uses the internal dashboard to update content, a Node.js Server Action will overwrite these files.
