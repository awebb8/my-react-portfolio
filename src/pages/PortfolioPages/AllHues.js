import React from 'react';
import { Link } from "react-router-dom";
import AllHues from "../../assets/images/allhues-homepage.png";

function About() {
    return (
        <div>
            <section className="container-fluid" style={{marginBottom:"3%"}}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card main-card" style={{margin:"3%"}}>
                            <div className="card-header">
                            <h1>AllHues</h1>
                            </div>
                            <Link to="/portfolio" style={{textAlign:"right"}}>Back to Portfolio</Link>
                            <div className="card-body">
                                <img className="project-image" src={AllHues} alt="AllHues"/>
                                <br/><br/>
                                <p className="card-text">
                                <b>What is AllHues?</b><br/>
                                AllHues is a portal for content creators to further interact with their followers and curious makeup enthusiasts. Anyone looking for the latest looks can visit <a href="https://allhues.herokuapp.com/">AllHues</a> to find the actual products being used and where you can buy them at.
                                <br/>
                                <br/>
                                <b>Highlights</b><br/>
                                <ul>
                                    <li>User Authentication</li>
                                    <li>Sorting capabilities</li>
                                    <li>Ability to save items to a favorites list</li>
                                    <li>Ability for users to upload images</li>
                                </ul>
                                <br/>
                                <b>Created Using:</b><br/>
                                React, MERN Stack, MongoDB, JSON Web Token (JWT), Cloudinary API, Node.js, JavaScript, CSS, HTML, Heroku
                                <br/>
                                <br/>
                                Click <a href="https://github.com/awebb8/allhues/blob/main/ReadMe.md" target="_blank">here</a> to view the README.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;