import { motion } from 'framer-motion';
import { FiZoomIn } from 'react-icons/fi';

const Menu = () => {
  const menuPages = [
    { id: 1, src: '/menu-1.png', title: 'Food Menu - Burgers & Sandwiches' },
    { id: 2, src: '/menu-2.png', title: 'Signature Submarines & Breakfast' },
    { id: 3, src: '/menu-3.png', title: 'Beverages & Brews' },
    { id: 4, src: '/menu-4.png', title: 'Milkshakes, Juices & Desserts' },
  ];

  return (
    <div className="relative min-h-screen bg-stone-950 overflow-hidden">
      {/* Aesthetic Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 blur-sm scale-110"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-transparent to-stone-950"></div>
      </div>

      {/* Floating Decorative Items */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-40 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -15, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-40 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
      />

      <div className="relative z-10 pt-40 pb-24 container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-bold uppercase tracking-[0.4em] text-sm mb-4 block"
          >
            Digital Experience
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Our Menu
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            className="h-1 bg-primary mx-auto rounded-full"
          />
        </div>

        <div className="max-w-4xl mx-auto space-y-20">
          {menuPages.map((page, index) => (
            <motion.div
              key={page.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-4 bg-primary/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative bg-white/5 backdrop-blur-md p-4 md:p-6 rounded-[2rem] border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="absolute top-10 right-10 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-primary p-4 rounded-full text-white shadow-xl">
                    <FiZoomIn size={24} />
                  </div>
                </div>

                <img
                  src={page.src}
                  alt={page.title}
                  className="w-full rounded-[1.5rem] shadow-lg"
                />

                <div className="mt-8 flex justify-center">
                  <span className="text-stone-500 font-bold uppercase tracking-widest text-[10px] bg-stone-900/50 px-4 py-1 rounded-full border border-white/5">
                    Page {page.id} — {page.title}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <p className="text-stone-500 text-sm italic tracking-wide">
            * All prices are in Sri Lankan Rupees (Rs.). A 10% service charge applies to all items.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
