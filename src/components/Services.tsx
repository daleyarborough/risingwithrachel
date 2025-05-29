import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-5 bg-light">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="display-5 fw-bold mb-3">1:1 Run Coaching Services</h2>
            <p className="lead mb-4">
              Personalized coaching tailored to your specific goals and running experience
            </p>
            <div className="border-bottom border-primary w-25 mx-auto mb-4" style={{borderWidth: '3px'}}></div>
          </Col>
        </Row>
        
        <Row>
          <Col lg={6} className="mb-4">
            <Card className="h-100 shadow-sm hover-lift">
              <Card.Body className="p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="text-primary fs-1 me-3">
                    <i className="bi bi-person-check"></i>
                  </div>
                  <h3 className="h4 mb-0">Personalized Coaching</h3>
                </div>
                <Card.Text>
                  One-on-one coaching sessions focused on your specific needs and goals. I'll work directly with you to improve your form, endurance, and performance while preventing injuries.
                </Card.Text>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">✓ Custom training plans</li>
                  <li className="mb-2">✓ Form and technique analysis</li>
                  <li className="mb-2">✓ Race strategy development</li>
                  <li className="mb-2">✓ Recovery and injury prevention</li>
                  <li className="mb-2">✓ Virtual or in-person sessions</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={6} className="mb-4">
            <Card className="h-100 shadow-sm hover-lift">
              <Card.Body className="p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="text-primary fs-1 me-3">
                    <i className="bi bi-trophy"></i>
                  </div>
                  <h3 className="h4 mb-0">Marathon Expertise</h3>
                </div>
                <Card.Text>
                  Whether you're training for your first marathon or aiming for a Boston qualification, I bring my experience from 10+ completed marathons, including Boston, Chicago, and Houston.
                </Card.Text>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">✓ Marathon-specific training</li>
                  <li className="mb-2">✓ Race day preparation</li>
                  <li className="mb-2">✓ Pacing strategy</li>
                  <li className="mb-2">✓ Nutrition planning</li>
                  <li className="mb-2">✓ Mental preparation techniques</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row className="mt-4">
          <Col className="text-center">
            <p className="text-muted mb-4">
              For detailed pricing information, please contact through email or phone.
            </p>
            <Button href="#contact" variant="primary" size="lg" className="px-5">
              Get Started Today
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services; 