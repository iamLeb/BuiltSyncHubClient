import React from 'react';
import Hero from "../components/Hero.jsx";
import img1 from "../assets/images/img-hero1.jpg";
import img2 from "../assets/images/img-hero2.jpg";
import img3 from "../assets/images/img-hero3.jpg";
import CareerBanner from "../components/CareerBanner.jsx";
import Jobs from "../components/Jobs.jsx";
const Career = () => {
    return (
        <div className=''>
            <CareerBanner />
            <Jobs />
        </div>
    );
};

export default Career;