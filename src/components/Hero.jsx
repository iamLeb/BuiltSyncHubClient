import Carousel from 'react-bootstrap/Carousel';
import img1 from "../assets/images/img-hero1.jpg";
import img2 from "../assets/images/img-hero2.jpg";
import img3 from "../assets/images/img-hero3.jpg";

let heroData = [
    {
        id: 1,
        image: img1,
        title: 'Companies Seeking Talent',
        description: 'Are you a company in search of skilled professionals to elevate your online presence? Explore a world of talent at Cencadian. From expert web developers to creative minds, find the perfect match for your project. Join us and transform your vision into a digital masterpiece!',
        link: 'https://www.google.com'
    },
    {
        id: 2,
        image: img2,
        title: 'Interns Ready to Learn',
        description: 'Calling all passionate interns! Kickstart your career with real-world projects at Cencadian. Dive into hands-on experiences, collaborate with industry experts, and build a portfolio that speaks volumes. The future of web development starts here – apply now and let your journey begin!',
        link: 'https://www.facebook.com'
    },
    {
        id: 3,
        image: img3,
        title: 'Success Stories Unveiled',
        description: 'Explore success stories that transcend boundaries. Companies finding their perfect match, interns turning dreams into reality – Cencadian is where success stories come to life. Join our community, be part of the narrative, and let your journey inspire others. Discover the impact of collaboration today!',
        link: 'https://www.twitter.com'
    }
]
const Hero = () => {
    return (
        <section id="home" className="hero-block">
            <Carousel>
                {heroData.map((hero) => (
                    <Carousel.Item key={hero.id}>
                        <img
                            className="d-block w-100"
                            src={hero.image}
                            alt={"slide " + hero.id}
                        />
                        <Carousel.Caption>
                            <h2>{hero.title}</h2>
                            <p>{hero.description}</p>
                            <a className="btn btn-primary" href={hero.link}>Learn More <i
                                className="fas fa-chevron-right"></i></a>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    );
};

export default Hero;