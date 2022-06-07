import {
  Container,
  Nav,
  Navbar
} from "react-bootstrap";
import starWarsLogo from "../../assets/star-wars-logo.png";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {

  const navigate = useNavigate()


  return (
    <header>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand onClick={() => {
            navigate("/")
          }}>
            <img
              alt=""
              src={starWarsLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="" onClick={() => {
                navigate("/listerPage")
              }}>Lister Page</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
