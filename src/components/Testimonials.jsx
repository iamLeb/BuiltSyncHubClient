import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

const testimonialsData = [
    {
        id: 1,
        name: 'John Wills',
        description: '"Cencadian exceeded our expectations! Their web development prowess transformed our online presence. The team\'s dedication and innovative solutions truly set them apart. Our website is now a testament to their commitment to excellence."',
        designation: 'Manager'
    },
    {
        id: 2,
        name: 'Jasmine Perry',
        description: '"Working with Cencadian was a game-changer for us. Their design team brought our vision to life, creating a user-friendly and visually stunning platform. Our customers love the new experience, and we\'ve seen a significant increase in conversions!"',
        designation: 'Accountant'
    },
    {
        id: 3,
        name: 'Rocky Johnson',
        description: '"Cencadian\'s SEO and digital marketing strategies propelled our brand to new heights. The results speak for themselves – increased online visibility, higher rankings, and a surge in organic traffic. A highly recommended partner for digital success!"',
        designation: 'CEO'
    }
]

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>Client testimonials</h2>
                    <div className="subtitle">what client says about us</div>
                </div>
                <Carousel controls={false}>
                    {
                        testimonialsData.map(testimonials => {
                            return (
                                <Carousel.Item key={testimonials.id}>
                                    <blockquote>
                                        <p>{testimonials.description}</p>
                                        <cite>
                                            <span className='name'>{testimonials.name}</span>
                                            <span className='designation'>{testimonials.designation}</span>
                                        </cite>
                                    </blockquote>
                                </Carousel.Item>
                            );
                        })
                    }
                </Carousel>
            </Container>
        </section>
    );
};

export default Testimonials;