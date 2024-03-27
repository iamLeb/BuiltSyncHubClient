import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import ProgressBar from 'react-bootstrap/ProgressBar';

import img1 from '../assets/images/img3.jpg';

const About = () => {
    const html = 80;
    const responsive = 95;
    const photoshop = 60;
    return (
        <section className="block about-block" id="about">
            <Container fluid>
                <div className="title-holder">
                    <h2>About Us</h2>
                    <div className="subtitle">learn more about us</div>
                </div>
                <Row>
                    <Col sm={6}>
                        <Image src={img1} />
                    </Col>

                    <Col sm={6}>
                        <p>Welcome to Cencadian – Where Innovation Finds Its Form! At Cencadian, we've created a vibrant platform that serves as the nexus between visionary companies and skilled professionals, as well as budding interns seeking to make their mark in the world of web development.</p>
                        <p>For companies, Cencadian offers a seamless hiring process, connecting you with top-tier web developers poised to bring your digital dreams to life. Our platform simplifies the journey from concept to creation, ensuring your projects are in the hands of the best talent available.</p>
                        <p>Interns, at Cencadian, your journey into web development takes center stage. Dive into hands-on experiences, collaborate with industry experts, and build a portfolio that stands out. This is your chance to learn, grow, and launch a successful career in the world of web development.</p>
                        {/*<p>Cencadian is more than a platform; it's a community that believes in the power of collaboration, innovation, and continuous learning. Join us and be part of a dynamic ecosystem where companies thrive, projects flourish, and interns soar. Let's together shape the digital future at Cencadian!</p>*/}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;