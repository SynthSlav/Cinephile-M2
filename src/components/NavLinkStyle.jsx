import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav } from "react-bootstrap";
export default function NavLinkStyle({ children, to }) {
    const location = useLocation();
    const isActive = location.pathname === to;


    const handleMouseEnter = (e) => {
      e.currentTarget.classList.add("hover");
    }

    const handleMouseLeave = (e) => {
      e.currentTarget.classList.remove("hover");
    }

    return (
    <Nav.Link
      as={Link}
      to={to}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`nav-link ${isActive ? "active" : ""}`}
    >
      {children}
    </Nav.Link>
    )
}
