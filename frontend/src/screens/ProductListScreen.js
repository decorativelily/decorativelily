import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, deleteProduct, listProducts } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_CREATE_RESET, PRODUCT_DELETE_RESET } from '../constants/productConstants';
import { useLocation } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';

export default function ProductListScreen(props) {
  const {pathname} = useLocation();
  const { pageNumber = 1 } = useParams();

  const sellerMode = pathname.indexOf('/seller')>=0;
  const navigate = useNavigate();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const productCreate = useSelector((state) => state.productCreate);
  const {
      loading: loadingCreate,
      error: errorCreate,
      success: successCreate,
      product: createdProduct,
  } = productCreate;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
      if (successCreate) {
          dispatch({type: PRODUCT_CREATE_RESET});
          navigate(`/product/${createdProduct._id}/edit`);
      }
      if(successDelete) {
        dispatch({type: PRODUCT_DELETE_RESET})
      }
    dispatch(
      listProducts({ seller: sellerMode ? userInfo._id : '', pageNumber }));
  }, [
    createdProduct, 
    dispatch, 
    props.history, 
    sellerMode,
    successCreate, 
    successDelete,
    userInfo._id,
    pageNumber,
  ]);
 
  const deleteHandler = (product) => {
    if(window.confirm('Are you sure you want to delete?')) {
      dispatch(deleteProduct(product._id))
    }
  };
  const createHandler = () => {
      dispatch(createProduct());
  }
  return (
    <div>
        <div className="row" style={{color: "#ff69b4"}}>
        <h1>Products</h1>
        <button type="button" className="primary" onClick={createHandler} style={{color: "#ff69b4"}}>
            Create Product
        </button>
        </div> 

        {loadingDelete && <LoadingBox></LoadingBox>}
        {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}

        {loadingCreate && <LoadingBox></LoadingBox>}
        {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
        <table className="table"style={{color: "#ff69b4"}} >
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <button style={{color: "#ff69b4"}}
                    type="button"
                    className="small"
                    onClick={() =>
                      navigate(`/product/${product._id}/edit`)
                    }
                  >
                    Edit
                  </button>
                  <button style={{color: "#ff69b4"}}
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(product)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
         <div className="row center pagination">
         {[...Array(pages).keys()].map((x) => (
           <Link style={{color: "#ff69b4"}}
             className={x + 1 === page ? 'active' : ''}
             key={x + 1}
             to={`/productlist/pageNumber/${x + 1}`}
           >
             {x + 1}
           </Link>
      ))}
    </div>
    </>
      )}
      </div>
  );
}