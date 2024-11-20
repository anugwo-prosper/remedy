import React from "react";
import styled from "styled-components";
import books from '../Images/books.avif'; // Replace with your image path

// Styled Components
const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    text-align: center;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:50px;

  img {
    width: 90%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const RightSection = styled.div`
  flex: 1;
  padding-left: 2rem;
  padding-top:40px;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #79B251;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SubTitle = styled.h3`
  font-size: 1.5rem;
  color: #2E4BA7;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  color: #4a4a4a;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    font-size: 1rem;
    color: #2E4BA7;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;

    &:before {
      content: "✔️";
      color: #79B251;
      margin-right: 0.5rem;
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

// Component
const GuideSection = () => {
  return (
    <SectionContainer>
      {/* Left Section (Image) */}
      <LeftSection>
        <img src={books} alt="Embrace Wellness Guide" />
      </LeftSection>

      {/* Right Section (Text Content) */}
      <RightSection>
        <Title>Embrace Wellness:</Title>
        <SubTitle>A FREE Guide to Nurturing Your Physical, Mental, Emotional, and Spiritual Health</SubTitle>
        <Text>
          God cares about our health. After all, He created our bodies, minds, hearts, and souls. In this free guide, you’ll discover:
        </Text>
        <BulletList>
          <li>What the Bible says about our physical, mental, emotional, and spiritual health</li>
          <li>Encouragement for taking care of yourself</li>
          <li>Practical tips for wellness</li>
        </BulletList>
      </RightSection>
    </SectionContainer>
  );
};

export default GuideSection;
