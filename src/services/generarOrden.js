//Función auxiliar para generar la orden.
const ordenGenerada = (name, email, phone, cart, total) => {
  return {
    buyer: {
      name,
      email,
      phone,
    },
    items: cart,
    total,
    createdAt: new Date().toLocaleString(),
  };
};
export default ordenGenerada;
