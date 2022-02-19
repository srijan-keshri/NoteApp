import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">Note App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav className="m-auto">
              <Form inline>
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-sm-2"
                  aria-label="Search"
                />
              </Form>
            </Nav>

            <Nav className="mr=0">
              <Nav.Link href="#action1">My Notes</Nav.Link>

              <NavDropdown title="Srijan Keshri" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
