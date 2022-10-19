import Item from "./Item";

const ItemListContainer = () => {
    return (
        <div className="products">
            <Item
            imagen = "https://insumosoeste.com.ar/storage/media/f613249d158a46a11628e9c1391b554d226e75ef.jpeg" 
            precio = "$500"   
            nombre = "Sahumerios"
            categoria = "Tienda Holistica"
            />

            <Item
            imagen = "https://www.regalosparaminovio-paraminovia.com/wp-content/uploads/2020/04/cascada-de-humo.jpg" 
            precio = "$800"   
            nombre = "Cascada de humo"
            categoria = "Tienda Holistica"
            />
        </div>

        
    )
}

export default ItemListContainer;