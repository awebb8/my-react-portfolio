import React from 'react';
import "../style/contactCard.css";

function ContactCard() {
    return (
        <div className="container-fluid mx-4 my-5">
            <div className="row">
                <div className="col-sm-7">
                    <div className="card">
                        <div className="card-header">
                          <h1>Contact</h1>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label for="NameText">Name</label>
                                    <textarea className="form-control" id="NameText" rows="1" placeholder="Name"></textarea>
                                  </div>
                                <div className="form-group">
                                  <label for="emailInput">Email</label>
                                  <input type="email" className="form-control" id="emailInput" placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                  <label for="messageText">Message</label>
                                  <textarea className="form-control" id="messageText" rows="3" placeholder="Message"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;