import React from 'react';
import "./style/Footer.css"

const Footer = () => {
    return (
        <div>
            <div className='ancre'>
                <a href='#ok' className='ancrage'>🠝</a>
            </div>
            <div className="bg-foot">

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
                        <li className='centerPart-li'><a href="#">Blanquette de veau</a> </li>
                        <li className='centerPart-li'><a href="#">Quiche Lorraine</a></li>
                        <li className='centerPart-li'><a href="#">Gateau au Yaourt</a></li>
                        <li className='centerPart-li'><a href="#">Gratin Dauphinois</a></li>
                        <li className='centerPart-li'><a href="#">Gateau au Chocolat</a></li>
                        <li className='centerPart-li'><a href="#">Tiramisu</a></li>
                        <li className='centerPart-li'><a href="#">Pate a Crepe</a></li>
                        <li className='centerPart-li'><a href="#">Boeuf Bourguignon</a></li>
                        <li className='centerPart-li'><a href="#">Tarte aux Pommes</a></li>
                        <li className='centerPart-li'><a href="#">Mousse au Chocolat</a></li>
                        <li className='centerPart-li'><a href="#">Pain Perdu</a></li>
                        <li className='centerPart-li'><a href="#">Poulet Basquaise</a></li>
                        <li className='centerPart-li'><a href="#">Tomates Farcies</a></li>
                        <li className='centerPart-li'><a href="#">Pot au Feu</a></li>
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
        </div>
    );
};

export default Footer;
