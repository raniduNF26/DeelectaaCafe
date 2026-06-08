import { motion } from 'framer-motion';
import { FiArrowRight, FiCalendar, FiUser, FiTag } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      id: '1',
      title: 'The Art of the Perfect Pour-Over',
      excerpt: 'Discover the secrets behind brewing the perfect cup of coffee at home with our master barista...',
      author: 'David Chen',
      date: 'May 10, 2026',
      category: 'Brewing Guides',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '2',
      title: 'Sourcing Ethical Beans in 2026',
      excerpt: 'A look into our journey to the highlands of Ethiopia and our commitment to fair trade...',
      author: 'Sarah Jenkins',
      date: 'May 05, 2026',
      category: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '3',
      title: 'Top 5 Brunch Trends This Season',
      excerpt: 'From lavender-infused honey to artisanal sourdough, see what is trending in our kitchen...',
      author: 'Chef Marco',
      date: 'April 28, 2026',
      category: 'Culinary',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4 block">The Journal</span>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Coffee Culture & Stories</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Insights from our baristas, stories from our farmers, and recipes from our kitchen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-stone-200/50 group flex flex-col h-full"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-amber-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center space-x-4 text-xs text-stone-500 mb-4">
                  <span className="flex items-center"><FiCalendar className="mr-1" /> {post.date}</span>
                  <span className="flex items-center"><FiUser className="mr-1" /> {post.author}</span>
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-4 leading-tight group-hover:text-amber-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="flex items-center text-amber-900 font-bold text-sm group-hover:translate-x-2 transition-transform"
                >
                  Read Full Story <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <section className="mt-24 bg-amber-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stay in the Loop</h2>
            <p className="text-amber-100/80 mb-10">Subscribe to our journal for brewing tips, event invites, and exclusive offers.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 outline-none focus:bg-white/20 transition-all"
              />
              <button className="bg-white text-amber-900 px-8 py-4 rounded-full font-bold hover:bg-amber-100 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
