import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import {
  ButtonContainer,
  GitHubButton,
  HighlightText,
  InstagramButton,
  LinkedinButton,
  LogoText,
  MobButtonContainer,
  MobileIcon,
  MobileLink,
  MobileMenu,
  Nav,
  NavbarContainer,
  NavItems,
  NavLink,
  NavLogo,
} from "./NavbarStyle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // State to track the active link

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link:string) => {
    setActiveLink(link); // Update the active link state
    setIsOpen(false); // Close the mobile menu on link click
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1280) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/home">
          <LogoText>
            <span
              style={{ fontSize: "56px", marginTop: "4px", marginRight: "4px" }}
            >
              {"<"}
            </span>
            <HighlightText>ms/rawat.</HighlightText>
            <span
              style={{ fontSize: "56px", marginTop: "4px", marginLeft: "4px" }}
            >
              {">"}
            </span>
          </LogoText>
        </NavLogo>
        <NavItems>
          {[
            "#About",
            "#Experience",
            "#Skills",
            "#Projects",
            "#Certifications",
            "#Education",
          ].map((link) => (
            <NavLink
              key={link}
              href={link}
              onClick={() => handleLinkClick(link)}
              active={activeLink === link}
            >
              {link.substring(1).charAt(0).toUpperCase() + link.substring(2)}
            </NavLink>
          ))}
        </NavItems>
        <ButtonContainer>
          {/* Social Media Icons */}
          <InstagramButton
            href="https://www.instagram.com/_m._s._rawat_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram style={{ width: "14px", height: "14px" }} />
          </InstagramButton>
          <GitHubButton
            href="https://github.com/mohitSr1021"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub style={{ width: "14px", height: "14px" }} />
          </GitHubButton>
          <LinkedinButton
            href="https://www.linkedin.com/in/mohit-singh-rawat-12680b21b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin style={{ width: "14px", height: "14px" }} />
          </LinkedinButton>
        </ButtonContainer>
        <MobileIcon onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileIcon>
      </NavbarContainer>
      <MobileMenu isOpen={isOpen}>
        {["#About","#Experience", "#Skills", "#Projects", "#Education"].map((link) => (
          <MobileLink
            key={link}
            href={link}
            onClick={() => handleLinkClick(link)}
          >
            {link.substring(1).charAt(0).toUpperCase() + link.substring(2)}{" "}
            {/* Capitalize link text */}
          </MobileLink>
        ))}
        <MobButtonContainer>
          {/* Social Media Icons in Mobile Menu */}
          <InstagramButton
            href="https://www.instagram.com/_m._s._rawat_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram style={{ width: "13px", height: "13px" }} />
          </InstagramButton>
          <GitHubButton
            href="https://github.com/mohitSr1021"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub style={{ width: "13px", height: "13px" }} />
          </GitHubButton>
          <LinkedinButton
            href="https://www.linkedin.com/in/mohit-singh-rawat-12680b21b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin style={{ width: "13px", height: "13px" }} />
          </LinkedinButton>
        </MobButtonContainer>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
