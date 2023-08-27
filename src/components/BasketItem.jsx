function BasketItem(props){
    const {
        mainId,
        displayName,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incrementQuantity = Function.prototype,
        decrementQuantity = Function.prototype
    } = props

    const regularPrice = price && price.regularPrice;

    return (
    <li className="collection-item">
        {displayName} <i className="material-icons basket-quantity" onClick={() => decrementQuantity(mainId)}>remove</i> x
        {quantity} <i className="material-icons basket-quantity" onClick={() => incrementQuantity(mainId)}>add</i>  = {regularPrice * quantity}
        <span className="secondary-content" onClick={() => removeFromBasket(mainId)}>
            <i className="material-icons basket-delete">close</i>
        </span>
    </li>
    )
}

export {BasketItem}