import React from "react";
import styled from "styled-components";

// Styled Components
const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  padding: 20px;
  background: linear-gradient(145deg, #0b1d40, #071433);
  color: white;
  text-align: center;
  height: 100%;
  /* padding-top:700px; */
  /* background-image: radial-gradient(circle, rgba(0, 123, 255, 0.1), transparent 50%); */
  
  @media (max-width: 768px) {
    height: auto;
    padding: 40px 20px;
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Highlight = styled.span`
  color: #f68b1f;
  font-weight: 700;
`;

const SubHeading = styled.p`
  font-size: 1.25rem;
  line-height: 1.5;
  max-width: 600px;
  color: #e0e0e0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Component
const Container = () => {
  return (
    <HeroContainer>
      <Heading>
        We've built an <Highlight>integrated commercial services</Highlight> platform.
      </Heading>
      <SubHeading>
      PureVita Remedies: Faith, Care, and Community in Healthcare

PureVita Remedies is a transformative healthcare alternative designed for individuals and families seeking compassionate, faith-based solutions tailored to their unique needs. Rooted in Christian principles, PureVita Remedies blends quality care, affordability, and a deep sense of community to redefine what healthcare means for people of faith. <br /> <br />

At PureVita, we believe that healthcare is not just about treatment—it’s about walking alongside you in every stage of life. Whether you’re celebrating the joys of good health or facing life’s unexpected challenges, we’re here to ensure you’re supported by more than just medical professionals. Our programs are crafted with you in mind, offering access to excellent care at an affordable price while fostering a faith-driven network that believes in prayer, support, and shared responsibility. <br /> <br />

At the heart of PureVita Remedies lies a commitment to the biblical model of sharing. Our approach emphasizes the importance of communal support, prayer, and shared responsibility in medical expenses, creating a network of like-minded individuals united by faith and a shared purpose. When you choose PureVita Remedies, you’re not just accessing affordable healthcare—you’re joining a community that uplifts, encourages, and walks alongside you during life’s most challenging moments. <br /><br />

What makes PureVita Remedies different? It’s our commitment to the biblical model of sharing. This time-tested approach goes beyond traditional healthcare by creating a compassionate system where members contribute to one another’s medical expenses. It’s more than financial support; it’s a spiritual partnership rooted in prayer, encouragement, and genuine care for each other. At PureVita, when you share, you save—not just monetarily but emotionally and spiritually as well. <br /> <br />

Our programs are designed to empower individuals and families with affordable, quality healthcare that reflects their values. By integrating faith and medicine, we build a foundation of trust and reliability. Members can take comfort in knowing they’re part of a broader Christian community—a family of believers committed to uplifting one another. <br /> <br />

Our Mission
To glorify God through compassionate and community-focused healthcare that uplifts individuals, empowers families, and brings hope to every stage of life. <br /> <br />

Our Vision
To lead a movement that combines faith, modern medicine, and community support, ensuring that healthcare is accessible, affordable, and Christ-centered for all. <br /> <br />

Why Choose PureVita Remedies? <br /><br />

Affordable Healthcare: Cost-effective solutions tailored to  meet your needs.
Faith-Based Community: A supportive network rooted in prayer, fellowship, and biblical values.
Quality Care: Access to exceptional healthcare providers and resources.
Shared Responsibility: A healthcare model that reflects the biblical principle of bearing one another’s burdens.
At PureVita Remedies, we’re not just a healthcare provider—we’re a ministry of hope, a community of believers, and a partner in your journey to health and wellness. Together, we’re building a system of care that uplifts, inspires, and transforms lives through the power of faith and love. <br /><br />

Let PureVita Remedies be your partner in health, faith, and life. Experience the joy of healthcare that truly cares about your well-being, both physical and spiritual. <br /><br />
      </SubHeading>
    </HeroContainer>
  );
};

export default Container;
