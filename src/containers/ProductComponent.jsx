import React from 'react';
import { useSelector } from 'react-redux';
import './Productcompontent.css'; // Import CSS file for styling
import {Link} from 'react-router-dom'

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="productt-card" key={id}>
        <Link to={`/product/${id}`}>
          <div className="cardd">
            <div className="image-container">
              <img src={image} alt={title} className="product-image" />
            </div>
            <div className="contentt">
              <div className="headerr">{title}</div>
              <div className="metai price">$ {price}</div>
              <div className="metai">{category}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <div className="product-grid">{renderList}</div>;
};

export default ProductComponent;

{/*<div class="ui card">
  <div class="image"><img src="/images/avatar/large/daniel.jpg"/></div>
  <div class="content">
    <div class="header">Daniel</div>
    <div class="meta">Joined in 2016</div>
    <div class="description">Daniel is a comedian living in Nashville.</div>
    </div>
    <div class="extra content"><a><i aria-hidden="true" class="user icon"></i>10 Friends</a></div>
    </div>*/}