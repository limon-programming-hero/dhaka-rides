import React, { useContext } from 'react';
import './Home.css';
import { userContext } from './../../App';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const navigate = useNavigate();
    const handlerRoute = (name) => {
        const loggedInfo = { ...loggedInUser }
        // if (name === 'bike') {
        //     loggedInfo.ride = name
        // } else if (name === 'car') {
        //     loggedInfo.ride = name
        // } else if (name === 'bus') {
        //     loggedInfo.ride = name
        // } else if (name === 'metro rail') {
        //     loggedInfo.ride = name
        // };
        loggedInfo.ride = name;
        setLoggedInUser(loggedInfo);

        loggedInUser.ride && navigate('/search')
    }

    return (
        <div className='home-div d-flex align-items-center'>
            <div className="card-group container">
                <div onClick={() => handlerRoute('bike')} className="card col-6 col-sm-3 card-1 rounded-2">
                    <div>BIKE </div>
                </div>
                <div onClick={() => handlerRoute('car')} className="card col-6 col-sm-3 card-2 rounded-2">
                    <div>CAR </div>
                </div>
                <div onClick={() => handlerRoute('bus')} className="card col-6 col-sm-3 card-3 rounded-2">
                    <div>BUS </div>
                </div>
                <div onClick={() => handlerRoute('metro rail')} className="card col-6 col-sm-3 card-4 rounded-2">
                    <div>METRO RAIL </div>
                </div>
            </div>
        </div>
    );
};

export default Home;