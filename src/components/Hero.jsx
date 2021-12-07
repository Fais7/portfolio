import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Header from "./Header";
import fworld from '../Assets/fworld.png';
import Typical from 'react-typical';

import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi, I'm <i> <Typical
              steps={['< Faisal Farhan />', 1000, ' ', 500]}
              loop={Infinity}
              wrapper="p" className="txt" /></i></h1>
            <h5>Full Stack Web Developer</h5>
            <a href="/#" download className="btnr" >Resume </a>
          </HeroLeft>
          <HeroRight>
            <Image
              src={fworld}
              alt="faisal"
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img
              src={"https://raw.githubusercontent.com/Fais7/portfolio/main/src/Assets/scroll-down.svg"}
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
