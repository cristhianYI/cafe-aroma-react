import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-amber-900 text-amber-50 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo / Nombre de la marca */}
        <Link to="/" className="flex items-center space-x-2 text-2xl font-black tracking-wider hover:text-amber-200 transition-colors">
          
          <span>CAFÉ AROMA</span>
        </Link>

        {/* Enlaces de Navegación */}
        <div className="flex space-x-6 font-medium">
          <Link 
            to="/" 
            className="hover:text-amber-200 border-b-2 border-transparent hover:border-amber-200 pb-1 transition-all"
          >
            Inicio
          </Link>
          <Link 
            to="/contacto" 
            className="hover:text-amber-200 border-b-2 border-transparent hover:border-amber-200 pb-1 transition-all"
          >
            Contacto
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
