import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createReview, detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { PRODUCT_REVIEW_CREATE_RESET } from '../constants/productConstants';
 
export default function ProductScreen(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const { id: productId } =params;
    const [qty, setQty] = useState(1);
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const productReviewCreate = useSelector((state) => state.productReviewCreate);
    const { 
        loading: loadingReviewCreate,
        error: errorReviewCreate,
        success: successReviewCreate,
    } = productReviewCreate;

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    useEffect(() => {
        if (successReviewCreate) {
            window.alert('Review Submitted Successfully');
            setRating('');
            setComment('');
            dispatch({ type: PRODUCT_REVIEW_CREATE_RESET });
        }
        dispatch(detailsProduct(productId));
    }, [dispatch, productId, successReviewCreate]);
    const addToCartHandler = () => {
        navigate(`/cart/${productId}?qty=${qty}`);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if (comment && rating) {
            dispatch(
                createReview(productId, { rating, comment, name: userInfo.name })
            );
            } else {
                alert('Please Enter Comment And Rating');
            }
    };
    return (
        <div>
            {loading ? (
            <LoadingBox></LoadingBox>
            ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
            ) : (
            <div>
            <Link to="/" style={{color: '#ff69b4'}}>Back To Home</Link>
            <div className="row top"style={{color: '#ff69b4'}} >
                <div className="col-2">
                    <img className="large" src={product.image} alt={product.name}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li> 
                            <Rating 
                                rating={product.rating} 
                                numReviews={product.numReviews}
                            ></Rating>
                        </li>
                        <li>Price: ${product.price}</li>
                        <li>
                            Description:
                            <p>{product.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1"></div>
                <div className="card card-body" style={{height: 320, width: 300}}>
                    <ul>
                        <li>
                            Seller{' '} 
                            <h2>
                                <Link to={`/seller/${product.seller._id}`} style={{color: '#ff69b4'}}>
                                    {product.seller.seller.name}
                                </Link>
                            </h2>
                            <Rating 
                                rating={product.seller.seller.rating}
                                numReviews={product.seller.seller.numReviews}
                            ></Rating>
                        </li>
                        <li>
                            <div className="row">
                                <div>Price</div>
                                <div className="price">${product.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>Status</div>
                                <div>
                                    {product.countInStock > 0 ? (
                                    <span className="success">In Stock</span>
                                    ) : (
                                    <span className="danger">Unavailable</span>
                                    )}
                                    </div>
                            </div>
                        </li>
                        {product.countInStock > 0 && (
                            <>
                                <li>
                                    <div className="row">
                                        <div>Qty</div>
                                    <div>
                                        <select style={{color: "#ff69b4"}}
                                        value={qty}
                                        onChange={(e) => setQty(e.target.value)}
                                        >
                                            {[...Array(product.countInStock).keys()].map(
                                              (x) => (
                                                <option key={x+1} value={x+1}>{x+1}</option>
                                              )
                                            )}
                                        </select>
                                    </div>
                            </div>
                        </li>
                        <li>
                            <button onClick={addToCartHandler} className="primary block" style={{color: '#ff69b4'}}>Add To Cart</button>
                        </li>
                        <div class="row center">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/sharer.php?..." target="blank" rel="noopener noreferrer">
                                        <i class="fa fa-facebook" style={{color: "#ff69b4", padding: 10}} alt="Share On Facebook"/>
                                    </a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="https://www.twitter.com/intent/tweet?..." target="blank" rel="noopener noreferrer">
                                        <i class="fa fa-twitter" style={{color: "#ff69b4", padding: 10}} alt="Share On Twitter"/>
                                    </a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="http://www.pinterest.com/pin/create/button/?url..." target="blank" rel="noopener noreferrer">
                                        <i class="fa fa-pinterest" style={{color: "#ff69b4", padding: 10}} alt="Share On Pinterest"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        </>
                        )}
                    </ul>
                </div>
            </div>
            <div style={{color: '#ff69b4'}}>
                <h2 id="reviews">Reviews</h2>
                {product.reviews.length === 0 && (
                    <MessageBox>There are no reviews</MessageBox>
                )}
                <ul>
                    {product.reviews.map((review) => (
                        <li key={review._id}>
                            <strong>{review.name}</strong>
                            <Rating rating={review.rating} caption=" "></Rating>
                            <p>{review.createdAt.substring(0, 10)}</p>
                            <p>{review.comment}</p>
                        </li>
                    ))}
                    <li>
                        {userInfo ? (
                            <form className="form" onSubmit={submitHandler}>
                                <div>
                                    <h2>Write A Customer Review</h2>
                                </div>
                                <div>
                                    <label htmlFor="rating">Rating</label>
                                    <select id="rating" value={rating} style={{color: '#ff69b4'}}
                                    onChange={(e) => setRating(e.target.value)}>
                                        <option value="">Select...</option>
                                        <option value="1">1-Poor</option>
                                        <option value="2">2-Fair</option>
                                        <option value="3">3-Good</option>
                                        <option value="4">4-Very Good</option>
                                        <option value="5">5-Excellent</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="comment">Comment</label>
                                    <textarea style={{color: "#ff69b4"}} id="comment" value={comment} onChange={(e) => setComment(e.target.value)}>
                                    </textarea>
                                </div>
                                <div>
                                    <label />
                                    <button className="primary" type="submit" style={{color: '#ff69b4'}}>
                                        Submit
                                    </button>
                                </div>
                                <div>
                                {loadingReviewCreate && <LoadingBox></LoadingBox>}
                                {errorReviewCreate && (
                                <MessageBox variant="danger">
                                    {errorReviewCreate}
                                </MessageBox>
                                )}
                                </div>
                            </form>
                        ) : (
                            
                            <MessageBox>
                                Please <Link to="/signin" style={{color: "#ff69b4"}}>Sign In</Link> To Write A Review
                            </MessageBox>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    )}
    </div>
    );
}
   
