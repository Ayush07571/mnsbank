import nodemailer from 'nodemailer';

interface EmailData {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export async function sendEmail({ to, subject, html, text }: EmailData): Promise<boolean> {
  // Check if email configuration is available
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('SMTP configuration missing');
    return false;
  }

  try {
    // Create transporter with SMTP configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify transporter connection
    await transporter.verify();
    console.log('SMTP server connection verified');

    // Send email
    const info = await transporter.sendMail({
      from: `"MNS Bank" <${process.env.BANK_EMAIL || process.env.SMTP_USER}>`,
      to,
      subject,
      html,
      text,
    });

    console.log('Email sent successfully:', info.messageId);
    return true;

  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
}

export async function sendInquiryEmail(data: any, referenceNumber: string): Promise<boolean> {
  const bankEmail = process.env.BANK_EMAIL || 'inquiries@mnsbankbhopal.com';
  
  const subject = `New Inquiry - ${referenceNumber}`;
  
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #1A3A6B; color: white; padding: 20px; text-align: center;">
        <h1>MNS Bank Bhopal</h1>
        <p>New Customer Inquiry</p>
      </div>
      
      <div style="padding: 20px; background: #f5f7fa;">
        <h2 style="color: #1A3A6B;">Inquiry Details</h2>
        <p><strong>Reference Number:</strong> ${referenceNumber}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        
        <h3 style="color: #1A3A6B; margin-top: 20px;">Customer Information</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Mobile:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.mobile}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.email || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Branch:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.branch}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Product:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.productSlug || 'General Inquiry'}</td>
          </tr>
        </table>
        
        <h3 style="color: #1A3A6B; margin-top: 20px;">Message</h3>
        <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #1A3A6B;">
          ${data.message}
        </div>
      </div>
      
      <div style="background: #1A3A6B; color: white; padding: 20px; text-align: center; font-size: 12px;">
        <p>&copy; 2024 MNS Bank Bhopal. All rights reserved.</p>
        <p>This is an automated email from the MNS Bank website.</p>
      </div>
    </div>
  `;

  const text = `
    MNS Bank Bhopal - New Inquiry
    
    Reference Number: ${referenceNumber}
    Date: ${new Date().toLocaleString()}
    
    Customer Information:
    Name: ${data.fullName}
    Mobile: ${data.mobile}
    Email: ${data.email || 'Not provided'}
    Branch: ${data.branch}
    Product: ${data.productSlug || 'General Inquiry'}
    
    Message:
    ${data.message}
    
    ---
    This is an automated email from the MNS Bank website.
    © 2024 MNS Bank Bhopal. All rights reserved.
  `;

  return sendEmail({
    to: bankEmail,
    subject,
    html,
    text,
  });
}
