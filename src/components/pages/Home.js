import React, { useEffect } from 'react';
import Logo from '../Logo';
import "../../style/Home.css"
import Aos from 'aos';
import "aos/dist/aos.css"
import { Link } from 'react-router-dom';

const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])

  return (

    <div className='bgHome'>
      <div data-aos="zoom-in" className='homeStyle'>
        <Link to="/questionnaire"><Logo /></Link>
      </div>
      <div className='creators'>
        <p >SNCFooD by : Les 4 fantastiques Manon, Anaïs, Nico et Nolan.</p>
      </div>

    </div>


  );
};

export default Home;