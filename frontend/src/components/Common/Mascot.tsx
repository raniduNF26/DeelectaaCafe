import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const Mascot = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger when scrolled down 400px
      if (window.scrollY > 400 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        
        // Auto dismiss after 10 seconds
        setTimeout(() => {
          setIsVisible(false);
        }, 10000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShown]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -200, opacity: 0, transition: { duration: 0.6, ease: "easeIn" } }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          className="fixed bottom-6 left-6 z-[90] flex items-end pointer-events-none"
        >
          {/* Mascot Image */}
          <motion.img
            src="/av11_nobg.png"
            alt="Deelectaa Mascot"
            className="w-32 h-32 md:w-48 md:h-48 object-contain origin-bottom drop-shadow-2xl"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Speech Bubble */}
          <motion.div
            initial={{ scale: 0, opacity: 0, x: -20 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 120 }}
            className="bg-primary text-white p-4 rounded-2xl rounded-bl-none shadow-2xl mb-24 ml-[-20px] max-w-[220px] pointer-events-auto relative"
            style={{ transformOrigin: "bottom left" }}
          >
            <p className="text-sm font-extrabold mb-2 text-white">
              Hi there! 👋 <br/> Welcome to Deelectaa!
            </p>
            <p className="text-xs text-white/90 mb-4 font-medium leading-relaxed">
              Need help deciding or want to make an order? Click the WhatsApp icon on the right! 
            </p>
            <div className="flex items-center space-x-2 font-bold text-xs">
              <span className="text-white">Chat with us</span>
              <FaWhatsapp className="text-xl text-[#25D366] drop-shadow-sm bg-white rounded-full p-[2px]" />
              <motion.span 
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-base"
              >
                👉
              </motion.span>
            </div>
            
            {/* Close Button */}
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute -top-3 -right-3 bg-white text-primary rounded-full w-7 h-7 flex items-center justify-center text-lg hover:bg-stone-100 transition-colors shadow-md border border-stone-200"
              aria-label="Close message"
            >
              ×
            </button>
            
            {/* Smooth CSS Triangle Tail connecting to the mascot */}
            <div className="absolute -bottom-3 left-6 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] border-t-primary pointer-events-none"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Mascot;
