import Item from "./Item";

const AppContainer = () => {
    return (
        <div className="products">
            <Item
            imagen = "https://grupoutopia.com.ar/storage/media/d694ea80d25b03aa7c001ed0de2b5b16ec537b64.jpeg" 
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

export default AppContainer;