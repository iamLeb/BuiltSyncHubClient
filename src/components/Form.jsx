import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';
import img6 from '../assets/images/img6.jpg';
import img7 from '../assets/images/img7.jpg';
import img8 from '../assets/images/img8.jpg';
import img9 from '../assets/images/img9.jpg';

const worksData = [
    {
        id: 1,
        link: 'https://www.google.com',
        image: img1,
        title: 'Lonely Path',
        subtitle: 'Web Design'
    },
    {
        id: 2,
        link: 'https://www.google.com',
        image: img2,
        title: 'Photographer Girl',
        subtitle: 'Branding'
    },
    {
        id: 3,
        link: 'https://www.google.com',
        image: img3,
        title: 'The Difference',
        subtitle: 'Web Design'
    },
    {
        id: 4,
        link: 'https://www.google.com',
        image: img4,
        title: 'Nature Patterns',
        subtitle: 'Branding'
    },
    {
        id: 5,
        link: 'https://www.google.com',
        image: img5,
        title: 'The Difference',
        subtitle: 'Photography'
    },
    {
        id: 6,
        link: 'https://www.google.com',
        image: img6,
        title: 'Winter Sonata',
        subtitle: 'Web Design'
    },
    {
        id: 7,
        link: 'https://www.google.com',
        image: img7,
        title: 'Lonely Path',
        subtitle: 'Branding'
    },
    {
        id: 8,
        link: 'https://www.google.com',
        image: img8,
        title: 'Appreciation',
        subtitle: 'Photography'
    },
    {
        id: 9,
        link: 'https://www.google.com',
        image: img9,
        title: 'Happy Days',
        subtitle: 'Web Design'
    }
];

const Form = () => {
    return (
        <section id="project" className="block works-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>Our Projects</h2>
                    <div className="subtitle">
                        our awesome works
                    </div>
                </div>
                <Row className='portfoliolist'>
                    <Col sm={6}>
                        <input placeholder='Enter First Name' type="text" className="form-control"/>
                    </Col>

                    <Col sm={6}>
                        <input placeholder='Enter Last Name' type="text" className="form-control"/>
                    </Col>

                    <Col sm={6}>
                        <input placeholder='Enter Email' type="email" className="form-control"/>
                    </Col>

                    <Col sm={6}>
                        <input placeholder='Enter Phone Number' type="tel" className="form-control"/>
                    </Col>

                    <Col sm={6}>
                        <input placeholder='Enter Password' type="password" className="form-control"/>
                    </Col>

                    <Col sm={6}>
                        <input placeholder='Enter Password Again' type="password" className="form-control"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Form;