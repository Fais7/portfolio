import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
  background-image: url(https://flevix.com/wp-content/uploads/2020/01/Fade-In-Background.svg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 150px;
  position: relative;

  span {
    position: absolute;
    bottom: 3rem;
    color: #fff;
    font-size: 24px;
    font-style: oblique;

    ${'' /* a {
      text-decoration: underline;
    } */}
  }
`;
function Footer() {
    return (
        <FooterSection>
            <div className="Container ">
                <span>
                     Faisal F@rhan
                   
                </span>
            </div>
        </FooterSection>
    );
}

export default Footer;
