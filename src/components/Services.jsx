import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const servicesData = [
    {
        id: 1,
        icon: 'fas fa-computer',
        title: 'Web Development Solutions',
        description: 'At Cencadian, we specialize in crafting bespoke web solutions tailored to meet your company\'s unique needs. Whether you\'re looking for an engaging e-commerce platform, a corporate website, or a dynamic web application, our seasoned professionals are here to turn your ideas into a digital reality. '
    },
    {
        id: 2,
        icon: 'fas fa-snowflake',
        title: 'Innovative Design and User Experience',
        description: 'Unleash the potential of visually stunning and user-friendly designs with Cencadian. Our team of creative designers ensures that every pixel aligns with your brand identity, creating an immersive and intuitive user experience.'
    },
    {
        id: 3,
        icon: 'fas fa-shopping-cart',
        title: 'E-Commerce Expertise',
        description: 'Take your online business to new heights with Cencadian\'s E-Commerce expertise. Our team understands the intricacies of online retail, offering solutions that not only look great but also provide a seamless shopping experience.'
    },
    {
        id: 4,
        icon: 'fas fa-mobile-alt',
        title: 'Mobile App Development',
        description: 'Stay ahead in the digital era with our cutting-edge mobile app development services. Whether it\'s iOS, Android, or cross-platform applications, Cencadian ensures your brand remains accessible to users on the go.'
    },
    {
        id: 5,
        icon: 'fas fa-trophy',
        title: 'SEO and Digital Marketing',
        description: 'Amplify your online visibility with Cencadian\'s SEO and Digital Marketing services. Our experts employ strategic approaches to boost your search engine rankings, increase organic traffic, and enhance your online presence.'
    },
    {
        id: 6,
        icon: 'fas fa-life-ring',
        title: 'Tech-Driven Solutions for Growth',
        description: 'At Cencadian, we embrace the latest technologies to future-proof your digital presence. From cloud integration to responsive design, our tech-driven solutions are designed to keep your business ahead of the curve.'
    }
]
const Services = () => {
    return (
        <section id="services" className="block services-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>Our services</h2>
                    <div className="subtitle">
                        services we provide
                    </div>
                </div>
                <Row>
                    {servicesData.map((services) => (
                        <Col sm={4} className="holder" key={services.id}>
                            <div className="icon">
                                <i className={services.icon}></i>
                            </div>
                            <h3>{services.title}</h3>
                            <p>{services.description}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Services;