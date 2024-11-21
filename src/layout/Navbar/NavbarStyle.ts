import { Link as LinkR } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FaChevronDown } from "react-icons/fa";
const NavbarHeight = "80px";

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.bg};
  height: ${NavbarHeight};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${NavbarHeight};
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const NavLogo = styled(LinkR)`
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 8px;
  @media (max-width: 640px) {
    padding: 6px 8px;
  }
`;

export const LogoText = styled.span`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 24px;
  color: ${({ theme }) => theme.text_primary};
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    text-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 960px) {
    font-size: 18px;

    .fldajfa {
      font-size: 34px !important;
    }
  }
`;

export const HighlightText = styled.span`
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.primary},
    #5eead4,
    ${({ theme }) => theme.primary}
  );
  background-size: 200% 200%;
  animation: ${gradientAnimation} 5s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
`;

export const NavItems = styled.ul`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 0 6px;
  list-style: none;

  @media (max-width: 960px) {
    font-size: 14px;
    gap: 30px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a<{ active?: boolean }>`
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  padding: 10px 15px;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  ${({ active }) =>
    active &&
    `color: white !important; font-weight: bold;`}
`;

export const ButtonContainer = styled.div`
  width: auto;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.white};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  padding: 6px;
  text-decoration: none;
  font-size: 16px;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    border: 1.8px solid ${({ theme }) => theme.primary};
    box-shadow: 0 0 10px ${({ theme }) => theme.primary}40;
  }

  &::after {
    content: "GitHub";
    position: absolute;
    right: 0px;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 14px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
    visibility: visible;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const MobButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const LinkedinButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.white};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  gap: 4px;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  padding: 6px;
  text-decoration: none;
  font-size: 16px;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    border: 1.8px solid ${({ theme }) => theme.primary};
    box-shadow: 0 0 10px ${({ theme }) => theme.primary}40;
  }

  &::after {
    content: "LinkedIn";
    position: absolute;
    right: 0px;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 14px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
    visibility: visible;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const InstagramButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.white};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  padding: 6px;
  text-decoration: none;
  font-size: 16px;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    border: 1.8px solid ${({ theme }) => theme.primary};
    box-shadow: 0 0 10px ${({ theme }) => theme.primary}40;
  }

  &::after {
    content: "Instagram";
    position: absolute;
    left: 0;
    transform: translateX(-105%);
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 14px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  }

  &:hover::after {
    opacity: 1; /* Show on hover */
    visibility: visible; /* Show on hover */
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  position: fixed;
  top: ${NavbarHeight};
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  padding: 32px;
  background-color: ${({ theme }) => theme.bg};
  transition: transform 0.6s ease-in-out, opacity 0.8s ease-in-out;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  padding: 12px;
  width: 100%;
  transition: all 0.2s ease-in-out;
  border-radius: 8px;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.primary}20;
    color: ${({ theme }) => theme.primary};
  }
`;

export const OthersItems = styled.a`
  color: ${({ theme }) => theme.bg};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 50%;
    background-color: ${({ theme }) => theme.primary};
    transition: all 0.3s ease-in-out;
  }

  &:hover,
  &.active {
    color: ${({ theme }) => theme.primary};
    &:after {
      width: 100%;
      left: 0;
    }
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  background-color: white;
  padding: 12px 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: none;
  gap: 4px;
  flex-direction: column;
  z-index: 10;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.2s ease, transform 0.2s ease;
  box-shadow: rgba(100, 100, 100, 0.9) 0px 0px 0px 1px;
`;

export const OthersContainer = styled.div`
  position: relative;
  &:hover ${Dropdown} {
    display: flex;
    opacity: 1;
    transform: translateY(0);
  }
`;

export const OthersLink = styled.a`
  position: relative;
  padding: 10px 15px;
  color: ${({ theme }) => theme.white};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
  }
`;

export const Icon = styled(FaChevronDown)`
  margin-left: 5px;
  transition: transform 0.2s ease;
`;
