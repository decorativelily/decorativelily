import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import SellerRoute from './components/SellerRoute';
import SellerScreen from './screens/SellerScreen';
import SearchBox from './components/SearchBox';
import SearchScreen from './screens/SearchScreen';
import { listProductCategories } from './actions/productActions';
import LoadingBox from './components/LoadingBox';
import MessageBox from './components/MessageBox';
import MapScreen from './screens/MapScreen';
import AdminRoute from './components/AdminRoute';
import DashboardScreen from './screens/DashboardScreen';
import SupportScreen from './screens/SupportScreen';
import ChatBox from './components/ChatBox';

function App() {

const cart = useSelector(state => state.cart);
const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
const { cartItems } = cart;
const userSignin = useSelector((state) => state.userSignin);
const { userInfo } = userSignin;
const dispatch = useDispatch();
const signoutHandler = () => {
  dispatch(signout());
}
const productCategoryList = useSelector((state) => state.productCategoryList);
const {
  loading: loadingCategories,
  error: errorCategories,
  categories,
} = productCategoryList;
useEffect(() => {
  dispatch(listProductCategories());
}, [dispatch]);
  return (
    <BrowserRouter>
    <div className="grid-container">
            <header className="row">
                <div>
                  <button 
                  type="button"
                  className="open-sidebar"
                  onClick={() => setSidebarIsOpen(true)}
                  >
                    <i className="fa fa-bars" style={{color: "white"}}></i>
                  </button>
                    <Link className="brand" to="/" style={{color: "white"}}>
                      Decorativelily
                    </Link>
                </div>
                <div>
                  <SearchBox />
                </div>
                <div>
                    <Link to="/cart" style={{color: "white"}}>
                      Cart
                      {cartItems.length > 0 && (
                        <span className="badge">{cartItems.length}</span>
                      )}
                    </Link>
                    {userInfo ? (
                      <div className="dropdown">
                      <Link to="#" style={{color: "white"}}>
                        {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                      </Link>
                      <ul className="dropdown-content">
                        <li>
                          <Link to="/profile" style={{color: "#ff69b4"}}>User Profile</Link>
                        </li>
                        <li>
                          <Link to="/orderhistory" style={{color: "#ff69b4"}}>Order History</Link>
                        </li>
                        <div style={{paddingTop: 10}}>
                        <Link to="#signout" onClick={signoutHandler} style={{color: "#ff69b4"}}>
                          Signout 
                        </Link>
                        </div>
                        </ul>
                      </div>
                      ) : (
                      <Link to="/signin" style={{color: "white"}}>Sign In</Link>
                      )}
                      {userInfo && userInfo.isSeller && (
                       <div className="dropdown">
                       <Link to="#admin" style={{color: "white"}}>
                         Seller <i className="fa fa-caret-down"></i>
                       </Link>
                       <ul className="dropdown-content">
                         <li>
                           <Link to="/productlist/seller" style={{color: "#ff69b4"}}>Products</Link>
                         </li>
                         <li>
                           <Link to="/orderlist/seller" style={{color: "#ff69b4"}}>Orders</Link>
                         </li>
                       </ul>
                     </div>
                      )}
                      {userInfo && userInfo.isAdmin && (
                        <div className="dropdown">
                          <Link to="#admin"style={{color: "white"}} >
                            Admin <i className="fa fa-caret-down"></i>
                          </Link>
                          <ul className="dropdown-content">
                            <li>
                              <Link to="/dashboard" style={{color: "#ff69b4"}}>Dashboard</Link>
                            </li>
                            <li>
                              <Link to="/productlist" style={{color: "#ff69b4"}}>Products</Link>
                            </li>
                            <li>
                              <Link to="/orderlist" style={{color: "#ff69b4"}}>Orders</Link>
                            </li>
                            <li>
                              <Link to="/userlist" style={{color: "#ff69b4"}}>Users</Link>
                            </li>
                            <li>
                              <Link to="/support" style={{color: "#ff69b4"}}>Support</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                </div>
            </header>
            <aside className={sidebarIsOpen ? 'open' : ''}>
          <ul className="categories">
            <li style={{color: "#ff69b4"}}>
              <strong>Menu</strong>
              <button style={{color: "#ff69b4"}}
                onClick={() => setSidebarIsOpen(false)}
                className="close-sidebar"
                type="button"
              >
                <i className="fa fa-close"></i>
              </button>
            </li>
            {loadingCategories ? (
              <LoadingBox></LoadingBox>
            ) : errorCategories ? (
              <MessageBox variant="danger">{errorCategories}</MessageBox>
            ) : (
              categories.map((c) => (
                <li key={c}>
                  <Link style={{color: "#ff69b4"}}
                    to={`/search/category/${c}`}
                    onClick={() => setSidebarIsOpen(false)}
                  >
                    {c}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </aside>
            <main>
              <Routes>
              <Route path="/seller/:id" element={<SellerScreen />}></Route>
              <Route path="/cart" element={<CartScreen />}></Route>
              <Route path="/cart/:id" element={<CartScreen />}></Route>
              <Route path="/product/:id" element={<ProductScreen />} exact></Route>
              <Route path="/product/:id/edit" element={<ProductEditScreen />} exact></Route>
              <Route path="/signin" element={<SigninScreen />}></Route>
              <Route path="/register" element={<RegisterScreen />}></Route>
              <Route path="/shipping" element={<ShippingAddressScreen />}></Route>
              <Route path="/payment" element={<PaymentMethodScreen />}></Route>
              <Route path="/placeorder" element={<PlaceOrderScreen />}></Route>
              <Route path="/order" element={<OrderScreen />}></Route>
              <Route path="/order/:id" element={<OrderScreen />}></Route>
              <Route path="/orderhistory" element={<OrderHistoryScreen />}></Route>
              <Route path="/search/name/:name?" element={<SearchScreen />} exact></Route>
              <Route path="/search/category/:category" element={<SearchScreen />} exact></Route>
              <Route path="/search/category/:category/name/:name" element={<SearchScreen />} exact></Route>
              <Route path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber" element={<SearchScreen />} exact></Route>
              <Route path="/profile" element={<PrivateRoute><ProfileScreen /></PrivateRoute>} />
              <Route path="/productlist" element={<PrivateRoute><ProductListScreen /></PrivateRoute>} />
              <Route path="/productlist/pageNumber/:pageNumber" element={<AdminRoute><ProductListScreen /></AdminRoute>} />
              <Route path="/orderlist" element={<PrivateRoute><OrderListScreen /></PrivateRoute>} />
              <Route path="/userlist" element={<PrivateRoute><UserListScreen /></PrivateRoute>} />
              <Route path="/user/:id/edit" element={<PrivateRoute><UserEditScreen /></PrivateRoute>} />
              <Route path="/productlist/seller" element={<SellerRoute><ProductListScreen /></SellerRoute>} exact></Route>
              <Route path="/orderlist/seller" element={<SellerRoute><OrderListScreen /></SellerRoute>} exact></Route>
              <Route path="/dashboard" element={<AdminRoute><DashboardScreen /></AdminRoute>} />
              <Route path="/support" element={<AdminRoute><SupportScreen /></AdminRoute>} />
              <Route path="/" element={<HomeScreen />} exact></Route>
              </Routes>
            </main>
            {userInfo && !userInfo.isAdmin && <ChatBox userInfo={userInfo} />}
            <footer className="row center" style={{color: "white"}}>&#169; 2022 Decorativelily LLC. All rights reserved.</footer>
        </div>
        </BrowserRouter>
  );
}

export default App;

/*
<Route path="/map" element={<PrivateRoute><MapScreen /></PrivateRoute>} /> 
*/