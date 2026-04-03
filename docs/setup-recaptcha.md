# reCAPTCHA v3 Setup Guide

## How to Get reCAPTCHA Keys:

1. **Go to Google reCAPTCHA Admin Console:**
   - Visit: https://www.google.com/recaptcha/admin/create
   - Sign in with your Google account

2. **Register Your Site:**
   - Label: "MNS Bank Bhopal"
   - reCAPTCHA type: "reCAPTCHA v3"
   - Domains: 
     - localhost (for development)
     - mnsbankbhopal.com (for production)
     - *.mnsbankbhopal.com (subdomains)
   - Owners: Add your email address

3. **Get Your Keys:**
   - After submission, you'll receive:
     - Site Key (NEXT_PUBLIC_RECAPTCHA_SITE_KEY)
     - Secret Key (RECAPTCHA_SECRET_KEY)

## Example Keys (for testing only):
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LeIxAcTAAAAAJcZVRqyHh71UMIEbQjVQyB8C_Zk
RECAPTCHA_SECRET_KEY=6LeIxAcTAAAAAGbq6qjI4bQ4kTcY8kY8kY8kY8kY

⚠️  Use these only for development, get real keys for production!
