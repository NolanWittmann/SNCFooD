import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import "../style/Navigation.css";
import Logo from "./Logo";


const Navigation = () => {

    const [menuBurger, setMenuBurger] = useState(false)

    return (
        
        <nav id="returnHome" className='navDown'>
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
            <div className='liste__big__screen__logo' >
               <Logo />
                <ul className='liste__big__screen'>
                    <li className='liste__li__big'><a href="">Comment Faire ?</a></li>
                 <Link className='linkBigScreen' to="/questionnaire"><li className='liste__li__big'>Questionnaire</li></Link>   
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;