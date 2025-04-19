
import express from 'express';
import { Resend } from 'resend';
import cors from 'cors';
import { EmailTemplate } from '../../../components/EmailTemplate';

const router = express.Router();
const resend = new Resend('re_XsTAhwov_6xtLoCSjuZ7nJZtcLsErHUvf');

// Apply CORS middleware
router.use(cors());
router.use(express.json());

router.post('/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate the request body
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['shivanshdata456@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      react: EmailTemplate({ 
        name, 
        email, 
        message 
      }),
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(400).json({ message: 'Error sending email', error });
    }

    return res.status(200).json({ message: 'Email sent successfully', data });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ message: 'Internal server error', error });
  }
});

export default router;
