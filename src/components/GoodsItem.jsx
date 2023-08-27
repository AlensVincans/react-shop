function GoodsItem(props) {
  const{
    mainId,
    displayName,
    displayDescription,
    price,
    displayAssets,
    addToBasket = Function.prototype
    } = props; 

    const full_background = displayAssets && displayAssets[0] && displayAssets[0].full_background
    const regularPrice = price && price.regularPrice;

    return ( 
      <div className="card">
        <div className="card-image">
          <span className="card-title">{displayName}</span>
          <img src={full_background} alt={displayName}/>
        </div>
        <div className="card-content"> 
          <p>{displayDescription}</p>
        </div>
        <div className="card-action">
          <button className="btn" onClick={() => addToBasket({
          mainId,
          displayName,
          price
        }
        )}>Buy</button>
          <span className="right" style={{fontSize: '1.8rem'}}>{regularPrice} V-Bucks</span>
        </div> 
      </div>
    )
}

export { GoodsItem }