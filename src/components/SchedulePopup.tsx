import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const SchedulePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showInitialPopup, setShowInitialPopup] = useState(false);

  useEffect(() => {
    // Show the initial popup after 3 seconds
    const timer = setTimeout(() => {
      setShowInitialPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleScheduleClick = () => {
    window.open('https://calendly.com/ritwikraj8908', '_blank');
    setIsOpen(false);
    setShowInitialPopup(false);
  };

  return (
    <>
      {/* Small floating popup */}
      <AnimatePresence>
        {showInitialPopup && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <div className="bg-card border border-primary/20 rounded-lg p-4 shadow-lg max-w-sm">
              <button
                onClick={() => setShowInitialPopup(false)}
                className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
              >
                <X size={16} />
              </button>
              
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Let's Schedule a Meeting!</h3>
                  <p className="text-xs text-muted-foreground">Book a free consultation</p>
                </div>
              </div>
              
              <Button
                onClick={() => setIsOpen(true)}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="sm"
              >
                <Clock className="w-4 h-4 mr-2" />
                Schedule Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Schedule a Meeting
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Ready to discuss your project? Let's schedule a free consultation to explore how I can help bring your ideas to life.
            </p>
            
            <div className="bg-muted/50 rounded-lg p-4">
              <h4 className="font-semibold mb-2">What we'll discuss:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Your project requirements</li>
                <li>• Timeline and budget</li>
                <li>• Technical approach</li>
                <li>• Next steps</li>
              </ul>
            </div>
            
            <Button
              onClick={handleScheduleClick}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse"
              size="lg"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Your Free Consultation
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SchedulePopup;