import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-stone-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/Deelecta cafe-101.jpg"
          alt="Deelectaa Cafe Ambience"
          className="w-full h-full object-cover animate-slow-zoom scale-105"
        />
        <div className="absolute inset-0 bg-stone-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/40 to-transparent"></div>
      </div>

      <div className="relative container mx-auto px-6 h-full flex items-center pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-10 h-[2px] bg-primary"></div>
              <span className="text-primary font-serif italic text-2xl md:text-3xl tracking-wide drop-shadow-md">
                Welcome to Deelectaa
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Where Every Bite <br />
              <span className="text-primary italic font-serif">Feels Like Home</span>
            </h1>
            <p className="text-xl text-stone-200 mb-12 max-w-xl leading-relaxed">
              Experience the perfect blend of artisanal coffee and hand-crafted gourmet meals in a cozy, modern atmosphere.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/menu"
                className="px-10 py-5 bg-primary text-white rounded-full font-bold text-lg hover:bg-white hover:text-stone-900 transition-all shadow-xl shadow-primary/20 flex items-center justify-center space-x-2 group"
              >
                <span>Explore Our Menu</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/reservations"
                className="px-10 py-5 border border-white/30 backdrop-blur-md text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all text-center"
              >
                Book a Table
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
