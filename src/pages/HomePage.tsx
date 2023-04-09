import React, { useState } from "react";
import styled from "styled-components";
import Typing from "react-typing-animation";

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #2c2541;
  color: #fff;
`;

const BrandText = styled.h1`
  display: flex;
  align-items: center;
  font-size: 5rem;
  margin-bottom: 1rem;
  color: #9147ff;
  text-shadow: 1px 1px #000;
`;

const SubText = styled.p`
  font-size: 2rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #fff;

  .Typing .Cursor {
    color: #fff;
  }
`;

const ExtraElementsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const ExtraElement = styled.div`
  margin: 0 1rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

function HomePage() {
  const [animationFinished, setAnimationFinished] = useState(false);

  const handleFinishedTyping = () => {
    setAnimationFinished(true);
  };

  return (
    <HomePageWrapper>
      <BrandText>
        {" "}
        <img
          src="./src/assets/arcade.svg"
          alt="Logo"
          width="100"
          height="100"
          className="d-inline-block align-text-top me-2"
        />
        RythmiX
      </BrandText>
      <Typing speed={80} onFinishedTyping={handleFinishedTyping}>
        <SubText>
          <Typing.Delay ms={500} />
          Music for your soul
        </SubText>
      </Typing>
      {!animationFinished && (
        <SubText>
          <Typing.Delay ms={500} />
          <Typing.Backspace count={20} />
        </SubText>
      )}
      <ExtraElementsWrapper>
        <ExtraElement>
          <i className="fas fa-play-circle fa-5x"></i>
        </ExtraElement>
        <ExtraElement>
          <i className="fas fa-headphones fa-5x"></i>
        </ExtraElement>
        <ExtraElement>
          <i className="fas fa-music fa-5x"></i>
        </ExtraElement>
      </ExtraElementsWrapper>
    </HomePageWrapper>
  );
}

export default HomePage;
