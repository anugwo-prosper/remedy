import React from "react";
import styled from "styled-components";
import { FaThumbsUp, FaShieldAlt, FaMedal } from "react-icons/fa";

// Styled Components
const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px;
  background-color: #f9f9f9;
  padding-top:120px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  width: 300px;
  max-width: 90%;
  margin: 10px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #79B251;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  color: #2E4BA7;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #4a4a4a;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Component
const StatsSection = () => {
  return (
    <StatsContainer>
      {/* Card 1 */}
      <Card>
        <IconWrapper>
          <FaThumbsUp />
        </IconWrapper>
        <Title>98% Member Satisfaction Rating</Title>
        <Description>High satisfaction rating from our valued members.</Description>
      </Card>

      {/* Card 2 */}
      <Card>
        <IconWrapper>
          <FaShieldAlt />
        </IconWrapper>
        <Title>$8B+ Medical Bills Shared and Discounted</Title>
        <Description>Over $8 billion in medical costs shared and discounted.</Description>
      </Card>

      {/* Card 3 */}
      <Card>
        <IconWrapper>
          <FaMedal />
        </IconWrapper>
        <Title>Highest Rated in Nation</Title>
        <Description>Top-rated service across the nation for health coverage.</Description>
      </Card>
    </StatsContainer>
  );
};

export default StatsSection;
