import React from "react";
import styled from "styled-components";
import GinnyB from "../Images/GinnyB.avif"
// Styled Components
const TestimonialsContainer = styled.div`
  background-color: #fff;
  padding: 60px 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: #2E4BA7;
  font-weight: 700;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubHeading = styled.h3`
  font-size: 2rem;
  color: #79B251;
  font-weight: 700;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const TestimonialsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TestimonialCard = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 300px;
  max-width: 90%;
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  color: #4a4a4a;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileInfo = styled.div`
  text-align: left;
`;

const ProfileName = styled.p`
  font-size: 0.95rem;
  font-weight: 700;
  color: #2E4BA7;
  margin: 0;
`;

const ProfileTitle = styled.p`
  font-size: 0.85rem;
  color: #4a4a4a;
  margin: 0;
`;

// Component
const TestimonialsSection = () => {
  return (
    <TestimonialsContainer>
      <Heading>We're Not Insurance,</Heading>
      <SubHeading>Our Members Say We're Better.</SubHeading>
      <TestimonialsWrapper>
        {/* Testimonial 1 */}
        <TestimonialCard>
          <TestimonialText>
            "It's very intentional how they try to bless people. It is a ministry."
          </TestimonialText>
          <ProfileWrapper>
            <ProfileImage src={(GinnyB)} alt="Ginny B." />
            <ProfileInfo>
              <ProfileName>Ginny B.</ProfileName>
              <ProfileTitle>Medi-Share Member</ProfileTitle>
            </ProfileInfo>
          </ProfileWrapper>
        </TestimonialCard>

        {/* Testimonial 2 */}
        <TestimonialCard>
          <TestimonialText>
            "Medi-Share brought a personal peace, that brought comfort and support to us."
          </TestimonialText>
          <ProfileWrapper>
            <ProfileImage src="/path/to/image2.jpg" alt="The Sullivans" />
            <ProfileInfo>
              <ProfileName>The Sullivans</ProfileName>
              <ProfileTitle>Medi-Share Members</ProfileTitle>
            </ProfileInfo>
          </ProfileWrapper>
        </TestimonialCard>

        {/* Testimonial 3 */}
        <TestimonialCard>
          <TestimonialText>
            "Medi-Share helped us pay for something that we could believe in."
          </TestimonialText>
          <ProfileWrapper>
            <ProfileImage src="/path/to/image3.jpg" alt="Paul S." />
            <ProfileInfo>
              <ProfileName>Paul S.</ProfileName>
              <ProfileTitle>Medi-Share Member</ProfileTitle>
            </ProfileInfo>
          </ProfileWrapper>
        </TestimonialCard>
      </TestimonialsWrapper>
    </TestimonialsContainer>
  );
};

export default TestimonialsSection;
