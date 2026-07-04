
const API_URL = '/db.json'; 

export const getProductos = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Error al obtener los productos de Café Aroma');
    }
    const data = await response.json();
    return data.productos || [];
  } catch (error) {
    console.error('Error en el servicio Fetch:', error);
    return [];
  }
};
