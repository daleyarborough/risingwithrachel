import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="primary" variant="dark" expand="md" fixed="top" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#home">Rising With Rachel</Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link href="#about" onClick={() => setExpanded(false)}>About</Nav.Link>
            <Nav.Link href="#services" onClick={() => setExpanded(false)}>Services</Nav.Link>
            <Nav.Link href="#experience" onClick={() => setExpanded(false)}>Experience</Nav.Link>
            <Nav.Link href="#contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header; 