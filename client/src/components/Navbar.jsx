import React, { useState } from "react";
import styled from "styled-components";
import LogoImg from "../utils/Images/Logo.png";
import { Link as LinkR, NavLink } from "react-router-dom";
import { MenuRounded, Close } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducers/userSlice";

/* Navbar Container */
const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg}CC; /* Slight transparency */
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  color: ${({ theme }) => theme.text_primary};
  border-bottom: 1px solid ${({ theme }) => theme.text_secondary}20;
  backdrop-filter: blur(8px);
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0 24px;
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.img`
  height: 42px;
`;

const MobileIcon = styled.div`
  color: ${({ theme }) => theme.text_primary};
  display: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")}; 
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background: ${({ theme }) => theme.bg};
    padding: 20px 0;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Navlink = styled(NavLink)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  &.active {
    color: ${({ theme }) => theme.primary};
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

/* User Section */
const UserContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  color: ${({ theme }) => theme.primary};
`;

/* Theme Text */
const ThemeText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

/* Toggle Switch Styles */
const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 50px;
  height: 25px;
  background: ${({ theme }) => theme.text_secondary};
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease;
`;

const ToggleCircle = styled.div`
  position: absolute;
  top: 3px;
  left: ${({ isDark }) => (isDark ? "26px" : "3px")};
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.bg};
  border-radius: 50%;
  transition: left 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const TextButton = styled.div`
  color: ${({ theme }) => theme.secondary};
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

/* Navbar Component */
const Navbar = ({ currentUser, toggleTheme, theme }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const isDarkMode = theme === "dark";

  return (
    <Nav>
      <NavContainer>
        {/* Mobile Menu Icon */}
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Close sx={{ color: "inherit" }} /> : <MenuRounded sx={{ color: "inherit" }} />}
        </MobileIcon>

        {/* Logo */}
        <NavLogo to="/">
          <Logo src={LogoImg} />
          FitSync
        </NavLogo>

        {/* Navbar Links */}
        <NavItems isOpen={isOpen}>
          <Navlink to="/" onClick={() => setIsOpen(false)}>Dashboard</Navlink>
          <Navlink to="/workouts" onClick={() => setIsOpen(false)}>Workouts</Navlink>
          <Navlink to="/tutorials" onClick={() => setIsOpen(false)}>Tutorials</Navlink>
          <Navlink to="/blogs" onClick={() => setIsOpen(false)}>Blogs</Navlink>
          <Navlink to="/contact" onClick={() => setIsOpen(false)}>Contact</Navlink>
        </NavItems>

        {/* User Section */}
        <UserContainer>
          {/* Theme Text & Toggle */}
          <ThemeText>Theme</ThemeText>
          <ToggleContainer onClick={toggleTheme}>
            <ToggleCircle isDark={isDarkMode} />
          </ToggleContainer>

          {/* Avatar & Logout */}
          <Avatar src={currentUser?.img}>{currentUser?.name?.[0]}</Avatar>
          <TextButton onClick={() => dispatch(logout())}>Logout</TextButton>
        </UserContainer>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
