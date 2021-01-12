import React from 'react';
import { Link } from "react-router-dom";
import WhatsForDinnerImage from "../../assets/images/project-1-whats-for-dinner.png";

function WhatsForDinner() {
    return (
        <div>
            <section className="container-fluid" style={{marginBottom:"3%"}}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card main-card" style={{margin:"3%"}}>
                            <div className="card-header">
                            <h1>What's For Dinner</h1>
                            </div>
                            <Link to="/portfolio" style={{textAlign:"right"}}>Back to Portfolio</Link>
                            <div className="card-body">
                                <img className="project-image" src={WhatsForDinnerImage} alt="WhatsForDinner" style={{width:"80%"}}/>
                                <br/><br/>
                                <p className="card-text">
                                <b>What is What's For Dinner?</b><br/>
                                Do you ever go hungry while you fruitlessly debate what to eat? It’s the age-old question: What’s for Dinner? We made an app to help you with this. What’s for Dinner will give you recipe or restaurant recommendations based on your input. It can even decide for you if you click one of the randomizer buttons. What’s for Dinner is a meal planning assistant. It gives you choices based on your input. If you want to eat out it will show you restaurants. If you want to cook, it will show you recipes. We made this because we are indecisive, hungry people who want to make informed eating decisions.
                                <br/>
                                <a href="https://awebb8.github.io/project-1/">Click here to find out What's For Dinner.</a>
                                <br/>
                                <br/>
                                <b>Highlights</b><br/>
                                <ul>
                                    <li>Use of Local Storage</li>
                                    <li>Search functionality</li>
                                    <li>Randomizer buttons</li>
                                    <li>Use of three APIs:  Spoonacular, Yelp, and Google Maps</li>
                                </ul>
                                <br/>
                                <b>Created Using:</b><br/>
                                HTML, CSS, JavaScript, JQuery, AJAX, Spoonacular API, Yelp API, Google Maps API, Github Pages
                                <br/>
                                <br/>
                                <b>User Story</b><br/>
                                As an indecisive and hungry person<br/>
                                I want to get a list of food choices<br/>
                                So that I can make a decision on what to eat.<br/>
                                <br/>
                                <br/>
                                Click <a href="https://github.com/awebb8/project-1/blob/master/README.md" target="_blank">here</a> to view the README.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhatsForDinner;