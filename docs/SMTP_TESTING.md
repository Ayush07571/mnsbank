# SMTP Testing Guide
# How to verify email sending works

## 🧪 Test SMTP Connection

### 1. Check Environment Variables
```bash
# Verify your .env.local has these:
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=your_mailtrap_username
SMTP_PASS=your_mailtrap_password
BANK_EMAIL=demo@mnsbankbhopal.com
```

### 2. Test SMTP Connection Manually
Create a test file: `test-smtp.js`

```javascript
const nodemailer = require('nodemailer');

async function testSMTP() {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify connection
    await transporter.verify();
    console.log('✅ SMTP connection successful');

    // Send test email
    const info = await transporter.sendMail({
      from: `"Test" <${process.env.BANK_EMAIL}>`,
      to: process.env.BANK_EMAIL,
      subject: 'Test Email from MNS Bank',
      text: 'This is a test email from the MNS Bank website.',
      html: '<h1>Test Email</h1><p>This is a test email from the MNS Bank website.</p>',
    });

    console.log('✅ Test email sent:', info.messageId);
  } catch (error) {
    console.error('❌ SMTP test failed:', error);
  }
}

testSMTP();
```

### 3. Run the Test
```bash
node test-smtp.js
```

## 🌐 Test via Web Interface

### 1. Start Development Server
```bash
npm run dev
```

### 2. Test Forms
- **Inquiry Form**: http://localhost:3000/contact-us
- **Feedback Form**: http://localhost:3000/feedback

### 3. Check Results
- **Browser**: Should show success message
- **Console**: Check for email logs
- **Mailtrap**: Check your inbox for emails

## 🔍 Debugging SMTP Issues

### Common Problems & Solutions:

#### 1. "SMTP configuration missing"
- Check your .env.local file
- Ensure all SMTP variables are set
- Restart the dev server after changes

#### 2. "Authentication failed"
- Verify Mailtrap credentials
- Check username/password are correct
- Ensure you're using the right port (2525 for Mailtrap)

#### 3. "Connection timeout"
- Check SMTP_HOST is correct
- Verify port number
- Check firewall/network settings

#### 4. "Email not received"
- Check Mailtrap inbox
- Verify BANK_EMAIL address
- Check email logs in console

## 📊 Expected Behavior

### Successful Test:
1. ✅ SMTP connection established
2. ✅ Email sent successfully
3. ✅ Email appears in Mailtrap inbox
4. ✅ Form shows success message
5. ✅ Reference number generated

### Email Content Should Include:
- Customer name, mobile, email
- Selected branch and product
- Message content
- Reference number
- Professional HTML formatting

## 🚨 Troubleshooting Commands

### Check Environment Variables:
```bash
grep SMTP .env.local
```

### Test Network Connection:
```bash
telnet smtp.mailtrap.io 2525
```

### Check Logs:
```bash
npm run dev 2>&1 | grep -i email
```

## 📱 Mailtrap Setup Reminder

If you haven't set up Mailtrap yet:
1. Go to https://mailtrap.io
2. Sign up for free account
3. Get SMTP credentials from API/SMTP section
4. Update your .env.local file
