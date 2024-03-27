import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';


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

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
            {number}
        </Pagination.Item>,
    );
}

const Works = () => {
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
                    {worksData.map(works => (
                        <Col sm={4} key={works.id}>
                            <div className='portfolio-wrapper'>
                                <a href={works.link}>
                                    <Image src={works.image}/>
                                    <div className='label text-center'>
                                        <h3>{works.title}</h3>
                                        <p>{works.subtitle}</p>
                                    </div>
                                </a>
                            </div>
                        </Col>
                    ))}
                </Row>
                <Pagination>{items}</Pagination>
            </Container>
        </section>
    );
};

export default Works;