import React, { useEffect } from 'react';
import "../style/Footer.css"
import Aos from 'aos';
import "aos/dist/aos.css"



const Footer = () => {
   

    const reseau = ["./assets/insta.png", "./assets/snap.png", "./assets/twitter.png"]

    const recettes = ["Blanquette de veau", "Quiche Lorraine", "Gateau au Yaourt", "Gratin Dauphinois",
        "Gateau au Chocolat",
        "Tiramisu",
        "Pate a Crepe",
        "Boeuf Bourguignon",
        "Tarte aux Pommes",
        "Mousse au Chocolat",
        "Pain Perdu",
        "Poulet Basquaise",
        "Tomates Farcies",
        "Pot au Feu"]

    const categories = ["Recettes sans Gluten",
        "Recettes Vegan",
        "Recettes Végétariennes",
        "Recettes sans Porc"]

        useEffect(()=>{
            Aos.init({duration: 2000})
        },[])

    return (
        <div >
            <div  className='ancre'>
                <a href='#returnHome' className='ancrage'>🠝</a>
            </div>
            <div  className="bg-foot">

                <div className='leftPart'>
                    <img className='logoFooter' src="./assets/logoBlanc.png" alt="" />
                    <ul>
                        {reseau.map((logo, index) =>
                            <li key={index} className='leftPart-li'><a href="#"><img src={logo} alt="" height="60px"/></a> </li>)} 
                    </ul>

                </div>

                <div className='centerPart'>
                    <ul>
                        <h2 className='centerPart-h2'>RECETTES</h2>
                        {recettes.map((recette, index) =>
                            <li key={index} className='centerPart-li'><a href="">{recette}</a></li>
                        )}
                    </ul>
                </div>

                <div className="rightPart">
                    <ul>
                        <h2 className='rightPart-h2'>CATEGORIES</h2>
                        {categories.map((categorie, index) =>
                            <li key={index} className='rightPart-li'><a href="#">{categorie}</a></li>)}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Footer;
