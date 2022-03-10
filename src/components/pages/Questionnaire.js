import React, { useContext, useEffect, useState } from 'react';
import Navigation from "../Navigation"
import Footer from "../Footer"
import "../../style/Questionnaire.css"
import Aos from 'aos';
import "aos/dist/aos.css"
import { Link } from 'react-router-dom';
import CalorieContext from '../context/CalorieContext';
import Logo from '../Logo';

const questions = [

    {
        id: 0,
        question: "Êtes-vous  ?",
        possibilities: ["Un homme", "Une femme"],
        reponse: ""
    },
    {
        id: 1,
        question: "Quel est la situation de votre métier ?",
        possibilities: ["Sedentaire", "Terrain"],
        reponse: ""
    },
    {
        id: 2,
        question: "Souhaitez-vous perdre du poids ?",
        possibilities: ["Oui", "Non"],
        reponse: ""
    }

]

const Questionnaire = () => {

    const [response, setResponse] = useState(questions)
    const { setScoreNutri} = useContext(CalorieContext)

    

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    const choiceFood = (userId, userReponse) => {

        const arrayFilter = response.filter(questDone => {
            return questDone.id !== userId
        })

        const currentQuestion = questions[userId]
        currentQuestion.reponse = userReponse
        arrayFilter.push(currentQuestion)

        setResponse(arrayFilter)
    }

    const calorieCompteur = () => {
        if (response.every(totalQuest => totalQuest.reponse !== "")) {
            if (response[0].reponse === "Un homme") {
                setScoreNutri(prevScoreNutri => prevScoreNutri + 2100)
            }
            if (response[0].reponse === "Une femme") {
                setScoreNutri(prevScoreNutri => prevScoreNutri + 1800)
            }
            if (response[1].reponse === "Sedentaire") {
                setScoreNutri(prevScoreNutri => prevScoreNutri + 0)
            }
            if (response[1].reponse === "Terrain" && response[0].reponse === "Un homme") {
                setScoreNutri(prevScoreNutri => prevScoreNutri + 400)
            }
            if (response[1].reponse === "Terrain" && response[0].reponse === "Une femme") {
                setScoreNutri(prevScoreNutri => prevScoreNutri + 200)
            }
            if (response[2].reponse === "Oui" && response[0].reponse === "Une femme") {
                setScoreNutri(prevScoreNutri => prevScoreNutri - 400)
            }
            if (response[2].reponse === "Non" && response[0].reponse === "Un femme") {
                setScoreNutri(prevScoreNutri => prevScoreNutri + 0)
            }
            if (response[2].reponse === "Oui" && response[0].reponse === "Un homme") {
                setScoreNutri(prevScoreNutri => prevScoreNutri - 500)
            }
            if (response[2].reponse === "Non" && response[0].reponse === "Un homme") {
                setScoreNutri(prevScoreNutri => prevScoreNutri + 0)
            }
        }

    }


    return (
      
            <div className='big__grosseDiv'>
                <Navigation />
                <div className='grosseDiv' id="questionAncre">
               
                            <h1 className='questionTitle'>Commençons les amis ! </h1>
                      
                    {questions.map((quest, indexQuest) =>

                        <div key={indexQuest} data-aos={indexQuest % 2 === 0 ? "fade-up" : "fade-up"} className={indexQuest % 2 === 0 ? "partLeft" : "partRight"}> <p className={indexQuest % 2 === 0 ? "questionLeft" : "questionRight"}>{quest.question}</p>
                            {quest.possibilities.map((possibility, indexPossi) =>
                                <button key={indexPossi} onClick={() => choiceFood(quest.id, possibility)} className={indexPossi % 2 === 0 ? "btnLeft" : "btnRight"}>{possibility}</button>)}</div>

                    )}


                </div>

                <div className='displayBtn'>
                    {response.every(totalQuest => totalQuest.reponse !== "") && <Link to="/recette"><button className='buttonQuestion' onClick={calorieCompteur}>Validez votre choix</button></Link>}
                    <a href='#questionAncre' className='resetQuestion'><button className='buttonQuestion' onClick={() => setScoreNutri(0)}>🠝 Reset 🠝</button></a>
                </div>
                <Footer />
            </div>
     

    );



}


export default Questionnaire;