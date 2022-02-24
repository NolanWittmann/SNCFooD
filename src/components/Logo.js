import React from 'react';
import "../style/Logo.css";
import { ReactComponent as Logofood } from "../svg/Sncfood_v2.svg"
import { Animator, batch, ScrollContainer, ScrollPage, Sticky, Fade, MoveOut, MoveIn, FadeOut, FadeIn, StickyIn, ZoomIn } from 'react-scroll-motion';

const Logo = () => {
    const ZoomInScrollOut = batch(Sticky(25, 20))

    return (
        <ScrollContainer>
            <div className="logo_header">
                <ScrollPage page={0}>
                    <Animator animation={ZoomInScrollOut}>
                        <div>
                            <Logofood height="14rem" />
                        </div>
                    </Animator>
                </ScrollPage>


            </div >
        </ScrollContainer>
    );
};
export default Logo;