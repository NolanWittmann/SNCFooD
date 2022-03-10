import React from 'react';
import Footer from '../Footer';
import Navigation from '../Navigation';
import "../../style/NotFound.css"

const NotFound = () => {
    return (
        <div>
            {/* <Navigation /> */}
            <div className='errorPage__wrapper'>
                <img src="./assets/omeraffraid.png " alt="404 error, picture of homer eating the website logo" className="omer404"/>
            </div>
            <Footer />
        </div>
    );
};

export default NotFound;