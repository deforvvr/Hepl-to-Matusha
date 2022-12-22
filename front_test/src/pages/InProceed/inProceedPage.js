import React from 'react';
import  Spin from '../../components/spin';
import './inProceedPage.css';

export function InProceedPage(){
    return(
        <div>
            <div className='parent'>
                <h1>В разработке... <Spin/></h1>
            </div>
        </div>
    )
}
