import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';
import Rating from '../components/Rating';
import { prices, ratings } from '../utils';
import { useNavigate } from 'react-router-dom';

export default function SearchScreen(props) {
  const navigate = useNavigate();
  const { 
      name = 'all', 
      category = 'all', 
      min = 0, 
      max = 0,
      rating = 0,
      order = 'newest',
      pageNumber = 1,
    } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
  dispatch(
    listProducts({
      pageNumber,
      name: name !== 'all' ? name : '',
      category: category !== 'all' ? category : '',
      min,
      max,
      rating,
      order,
    })
  );
}, [category, dispatch, max, min, name, order, rating, pageNumber]);

const getFilterUrl = (filter) => {
  const filterPage = filter.page || pageNumber;
  const filterCategory = filter.category || category;
  const filterName = filter.name || name;
  const filterRating = filter.rating || rating;
  const sortOrder = filter.order || order;
  const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
  const filterMax = filter.max ? filter.max : filter.max === 0 ? 0 : max;
  return `/search/category/${filterCategory}/name/${filterName}/min/${filterMin}/max/${filterMax}/rating/${filterRating}/order/${sortOrder}`;
    };
  return (
    <div>
      <div className="row">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div style={{color: "#ff69b4"}}>{products.length} Results</div>
        )}
      </div>
      <div style={{color: "#ff69b4"}}>
          Sort by {''}
          <select style={{color: "#ff69b4"}}
            value={order}
            onChange={(e) => {
                navigate(getFilterUrl({ order: e.target.value }));
            }}
            >
                <option value="newest">Newest Arrivals</option>
                <option value="lowest">Price: Low To High</option>
                <option value="highest">Price: High To Low</option>
                <option value="toprated">Avg. Customer Reviews</option>
            </select>
      </div>
      <div className="row top">
        <div className="col-1" style={{color: "#ff69b4"}}>
          <h3>Department</h3>
          <div>
          {loadingCategories ? (
            <LoadingBox></LoadingBox>
          ) : errorCategories ? (
            <MessageBox variant="danger">{errorCategories}</MessageBox>
          ) : (
            <ul>
                <li>
                <Link style={{color: "#ff69b4"}}
                    className={'all' === category ? 'active' : ''}
                    to={getFilterUrl({ category: 'all' })}
                  >
                   Any
                  </Link> 
                </li>
                <div>
              {categories.map((c) => (
                <li key={c} >
                  <div>
                  <Link
                    className={c === category ? 'active' : ''}
                    to={getFilterUrl({ category: c })}
                  >
                    {c}
                  </Link>
                  </div>
                </li>
              ))}
              </div>
            </ul>
          )}
        </div>
        <div style={{color: "#ff69b4"}}>
            <h3>Price</h3>
            <ul>
                {prices.map((p) => (
                    <li key={p.name}>
                        <Link style={{color: "#ff69b4"}}
                            to={getFilterUrl({ min: p.min, max: p.max})}
                            className={
                                `${p.min}-${p.max}` === `${min}-${max}` ? 'active' : ''
                            }
                            >
                                {p.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        <div style={{color: "#ff69b4"}}>
            <h3>Avg. Customer Review</h3>
            <ul>
                {ratings.map((r) => (
                    <li key={r.name}>
                        <Link
                            to={getFilterUrl({ rating: r.rating })}
                            className={`${r.rating}` === `${rating}` ? 'active' : ''}
                            >
                            <Rating caption={'& Up'} rating={r.rating}></Rating>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        </div>
        <div className="col-3">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {products.length === 0 && (
                <MessageBox>No Product Found</MessageBox>
              )}
              <div className="row center">
                {products.map((product) => (
                  <Product key={product._id} product={product}></Product>
                ))}
              </div>
              <div className="row center pagination">
                {[...Array(pages).keys()].map((x) => (
                  <Link style={{color: "#ff69b4"}}
                    className={x + 1 === page ? 'active' : ''}
                    key={x + 1}
                    to={getFilterUrl({ page: x + 1 })}
                  >
                    {x + 1}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}