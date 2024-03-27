import React from 'react';
import {useNavigate} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";

const Comp = () => {
    const navigate = useNavigate();
    return (
        <section className="block" id='postings'>
            <Container fluid>
                <div className="title-holder">
                    <h2>For Companies</h2>
                    <div className="subtitle">Empower Your Vision with Expertise</div>
                </div>

                <div>
                    <h2 className='mt-3 fw-bolder'>Empower Your Vision with Expertise</h2>
                    <h3 className='mt-3'>Empower Your Vision with Expertise</h3>
                    <p>Are you looking to elevate your online presence? At [Website Name], we understand the importance of a captivating and functional website for your business. We bring together a diverse pool of talented and qualified professionals, ready to turn your ideas into reality. Whether you need a sleek e-commerce site, a dynamic corporate page, or a user-friendly interface, our skilled web developers are here to meet your unique requirements.</p>

                </div>

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Our Streamlined Hiring Process:</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <h3>Our Streamlined Hiring Process</h3>
                                <li>Embark on your web development journey with ease on Cencadian. Creating a project for your company is a straightforward process. Simply sign up, provide details about your project, and start collaborating with our talented interns. Once you bring forth your proposal, our platform facilitates a seamless collaboration experience.
                                    <br/><br/>
                                    No need for formal interviews – our platform focuses on fostering a collaborative environment where companies and interns work together harmoniously. Share your project vision, review progress, and engage with interns to shape the website you envision. Cencadian simplifies the process, allowing you to concentrate on what truly matters – the growth and success of your business.</li>
                                <br/>

                                <h3>Cost-Effective Solutions</h3>
                                <li>We understand the budget constraints that businesses often face. Cencadian offers cost-effective solutions by providing access to talented interns who are eager to learn and contribute. This not only benefits your company but also provides valuable learning opportunities for the next generation of web developers.</li>

                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <h2 className='mt-3'>Ready?</h2>


            </Container>

            <div className="text-center">
                <button onClick={() => navigate('/auth/register?registerAs=company')} className="btn btn-primary">Join us &raquo;</button>
            </div>
        </section>
    );
};

export default Comp;