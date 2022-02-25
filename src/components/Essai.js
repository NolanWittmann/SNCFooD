import React, { useEffect } from 'react';
import { Animator, batch, Fade, MoveIn, ScrollContainer, ScrollPage, ZoomOut } from 'react-scroll-motion';
import "../style/Essai.css"
import Aos from 'aos';
import "aos/dist/aos.css"



const Essai = () => {



    const questions = [

        {
            question: "Vous êtes,",
            possibilities: ["Un homme", "Une femme"],
            reponse: ""
        },
        {
            question: "Quel est la situation de votre métier ?",
            possibilities: ["Sédentaire", "Terrain"],
            reponse: ""
        },
        {
            question: "Travaillez-vous en horaire décalé ?",
            possibilities: ["Oui", "Non"],
            reponse: ""
        },
        {
            question: "Êtes-vous végétarien ?",
            possibilities: ["Oui", "Non"],
            reponse: ""
        }
    ]

    useEffect(()=>{
        Aos.init({duration: 10000})
    },[])

    const animationOnTitle = batch(Fade(), ZoomOut(1.2, 0));

    return (
        <ScrollContainer>


            <div>

                <ScrollPage page={0}>
                    <Animator animation={animationOnTitle}>
                        <h1 className='questionTitle'>Commençons les amis ! </h1>
                    </Animator>
                </ScrollPage>

                <div className='grosseDiv'>
                    {questions.map((quest, index) =>
                      
                            
                                <div data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} className={index % 2 === 0 ? "partLeft" : "partRight"}> <p className={index % 2 === 0 ? "questionLeft" : "questionRight"}>{quest.question}</p>
                                    {quest.possibilities.map((possibility, index) =>
                                        <button className={index % 2 === 0 ? "btnLeft" : "btnRight"}>{possibility}</button>)}</div>
                          
                    )}


                </div>
            </div>

        </ScrollContainer >

    )

        ;

}


export default Essai;