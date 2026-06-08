import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds for the animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] bg-stone-950 flex items-center justify-center overflow-hidden"
        >
          {/* Animated Coffee Aroma Steam */}
          <div className="absolute inset-0 flex justify-center">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 100, scale: 1 }}
                animate={{ 
                  opacity: [0, 0.2, 0],
                  y: -500,
                  scale: [1, 2, 3],
                  x: [0, (i - 1) * 50, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: i * 0.8,
                  ease: "linear"
                }}
                className="w-40 h-40 bg-primary/20 rounded-full blur-[80px]"
              />
            ))}
          </div>

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="relative h-32 w-32 mx-auto">
                {/* Rotating Border Glow */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-t-2 border-primary/30"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="h-full w-full rounded-full overflow-hidden bg-white shadow-2xl flex items-center justify-center"
                >
                  <img 
                    src="/logo.png" 
                    alt="Logo" 
                    className="w-full h-full object-cover scale-[1.15]"
                  />
                </motion.div>
              </div>
            </motion.div>

            <div className="overflow-hidden h-6 w-48 mx-auto relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="bg-primary h-[2px] w-full absolute bottom-0"
              />
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-primary font-bold tracking-[0.4em] text-[10px] uppercase block mb-1"
              >
                Brewing Excellence
              </motion.span>
            </div>
          </div>

          {/* Background Texture */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
