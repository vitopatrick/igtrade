import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export const sendWelcomeEmail = async (email: string, password: string, name: string) => {
  const subject = 'Welcome to Rjobrien - Your Account Credentials';
  const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <h2 style="color: #333; text-align: center;">Welcome to Rjobrien, ${name}!</h2>
        <p style="font-size: 16px; color: #555;">
          Your account has been successfully created. Here are your login credentials:
        </p>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 5px 0;"><strong>Password:</strong> ${password}</p>
        </div>
        <p style="font-size: 16px; color: #555;">
          <strong>Next Steps:</strong>
        </p>
        <p style="font-size: 16px; color: #555;">
          To get started with your trading journey, please contact your <strong>Account Manager</strong> for further instructions and platform orientation.
        </p>
        <p style="font-size: 14px; color: #888; margin-top: 30px; text-align: center;">
          If you didn't create this account, please ignore this email.
        </p>
      </div>
    `;

  try {
    if (!resend) {
      console.log('--- WELCOME EMAIL (DEVELOPMENT LOG - RESEND) ---');
      console.log(`To: ${email}`);
      console.log(`Password: ${password}`);
      console.log(`Name: ${name}`);
      console.log('------------------------------------------------');
      return { success: true, logged: true };
    }

    const { data, error } = await resend.emails.send({
      from: 'Rjobrien <onboarding@mail.rjobrienhub.org>',
      to: email,
      subject: subject,
      html: html,
    });

    if (error) {
      console.error('Error sending welcome email via Resend:', error);
      return { success: false, error };
    }

    console.log('Email sent via Resend:', data?.id);
    return { success: true, data };
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return { success: false, error };
  }
};
