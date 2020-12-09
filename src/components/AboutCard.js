import React from 'react';
import "../style/aboutCard.css";
import profilePicture from "../assets/images/Alix.jpeg";
import Resumé from "../assets/Webb, Alix - Resume.pdf"

function AboutCard() {
    return (
        <section className="container-fluid" style={{margin:"3%"}}>
            <div className="row">
                <div style={{width:"94%"}}>
                    <div className="card main-card">
                        <div className="card-header">
                        <h1>About Me</h1>
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                <img src={profilePicture} alt="Alix Webb" style={{width:"200px", height:"200px"}}/>
                                I'm Alix Webb, and I'm a Web Developer.  I was raised in many places throughout the Eastern U.S., but I currently live in Greenville, SC.  In 2014, I graduated from Virginia Tech with a Bachelor of Science in Industrial and Systems Engineering.  Post-graduation, I used my engineering skills to work for an automotive supplier for six years.  Because I wasn't feeling fulfilled, I sought out a new career direction in hopes of finding my dream job.  I hope to become a Full Stack Web Developer, but more than that, I hope to work for a company that has a great purpose.  My dream company does something for the greater good.  It is a company that is full of people who work hard but also know how to have fun.  It is a company that deeply cares for the well-being of its associates and pushes them to continuously learn and grow. 
                                If you'd like to learn more about my professional experience, please visit any of the following links:
                            </p>
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