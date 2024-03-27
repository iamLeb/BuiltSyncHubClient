import React from 'react';
import Container from "react-bootstrap/Container";
import Accordion from 'react-bootstrap/Accordion';
import {useNavigate} from "react-router-dom";


const Jobs = () => {
    const navigate = useNavigate();
    return (
        <section className="block" id='postings'>
            <Container fluid>
                <div className="title-holder">
                    <h2>Available Coding Internship</h2>
                    <div className="subtitle">Relaxed Atmosphere, Best Working Environment, Top Notch Projects...</div>
                </div>

                <div>
                    <h2 className='mt-3 fw-bolder'>Internship Opportunities at Cencadian</h2>
                    <h3 className='mt-3'>Unlock Your Potential in Web Development</h3>
                    <p>Ready to take the first step? Applying for an internship at Cencadian is easy:</p>
                    <p>Welcome to the gateway of endless possibilities! At [Your Company Name], we believe in nurturing
                        talent, providing a platform for growth, and creating opportunities for aspiring web developers.
                        Join our internship program and embark on a journey that will shape your career.</p>
                </div>

                <div>
                    <h2 className='mt-3 fw-bolder'>Why Choose Cencadian Internship?</h2>
                    <h3 className='mt-3'>Real-World Experience</h3>
                    <p>Immerse yourself in hands-on projects that go beyond textbooks. Work on real-world assignments
                        alongside seasoned professionals and gain practical insights into web development.</p>
                </div>

                <div>
                    <h3 className='mt-3'>Mentorship and Guidance</h3>
                    <p>At Cencadian, we understand the value of mentorship. Benefit from one-on-one guidance from
                        experienced developers who are passionate about helping you succeed in your career.</p>
                </div>

                <div>
                    <h3 className='mt-3'>Diverse Learning Environment</h3>
                    <p>Collaborate with a diverse group of interns and professionals. Our inclusive environment encourages creativity, innovation, and a cross-pollination of ideas.</p>
                </div>

                <div>
                    <h3 className='mt-3'>Build Your Portfolio</h3>
                    <p>Every project you contribute to is a stepping stone for your portfolio. Showcase your skills and accomplishments to future employers, setting the stage for a successful career.</p>
                </div>

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What We Look For:</Accordion.Header>
                        <Accordion.Body>
                            <ol>
                                <li><b>Team Player: </b> <br/>Embrace collaboration and contribute to a positive and
                                    dynamic team environment.
                                </li>
                                <li><b>Problem Solver: </b> <br/>Exhibit a problem-solving mindset, ready to tackle
                                    challenges and find innovative solutions.
                                </li>
                                <li><b>Adaptability: </b> <br/>Web development is a dynamic field. Show your ability to
                                    adapt to new technologies and approaches.
                                </li>
                            </ol>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <div>
                    <h2 className='mt-3'>How to Apply</h2>
                    <p>Ready to take the first step? Applying for an internship at Cencadian is easy:</p>

                    <ol>
                        <li><b>Explore Open Positions:</b> Check our current internship openings on our careers page.
                        </li>

                        <li><b>Submit Your Application:</b> Complete the online application form and attach your resume
                            and
                            portfolio.
                        </li>

                        <li><b>Interview Process:</b> If your skills match our requirements, you'll be invited for an
                            interview to discuss your goals and potential contributions.
                        </li>

                        <li><b>Welcome to Cencadian:</b> Successful candidates will join our team, kickstarting their
                            internship journey with exciting projects and a supportive community.
                        </li>
                    </ol>
                </div>

                <h2 className='mt-3'>Join Cencadian and Shape Your Future!</h2>
                <p>At Cencadian, we believe in empowering the next generation of web developers. Join our internship
                    program, where innovation meets opportunity, and kickstart your journey toward a successful career
                    in web development. Apply today and become a part of our dynamic and vibrant community!</p>

            </Container>

            <div className="text-center">
                <button onClick={() => navigate('/auth/register?registerAs=intern')} className="btn btn-primary">Apply Now &raquo;</button>
            </div>
        </section>
    );
};

export default Jobs;