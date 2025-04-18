import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
    <h2 style={{ color: '#6d28d9' }}>New Contact Form Submission</h2>
    <div style={{ margin: '20px 0' }}>
      <p><strong>From:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
    <div>
      <p><strong>Message:</strong></p>
      <div style={{ 
        backgroundColor: '#f9fafb', 
        padding: '15px', 
        borderRadius: '5px', 
        marginTop: '10px',
        whiteSpace: 'pre-wrap'
      }}>
        {message}
      </div>
    </div>
    <div style={{ marginTop: '30px', fontSize: '14px', color: '#6b7280' }}>
      <p>This email was sent from your website contact form.</p>
    </div>
  </div>
);