import { useState, useEffect } from 'react';
import { getProductos } from '../services/api';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  
  // NUEVO: Estado para almacenar los productos del pedido
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const cargarDatos = async () => {
      const data = await getProductos();
      setProductos(data);
      setCargando(false);
    };
    cargarDatos();
  }, []);

  // NUEVO: Función interactiva para agregar productos al pedido
  const agregarAlCarrito = (producto) => {
    setCarrito((carritoActual) => {
      // Verificamos si el producto ya está en la tabla
      const existe = carritoActual.find(item => item.id === producto.id);
      
      if (existe) {
        // Si ya existe, le sumamos 1 a la cantidad
        return carritoActual.map(item => 
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      // Si es nuevo, lo agregamos con cantidad inicial de 1
      return [...carritoActual, { ...producto, cantidad: 1 }];
    });
  };

  // NUEVO: Función para vaciar o eliminar un ítem si se desea
  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter(item => item.id !== id));
  };

  // NUEVO: Calcular el total acumulado de la tabla
  const totalPedido = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);

  if (cargando) {
    return (
      <div className="flex justify-center items-center h-64 text-amber-800 font-bold">
        Cargando el aroma del café...
      </div>
    );
  }

  return (
    <div className="animate-fade-in space-y-16">
      {/* Sección de la Carta */}
      <section>
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-4">Nuestra Carta</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Seleccionamos los mejores granos y postres artesanales para que tu visita a <span className="font-bold text-amber-800">Café Aroma</span> sea inolvidable.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map(prod => (
            <ProductCard 
              key={prod.id} 
              producto={prod} 
              onAgregar={agregarAlCarrito} // Le pasamos la función interactiva
            />
          ))}
        </div>
      </section>

      {/* NUEVO: Sección Interactiva de la Tabla de Pedidos */}
      <section className="bg-white rounded-2xl shadow-xl border border-stone-200 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
          Resumen de tu Pedido actual
        </h2>

        {carrito.length === 0 ? (
          <p className="text-stone-500 italic text-center py-8 border-2 border-dashed border-stone-200 rounded-xl">
            Aún no has agregado ningún producto. ¡Selecciona tus cafés favoritos arriba!
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-200 text-stone-600 text-sm uppercase">
                  <th className="py-3 px-4">Producto</th>
                  <th className="py-3 px-4 text-center">Cantidad</th>
                  <th className="py-3 px-4 text-right">Precio Unitario</th>
                  <th className="py-3 px-4 text-right">Subtotal</th>
                  <th className="py-3 px-4 text-center">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-800">
                {carrito.map(item => (
                  <tr key={item.id} className="hover:bg-amber-50/50 transition-colors">
                    <td className="py-4 px-4 font-medium text-stone-950">{item.nombre}</td>
                    <td className="py-4 px-4 text-center font-mono">{item.cantidad}</td>
                    <td className="py-4 px-4 text-right font-mono">S/ {item.precio.toFixed(2)}</td>
                    <td className="py-4 px-4 text-right font-mono font-bold text-amber-900">
                      S/ {(item.precio * item.cantidad).toFixed(2)}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <button 
                        onClick={() => eliminarDelCarrito(item.id)}
                        className="text-red-600 hover:text-red-800 text-xs font-bold underline cursor-pointer"
                      >
                        Quitar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-stone-50 font-black text-stone-900 text-lg">
                  <td colSpan="3" className="py-4 px-4 text-right">TOTAL A PAGAR:</td>
                  <td className="py-4 px-4 text-right text-2xl text-amber-800 font-mono">
                    S/ {totalPedido.toFixed(2)}
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
            
            <div className="mt-6 flex justify-end">
              <button 
                onClick={() => { alert('¡Pedido enviado a cocina virtual!'); setCarrito([]); }}
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 py-3 rounded-xl shadow-md transition-colors cursor-pointer"
              >
                Confirmar Pedido
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
