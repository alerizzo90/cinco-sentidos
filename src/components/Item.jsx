
const Item = (props) => {
    return (
    <div className="card">
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