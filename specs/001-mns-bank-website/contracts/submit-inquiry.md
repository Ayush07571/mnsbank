# API Contract: Submit Inquiry

**Endpoint**: `POST /api/submit-inquiry`
**Purpose**: Accepts form submissions from the public-facing inline inquiry form, validates the payload (including reCAPTCHA), and forwards it to the bank's internal email address (`inquiries@mnsbankbhopal.com`). It does NOT store the payload in a database, ensuring PII compliance.

## Request

**Content-Type**: `application/json`

### Payload Schema (Zod)
```typescript
{
  fullName: string;        // Required. Min 2 chars. Max 100 chars.
  mobile: string;          // Required. Must match ^[6-9]\d{9}$
  email?: string;          // Optional. Valid email address if provided.
  productSlug: string;     // Required. The URL slug of the reference product.
  branch: string;          // Required. Enum: 'BAIRAGARHI_HO' | 'TT_NAGAR' | 'KAROND'
  message?: string;        // Optional. Max 250 chars.
  recaptchaToken: string;  // Required. The token from the v3 client execute call.
}
```

## Response

### Success (200 OK)
Returns a success confirmation along with the generated reference number.
```json
{
  "success": true,
  "referenceNumber": "MNS-20260326-A8F2"
}
```

### Validation Error (400 Bad Request)
Returned if the schema validation fails or if the reCAPTCHA token is invalid/missing.
```json
{
  "success": false,
  "error": "VERIFICATION_FAILED",
  "message": "Verification unavailable, please try again shortly."
}
```

### Generic Error (500 Internal Server Error)
Returned if the email dispatch service fails.
```json
{
  "success": false,
  "error": "DISPATCH_FAILED",
  "message": "We could not process your request at this time. Please contact the branch directly."
}
```

## Security & Rate Limiting
- **CORS**: Restricted to the domain `mnsbankbhopal.com` (and localhost for dev).
- **Rate Limit**: Maximum 5 requests per IP per minute.
- **reCAPTCHA**: The `recaptchaToken` must pass `siteverify` with a score $\ge 0.5$. If the score is lower, return 400 Bad Request. If the `siteverify` API is completely unreachable, fallback to 400 Bad Request per the specification (blocking submission rather than falling open).
