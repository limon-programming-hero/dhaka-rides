import React, { useState } from 'react';
import Search from './Search/Search';
import Result from './Result/Result';
import map from '../../images/Map.png'


const SearchResult = () => {
    const [location, setLocation] = useState(
        {
            pickFrom: '',
            pickTo: '',
            pickConfirm: false
        }
    )
    return (
        <div className='container row m-4 p-3'>
            <div className='col-md-5 p-3'>{location.pickConfirm ? <Result locations={[location, setLocation]} /> : <Search locations={[location, setLocation]} />}</div>
            <div className='col-md-7 p-3'>
                <img style={{ width: '100%' }} src={map} alt="" />
            </div>
        </div>
    );
};

export default SearchResult;