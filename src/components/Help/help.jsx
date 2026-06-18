import React from "react";
import "./help.css";
import Navbar from "../home/Navbar/Navbar.jsx";

const contacts = [
    {
        id : 1,
        name : "Abel John Jose",
        role : "Department Representative",
        phoneNo : "+91 1234567890",
        mail : "example@email.com"
    },

    {   
        id : 2,
        name : "Abel John Jose",
        role : "Department Representative",
        phoneNo : "+91 1234567890",
        mail : "example@email.com"
    },

    {   
        id : 3,
        name : "Abel John Jose",
        role : "Department Representative",
        phoneNo : "+91 1234567890",
        mail : "example@email.com"
    },

];

function Help(){
    return (
        <main className ="help-page">
        <Navbar />
        <div className="help-heading-wrapper">
        <span className="help-line-v left" />
        <span className="help-line-v right" />
        <span className="help-line-h top" />
        <span className="help-line-h bottom" />
        <h1 className="help-heading">Help</h1>
      </div>
        <p className="description">Questions, concerns or suggestions? Get in touch with us</p>
        <div className = "contact-flex">
            {
                contacts.map((contact) => (
                    <div key={contact.id} className="contact">
                    <div className="contact-identity-group">
                        <p className="contact-name">{contact.name}</p>
                        <p className="contact-role">{contact.role}</p>
                    </div>

                    <div className="contact-details-group">
                        <p className="contact-phone">{contact.phoneNo}</p>
                        <a href={`mailto:${contact.mail}`} className="contact-mail">{contact.mail}</a>
                        </div>
                    </div>
    ))}
        </div>
        <div className="footer">
            <p>© CS Association 2025 - 26</p>
            </div>
        </main>
    )
}

export default Help;