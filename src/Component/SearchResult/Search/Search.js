import React from 'react';
import './Search.css';

const Search = (props) => {
    const [location, setLocation] = props.locations;

    const handlerBlur = (e) => {
        const searchInfo = { ...location };
        searchInfo[e.target.name] = e?.target?.value;
        setLocation(searchInfo);
        console.log(location);
    }

    const searchSubmitHandler = () => {
        if (location?.pickFrom && location?.pickTo) {
            const userInfo = { ...location };
            userInfo.pickConfirm = true;
            setLocation(userInfo)
        }
        // e.preventdefault();
    }
    return (
        <div className='container d-flex justify-content-center'>
            <form className='formStyle' onSubmit={searchSubmitHandler}>
                <p className='px-3'>Pick From</p>
                <input className='inputPortion' onBlur={handlerBlur} name='pickFrom' type="text" required placeholder='from' />
                <br />
                <p className='px-3'>Pick To</p>
                <input className='inputPortion' onBlur={handlerBlur} name='pickTo' type="text" required placeholder='to' />
                <br />
                <input className='inputPortion' type="submit" value="Search" />
            </form>
        </div>
    );
};

export default Search;