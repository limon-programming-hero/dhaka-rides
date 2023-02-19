// import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from './../../App';


const PrivateRoute = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    console.log(setLoggedInUser);
    if (loggedInUser?.email && loggedInUser?.ride) {
        return <Outlet />
    } else if (loggedInUser?.email && !loggedInUser?.ride) {
        return <Navigate to='/home' />
    } else {
        return <Navigate to='/login' />
    }
};

export default PrivateRoute;