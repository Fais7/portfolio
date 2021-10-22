import React from "react";
import { stackList } from "../data/ProjectData";
import fw1 from '../Assets/fw1.png'
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElement.jsx";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src={fw1}
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Faisal Farhan</strong> and i'm an self-motivated and hardworking seeking for an opportunity to work in a challenging environment to prove my skills and utilize my knowledge in the growth of the organization.<br/> <mark> Good knowledge of java oop's concept, java advance as well as reactJS include axios, redux, hooks, props etc...</mark> 
          </div><br />
          
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
