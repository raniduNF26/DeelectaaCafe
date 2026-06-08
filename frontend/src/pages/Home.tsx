import React, { useState } from 'react';
import Hero from '../components/Hero/Hero';
import Mascot from '../components/Common/Mascot';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCoffee, FiSun, FiMoon, FiHeart, FiStar } from 'react-icons/fi';
import { GiCoffeeCup, GiBoba, GiHamburger, GiSandwich, GiCroissant } from 'react-icons/gi';

const Home = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: <FiCoffee className="text-4xl text-white" />,
      title: "Artisanal Coffee",
      description: "Hand-picked beans roasted to perfection by our expert baristas, delivering a bold and unforgettable flavor.",
      bgImage: "/dee2.jpg",
      hoverDirection: { x: "-100%", y: 0 }
    },
    {
      icon: <FiSun className="text-4xl text-white" />,
      title: "Morning Delights",
      description: "Start your morning right with our signature breakfast selections, crafted fresh daily with indulgent sweet combos, savory platters, and tropical delights.",
      bgImage: "/pancakes.jpg",
      hoverDirection: { x: 0, y: "100%" }
    },
    {
      icon: <FiMoon className="text-4xl text-white" />,
      title: "Cozy Evenings",
      description: "Wind down in our warm atmosphere with specialty desserts, premium teas, and a relaxed ambiance.",
      bgImage: "/brownie.jpg",
      hoverDirection: { x: "100%", y: 0 }
    }
  ];

  return (
    <div className="bg-stone-50 overflow-hidden">
      <Hero />
      <Mascot />

      {/* Moving Text Ribbon */}
      <div className="bg-primary py-4 overflow-hidden flex whitespace-nowrap relative z-20 shadow-lg">
        <motion.div
          className="flex space-x-12 items-center"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center space-x-12 text-white">
              <span className="text-xl font-bold uppercase tracking-widest">Freshly Brewed Coffee</span>
              <span className="text-xl font-bold uppercase tracking-widest opacity-50">•</span>
              <span className="text-xl font-bold uppercase tracking-widest">Premium Pastries</span>
              <span className="text-xl font-bold uppercase tracking-widest opacity-50">•</span>
              <span className="text-xl font-bold uppercase tracking-widest">Signature Blends</span>
              <span className="text-xl font-bold uppercase tracking-widest opacity-50">•</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Features Section with Floating Cards */}
      <section className="py-32 relative overflow-hidden bg-stone-50">
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#573b22_1px,transparent_1px)] [background-size:24px_24px] z-0"></div>

        {/* Hover Background Images */}
        <AnimatePresence>
          {hoveredFeature !== null && (
            <motion.div
              key={hoveredFeature}
              initial={{ 
                opacity: 0, 
                x: features[hoveredFeature].hoverDirection.x, 
                y: features[hoveredFeature].hoverDirection.y 
              }}
              animate={{ opacity: 0.5, x: 0, y: 0 }}
              exit={{ 
                opacity: 0, 
                x: features[hoveredFeature].hoverDirection.x, 
                y: features[hoveredFeature].hoverDirection.y 
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 z-0 pointer-events-none"
            >
              <img 
                src={features[hoveredFeature].bgImage} 
                alt="Background" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-stone-50/40"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-stone-50"></div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Animated Coffee Spills & Splashes */}
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.05, 1] }} 
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] text-[#4a2e15] opacity-[0.30] pointer-events-none"
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18.1,97.7,-2.4C98.6,13.3,94.4,29.3,85.2,42.4C76,55.5,61.8,65.7,46.9,74.5C32,83.3,16,90.7,0.5,89.8C-15,88.9,-30,79.7,-43.8,70.1C-57.6,60.5,-70.2,50.5,-78.9,37.6C-87.6,24.7,-92.4,9,-90.7,-5.7C-89,-20.4,-80.8,-34.1,-70.7,-45.5C-60.6,-56.9,-48.6,-66,-35.3,-72.6C-22,-79.2,-7.4,-83.3,7,-85.1C21.4,-86.9,42.8,-86.4,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </motion.div>

        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.1, 1] }} 
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] text-primary opacity-[0.30] pointer-events-none"
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M37.6,-65.7C50.4,-57.1,63.6,-49.2,73,-38.3C82.4,-27.4,88,-13.7,87.6,-0.2C87.2,13.3,80.8,26.6,71.1,36.5C61.4,46.4,48.4,52.9,35.6,58.8C22.8,64.7,11.4,70,-1.3,72.3C-14,74.6,-28,73.9,-40.4,67.8C-52.8,61.7,-63.6,50.2,-71.3,37.1C-79,24,-83.6,9.3,-82.1,-4.7C-80.6,-18.7,-73,-32,-63,-42.6C-53,-53.2,-40.6,-61.1,-27.9,-69.5C-15.2,-77.9,-2.2,-86.8,9.7,-84.9C21.6,-83,30.3,-74.3,37.6,-65.7Z" transform="translate(100 100)" />
          </svg>
        </motion.div>

        <motion.div 
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[20%] w-[100px] h-[100px] text-[#2c1a0e] opacity-[0.30] pointer-events-none"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M11,19.93C7.05,19.43 4,16.05 4,12C4,7.95 7.05,4.57 11,4.07V19.93M13,4.07C16.95,4.57 20,7.95 20,12C20,16.05 16.95,19.43 13,19.93V4.07Z" />
          </svg>
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 40, 0], rotate: [0, -15, 0] }} 
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[15%] w-[150px] h-[150px] text-primary opacity-[0.30] pointer-events-none"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M11,19.93C7.05,19.43 4,16.05 4,12C4,7.95 7.05,4.57 11,4.07V19.93M13,4.07C16.95,4.57 20,7.95 20,12C20,16.05 16.95,19.43 13,19.93V4.07Z" />
          </svg>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, 20, 0] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[60%] right-[30%] w-[80px] h-[80px] text-[#2c1a0e] opacity-[0.25] pointer-events-none"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M11,19.93C7.05,19.43 4,16.05 4,12C4,7.95 7.05,4.57 11,4.07V19.93M13,4.07C16.95,4.57 20,7.95 20,12C20,16.05 16.95,19.43 13,19.93V4.07Z" />
          </svg>
        </motion.div>

        <motion.div 
          animate={{ y: [0, -40, 0], rotate: [0, -25, 0] }} 
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[50%] w-[120px] h-[120px] text-primary opacity-[0.20] pointer-events-none"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M11,19.93C7.05,19.43 4,16.05 4,12C4,7.95 7.05,4.57 11,4.07V19.93M13,4.07C16.95,4.57 20,7.95 20,12C20,16.05 16.95,19.43 13,19.93V4.07Z" />
          </svg>
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-stone-900 mb-8 leading-tight"
            >
              The Deelectaa <span className="text-primary relative inline-block">
                Experience
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-primary/20 rounded-full"></span>
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-stone-600 text-lg md:text-xl leading-relaxed"
            >
              More than just a cafe, we are a destination for those who appreciate the finer details.
              From the aroma of freshly ground beans to the last bite of our house-made pastries, every moment is crafted for you.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
                className="bg-white/80 backdrop-blur-md rounded-3xl p-1 relative overflow-hidden group hover:-translate-y-4 transition-transform duration-500 shadow-2xl shadow-stone-200/80"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="bg-white/90 backdrop-blur-xl rounded-[1.4rem] p-10 h-full relative z-10 border border-stone-100/50">
                  <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mb-8 transform group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-primary/30">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-4">{feature.title}</h3>
                  <p className="text-stone-600 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infinite Moving Icons Section */}
      <div className="bg-transparent py-12 overflow-hidden flex whitespace-nowrap relative z-20 border-b border-stone-200 bg-stone-50">
        <motion.div
          className="flex space-x-20 items-center"
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center space-x-20 text-primary opacity-90">
              <GiCoffeeCup className="text-5xl md:text-6xl hover:scale-110 transition-transform cursor-pointer" />
              <GiBoba className="text-5xl md:text-6xl hover:scale-110 transition-transform cursor-pointer" />
              <GiHamburger className="text-5xl md:text-6xl hover:scale-110 transition-transform cursor-pointer" />
              <GiSandwich className="text-5xl md:text-6xl hover:scale-110 transition-transform cursor-pointer" />
              <GiCroissant className="text-5xl md:text-6xl hover:scale-110 transition-transform cursor-pointer" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Featured Items Split Section */}
      <section className="py-0 relative">
        <div className="flex flex-col lg:flex-row min-h-[80vh]">
          {/* Image Side */}
          <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-full overflow-hidden">
            <motion.div
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="absolute inset-0"
            >
              <img
                src="/Deelecta cafe-42.jpg"
                alt="Featured Coffee"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 to-transparent lg:hidden"></div>
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 bg-stone-900 flex items-center p-12 lg:p-24 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 max-w-xl"
            >
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Limited Time</span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
                Savor the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400">
                  Specialty Brews
                </span>
              </h2>
              <p className="text-stone-400 text-lg mb-10 leading-relaxed">
                Our seasonal menu features unique blends and flavors inspired by the current harvest. Carefully curated by our master roasters to bring you an unparalleled tasting experience.
              </p>
              <Link to="/menu" className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-stone-900 transition-all duration-300 shadow-xl shadow-primary/30 flex items-center space-x-3 group w-max">
                <span>View Menu</span>
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
