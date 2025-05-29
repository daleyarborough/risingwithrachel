import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About: React.FC = () => {
  return (
    <section id="about" className="py-5 bg-white">
      <Container>
        <Row className="mb-4">
          <Col className="text-center">
            <h2 className="display-5 fw-bold mb-3">About Rachel</h2>
            <div className="border-bottom border-primary w-25 mx-auto mb-4" style={{borderWidth: '3px'}}></div>
          </Col>
        </Row>
        
        <Row className="align-items-center gy-4">
          <Col lg={4} className="mb-4 mb-lg-0">
            <div className="position-relative">
              <div className="position-absolute bg-primary rounded" 
                   style={{top: '15px', left: '15px', right: '-15px', bottom: '-15px', zIndex: 0}}></div>
              <img 
                src="/images/rain.jpeg" 
                alt="Rachel running in the rain" 
                className="rounded img-fluid shadow position-relative"
                style={{zIndex: 1, maxHeight: '400px', width: '100%', objectFit: 'cover'}}
              />
            </div>
          </Col>
          
          <Col lg={8}>
            <h3 className="h4 fw-bold mb-3">Running Coach & Marathon Specialist</h3>
            <p className="mb-4">
              I'm a passionate running coach with over a decade of experience both as a runner and coach. My journey has taken me through 10 marathons including prestigious races like Boston, Chicago, and Houston.
            </p>
            <Row className="mb-4 gy-3">
              <Col md={6}>
                <Card className="h-100 bg-light border-0">
                  <Card.Body>
                    <h4 className="h5 fw-bold text-primary mb-3">Qualifications</h4>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-2">• Degree in Exercise Science, American Public University</li>
                      <li className="mb-2">• Three-time Boston Marathon Qualifier</li>
                      <li className="mb-2">• 10+ Full Marathons Completed</li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="h-100 bg-light border-0">
                  <Card.Body>
                    <h4 className="h5 fw-bold text-primary mb-3">Coaching Experience</h4>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-2">• Girls On The Run of the Triangle (1+ years)</li>
                      <li className="mb-2">• Miracle League of the Triangle (10+ years)</li>
                      <li className="mb-2">• Personalized 1:1 Running Coaching</li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <p>
              I believe running is for everyone, and my coaching philosophy centers on helping you build sustainable habits, prevent injuries, and achieve your personal best – whether you're training for your first 5K or looking to qualify for Boston.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About; 