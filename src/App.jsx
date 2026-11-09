import React, { useState, useEffect } from 'react';

const eventsData = [
  {
    id: 1,
    name: 'Tech Innovators Conference',
    date: new Date(Date.now() + 86400000 * 5).toISOString(),
    venue: 'Silicon Valley Center',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60',
    description: 'Join industry leaders to discuss the future of AI, web development, and cloud computing. Network with top professionals.'
  },
  {
    id: 2,
    name: 'Global Music Festival',
    date: new Date(Date.now() + 86400000 * 12).toISOString(),
    venue: 'Central Park Arena',
    category: 'Entertainment',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&auto=format&fit=crop&q=60',
    description: 'Experience three days of non-stop music featuring international artists, food stalls, and amazing immersive art installations.'
  },
  {
    id: 3,
    name: 'Startup Pitch & Fund',
    date: new Date(Date.now() + 86400000 * 3).toISOString(),
    venue: 'Innovation Hub',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&auto=format&fit=crop&q=60',
    description: 'Watch early-stage startups pitch their groundbreaking ideas to top-tier venture capitalists and angel investors.'
  }
];

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });
  
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const filteredEvents = eventsData.filter(evt => {
    const matchSearch = evt.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === 'All' || evt.category === category;
    return matchSearch && matchCategory;
  });

  const handleRegister = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) errors.email = "Valid email is required";
    if (!formData.phone || formData.phone.length < 10) errors.phone = "Valid phone number required";
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      const registrations = JSON.parse(localStorage.getItem('event_registrations') || '[]');
      registrations.push({ ...formData, eventId: selectedEvent.id, eventName: selectedEvent.name });
      localStorage.setItem('event_registrations', JSON.stringify(registrations));
      setIsRegistered(true);
      setTimeout(() => {
        setIsRegistered(false);
        setSelectedEvent(null);
        setFormData({ name: '', email: '', phone: '' });
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <nav className="relative z-10 p-6 flex justify-between items-center max-w-7xl mx-auto glassmorphism mt-4 rounded-2xl">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300">
          EventHub
        </h1>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <section className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Discover & Experience <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-400">Amazing Events</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Book your tickets for the best upcoming tech conferences, music festivals, and business summits happening around you.
          </p>
        </section>

        <section className="mb-10 flex flex-col md:flex-row gap-4 justify-between items-center">
          <input 
            type="text" 
            placeholder="Search events..." 
            className="w-full md:w-1/3 px-6 py-3 rounded-full glassmorphism focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2">
            {['All', 'Technology', 'Entertainment', 'Business'].map(cat => (
              <button 
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition ${category === cat ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30' : 'glassmorphism hover:bg-gray-100 dark:hover:bg-gray-800'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map(evt => (
            <div key={evt.id} className="glassmorphism rounded-2xl overflow-hidden group hover:-translate-y-2 transition duration-300">
              <div className="h-48 overflow-hidden relative">
                <img src={evt.image} alt={evt.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute top-4 right-4 bg-white/80 dark:bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-sm font-semibold">
                  {evt.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{evt.name}</h3>
                <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-2">{new Date(evt.date).toDateString()} • {evt.venue}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{evt.description}</p>
                <button 
                  onClick={() => setSelectedEvent(evt)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold hover:shadow-lg hover:shadow-purple-500/30 transition transform hover:-translate-y-1"
                >
                  View Details & Register
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="glassmorphism max-w-lg w-full rounded-3xl p-8 relative animate-fade-in-up">
            <button 
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white text-xl"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedEvent.name}</h2>
            <p className="text-sm text-purple-500 font-medium mb-4">{new Date(selectedEvent.date).toDateString()} | {selectedEvent.venue}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{selectedEvent.description}</p>
            
            {isRegistered ? (
              <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl text-center font-bold">
                🎉 Registration Successful! See you there!
              </div>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                </div>
                <div>
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
                </div>
                <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-purple-500/30 transition transform hover:-translate-y-1">
                  Confirm Registration
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
