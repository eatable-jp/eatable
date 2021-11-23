// react router
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux";
import {logout } from '../slice/loginSlice'
import {resetUser} from '../slice/userSlice'
// bootstrap
import { Nav, Navbar, Container } from "react-bootstrap";
export default function Header({ userStatus }) {

  const history = useHistory();
  const dispatch = useDispatch();


  const handleLogOut = () => {
    dispatch(logout())
    dispatch(resetUser())
    localStorage.removeItem("eatable");
    history.push("/login")
  }
  return (
    <Navbar className="navbar-custom mb-5" expand="lg">
      {/* displaying different header based on customer type */}
      {userStatus === "seller" ? (
        <Container>
          <LinkContainer to="/seller">
            <Navbar.Brand>Eatable</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/seller-profile">
                <Nav.Link>Profile</Nav.Link>
              </LinkContainer>
              <Nav.Link onClick={()=> handleLogOut()}>Log out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      ) : userStatus === "buyer" ? (
        <Container>
          <LinkContainer to="/buyer">
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
                <Nav.Link onClick={()=> handleLogOut()}>Log out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      ) : (
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Eatable</Navbar.Brand>
          </LinkContainer>    
        </Container>
      )
    }
    </Navbar>
  );
}
