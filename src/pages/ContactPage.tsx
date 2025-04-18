import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import BackgroundEffect from '@/components/BackgroundEffect';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare email data for MailerSend API
      const emailData = {
        from: {
          email: "no-reply@yourdomain.com",
          name: "Your Website Contact Form"
        },
        to: [
          {
            email: "aachcoder47@gmail.com",
            name: "Site Owner"
          }
        ],
        subject: `New contact message from ${formData.name}`,
        text: `
          Name: ${formData.name}
          Email: ${formData.email}
          
          Message:
          ${formData.message}
        `,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #6d28d9;">New Contact Form Submission</h2>
            <p><strong>From:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${formData.message.replace(/\n/g, '<br>')}
            </div>
          </div>
        `
      };

      // Send email using MailerSend API
      const response = await fetch('https://api.mailersend.com/v1/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer mlsn.aeb2a367b4a212c4594720e537f96a3e68ea77198a3d3b1ba9e3a922c84cf281'
        },
        body: JSON.stringify(emailData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send email');
      }

      toast({
        title: "Message sent successfully",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <BackgroundEffect />
      <section className="pt-32 pb-24 container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-cyber-purple glow-text">Touch</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Have a question or want to work together? Reach out and let's start a conversation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-black/40 border-cyber-purple/30"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@example.com"
                    required
                    className="bg-black/40 border-cyber-purple/30"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={6}
                    required
                    className="bg-black/40 border-cyber-purple/30"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="neon-button neon-button--purple w-full"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      Sending... <Send className="ml-2 h-4 w-4 animate-pulse" />
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyber-purple/20 rounded-full p-3">
                    <Mail className="h-6 w-6 text-cyber-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Email</h3>
                    <a 
                      href="mailto:sales@futuristiccreations.tech"
                      className="text-gray-300 hover:text-cyber-cyan transition-colors"
                    >
                      sales@futuristiccreations.tech
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyber-purple/20 rounded-full p-3">
                    <Phone className="h-6 w-6 text-cyber-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Phone</h3>
                    <a 
                      href="tel:+919731316640"
                      className="text-gray-300 hover:text-cyber-cyan transition-colors"
                    >
                      +91 9731316640
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-cyber-purple/20 rounded-full p-3">
                    <Instagram className="h-6 w-6 text-cyber-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Instagram</h3>
                    <a 
                      href="https://instagram.com/pvtt_shivanx_raj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-cyber-cyan transition-colors"
                    >
                      @pvtt_shivanx_raj
                    </a>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-cyber-purple/20">
                  <h3 className="font-medium text-lg mb-4">Office Hours</h3>
                  <div className="grid grid-cols-2 gap-2 text-gray-300">
                    <div>Monday - Friday:</div>
                    <div>9:00 AM - 6:00 PM IST</div>
                    <div>Saturday:</div>
                    <div>10:00 AM - 2:00 PM IST</div>
                    <div>Sunday:</div>
                    <div>Closed</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
