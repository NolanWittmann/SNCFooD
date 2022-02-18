import React, { useEffect } from 'react';
import '../style/Questionnaire.css'
import Aos from 'aos';
import "aos/dist/aos.css"

const Questionnaire = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

    return (
        <div id="returnQuest" className='page-questionnaire'>

            <h1 className='title'>Commençons les amis :</h1>

            <section className='questionnaire'>

                <div  data-aos="fade-left" className='name'>
                    <div className='name-div'>
                        <div>
                            <p><span className='pSpan'>1</span>/5</p>
                        </div>
                        <div className='name__input'>
                            <label className='name__input-label'>Quel est ton prénom ?</label>
                            <input className='name__input-input' type='text'></input>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-right" className='genre'>
                    <div className='genre-div'>
                        <div>
                            <p><span className='pSpan'>2</span>/5</p>
                        </div>
                        <div>
                            <p className='genre__question'>Vous êtes,</p>
                        </div>
                        <div className='genre__genre'>
                            <p><button className='h'>Un homme</button></p>
                            <p><button className='f'>Une femme</button></p>
                        </div>
                    </div>
                </div>

                <div  data-aos="fade-left" className='metier'>
                    <div className='metier-div'>
                        <div>
                            <p><span className='pSpan'>3</span>/5</p>
                        </div>
                        <div>
                            <p className='metier__question'>Quel est la situation de votre métier ?</p>
                        </div>
                        <div className='metier__question-situation'>
                            <p><button className='sedentaire'>Un métier sédentaire</button></p>
                            <p><button className='terrain'>Un métier de terrain</button></p>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-right" className='vegetarien'>
                    <div className='vegetarien-div'>
                        <div>
                            <p><span className='pSpan'>4</span>/5</p>
                        </div>
                        <div>
                            <p className='vegetarien__question'>Etes-vous végétarien ?</p>
                        </div>
                        <div className='vegetarien__question-reponse'>
                            <p><button className='vegetarien__question-oui'>Oui</button></p>
                            <p><button className='vegetarien__question-non'>Non</button></p>
                        </div>
                    </div>
                </div>

                <div  data-aos="fade-left" className='horaire'>
                    <div className='horaire-div'>
                        <div>
                            <p><span className='pSpan'>5</span>/5</p>
                        </div>
                        <div>
                            <p className='horaire__question'>Travaillez-vous en horaires décalés ?</p>
                        </div>
                        <div>
                            <p><button className='horaire__question-oui'>Oui</button></p>
                            <p><button className='horaire__question-non'>Non</button></p>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
}

export default Questionnaire;