import React from "react";
import styled from "styled-components";
import pureVITA from "../Images/pureVITA.webp";

// Styled Components
const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
  }
`;

const LeftSection = styled.div`
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const RightSection = styled.div`
  max-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 1.5rem;
  }
`;

const Heading = styled.h1`
  font-size: 37px;
  color: #2E4BA7;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubHeading = styled.p`
  font-size: 1rem;
  color: #2E4BA7;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Button = styled.a`
  display: inline-block;
  background-color: #79B251;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    background-color: #002b66;
  }
`;

const ImageWrapper = styled.div`
  width: 290px;
  max-width: 400px; /* Restrict maximum size */
  border-radius: 200px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    max-width: 80%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

// Hero Section Component
const HeroSection = () => {
  return (
    <HeroContainer>
      {/* Left Content */}
      <LeftSection>
        <Heading>Health Care Made with You in Mind</Heading>
        <SubHeading>
          An Authentic Missionary health care alternative that fits your needs and
          your budget.
        </SubHeading>
        {/* <Button href="#">Learn More →</Button> */}
      </LeftSection>

      {/* Right Content - Image */}
      <RightSection>
        <ImageWrapper>
          <img src={pureVITA} alt="Family Health Care" />
        </ImageWrapper>
      </RightSection>
    </HeroContainer>
  );
};

export default HeroSection;
