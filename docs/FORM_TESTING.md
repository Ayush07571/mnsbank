# Quick Form Testing Setup
# No personal email required!

## 🚀 Option 1: Mailtrap (Safest - Free)

1. **Sign up for Mailtrap (2 minutes):**
   - Go to: https://mailtrap.io
   - Sign up with Google/GitHub (free)
   - No credit card required

2. **Get SMTP Credentials:**
   - Login → Click "Inboxes" → "My Inbox"
   - Click "SMTP Settings" tab
   - Copy the credentials (they look like this):
   ```
   SMTP_HOST=smtp.mailtrap.io
   SMTP_PORT=2525
   SMTP_USER=xxxxxxxxxxxxx
   SMTP_PASS=xxxxxxxxxxxxx
   ```

3. **Update your .env.local:**
   ```env
   SMTP_HOST=smtp.mailtrap.io
   SMTP_PORT=2525
   SMTP_USER=your_mailtrap_username
   SMTP_PASS=your_mailtrap_password
   BANK_EMAIL=demo@mnsbankbhopal.com
   ```

4. **Test Forms:**
   - Start: `npm run dev`
   - Submit any form
   - Check Mailtrap inbox to see the email

## 🚀 Option 2: Demo Mode (No Setup Required)

1. **Use demo environment:**
   ```bash
   cp demo-env.txt .env.local
   ```

2. **Add demo email config:**
   ```env
   SMTP_HOST=
   SMTP_PORT=
   SMTP_USER=
   SMTP_PASS=
   BANK_EMAIL=demo@mnsbankbhopal.com
   NEXT_PUBLIC_DEMO_MODE=true
   ```

3. **Forms will show demo success messages** without actually sending emails.

## 🚀 Option 3: Disable Email Completely

```env
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
BANK_EMAIL=
```

Forms will process but won't send emails (good for testing UI).

## 🔍 What to Test:

1. **Inquiry Form** (`/contact-us`)
2. **Feedback Form** (`/feedback`) 
3. **EMI Calculator** (tracking)
4. **Language Toggle** (tracking)
5. **Site Search** (tracking)

## 📧 Mailtrap Benefits:
- ✅ 100 free emails per month
- ✅ No personal email needed
- ✅ See exactly what emails look like
- ✅ Safe testing environment
- ✅ Can test attachments, HTML, etc.

## ⚠️ Never Use Personal Gmail:
- Risk of spam marking
- Security concerns
- Daily sending limits
- Professional appearance

**Recommendation: Use Mailtrap - it's designed for exactly this!** 🎯
