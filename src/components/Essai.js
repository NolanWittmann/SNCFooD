import React from 'react';
import "../style/Essai.css"



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



    return (
        <div className='grosseDiv'>
            {questions.map((quest, index) =>

                <div className={index % 2 === 0 ? "partLeft" : "partRight"}> <p className={index % 2 === 0 ? "questionLeft" : "questionRight"}>{quest.question}</p>
                    {quest.possibilities.map((possibility, index) =>
                        <button className={index % 2 === 0 ? "btnLeft" : "btnRight"}>{possibility}</button>)}</div>)}


        </div>
    )

        ;

}


export default Essai;