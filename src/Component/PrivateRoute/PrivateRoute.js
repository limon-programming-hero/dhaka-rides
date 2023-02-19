// import React from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from './../../App';
import SearchResult from '../SearchResult/SearchResult';


const PrivateRoute = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    console.log(setLoggedInUser);
    if (loggedInUser?.email && loggedInUser?.ride) {
        return <SearchResult />
    } else if (loggedInUser?.email && !loggedInUser?.ride) {
        return <Navigate to='/home' />
    } else if (!loggedInUser?.email && loggedInUser?.ride) {
        return <Navigate to='/login' />
    } else if (!loggedInUser?.email && !loggedInUser?.ride) {
        return <Navigate to='/login' />
    }
};

export default PrivateRoute;