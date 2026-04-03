# Demo Data Setup Guide
# Safe for Development, Testing, and Demo Deployments

## 🚀 Quick Demo Setup

### Step 1: Create Demo Environment File
```bash
cp demo-env.txt .env.local
```

### Step 2: Demo Configuration Options

#### Option A: Full Demo Mode (Recommended for Testing)
```env
# reCAPTCHA v3 (Google Test Keys - Safe)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LeIxAcTAAAAAJcZVRqyHh71UMIEbQjVQyB8C_Zk
RECAPTCHA_SECRET_KEY=6LeIxAcTAAAAAGbq6qjI4bQ4kTcY8kY8kY8kY8kY

# Google Analytics (Disabled for demo)
NEXT_PUBLIC_GA_ID=

# Email (Mailtrap - Safe for testing)
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=your_mailtrap_username
SMTP_PASS=your_mailtrap_password
BANK_EMAIL=demo@mnsbankbhopal.com

NODE_ENV=development
NEXT_PUBLIC_DEMO_MODE=true
```

#### Option B: Minimal Demo (No External Services)
```env
# Disable reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
RECAPTCHA_SECRET_KEY=

# Disable Analytics
NEXT_PUBLIC_GA_ID=

# Disable Email
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
BANK_EMAIL=

NODE_ENV=development
NEXT_PUBLIC_DEMO_MODE=true
```

## 📧 Mailtrap Setup (Recommended for Email Testing)

1. **Sign up for free Mailtrap account:**
   - Visit: https://mailtrap.io
   - Free plan includes 100 emails/month

2. **Get SMTP Credentials:**
   - Go to "Inboxes" → "SMTP Settings"
   - Copy the Host, Port, Username, and Password

3. **Update .env.local:**
   ```env
   SMTP_HOST=smtp.mailtrap.io
   SMTP_PORT=2525
   SMTP_USER=your_mailtrap_username
   SMTP_PASS=your_mailtrap_password
   ```

## 🔧 Demo Mode Features

When `NEXT_PUBLIC_DEMO_MODE=true`, the site will:
- Show "DEMO" badges on sensitive sections
- Disable real form submissions (show demo messages)
- Use sample data for rates and products
- Display demo contact information

## 🧪 Testing Scenarios

### 1. Development Testing
```bash
cp demo-env.txt .env.local
npm run dev
```

### 2. Demo Deployment (Vercel/Netlify)
- Use demo-env.txt as environment variables
- Set NEXT_PUBLIC_DEMO_MODE=true
- All features work but with demo data

### 3. Client Presentation Mode
- Enable demo mode for client demos
- No real API calls or emails
- Safe for public sharing

## 📊 Sample Data Included

- **Interest Rates**: Demo rates for all products
- **Branch Locations**: Sample branches in Bhopal
- **News & Updates**: Demo banking news
- **DEAF Data**: Sample unclaimed deposits data
- **Contact Forms**: Demo form submissions

## ⚠️ Demo Limitations

- reCAPTCHA uses test keys (not production-ready)
- Emails go to Mailtrap (not real customers)
- Analytics tracking disabled
- Demo badges appear on pages
- Forms show demo success messages

## 🚀 Production Setup

When ready for production:
1. Get real reCAPTCHA keys
2. Set up Google Analytics
3. Configure real email service
4. Remove NEXT_PUBLIC_DEMO_MODE=true
