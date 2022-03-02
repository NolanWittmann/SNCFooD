import React from 'react';
import { Animator, batch, ScrollContainer, ScrollPage, Sticky, Fade, MoveOut, MoveIn, FadeOut, FadeIn, StickyIn, ZoomIn, ZoomOut } from 'react-scroll-motion';
import '../style/Questionnaire.css'


const Questionnaire = () => {
    const animationOnTitle = batch(Fade(), ZoomIn(), ZoomOut());
    const animationDisplayLeft = batch(MoveIn(-350, 0), Fade())
    const animationDisplayRight = batch(MoveIn(350, 0), Fade())

    return (
        <ScrollContainer>

            <div id="returnQuest" className='page-questionnaire'>
                <ScrollPage page={0}>
                    <Animator animation={animationOnTitle}>
                        <h1 className='title'>Commençons les amis :</h1>
                    </Animator>
                </ScrollPage>
                <section className='questionnaire'>

                    <ScrollPage page={1}>
                        <Animator animation={animationDisplayLeft}>
                            <div className='name'>
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
                        </Animator>
                    </ScrollPage>

                    <ScrollPage page={2}>
                        <Animator animation={animationDisplayRight}>
                            <div className='genre'>
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
                        </Animator>
                    </ScrollPage>


                    <ScrollPage page={3}>
                        <Animator animation={animationDisplayLeft}>
                            <div className='metier'>
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
                        </Animator>
                    </ScrollPage>



                    <ScrollPage page={4}>
                        <Animator animation={animationDisplayRight}>
                            <div className='vegetarien'>
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
                        </Animator>
                    </ScrollPage>



                    <ScrollPage page={5}>
                        <Animator animation={animationDisplayLeft}>
                            <div className='horaire'>
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
                        </Animator>
                    </ScrollPage>


                </section >
            </div >

        </ScrollContainer>
    );
}

export default Questionnaire;