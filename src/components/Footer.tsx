import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-3 mb-md-0 text-center text-md-start">
            <p className="text-muted mb-0 small">
              &copy; {currentYear} Rising With Rachel. All rights reserved.
            </p>
            <p className="text-muted small mb-0 mt-1">
              <span className="me-3">rachelmlamm@gmail.com</span>
              <span>(919) 909-0863</span>
            </p>
          </Col>
          
          <Col md={6} className="text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="https://www.instagram.com/rachelontherun_/" target="_blank" rel="noopener noreferrer" className="text-muted">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted">
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
            </div>
            <p className="text-muted small mb-0 mt-2">
              Website: <a href="http://risingwithrachel.com" className="text-muted">risingwithrachel.com</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 