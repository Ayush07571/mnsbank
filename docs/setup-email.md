# Email Configuration Setup Guide

## SMTP Email Setup for Inquiry Forms:

### Option 1: Gmail (Recommended for Development)

1. **Enable 2-Factor Authentication:**
   - Go to: https://myaccount.google.com/security
   - Enable 2FA on your Gmail account

2. **Generate App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" → "Other (Custom name)"
   - Enter "MNS Bank Website"
   - Copy the 16-character password

3. **Update .env.local:**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_16_character_app_password
   BANK_EMAIL=inquiries@mnsbankbhopal.com
   ```

### Option 2: Business Email Service (Production)

#### SendGrid (Recommended):
1. Sign up: https://sendgrid.com
2. Verify your domain (mnsbankbhopal.com)
3. Get API key and update SMTP settings:
   ```env
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_USER=apikey
   SMTP_PASS=your_sendgrid_api_key
   BANK_EMAIL=inquiries@mnsbankbhopal.com
   ```

#### Amazon SES:
1. Set up AWS SES: https://aws.amazon.com/ses
2. Verify domain and get SMTP credentials
3. Update settings accordingly

### Example Gmail Setup:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=mnsbankbhopal@gmail.com
SMTP_PASS=abcd efgh ijkl mnop  # 16-char app password
BANK_EMAIL=inquiries@mnsbankbhopal.com
```

⚠️  Never commit real email credentials to Git!
