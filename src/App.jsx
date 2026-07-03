import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-amber-50 text-stone-800">
        
        {/* Inyectamos el Navbar Global */}
        <Navbar />
        
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer sencillo */}
        <footer className="bg-stone-900 text-stone-400 text-center py-4 text-sm border-t border-stone-800">
          &copy; {new Date().getFullYear()} Café Aroma. Todos los derechos reservados.
        </footer>
      </div>
    </Router>
  );
}

export default App;
