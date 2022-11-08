import { useNavigate } from "react-router-dom";
const Item = (props) => {
    const navigate = useNavigate()
    return (
    <div className="card" onClick={()=>navigate (`/product/${props.id}`)}>
        <div className="card__top">
            <img src={props.imagen} alt="accesorios" />
            <p className="card__price">{props.precio}</p>
        </div>
        <div className="card__content">
            <p className="card__name">{props.nombre}</p>
            <p className="card__category">{props.categoria}</p>
        </div>
    </div>
    )
}
export default Item;