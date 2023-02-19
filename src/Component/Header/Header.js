import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/Logo.png'
import './Header.css'
import { userContext } from './../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    return (
        <div className='header-full'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/home'><img src={logo} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to='/home'>Home</Link>
                            <Link className="nav-link active" to='/search'>Destination</Link>
                            <Link className="nav-link active" to='/blog'>Blog</Link>
                            <Link className="nav-link active" to='/contact'>Contact</Link>
                            {loggedInUser.email ? <p className="nav-link active">{loggedInUser.email}</p> : <Link className="nav-link active" to='/login'><button style={{backgroundColor:'lightsalmon'}} className='p-1 rounded-2 border-0'>Log In</button></Link>}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;