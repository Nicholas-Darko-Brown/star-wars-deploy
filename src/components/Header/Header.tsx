import { FC } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import starWarsLogo from "../../assets/star-wars-logo.png";
import { useNavigate } from "react-router-dom";
import { FaList } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { PeopleState } from "../../pages/ListerPage/Context";

const Header: FC = () => {
  const { visited } = PeopleState();

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    fetch(e.target.value);
    navigate("/details");
  };

  return (
    <header>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
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
              <Nav.Link
                href=""
                onClick={() => {
                  navigate("/listerPage");
                }}
                className="lister"
              >
                Lister Page <FaList />{" "}
              </Nav.Link>
              <Nav.Link
                href=""
                onClick={() => {
                  navigate("/searchBox");
                }}
                className="lister"
              >
                Detail Search <FiSearch />{" "}
              </Nav.Link>
            </Nav>

            

            <Form.Select
              aria-label="Default select example"
              onChange={handleChange}
              className="dropdown"
            >
              <option className="visited-pages">Visited Detail Pages</option>
              {visited.map((visit: any, i: number) => (
                <option key={i}>
                  {visit.character +
                    " - " +
                    visit.id.substring(29, visit.id.length - 1)}
                </option>
              ))}
            </Form.Select>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
