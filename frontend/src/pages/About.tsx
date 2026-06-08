import { motion, animate, useMotionValue, useTransform, useInView } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { FiPlay, FiPause } from 'react-icons/fi';

const AnimatedNumber = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, motionValue, value]);

  return (
    <span ref={ref} className="inline-flex">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#faf8f5]">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header Section (Centered) */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[#e64c3c] mb-6">Our Story</h1>
          <div className="w-48 h-[2px] bg-[#e64c3c] mx-auto"></div>
        </div>

        {/* 2-Column Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[600px] rounded-xl overflow-hidden shadow-xl"
          >
            <img 
              src="/Deelecta cafe-46.jpg" 
              alt="Deelectaa Cafe Barista" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-stone-600 leading-relaxed text-base"
          >
            <p>
              Welcome to Deelectaa Cafe, where we have been proudly serving up the finest coffee and delivering unparalleled customer service. Founded in 2026, Deelectaa Cafe began with a simple vision: to create a space where coffee isn't just a drink, but a curated experience that feels like home.
            </p>
            <p>
              From our signature burgers to our hand-crafted boba teas, every item on our menu is prepared with the finest ingredients and a touch of passion. Our skilled baristas undergo rigorous training to master the art of crafting the perfect cup of coffee, ensuring that every sip is a delightful experience.
            </p>
            <p>
              We believe that exceptional customer service is the key to creating memorable moments for our guests. From the moment you walk through our doors, our friendly crew will greet you with warm smiles and assist you in choosing the perfect beverage or meal to suit your taste. We prioritize your comfort and strive to create a welcoming and cozy atmosphere.
            </p>
            <p>
              We invite you to join us at our Kotugoda outlet and experience the Deelectaa difference.
            </p>
            
            {/* Stats row below text */}
            <div className="pt-8 mt-8 border-t border-stone-200 flex flex-wrap gap-8">
              <div>
                <h4 className="text-3xl font-bold text-primary mb-1">
                  <AnimatedNumber value={15} suffix="+" />
                </h4>
                <p className="text-xs text-stone-500 uppercase font-bold tracking-wider">Menu Categories</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary mb-1">
                  <AnimatedNumber value={500} suffix="+" />
                </h4>
                <p className="text-xs text-stone-500 uppercase font-bold tracking-wider">Happy Guests</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary mb-1">
                  <AnimatedNumber value={100} suffix="%" />
                </h4>
                <p className="text-xs text-stone-500 uppercase font-bold tracking-wider">Fresh Quality</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Video Section Below */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
        >
            <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-stone-900 mb-4">Watch Our Journey</h3>
                <p className="text-stone-500">Take a visual tour of Deelectaa Cafe</p>
            </div>
            
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl bg-stone-900 cursor-pointer" onClick={togglePlay}>
              <video 
                ref={videoRef}
                src="/video.mp4" 
                playsInline
                className="w-full object-cover aspect-video"
                onEnded={() => setIsPlaying(false)}
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
              />
              
              {/* Custom Play/Pause Overlay Button */}
              <div 
                className="absolute bottom-6 right-6 bg-stone-900/60 backdrop-blur-md rounded-full p-4 text-white transition-all duration-300 hover:bg-primary z-20 flex items-center justify-center shadow-lg"
                onClick={(e) => { e.stopPropagation(); togglePlay(); }}
              >
                {isPlaying ? <FiPause size={24} /> : <FiPlay size={24} className="ml-1" />}
              </div>
              
              {/* Center Play Button when paused for extra visibility */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-stone-900/30 transition-opacity">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-8 text-white shadow-2xl hover:scale-110 transition-transform">
                    <FiPlay size={40} className="ml-2" />
                  </div>
                </div>
              )}
            </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
