import React from 'react';
import "../style/aboutCard.css";
import profilePicture from "../assets/images/Alix.jpeg";
import Resumé from "../assets/Webb, Alix - Resume.pdf"

function AboutCard() {
    return (
        <section className="container-fluid" style={{margin:"3%"}}>
            <div className="row">
                <div className="col-sm-7">
                {/* <div style={{width:"94%"}}> */}
                    <div className="card main-card">
                        <div className="card-header">
                        <h1>About Me</h1>
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                <img src={profilePicture} alt="Alix Webb" style={{width:"200px", height:"200px"}}/>
                                I’m a full stack web developer with a B.S. in Industrial and Systems Engineering and a minor in Green Engineering from Virginia Tech as well as a certificate in Full Stack Web Development from Georgia Tech.  Currently, I’m living in Greenville, SC, but I’m open to relocating.  I have over 5 years of experience in project management, and I have previously led a few web process improvement projects.  I have experience using HTML, CSS, JavaScript, JQuery, AJAX, JSON,  Node.js, Express.js, React, MERN Stack, MongoDB, MySQL, Heroku, and Amazon Web Services (AWS).  My experience includes working in the requirements, design, coding and implementation, and test phases of development.  Professionally, I enjoy working on a team of highly motivated people that strive for continuous self-improvement and growth.  I prefer a positive and relaxed work environment with open and honest communication.  While working with others, I have found that support, respect, and a willingness to listen to and adopt new ideas are key.  If you’re looking for a new team member who is genuinely committed and takes ownership, please connect with me. 
                            </p>
                        </div>
                    </div>
                {/* </div> */}
                </div>
                <div className="col-sm-4">
                <div className="card main-card">
                        <div className="card-header">
                        <h1>Let's Connect</h1>
                        </div>
                        <div className="card-body">
                            <li><a href="https://www.linkedin.com/in/alixwebb/">LinkedIn</a></li>
                            <li><a href="https://github.com/awebb8">GitHub</a></li>
                            <li><a href={Resumé}>Resumé</a></li>
                            <br></br>
                            <p>Contact Information:</p>
                            <li>Phone Number: (919) 943-6841</li>
                            <li>Email:  alixkwebb@gmail.com</li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCard;