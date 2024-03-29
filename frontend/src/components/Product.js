import React from 'react'
import Rating from './Rating';
import { Link } from 'react-router-dom';

function Product(props) {
    const { product } = props;
    return (
        <div key={product._id} className="card">
                      <Link to={`/product/${product._id}`}>
                          <img className="medium" src={product.image} alt={product.name} />
                      </Link>
                      <div className="card-body">
                      <Link to={`/product/${product._id}`} style={{color: '#ff69b4'}}>
                              <h2>{product.name}</h2>
                          </Link>
                          <Rating
                            rating={product.rating} 
                            numReviews={product.numReviews}
                          ></Rating>
                          <div className="row">
                            <div className="price" style={{color: '#ff69b4'}}>${product.price}</div>
                            <div>
                                <Link to={`/seller/${product.seller._id}`} style={{color: '#ff69b4'}}>
                                    {product.seller.seller.name}
                                </Link>
                            </div>
                          </div>
                      </div>
                    </div>
    )
}

export default Product
