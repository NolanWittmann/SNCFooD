import React from 'react';
import "./style/Footer.css"

const Footer = () => {
    return (


        <div className="bg-foot">
            <a href='#' className='ancrage'>🠝</a>
            <div className='leftPart'>
                <h2 className='leftPart-h2'>sncfood</h2>
                <ul>
                    <li className='leftPart-li'><a href='#'><img src="../assets/fb.png" alt="" height="50px" /></a></li>
                    <li className='leftPart-li'><a href='#'><img src="../assets/insta.png" alt="" height="50px" /></a></li>
                    <li className='leftPart-li'><a href='#'><img src="../assets/snap.png" alt="" height="50px" /></a></li>
                    <li className='leftPart-li'><a href='#'><img src="../assets/twiter.png" alt="" height="50px" /></a></li>
                </ul>

            </div>

            <div className='centerPart'>

                <h2 className='centerPart-h2'>RECETTES</h2>
                <ul>
                    <li className='centerPart-li'>Blanquette de veaux</li>
                    <li className='centerPart-li'>Quiche Lorraine</li>
                    <li className='centerPart-li'>Gateau au Yaourt</li>
                    <li className='centerPart-li'>Gratin Dauphinois</li>
                    <li className='centerPart-li'>Gateau au Chocolat</li>
                    <li className='centerPart-li'>Tiramisu</li>
                    <li className='centerPart-li'>Pate a Crepe</li>
                    <li className='centerPart-li'>Boeuf Bourguignon</li>
                    <li className='centerPart-li'>Tarte aux Pommes</li>
                    <li className='centerPart-li'>Mousse au Chocolat</li>
                    <li className='centerPart-li'>Pain Perdu</li>
                    <li className='centerPart-li'>Poulet Basquaise</li>
                    <li className='centerPart-li'>Tomates Farcies</li>
                    <li className='centerPart-li'>Pot au Feu</li>
                </ul>
            </div>

            <div className="rightPart">
                <h2 className='rightPart-h2'>CATEGORIES</h2>
                <ul>
                    <li className='rightPart-li'>Recettes sans Gluten</li>
                    <li className='rightPart-li'>Recettes Vegan</li>
                    <li className='rightPart-li'>Recettes Végétariennes</li>
                    <li className='rightPart-li'>Recettes sans Porc</li>
                </ul>
            </div>

        </div>
    );
};

export default Footer;
