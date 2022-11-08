const products = [
    {
        imagen : "https://grupoutopia.com.ar/storage/media/d694ea80d25b03aa7c001ed0de2b5b16ec537b64.jpeg" ,
        precio : "$500",  
        nombre : "Sahumerios",
        categoria : "TiendaHolistica",
        id: 1,
    },
    {
        imagen : "https://www.regalosparaminovio-paraminovia.com/wp-content/uploads/2020/04/cascada-de-humo.jpg", 
        precio : "$800",  
        nombre : "Cascada de humo",
        categoria : "TiendaHolistica",
        id: 2,
    }


];
export const getProducts = (categoria) =>
  new Promise((res, rej) => {
    const response = categoria
      ? products.filter((p) => p.categoria === categoria)
      : products;
    setTimeout(() => {
      res(response);
    }, 1500);
  });

export const getProduct = (productId) =>
  new Promise((res, rej) => {
    const response = products.find((product) => product.id === +productId);
    setTimeout(() => {
      res(response);
    }, 1500);
  });