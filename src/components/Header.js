
import React from 'react';
import {  Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import  {Button } from 'react-bootstrap';


function Header() {
  return (
    <div>
      <Navbar expand="lg" variant="dark" className="bg-dark">
        <Container fluid>
          <Navbar.Brand href="https://www.gauravguptastudio.com/">Gaurav.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/features">Features</Nav.Link>
              <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
              <Nav.Link as={Link} to="/abouts">Abouts</Nav.Link>
            

              <Button as={Link} to="/login">Login</Button>

              

             
            </Nav>
           
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
             
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

