import React from "react";
import Logo from "../../assets/star-wars-logo.png";
import { FooterContainer } from "./styles";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate()

  const currentYear = new Date().getFullYear();


  return (
    <FooterContainer>
      <div className="footer-logo">
        <img src={Logo} alt="" onClick={() => {
            navigate("/")
          }} />
      </div>
      <div className="copyright-text">
        <span className="copyright">&copy; copyright {currentYear}  </span>
      </div>
    </FooterContainer>
  );
};

export default Footer;
