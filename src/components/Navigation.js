import React, { useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../style/Navigation.css";
import Logo from './Logo';

const Navigation = () => {

    const [menuBurger, setMenuBurger] = useState(false)
   
    const handleClick = () => {
        setMenuBurger(!menuBurger)
    }

    return (
        
        <nav id="returnHome" className='navDown'>
            <div className='nav-btn'>
                <button className='btn__color' onClick={handleClick}  > 🍔 </button>
            </div>
            {/* ATTENTION MENU BURGER PETIT ECRAN */}
            {menuBurger &&
                <ul className='liste'>
                    <NavLink className='liste__li' to="/notice"> <li >Comment Faire ?</li></NavLink>  
                    <NavLink className='liste__li' to="/questionnaire"><li >Questionnaire</li></NavLink>   
                    {/* <li className='liste__li'><a href="">Comment Faire ?</a></li>
                    <li className='liste__li'><a href="#returnQuest">Questionnaire</a></li> */}
                </ul>}
            {/* ATTENTION GRAND ECRAN */}
            <div className='liste__big__screen__logo' >
               <Logo />
                <ul className='liste__big__screen'>
                 <Link className='linkBigScreen' to="/notice"> <li className='liste__li__big'>Comment Faire ?</li></Link>  
                 <Link className='linkBigScreen' to="/questionnaire"><li className='liste__li__big'>Questionnaire</li></Link>   
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;