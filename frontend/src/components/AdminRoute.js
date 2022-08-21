import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
const userSignin = useSelector((state) => state.userSignin);
const { userInfo } = userSignin;
return userInfo && userInfo.isAdmin ? children : <Navigate to="/signin" />;
};

export default AdminRoute;


/*import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export default function AdminRoute({ component: Component, ...rest }) {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    return (
       <Route 
        {...rest} 
        render={(props) =>
            userInfo && userInfo.isAdmin ? (
                <Component {...props}></Component>
            ) : (
                <Redirect to="/signin" />
            )
        }
        ></Route>
    );
}*/