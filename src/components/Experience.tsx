import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Boston Marathon",
      year: "Multiple Years",
      description: "Qualified and completed the prestigious Boston Marathon multiple times, experiencing the historic course from Hopkinton to Boylston Street."
    },
    {
      title: "Chicago Marathon",
      year: "Multiple Years",
      description: "Completed the Chicago Marathon, enjoying the flat and fast course through 29 diverse neighborhoods of the Windy City."
    },
    {
      title: "Houston Marathon",
      year: "Multiple Years",
      description: "Ran the Houston Marathon, navigating through Houston's urban landscape on this fast, flat course known for ideal racing conditions."
    },
    {
      title: "City of Oaks Marathon",
      year: "Raleigh, NC",
      description: "Completed the hometown City of Oaks Marathon, running through the beautiful oak-lined streets and greenways of Raleigh."
    },
    {
      title: "Austin Marathon",
      year: "Austin, TX",
      description: "Conquered the challenging hills of the Austin Marathon while enjoying the vibrant atmosphere of this music-filled city."
    },
    {
      title: "Berlin Marathon",
      year: "Qualified",
      description: "Achieved qualification for the prestigious Berlin Marathon, one of the World Marathon Majors known for its flat, fast course and iconic finish through the Brandenburg Gate."
    }
  ];

  return (
    <section id="experience" className="py-5 bg-white">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="display-5 fw-bold mb-3">Experience & Achievements</h2>
            <p className="lead mb-4">
              A glimpse into my running journey, from major marathons to community coaching programs.
            </p>
            <div className="border-bottom border-primary w-25 mx-auto mb-4" style={{borderWidth: '3px'}}></div>
          </Col>
        </Row>
        
        <Row className="justify-content-center mb-5">
          <Col lg={8} md={10}>
            <Card className="shadow-sm">
              <Card.Header className="bg-primary text-white">
                <h3 className="h5 mb-0">Marathon Experience</h3>
              </Card.Header>
              <ListGroup variant="flush">
                {experiences.map((exp, index) => (
                  <ListGroup.Item key={index} className="py-3">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <h4 className="h5 mb-0">{exp.title}</h4>
                      <span className="badge bg-primary bg-opacity-10 text-primary">{exp.year}</span>
                    </div>
                    <p className="text-muted mb-0">{exp.description}</p>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
        </Row>
        
        <Row className="mt-4">
          <Col>
            <div className="bg-light p-4 rounded shadow-sm">
              <h3 className="h4 text-center mb-4">Race Statistics</h3>
              <Row className="text-center">
                <Col xs={6} md={4} className="mb-3">
                  <div className="h2 fw-bold text-primary">10</div>
                  <div className="text-muted">Marathons Completed</div>
                </Col>
                <Col xs={6} md={4} className="mb-3">
                  <div className="h2 fw-bold text-primary">4</div>
                  <div className="text-muted">World Marathon Majors</div>
                </Col>
                <Col xs={12} md={4} className="mb-3">
                  <div className="h2 fw-bold text-primary">10+</div>
                  <div className="text-muted">Years Coaching</div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience; 