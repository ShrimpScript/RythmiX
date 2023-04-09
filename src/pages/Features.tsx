import React from "react";
import styled, { keyframes } from "styled-components";
import "../components/styles/NavBar.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("https://source.unsplash.com/1600x900/?music");
  background-size: cover;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 1s ease;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 1rem;
  margin: 3rem;
  max-width: 80%;

  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    color: #9147ff;
    text-shadow: 1px 1px #000;
    text-align: center;
  }

  .badge {
    font-size: 2rem;
    margin-left: 1rem;
    background-color: #ffc107;
    color: #000;
    text-shadow: none;
  }

  p {
    font-size: 2rem;
    margin-top: 3rem;
    text-align: center;
    color: #000;
    line-height: 3rem;
  }
`;

function Features() {
  return (
    <Container>
      <FeaturesContainer>
        <h1>
          Features <span className="badge bg-secondary">V1.0</span>
        </h1>
        <p>
          Our website empowers music lovers to effortlessly download and listen
          to their favorite tracks on-the-go. With just a few clicks, users can
          input the URL of their preferred video and our platform will
          automatically convert and prepare the audio for offline listening,
          anytime and anywhere.
        </p>
      </FeaturesContainer>
    </Container>
  );
}

export default Features;
