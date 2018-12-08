import React from 'react';
import Desc from './Desc';
import Discounts from "./Discounts"
const HighLights = () => {
    return (
        <div className='highlight_wrapper'>
            <Desc/>
            <Discounts/>
        </div>
    );
};

export default HighLights;