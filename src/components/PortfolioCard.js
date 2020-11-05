import React from 'react';
import "../style/portfolioCard.css"
import eatDaBurger from "../assets/images/eat-da-burger-image.png";
import employeeSummary from "../assets/images/employee-summary-img.png";
import javascriptQuiz from "../assets/images/javascript-quiz.png";
import noteTaker from "../assets/images/note-taker.png";
import whatsForDinner from "../assets/images/project-1-whats-for-dinner.png";
import readmeGenerator from "../assets/images/readme-generator.png";
import weatherDashboard from "../assets/images/weather-dashboard.png";

function PortfolioCard() {
    return (
        <section className="container-fluid mx-4 my-5">
            <div className="row">
                <div className="col-sm-9">
                  <div className="card">
                    <div className="card-header">
                      <h1>Portfolio</h1>
                    </div>
                    <div className="card-body">
                      <figure>
                        <img className="left crop" src={javascriptQuiz} alt="javascript-quiz"  style={{width:"350px", height:"350px"}}/>
                        <figcaption>
                          <a href ="https://github.com/awebb8/javascript-fundamentals-quiz" target="_blank">View Github</a> •
                          <a href="https://awebb8.github.io/javascript-fundamentals-quiz/" target="_blank">View Application</a>
                        </figcaption>
                      </figure>

                      <figure>
                        <img className="crop" src={weatherDashboard} alt="weather-dashboard" style={{width:"350px", height:"350px"}}/>
                        <figcaption>
                          <a href ="https://github.com/awebb8/weather-dashboard" target="_blank">View Github</a> •
                          <a href="https://awebb8.github.io/weather-dashboard/" target="_blank">View Application</a>
                        </figcaption>
                      </figure>

                      <figure>
                        <img className="left crop" src={whatsForDinner} alt="project-1" style={{width:"350px", height:"350px"}}/>
                        <figcaption>
                          <a href ="https://github.com/awebb8/project-1" target="_blank">View Github</a> •
                          <a href="https://awebb8.github.io/project-1/" target="_blank">View Application</a>
                        </figcaption>
                      </figure>

                      <figure>
                        <img className="crop" src={readmeGenerator} alt="readme-generator" style={{width:"350px", height:"350px"}}/>
                        <figcaption> 
                          <a href="https://github.com/awebb8/readme-generator" target="_blank">View Github</a>
                        </figcaption>
                      </figure>

                      <figure>
                        <img className="left crop" src={employeeSummary} alt="employee-summary" style={{width:"350px", height:"350px"}}/>
                        <figcaption> 
                          <a href ="https://github.com/awebb8/employee-summary-template" target="_blank">View Github</a> •
                          <a href="https://drive.google.com/file/d/1WtjagtKG1U_6Y4AxiUDYYHU_wp3-fMlW/view" target="_blank">View Video</a>
                        </figcaption>
                      </figure>

                      <figure>
                        <img className="crop" src={noteTaker} alt="note-taker" style={{width:"350px", height:"350px"}}/>
                        <figcaption> 
                          <a href="https://github.com/awebb8/note-taker" target="_blank">View Github</a> •
                          <a href="https://obscure-island-16380.herokuapp.com/" target="_blank">View Application</a>
                        </figcaption>
                      </figure>
                      
                      
                      <figure>
                        <img className="crop" src={eatDaBurger} alt="eat-da-burger" style={{width:"350px", height:"350px"}}/>
                        <figcaption> 
                          <a href="https://github.com/awebb8/eat-da-burger" target="_blank">View Github</a> •
                          <a href="https://eat-da-burger-alix.herokuapp.com/" target="_blank">View Application</a>
                        </figcaption>
                      </figure>

                    </div>
                  </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioCard;