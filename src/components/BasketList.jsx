import { BasketItem } from "./BasketItem"

function BasketList(props) {
    const {order = [], 
        handleBasketShow = Function.prototype, 
        removeFromBasket = Function.prototype,
        incrementQuantity,
        decrementQuantity,
        price} = props
    const regularPrice = price && price.regularPrice;
        
    const totalPrice = order.reduce((sum, el) => {
        return sum + regularPrice * el.quantity
    }, 0)

    return <ul className="collection basket-list">
        <li className="collection-item active">Cart</li>
        {
            order.length ? order.map(item => (
                <BasketItem 
                key={item.mainId} 
                removeFromBasket={removeFromBasket}
                incrementQuantity = {incrementQuantity}
                decrementQuantity = {decrementQuantity} 
                {...item} />
            )) : (<li className="collection-item">Cart empty</li>
        )}
        <li className="collection-item active">Total price: {totalPrice} V-Bucks
        </li>
        <li className="collection-item">
        <button className="btn btn-small">Order</button>
        </li>
        <i className="material-icons basket-close" onClick={handleBasketShow}>close</i> 
  </ul>
}

export {BasketList}