import {Outlet, Link} from "react-router-dom";
import { Stack, Navbar, Container, Nav, NavLink } from "react-bootstrap";
import NavLinkStyle from "./NavLinkStyle";

export default function Layout() {

    // Attempt at useState for hovered and active links


    return(
        <Stack className="mt-3">
        <Navbar expand="lg" sticky="top" className="py-0 container-fluid navbar-container">
        <Container>
          <Navbar.Brand as={Link} to="/">CinePhile</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLinkStyle  to="/">Home</NavLinkStyle>
              <NavLinkStyle  to="/watchlist">Watchlist</NavLinkStyle>
              <NavLinkStyle  to="/about">About</NavLinkStyle>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      </Stack>
    )
}

