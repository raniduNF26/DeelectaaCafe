import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6 group">
              <div className="overflow-hidden rounded-full bg-white h-12 w-12 flex items-center justify-center p-0.5">
                <img src="/logo.png" alt="Deelectaa Logo" className="h-full w-full object-contain rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tighter text-white leading-none group-hover:text-primary transition-colors">
                  DEELECTAA
                </span>
                <span className="text-[10px] font-bold tracking-[0.3em] text-primary">OUTLET & CAFE</span>
              </div>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Experience the finest artisanal coffee and gourmet delights in a cozy atmosphere designed for moments that matter.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61561280411467" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><FaFacebookF size={18} /></a>
              <a href="https://www.instagram.com/deelectaacafe/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><FaInstagram size={20} /></a>
              <a href="https://www.tiktok.com/@deelectaacafe?lang=en-GB" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><FaTiktok size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/menu" className="hover:text-primary transition-colors">Our Menu</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/reservations" className="hover:text-primary transition-colors">Book a Table</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Opening Hours</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between">
                <span>Everyday</span>
                <span>07:00 AM - 09:00 PM</span>
              </li>
              <li className="text-stone-500 text-xs mt-2 italic">
                * Open all holidays
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li>Kotugoda, Sri Lanka</li>
              <li>+94 76 396 1078</li>
              <li>deelectaacafe@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:row justify-between items-center text-xs text-stone-500">
          <p>© 2026 Deelectaa Cafe. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-300">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
