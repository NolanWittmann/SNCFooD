import React from 'react';
import './Questionnaire.css'

const Questionnaire = () => {

    return (
        <div className='page-questionnaire'>

            <h1 className='title'>Commençons les amis :</h1>

            <section className='questionnaire'>

                <div className='name'>
                    <div>
                        <p><span>1</span>/5</p>
                    </div>
                    <div className='name__input'>
                        <label className='name__input-label'>Quel est ton prénom ?</label>
                        <input className='name__input-input' type='text'></input>
                    </div>
                </div>

                <div className='genre'>
                    <p><span>2</span>/5</p>
                    <p className='genre__question'>Vous êtes,</p>
                    <div className='genre__genre'>
                        <p>Un homme</p>
                        <p>Une femme</p>
                    </div>
                </div>

                <div className='metier'>
                    <p><span>3</span>/5</p>
                    <p className='metier__question'>Quel est la situation de votre métier ?</p>
                    <p>Un métier sédentaire</p>
                    <p>Un métier de terrain</p>
                </div>

                <div className='vegetarien'>
                    <p><span>4</span>/5</p>
                    <p className='vegetarien__question'>Etes-vous végétarien ?</p>
                    <p>Oui</p>
                    <p>Non</p>
                </div>

                <div className='horaire'>
                    <p><span>5</span>/5</p>
                    <p className='horaire__question'>Travaillez-vous en horaires décalés ?</p>
                    <p>Oui</p>
                    <p>Non</p>
                </div>
            </section>
        </div>
    );
}

export default Questionnaire;