import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav } from "react-bootstrap";
export default function NavLinkStyle({ children, to }) {
    // Hook to access the current URL location from React Router 
    const location = useLocation();
    // Boolean indicating if the current path matches the 'to' prop, used for active link styling.
    const isActive = location.pathname === to;

    // Function to handle mouse enter event, adding a 'hover' class to the link.
    const handleMouseEnter = (e) => {
      e.currentTarget.classList.add("hover");
    }
    // Function to handle mouse leave event, removing the 'hover' class from the link.
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
