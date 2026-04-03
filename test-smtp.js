const nodemailer = require('nodemailer');

async function testSMTP() {
  console.log('🧪 Testing SMTP Configuration...');
  
  // Check environment variables
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('❌ SMTP configuration missing in .env.local');
    console.log('Required variables:');
    console.log('- SMTP_HOST');
    console.log('- SMTP_USER');
    console.log('- SMTP_PASS');
    console.log('- SMTP_PORT (optional)');
    console.log('- BANK_EMAIL (optional)');
    return false;
  }

  try {
    console.log('📧 Creating SMTP transporter...');
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    console.log('🔐 Verifying SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection successful!');

    console.log('📨 Sending test email...');
    const info = await transporter.sendMail({
      from: `"MNS Bank Test" <${process.env.BANK_EMAIL || process.env.SMTP_USER}>`,
      to: process.env.BANK_EMAIL || process.env.SMTP_USER,
      subject: '🧪 Test Email - MNS Bank SMTP Configuration',
      text: 'This is a test email from the MNS Bank website SMTP configuration test.',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1A3A6B; color: white; padding: 20px; text-align: center;">
            <h1>🧪 SMTP Test</h1>
            <p>MNS Bank Bhopal</p>
          </div>
          
          <div style="padding: 20px; background: #f5f7fa;">
            <h2 style="color: #1A3A6B;">SMTP Configuration Test</h2>
            <p>✅ This is a test email to verify your SMTP configuration is working correctly.</p>
            
            <h3>Test Details:</h3>
            <ul>
              <li><strong>SMTP Host:</strong> ${process.env.SMTP_HOST}</li>
              <li><strong>SMTP Port:</strong> ${process.env.SMTP_PORT || '587'}</li>
              <li><strong>Test Date:</strong> ${new Date().toLocaleString()}</li>
            </ul>
            
            <p>If you receive this email, your SMTP configuration is working!</p>
          </div>
          
          <div style="background: #1A3A6B; color: white; padding: 20px; text-align: center; font-size: 12px;">
            <p>&copy; 2024 MNS Bank Bhopal. All rights reserved.</p>
            <p>This is an automated test email.</p>
          </div>
        </div>
      `,
    });

    console.log('✅ Test email sent successfully!');
    console.log('📧 Message ID:', info.messageId);
    console.log('📬 Check your Mailtrap inbox to see the email');
    
    return true;

  } catch (error) {
    console.error('❌ SMTP test failed:', error.message);
    
    if (error.code === 'EAUTH') {
      console.log('💡 Authentication failed - check your SMTP username and password');
    } else if (error.code === 'ECONNECTION') {
      console.log('💡 Connection failed - check your SMTP host and port');
    } else if (error.code === 'ESOCKET') {
      console.log('💡 Socket error - check your network connection');
    }
    
    return false;
  }
}

// Run the test
testSMTP().then(success => {
  if (success) {
    console.log('\n🎉 SMTP test completed successfully!');
    console.log('📝 Now you can test the forms at http://localhost:3000/contact-us');
  } else {
    console.log('\n❌ SMTP test failed. Please check your configuration.');
  }
}).catch(error => {
  console.error('💥 Unexpected error:', error);
});
