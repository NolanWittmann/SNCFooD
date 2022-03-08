import React from 'react';
import "../../style/Recette.css"
import Footer from '../Footer';
import Navigation from '../Navigation';
import Response from '../Response';

const Recette = () => {
    return (
        <div>
            <Navigation />
            <Response />
            <Footer />
        </div>
    );
};

export default Recette;