import React, { useContext } from 'react';
import './Result.css';
import route from '../../../images/location-route.png';
import peopleIcon from '../../../images/peopleIcon.png';
import { FakeData } from './../../FakeData/FakeData';
import { userContext } from './../../../App';


const Result = (props) => {
    const [location, setLocation] = props.locations;
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    console.log(setLoggedInUser)
    const rideDetails = FakeData.filter(data => data.name === loggedInUser.ride);

    console.log(props.locations);
    console.log(rideDetails);

    const handlerSearchAgain = () => {
        const userInfo = { ...location }
        userInfo.pickConfirm = false;
        setLocation(userInfo);
        // console.log(location);
        // e.preventDefault();
    }
    const rideResult = rideDetails.map(data => {
        return (<li style={{cursor:'pointer'}} key={data.key} className='d-flex border p-2 m-2 show-result rounded-1'>
            <img className='mx-1' src={data?.img} alt="" />
            <span className='mx-2'>{data?.name}</span>
            <img className='ms-3' src={peopleIcon} alt="" />
            <span className='mx-3'>{data?.capacity}</span>
            <span className='ms-5'>${data?.price}</span>
        </li>)
    })
    
    return (
        <div>
            <div className='formStyle'>
                <div className='d-flex show-location'>
                    <div><img src={route} alt="" /></div>
                    <div>
                        <h5>{location?.pickTo}</h5>
                        <h5>{location?.pickFrom}</h5>
                    </div>
                </div>
                <div>
                    <ul className='bg-secondary-subtle rounded-1 p-2 m-3'>
                        {rideResult}
                    </ul>
                </div>
            </div>
            <button onClick={() => handlerSearchAgain()} style={{ backgroundColor: 'lightsalmon' }} className='border-0 rounded-2 p-2 m-3 '>Search again!</button>
        </div>
    );
};

export default Result;