import React from 'react';
import Carousel from "./Carousel"
import TimeCountdown from "./TimeCountdown"
const Featured = () => {
    return (
        <div style={{position:"relative"}} >
            <Carousel/>
            
            <div className="artist_name">
                <div className="wrapper">
                        Quratulain bloach
                </div>
            </div>

            <TimeCountdown/>

        </div>
    );
};

export default Featured;