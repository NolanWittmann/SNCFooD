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

    <div>
      <div data-aos="zoom-in" className='homeStyle'>
        <Link to="/questionnaire"><Logo /></Link>
      </div>
      <p className='creator'>SNCFooD by : Les 4 fantastiques Manon alias "Womanizer", Nolan, Anais et Nicolas</p>
    </div>


  );
};

export default Home;