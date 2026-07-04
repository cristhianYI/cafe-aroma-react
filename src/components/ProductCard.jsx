const ProductCard = ({ producto, onAgregar }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-amber-100 flex flex-col">
      <div className="h-48 w-full overflow-hidden">
        <img 
          src={producto.imagen} 
          alt={producto.nombre} 
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-stone-800">{producto.nombre}</h3>
          <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase">
            {producto.categoria}
          </span>
        </div>
        
        <p className="text-stone-500 text-sm mb-4">Disfruta del aroma único de nuestro {producto.nombre.toLowerCase()} recién preparado.</p>
        
        <div className="mt-auto flex justify-between items-center">
          <span className="text-2xl font-black text-amber-700">S/ {producto.precio.toFixed(2)}</span>
          <button 
            onClick={() => onAgregar(producto)}
            className="bg-amber-800 hover:bg-amber-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer"
          >
            Agregar
          </button>
        </div>
        
        <p className="text-[10px] text-stone-400 mt-3 italic">Stock disponible: {producto.stock} unidades</p>
      </div>
    </div>
  );
};

export default ProductCard;
