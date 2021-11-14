// react router
import { LinkContainer } from "react-router-bootstrap";
// bootstrap
import { Nav, Navbar, Container } from "react-bootstrap";
export default function Header({ userStatus }) {
  return (
    <Navbar className="navbar-custom mb-5" expand="lg">
      {/* displaying different header based on customer type */}
      {userStatus === "seller" ? (
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Eatable</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/seller-profile">
                <Nav.Link>Profile</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/logout">
                <Nav.Link>Log out</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      ) : (
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Eatable</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/buyer-profile">
                <Nav.Link>Profile</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>Cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/logout">
                <Nav.Link>Log out</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      )}
    </Navbar>
  );
}
