import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useNavigate } from 'react-router-dom';
import { deliverOrder, detailsOrder, payOrder } from '../actions/orderActions';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { ORDER_DELIVER_RESET, ORDER_PAY_RESET } from '../constants/orderConstants';
import { toast } from 'react-toastify';
import { getError } from '../utils';

export default function OrderScreen(props) {
    const navigate = useNavigate();
    const params = useParams();
    const { id: orderId } = params;
    const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();
    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, loading, error } = orderDetails;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const orderPay = useSelector((state) => state.orderPay);
    const { 
        loading: loadingPay,
        error: errorPay, 
        success: successPay, 
    } = orderPay;
    const orderDeliver = useSelector((state) => state.orderDeliver);
    const { 
        loading: loadingDeliver,
        error: errorDeliver, 
        success: successDeliver, 
    } = orderDeliver;
    const dispatch = useDispatch();

    function createOrder(data, actions) {
        return actions.order
          .create({
            purchase_units: [
              {
                amount: { value: order.totalPrice },
              },
            ],
          })
          .then((orderID) => {
            return orderID;
          });
      }
    
      function onApprove(data, actions) {
        return actions.order.capture().then(async function (details) {
          try {
            dispatch({ type: 'PAY_REQUEST' });
            const { data } = await axios.put(
              `/api/orders/${order._id}/pay`,
              details,
              {
                headers: { authorization: `Bearer ${userInfo.token}` },
              }
            );
            dispatch({ type: 'PAY_SUCCESS', payload: data });
            toast.success('Order is paid');
          } catch (err) {
            dispatch({ type: 'PAY_FAIL', payload: getError(err) });
            toast.error(getError(err));
          }
        });
      }
      function onError(err) {
        toast.error(getError(err));
      }

    useEffect(() => {
        if (!order || successPay || successDeliver || (order && order._id !== orderId)) {
            dispatch({ type: ORDER_PAY_RESET });
            dispatch({ type: ORDER_DELIVER_RESET });
            dispatch(detailsOrder(orderId));
        } else {
            if (!order.isPaid) {
                const loadPaypalScript = async () => {
                    const { data: clientId } = await axios.get('/api/keys/paypal', {
                      headers: { authorization: `Bearer ${userInfo.token}` },
                    });
                    paypalDispatch({
                      type: 'resetOptions',
                      value: {
                        'client-id': clientId,
                        currency: 'USD',
                      },
                    });
                    paypalDispatch({ type: 'setLoadingStatus', value: 'pending' });
                  };
                  loadPaypalScript();
            }
        }
    }, [dispatch, order, orderId, paypalDispatch]);

    const deliverHandler = () => {
        dispatch(deliverOrder(order._id));
    };

    return loading ? (
        <LoadingBox></LoadingBox>
    ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
    ) : (
        <div style={{color: '#ff69b4'}}>
            <h1>Order {order._id}</h1>
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card-body" style={{color: '#ff69b4'}}>
                                <h2>Shipping</h2>
                                <p>
                                    <strong>Name:</strong> {order.shippingAddress.fullName} <br />
                                    <strong>Address: </strong> {order.shippingAddress.address},
                                    {order.shippingAddress.city}, {order.shippingAddress.state}, {order.shippingAddress.postalCode},
                                    {order.shippingAddress.country}
                                </p>
                                {order.isDelivered ? (
                                <MessageBox variant="success">
                                    Delivered at {order.deliveredAt}
                                </MessageBox>
                                ) : (
                                    <MessageBox variant="danger">Not Delivered</MessageBox>
                                )}
                            </div>
                        </li>
                        <li>
                            <div className="card card-body" style={{color: '#ff69b4'}}>
                                <h2>Payment</h2>
                                <p>
                                    <strong>Method:</strong> {order.paymentMethod}
                                </p>
                                {order.isPaid ? (
                                <MessageBox variant="success">
                                    Paid at {order.paidAt}
                                </MessageBox>
                                ) : (
                                    <MessageBox variant="danger">Not Paid</MessageBox>
                                )}
                            </div>
                        </li>
                        <li>
                            <div className="card card-body" style={{color: '#ff69b4'}}>
                                <h2>Order Items</h2>
                                <ul>
                    {order.orderItems.map((item) => (
                        <li key={item.product}>
                            <div className="row">
                                <div>
                                    <img 
                                        src={item.image}
                                        alt={item.name}
                                        className="small"
                                    ></img>
                                </div>
                                <div className="min-30">
                                    <Link to={`/product/${item.product}`} style={{color: "#ff69b4"}}>{item.name}</Link>
                                </div>
                                <div>
                                    {item.qty} x ${item.price} = ${item.qty * item.price}
                                </div>
                            </div>
                        </li>
                      ))}
                   </ul>
                </div>
            </li>
        </ul>
    </div>
    <div className="col-1">
        <div className="card card-body" style={{color: '#ff69b4'}}>
            <ul>
                <li>
                    <h2>Order Summary</h2>
                </li>
                <li>
                    <div className="row">
                        <div>Items</div>
                        <div>${order.itemsPrice.toFixed(2)}</div>
                    </div>
                </li>
                <li>
                    <div className="row">
                        <div>Shipping</div>
                        <div>${order.shippingPrice.toFixed(2)}</div>
                    </div>
                </li>
                <li>
                    <div className="row">
                        <div>Tax</div>
                        <div>${order.taxPrice.toFixed(2)}</div>
                    </div>
                </li>
                <li>
                    <div className="row">
                        <div>
                            <strong>Order Total</strong>
                        </div>
                        <div>
                            <strong>${order.totalPrice.toFixed(2)}</strong>
                        </div>
                    </div>
                </li>
                {!order.isPaid && (
                        <li>
                             {isPending ? (
                            <LoadingBox></LoadingBox>
                            ) : (
                                <>
                                {errorPay && (
                                    <MessageBox variant="danger">{errorPay}</MessageBox>
                                )}
                                {loadingPay && <LoadingBox></LoadingBox>}
                                <PayPalButtons
                                    createOrder={createOrder}
                                    onApprove={onApprove}
                                    onError={onError}
                                ></PayPalButtons>
                                </>
                            )}
                        </li>
                    )}
                    {userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                        <li>
                            {loadingDeliver && <LoadingBox></LoadingBox>}
                            {errorDeliver && (
                                <MessageBox variant="danger">{errorDeliver}</MessageBox>
                            )}
                            <button type="button" className="primary block" onClick={deliverHandler} style={{color: "#ff69b4"}}>
                                Deliver Order
                            </button>
                        </li>
                    )}
            </ul>
        </div>
    </div>
  </div>
</div>
);
}