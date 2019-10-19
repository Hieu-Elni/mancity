import React from 'react';
import PromotionAction from './promotion';
import Enroll from './Enroll';

const Promotion = () => {
    return (
        <div className="promotion_wrapper" style={{background:'#ffffff'}}>
            <div className="container">
                <PromotionAction/>
                <Enroll/>
            </div>
        </div>
    );
};

export default Promotion;