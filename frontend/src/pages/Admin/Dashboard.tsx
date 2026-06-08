import { useState, useEffect } from 'react';
import { FiUsers, FiCoffee, FiBookOpen, FiSettings, FiCheck, FiX, FiPlus } from 'react-icons/fi';
import axios from 'axios';

interface Reservation {
  _id: string;
  name: string;
  date: string;
  time: string;
  guests: number;
  status: string;
}

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('reservations');
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch reservations from backend
  const fetchReservations = async () => {
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';
      const response = await axios.get(`${API_URL}/reservations`);
      setReservations(response.data);
    } catch (error) {
      console.error('Error fetching reservations:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'reservations') {
      fetchReservations();
    }
  }, [activeTab]);

  // Handle status update
  const handleUpdateStatus = async (id: string, status: string) => {
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';
      await axios.patch(`${API_URL}/reservations/${id}/status`, { status });
      // Update local state to reflect change instantly
      setReservations(prev => 
        prev.map(res => res._id === id ? { ...res, status } : res)
      );
    } catch (error) {
      console.error(`Error updating reservation ${id}:`, error);
      alert('Failed to update reservation status.');
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-stone-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-stone-900 text-white p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-10 tracking-tighter text-amber-500">ADMIN PANEL</h2>
        <nav className="space-y-4">
          <button 
            onClick={() => setActiveTab('reservations')}
            className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all ${activeTab === 'reservations' ? 'bg-amber-600' : 'hover:bg-stone-800'}`}
          >
            <FiUsers /> <span>Reservations</span>
          </button>
          <button 
            onClick={() => setActiveTab('menu')}
            className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all ${activeTab === 'menu' ? 'bg-amber-600' : 'hover:bg-stone-800'}`}
          >
            <FiCoffee /> <span>Menu Management</span>
          </button>
          <button 
            onClick={() => setActiveTab('blog')}
            className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all ${activeTab === 'blog' ? 'bg-amber-600' : 'hover:bg-stone-800'}`}
          >
            <FiBookOpen /> <span>Blog/CMS</span>
          </button>
          <button className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-stone-800 mt-auto">
            <FiSettings /> <span>Settings</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-stone-900 capitalize">{activeTab}</h1>
          <button className="bg-stone-900 text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-amber-600 transition-all">
            <FiPlus /> <span>Add New</span>
          </button>
        </header>

        {activeTab === 'reservations' && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-stone-200">
            {loading ? (
              <div className="p-8 text-center text-stone-500">Loading reservations...</div>
            ) : reservations.length === 0 ? (
              <div className="p-8 text-center text-stone-500">No reservations found.</div>
            ) : (
              <table className="w-full text-left">
                <thead className="bg-stone-50 border-b border-stone-200">
                  <tr>
                    <th className="p-4 font-semibold text-stone-600">Guest</th>
                    <th className="p-4 font-semibold text-stone-600">Date/Time</th>
                    <th className="p-4 font-semibold text-stone-600">Guests</th>
                    <th className="p-4 font-semibold text-stone-600">Status</th>
                    <th className="p-4 font-semibold text-stone-600 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map(res => (
                    <tr key={res._id} className="border-b border-stone-100 hover:bg-stone-50 transition-colors">
                      <td className="p-4 font-medium text-stone-900">{res.name}</td>
                      <td className="p-4 text-stone-600">
                        {new Date(res.date).toLocaleDateString()} at {res.time}
                      </td>
                      <td className="p-4 text-stone-600">{res.guests}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                          res.status === 'confirmed' ? 'bg-green-100 text-green-700' : 
                          res.status === 'rejected' ? 'bg-red-100 text-red-700' :
                          'bg-amber-100 text-amber-700'
                        }`}>
                          {res.status}
                        </span>
                      </td>
                      <td className="p-4 text-right space-x-2">
                        {res.status === 'pending' && (
                          <>
                            <button 
                              onClick={() => handleUpdateStatus(res._id, 'confirmed')}
                              className="p-2 text-green-600 hover:bg-green-50 rounded-lg title='Approve'"
                            >
                              <FiCheck />
                            </button>
                            <button 
                              onClick={() => handleUpdateStatus(res._id, 'rejected')}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg title='Reject'"
                            >
                              <FiX />
                            </button>
                          </>
                        )}
                        {res.status !== 'pending' && (
                          <span className="text-stone-400 text-sm italic">Processed</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {activeTab !== 'reservations' && (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-stone-300">
            <p className="text-stone-400">Section under development...</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
