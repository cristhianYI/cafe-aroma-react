import { Link, useLocation } from 'react-router-dom';

const NotFound = () => {
  // Hook para capturar la ruta que el usuario escribió mal
  const location = useLocation();

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      {/* Cifra 404 con estilo tipográfico fuerte */}
      <h1 className="text-9xl font-black text-stone-200 select-none leading-none">
        404
      </h1>
      
      <div className="relative -mt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4 uppercase tracking-tighter">
          Página no encontrada
        </h2>
        
        {/* Elemento Interactivo: Muestra la ruta actual con estilo de código */}
        <div className="bg-stone-100 border border-stone-200 rounded-md px-3 py-2 inline-block mb-8">
          <p className="text-stone-500 font-mono text-sm">
            Ruta solicitada: <span className="text-amber-800 font-bold">{location.pathname}</span>
          </p>
        </div>

        <p className="text-stone-600 max-w-md mx-auto mb-10 leading-relaxed">
          Lo sentimos, el recurso que estás buscando no está disponible. 
          Es posible que el enlace esté roto o que la página haya sido movida de lugar.
        </p>

        {/* Botones Interactivos con efectos de Hover */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="bg-amber-800 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-amber-900 hover:shadow-amber-200 transform hover:-translate-y-1 transition-all duration-300"
          >
            VOLVER AL INICIO
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="border-2 border-stone-800 text-stone-800 px-8 py-3 rounded-full font-bold hover:bg-stone-800 hover:text-white transition-all duration-300"
          >
            REGRESAR
          </button>
        </div>
      </div>

      {/* Decoración minimalista (Línea de diseño) */}
      <div className="mt-20 w-16 h-1 bg-amber-800 rounded-full"></div>
    </div>
  );
};

export default NotFound;
