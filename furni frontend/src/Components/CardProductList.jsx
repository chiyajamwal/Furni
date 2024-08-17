import React from "react";

function CardProductList({one}) {
  return (
    <>
      <div className="col-12 col-md-4 col-lg-3 mb-5">
        <a className="product-item" href="#">
          <img
            src={one["productImage"]}
            className="img-fluid product-thumbnail"
          />
          <h3 className="product-title">{one["productName"]}</h3>
          <strong className="product-price">{one["productPrice"]}</strong>
          <span className="icon-cross">
            <img src="images/cross.svg" className="img-fluid" />
          </span>
        </a>
      </div>
    </>
  );
}

export default CardProductList;
