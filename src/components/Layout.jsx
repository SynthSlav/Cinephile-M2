import {Outlet, Link} from "react-router-dom";
import { Stack, Navbar, Container, Nav, NavLink } from "react-bootstrap";

export default function Layout() {
    return(
        <Stack className="mt-3">
        <Navbar expand="lg" sticky="top" className="py-0 container-fluid navbar-container">
        <Container>
          <Navbar.Brand as={Link} to="/">CinePhile</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link  as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/watchlist">Watchlist</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      </Stack>
    )
}

