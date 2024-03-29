import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
//import { listTopSellers } from '../actions/userActions';
import { Link } from 'react-router-dom';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    /*const userTopSellersList = useSelector((state) => state.userTopSellersList);
    const { 
        loading: loadingSellers, 
        error: errorSellers, 
        users: sellers, 
    } = userTopSellersList;*/

    useEffect(() => {
        dispatch(listProducts({}));
        //dispatch(listTopSellers());
    }, [dispatch]);
    return (
        <div>
            <h2></h2>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
              <>
              {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
              <Carousel autoPlay infiniteLoop interval={5000} showArrows showIndicators={false} showStatus={false} showThumbs={false}>
                  {products.map((product) => (
                      <div key={product._id}>
                          <Link to={`/product/${product._id}`} style={{color: "black"}}>
                              <img src={product.image} alt={product.name} />
                              <p className="legend">{product.name}</p>
                          </Link>
                      </div>
                  ))}
              </Carousel>
              </>
            )}
            <div style={{paddingTop: 100}}>
              {loading ? (
                <LoadingBox></LoadingBox>
              ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
              ) : (
                <div className="row center">
                 {products.map((product) => (
                   <Product key={product._id} product={product}></Product>
                ))}
            </div>
        )}
            </div>
            <div class="row center" style={{}}>
            <div class="row center"style={{marginTop: 100}} >
                <a href="https://www.facebook.com/decorativelily" class="btn social-icon button" data-abc="true">
                    <i style={{color: "#C13584", padding: 10}} class="fa fa-facebook btn-round fa-lg"></i>
                </a>
                <a href="https://www.instagram.com/decorativelily" class="btn social-icon button" data-abc="true">
                    <i style={{color: "#C13584", padding: 10}} class="fa fa-instagram btn-round fa-lg"></i>
                </a>
            </div>
            </div>
            <div style={{textAlign: "center", color: "#ff69b4", marginTop: 50}}>
                <ul>
                    <a href="https://mail.google.com/mail/u/?authuser=user@gmail.com" style={{color: "#ff69b4"}}>decorativelily@gmail.com</a>
                </ul>
            </div>
        </div>
    );
}

/*
 <div>
            <h2>Top Sellers</h2>
            {loadingSellers ? (
            <LoadingBox></LoadingBox>
            ) : errorSellers ? (
            <MessageBox variant="danger">{errorSellers}</MessageBox>
            ) : (
            <>
            {sellers.length === 0 && <MessageBox>No Sellers Found</MessageBox>}
            <Carousel showArrows autoPlay showThumbs={false}>
                {sellers.map((seller) => (
                    <div key={seller._id}>
                        <Link to={`/seller/${seller._id}`}>
                            <img src={seller.seller.logo} alt={seller.seller.name} />
                            <p className="legend">{seller.seller.name}</p>
                        </Link>
                    </div>
                ))}
            </Carousel>
            </>
            )}
            <h2>Featured Products</h2>
            {loading ? (
            <LoadingBox></LoadingBox>
            ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
            ) : (
            <>
            {products.length === 0 && <MessageBox>No Products Found</MessageBox>}
            <div className="row center">
                {products.map((product) => (
                    <Product key={product._id} product={product}></Product>
                ))}
            </div>
            </>
            )}
*/
