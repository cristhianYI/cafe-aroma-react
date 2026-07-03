import { useState } from 'react';

const Contacto = () => {
  // Estados para manejar los campos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [enviado, setEnviado] = useState(false);

  // Manejador de cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí simularíamos el envío a un backend
    console.log('Datos de contacto enviados:', formData);
    setEnviado(true);
    
    // Limpiamos el formulario
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl border border-amber-100 overflow-hidden animate-fade-in my-8">
      {/* Encabezado del Formulario */}
      <div className="bg-amber-800 text-amber-50 p-6 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight">Contáctanos</h2>
        <p className="text-amber-200 text-sm mt-2">
          ¿Tienes dudas, sugerencias o quieres reservar para un evento? ¡Escríbenos!
        </p>
      </div>

      {/* Contenido / Formulario */}
      <div className="p-8">
        {enviado ? (
          // Mensaje de éxito dinámico con Hooks
          <div className="text-center py-6 animate-scale-up">
            <div className="text-5xl mb-4">-</div>
            <h3 className="text-2xl font-bold text-stone-800 mb-2">¡Mensaje Recibido!</h3>
            <p className="text-stone-600 mb-6">
              Gracias por escribirle a <span className="font-semibold text-amber-800">Café Aroma</span>. Nuestro equipo te responderá al correo electrónico lo antes posible.
            </p>
            <button 
              onClick={() => setEnviado(false)}
              className="bg-amber-800 hover:bg-amber-900 text-white font-medium px-6 py-2 rounded-lg transition-colors"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          // Formulario activo
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2">Nombre Completo</label>
              <input 
                type="text" 
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej. Nombre apellido"
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2">Correo Electrónico</label>
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="correo@example.com"
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2">Tu Mensaje</label>
              <textarea 
                name="mensaje"
                rows="4"
                required
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Cuéntanos en qué podemos ayudarte..."
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-amber-800 hover:bg-amber-900 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Enviar Mensaje Mágico
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contacto;
