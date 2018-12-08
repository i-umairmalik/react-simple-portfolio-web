import React from 'react';
import Fade from "react-reveal";
const Desc = () => {
    return (
       <Fade delay={200}>
           <div className="center_wrapper">
                <h2>HighLights</h2>
                <div className="highlight_description">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </div>
           </div>
       </Fade>
    );
};

export default Desc;