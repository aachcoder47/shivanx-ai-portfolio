
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { toast } from '@/components/ui/sonner';
import BackgroundEffect from '@/components/BackgroundEffect';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const { toast: toastNotification } = useToast();
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
  
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    // Prepare the template parameters
    const templateParams = {
      to_email: 'shivanshdata456@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      // Include any other parameters your template needs
    };
    
    // Send the email using EmailJS
    const result = await emailjs.send(
      'service_djomyhg', // Replace with your EmailJS service ID
      'template_5awc5zj', // Replace with your EmailJS template ID
      templateParams,
      'QoypdFgIqb9gGZsr-' // Replace with your EmailJS public key
    );
    
    console.log('Email sent successfully:', result.text);
    
    // Show success message using Sonner toast
    toast.success("Message sent successfully", {
      description: "Thanks for reaching out! We'll get back to you soon."
    });
    
    // Reset the form
    setFormData({ name: '', email: '', message: '' });
    
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Show error message using Sonner toast
    toast.error("Error sending message", {
      description: "There was a problem sending your message. Please try again later."
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
