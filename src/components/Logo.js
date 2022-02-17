import React from 'react';
import "/style/Logo.css";
import { ReactComponent as Logofood } from '/svg/sncfood_v2.svg';

const Logo = () => {
    return (
        <div className="logo_header">
            <div>
                <Logofood height="14rem"/>
            </div>
        </div>
    );
};

export default Logo;