import React from 'react';
import { Link } from "react-router-dom";
import AllHuesImage from "../../assets/images/allhues-homepage.png";

function AllHues() {
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
                                <img className="project-image" src={AllHuesImage} alt="AllHues" style={{width:"100%"}}/>
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
                                <b>User Story</b><br/>
                                As a user searching for beauty products<br/>
                                I want an easy way to filter and find beauty related content<br/>
                                So that I can find products tailored to my hue type.<br/>
                                <br/>
                                As a beauty content creator seeking to share my looks<br/>
                                I want a platform that will allow me to post content<br/>
                                So that I can share my looks and garner followers.<br/>
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

export default AllHues;