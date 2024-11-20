import React from "react";
import styled, { keyframes } from "styled-components";
import family from "../Images/family.png";

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${family});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 1.5s ease-out;
`;

const ParagraphWrapper = styled.div`
  max-width: 800px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  text-align: justify;
  font-size: 1.2rem;
  line-height: 1.6;
  color: #fff;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  animation: ${slideUp} 1.2s ease-out;
`;

// Component
const Section = () => {
  return (
    <SectionContainer>
      <ParagraphWrapper>
        <p>
          PureVita Remedies is more than just a healthcare provider—it's a
          compassionate, faith-driven alternative designed to support
          individuals and families seeking a holistic and affordable approach
          to health and wellness. Rooted in Christian principles, PureVita
          Remedies offers programs tailored to meet the unique needs of every
          stage of life, ensuring access to quality care while fostering a
          supportive community. At the heart of PureVita Remedies lies a
          commitment to the biblical model of sharing. Our approach emphasizes
          the importance of communal support, prayer, and shared responsibility
          in medical expenses, creating a network of like-minded individuals
          united by faith and a shared purpose.
        </p>
      </ParagraphWrapper>
    </SectionContainer>
  );
};

export default Section;
