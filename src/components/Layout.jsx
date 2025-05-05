import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Stack, Navbar, Container, Nav } from 'react-bootstrap';
import NavLinkStyle from './NavLinkStyle';
import { FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Layout() {
  const [theme, setTheme] = useState('dark');
  const [themeToggle, setThemeToggle] = useState(false);

  const toggleTheme = () => {
    setThemeToggle(!themeToggle);
    setTimeout(() => {
      setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    }, 300);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const iconVariants = {
    initial: { rotateY: 0 },
    flipped: { rotateY: 180 },
  };

  return (
    <Stack className="mt-3">
      <Navbar expand="lg" sticky="top" className="py-0 container-fluid navbar-container">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Navbar.Brand style={{ marginLeft: "1rem"}} as={Link} to="/">CinePhile</Navbar.Brand>
            <button onClick={toggleTheme} className="btn btn-sm ms-2 theme-toggle-button">
              <motion.div
                className="theme-toggle-icon"
                variants={iconVariants}
                animate={themeToggle ? 'flipped' : 'initial'}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{ transformOrigin: 'center center' }}
              >
                {theme === 'dark' ? <FaSun size={20}/> : <FaMoon size={20}/>}
              </motion.div>
            </button>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="hamburgerButton" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="ms-auto mt-3">
              <NavLinkStyle as={Link} className="" to="/">Home</NavLinkStyle>
              <NavLinkStyle as={Link} className="" to="/watchlist">Watchlist</NavLinkStyle>
              <NavLinkStyle as={Link} className="" to="/about">About</NavLinkStyle>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </Stack>
  );
}