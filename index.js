// index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Setup CORS to allow requests from your Vite app
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost:3000','http://localhost:8080'],
  credentials: true
}));

// Parse JSON requests
app.use(express.json());

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY || 're_XsTAhwov_6xtLoCSjuZ7nJZtcLsErHUvf');

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Validate request
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    
    // Generate HTML email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6d28d9;">New Contact Form Submission</h2>
        <div style="margin: 20px 0">
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
        </div>
        <div>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; margin-top: 10px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
        <div style="margin-top: 30px; font-size: 14px; color: #6b7280;">
          <p>This email was sent from your website contact form.</p>
        </div>
      </div>
    `;
    
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['shivanshdata456@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: htmlContent,
    });
    
    if (error) {
      console.error('Resend API error:', error);
      return res.status(400).json({ message: 'Error sending email', error });
    }
    
    return res.status(200).json({ message: 'Email sent successfully', data });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});