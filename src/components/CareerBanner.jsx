import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/images/img-hero1.jpg";
import img2 from "../assets/images/img-hero2.jpg";
import img3 from "../assets/images/img-hero3.jpg";


let heroData = [
    {
        id: 1,
        image: img1,
        title: 'Internship Opportunities at Cencadian',
        description: 'Welcome to the Cencadian career page! We believe in the power of talent, innovation, and collaboration. If you\'re passionate about web development, design, and creating digital solutions that make a difference, we want you to be part of our growing team.',
        link: '#postings'
    }
]
const CareerBanner = () => {
    return (
        <section id="home" className="hero-block">
            <Carousel controls={false}>
                {heroData.map((hero) => (
                    <Carousel.Item key={hero.id}>
                        <img
                            className="d-block w-100"
                            src={hero.image}
                            alt={"slide " + hero.id}
                        />
                        <Carousel.Caption>
                            <h2 className='fw-bolder'>{hero.title}</h2>
                            <p>{hero.description}</p>
                            <a className="btn btn-primary" href={hero.link}>Check Postings<i
                                className="fas fa-chevron-right"></i></a>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    );
};

export default CareerBanner;