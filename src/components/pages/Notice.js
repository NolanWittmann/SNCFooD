import React from 'react';
import Navigation from "../../components/Navigation"
import "../../style/Notice.css"
import { Animator, batch, Fade, MoveOut, Move, MoveIn, ScrollContainer, ScrollPage, Sticky, StickyIn, ZoomIn } from 'react-scroll-motion';
import { NavLink } from 'react-router-dom';

const Notice = () => {

    const FadeUp = batch(Fade(), Move(), Sticky());

    return (
        <div>
            <Navigation />
            
            <ScrollContainer>
                <ScrollPage page={0}>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                        <span style={{ fontSize: "50px" }}>Notice d'utilisation 😀</span>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={1}>
                    <Animator animation={FadeUp}>
                        <span style={{ fontSize: "40px" }}> SNCFooD est un site de suggestion alimentaire ✨</span>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={2}>
                    <Animator animation={FadeUp}>
                        <span style={{ fontSize: "40px" }}>La première étape : Répondre au questionnaire</span>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={3}>
                    <span style={{ fontSize: "40px" }}> <Animator animation={FadeUp}>Notre questionnaire saura vous :</Animator></span>
                </ScrollPage>
                <ScrollPage page={4}>
                    <span style={{ fontSize: "40px" }}>  <Animator animation={FadeUp}>Définir un apport calorique 🙋🏻‍♀️</Animator></span>
                </ScrollPage>
                <ScrollPage page={5}>
                <span style={{ fontSize: "40px" }}>     <Animator animation={FadeUp}>Avec cet information, proposer des recettes adaptées.</Animator></span>
                </ScrollPage>


                <ScrollPage page={6}>
                    <Animator animation={batch(Fade(), Sticky())}>

                        <span style={{ fontSize: "30px" }}>
                            Tu es encore ici ? Cliques vite <NavLink to="/questionnaire" className='noticeClick'> ici </NavLink> pour aller au questionnaire !
                        </span>
                    </Animator>
                </ScrollPage>
            </ScrollContainer>

        </div >
    );
};

export default Notice;