import styled from "styled-components";
import EmailIcon from "@mui/icons-material/Email";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  background: black;
`;
const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  color: white;
`;

const Logo = styled.h1`
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.primary};
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  font-size: 2rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Logo>Mohit Singh Rawat</Logo> <span> ❤️ </span>
          <SocialMediaIcon
            href={`mailto:mohit.sr.lvp1021@gmail.com`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon />
          </SocialMediaIcon>
        </div>
        <Copyright>
          &copy; 2024 Mohit Singh Rawat. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
