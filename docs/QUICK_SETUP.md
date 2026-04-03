# Quick Environment Setup Guide

## Step 1: Copy Environment Template
```bash
cp .env.example .env.local
```

## Step 2: Fill in Your Values

### For Development (Quick Start):
```env
# reCAPTCHA v3 (Get from: https://www.google.com/recaptcha/admin/create)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LeIxAcTAAAAAJcZVRqyHh71UMIEbQjVQyB8C_Zk
RECAPTCHA_SECRET_KEY=6LeIxAcTAAAAAGbq6qjI4bQ4kTcY8kY8kY8kY8kY

# Google Analytics (Get from: https://analytics.google.com)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email (Use Gmail for development)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_16_char_app_password
BANK_EMAIL=inquiries@mnsbankbhopal.com

# Development
NODE_ENV=development
```

### For Production:
- Get real reCAPTCHA keys from Google
- Set up proper GA4 property
- Use business email service (SendGrid/SES)
- Set NODE_ENV=production

## Step 3: Restart Development Server
```bash
npm run dev
```

## 🔗 Links to Get Keys:
- **reCAPTCHA**: https://www.google.com/recaptcha/admin/create
- **Google Analytics**: https://analytics.google.com
- **Gmail App Passwords**: https://myaccount.google.com/apppasswords
- **SendGrid**: https://sendgrid.com (production email)

## ⚠️ Important Notes:
- Never commit .env.local to Git
- Use different keys for development vs production
- Test email functionality before going live
- Keep your keys secure and private
