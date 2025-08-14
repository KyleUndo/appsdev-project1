function ProductCard(props) {
  return (
    <div className="product-card">
      <div className="buy-gif">
        <img src="./buy.gif" alt="" />
      </div>
      <img className="card-img" src={props.image} alt="alt" />
      <div className="description-container">
        <h2>{props.name}</h2>
        <div className="description">
          <p className="description">{props.description}</p>
        </div>
        <span>${props.price}</span>
        <div className="add-to-cart-button-container">
          <button onClick={() => console.log("Product name: ", props.name)}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
