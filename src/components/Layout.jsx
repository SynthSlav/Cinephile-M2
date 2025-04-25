import {Outlet, Link} from "react-router-dom";
import { Stack, Navbar, Container, Nav, NavLink } from "react-bootstrap";
import NavLinkStyle from "./NavLinkStyle";

export default function Layout() {
    // This component serves as the layout for the application, providing a consistent navigation bar across different pages.
    // It uses React Router's Outlet to render the child components based on the current route.


    return(
        <Stack className="mt-3">
        <Navbar expand="lg" sticky="top" className="py-0 container-fluid navbar-container">
        <Container>
          <Navbar.Brand as={Link} to="/">CinePhile</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLinkStyle as={Link} className="" to="/">Home</NavLinkStyle>
              <NavLinkStyle as={Link} className="" to="/watchlist">Watchlist</NavLinkStyle>
              <NavLinkStyle as={Link} className="" to="/about">About</NavLinkStyle>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      </Stack>
    )
}

