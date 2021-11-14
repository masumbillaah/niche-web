import React from "react";
import { Button, Container, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        bg="warning"
        variant="warning"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home" className="text-White fw-bold">
            Online Watch Shop </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home">
              Home
            </Nav.Link>
            
            {/* <Nav.Link as={HashLink} to="/home#services">
              Products
            </Nav.Link> */}
            <Nav.Link as={HashLink} to="/expoler">
           Explore
            </Nav.Link>
           {user.email&& 
           <Nav.Link as={HashLink} to="/deshboard">
             DashBoard
            </Nav.Link>}
            <Nav.Link as={HashLink} to="/about">
              About
            </Nav.Link>

           

           



{user?.email ? (
              <Button
                onClick={logOut}
                className="Rounded btn-danger m-2"
                variant="black"
              >
                Logout
              </Button>
            ) : (
              <Nav.Link className="text-black" as={Link} to="/login">
                <button className="btn-danger">Login</button>
              </Nav.Link>
            )}
            <Navbar.Text>
             {user.email && <a  href="#login" className="text-white">
                {user?.displayName ? user?.displayName : user?.email}
              </a>}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img
                style={{
                  borderRadius: "100%",
                  width: "50px",
                }}
                src={user?.photoURL}
                alt=""
              />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
