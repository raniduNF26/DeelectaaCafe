import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Reservations from './pages/Reservations';
import AdminDashboard from './pages/Admin/Dashboard';
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Footer/Footer';
import Preloader from './components/Common/Preloader';
import WhatsAppButton from './components/Common/WhatsAppButton';

function App() {
  return (
    <Router>
      <Preloader />
      <div className="min-h-screen bg-neutral-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
