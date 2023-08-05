import { Col, Container, Row, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="Introduction">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <h1 className="title">Cover your page</h1>
            <p className="title">
              Cover is a one-page template for building simple and beautiful
              home pages. Download, edit the text, and add your own fullscreen
              background photo to make it your own.
            </p>
            <div className="introButton mt-4 text-center">
              <Button>Learn more</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
