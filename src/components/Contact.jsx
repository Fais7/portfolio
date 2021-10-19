import React from "react";
import Socialicn from "./Socialicn";
import { ContactWrapper, Email } from "./ContactElements";
function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard">
          <Email>
            <span>faisal7farhan@gmail.com</span>
            <a
              className="btn btn-outline-dark"
              href="mailto: faisal7farhan@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Mail
            </a>
          </Email>
        </div>
        <Socialicn />
      </div>
    </ContactWrapper>
  );
}

export default Contact;
