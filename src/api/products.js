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
    } ,   
    {
      imagen : "https://i0.wp.com/www.puntoled.com.ar/wp-content/uploads/2021/01/HUMIDIFICADOR-300-Ml.png?fit=1000%2C1000&ssl=1", 
      precio : "$2000",  
      nombre : "Humidificador Simil Madera",
      categoria : "Deco",
      id: 3,
    },
    {
      imagen : "https://d3ugyf2ht6aenh.cloudfront.net/stores/741/031/products/tazas1-8e687a97c5240396b516228170144940-1024-1024.jpg", 
      precio : "$2000",  
      nombre : "Tazas",
      categoria : "Regaleria",
      id: 4,
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