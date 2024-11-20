import React from "react";
import styled from "styled-components";
import pureVITA from '../Images/pureVITA.png'

// Styled Components
const FooterContainer = styled.footer`
  background-color: #f9f9f9;
  text-align: center;
  padding: 20px;
  font-size: 14px;
  color: #555;
  border-top: 1px solid #e0e0e0;
  padding-top: 100px;
  /* width: 100%; */
  /* text-align: center; */

  .logo {
    margin-bottom: 10px;

    img {
      width: 100px;
      height: 150px;
      width: 250px;
      border-radius: 200px;
    }
  }

 
  p {
    margin: 10px 0;
    line-height: 1.6;
    color: #2E4BA7;
    /* width: 80px; */
   
    font-family: "Proxima Nova Regular", "Proxima Nova Regular Placeholder", sans-serif;
    font-size: 14px;
   letter-spacing: 0px;
   text-align: center;

    
  }
  .small-text {
      font-size: 12px;
      color: #888;
      padding-top: 1px;
    }
  a {
    color: #007bff;
    text-decoration: none;
    margin: 0 10px;

    &:hover {
      text-decoration: underline;
    }
  }


  // Media Queries for smaller screens
  @media (max-width: 768px) {
    font-size: 12px;

    .logo img {
      width: 80px;
    }

    a {
      margin: 0 5px;
    }
  }
  .contact{
    display: flex;
  }
  .addy{
   
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="logo">
        <img src={pureVITA} alt="PureVita Logo" />
      </div>
      <p>
        PureVita is a nonprofit health care sharing ministry of Christian
        Care Ministry, Inc ("CCM"). PureVita members voluntarily share each
        other's medical expenses in accordance with guidelines adopted by the
        members and administered by CCM. PureVita is not insurance and is not
        regulated as insurance. Neither CCM nor any PureVita member assumes
        any legal obligation to share in the payment of any medical expense
        incurred by another PureVita member. PureVita members are exempt
        from the individual mandate in the Patient Protection and Affordable
        Care Act. See 26 U.S.C. §5090A(d)(2)(B). Certain states expressly
        exempt from insurance regulation healthcare sharing ministries that,
        among other things, post a specific notice. Although PureVita does
        not rely on such express exemptions, PureVita has elected to publish
        these notices.
      </p>
      <div className="contact"><p className="number">CONTACT: +1(857) 688-1295</p>
      <p className="addy">COMPANY ADDRESS: 5810 Kirkwood Hwy, Wilmington, DE, 19808</p></div>
      <div className="small-text"><p >© 2024 Christian Care Ministry. All Rights Reserved</p></div>
      {/* <p className="foot">
        <a className="Privacy" href="#">Privacy Statement</a> | <a className="Terms" href="#">Terms & Conditions</a>
      </p> */}
    </FooterContainer>
  );
};

export default Footer;
