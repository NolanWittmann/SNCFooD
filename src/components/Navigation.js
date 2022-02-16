import React, { useState } from 'react';
import "./style/Navigation.css";




const Navigation = () => {

    const [menuBurger, setMenuBurger] = useState(false)

    return (
        <nav id="returnHome">
            <div className='nav-btn'>
                <button className='btn__color' onClick={() => setMenuBurger(!menuBurger)}  > 🍔 </button>
            </div>
            {/* ATTENTION MENU BURGER PETIT ECRAN */}
            {menuBurger &&
                <ul className='liste'>
                    <li className='liste__li'><a href="">Comment Faire ?</a></li>
                    <li className='liste__li'><a href="#returnQuest">Questionnaire</a></li>
                </ul>}
            {/* ATTENTION GRAND ECRAN */}
            <ul className='liste__big__screen'>
                <li className='liste__li__big'><a href="">Comment Faire ?</a></li>
                <li className='liste__li__big'><a href="#returnQuest">Questionnaire  </a></li>
            </ul>
        </nav>
    );
};

export default Navigation;