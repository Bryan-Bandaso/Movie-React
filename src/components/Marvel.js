import { Card, Button } from "react-bootstrap";
import antmanImage from "../assets/images/superhero/antman.jpg";
import avengerImage from "../assets/images/superhero/avenger.jpg";
import batmanImage from "../assets/images/superhero/batman.jpg";

const Marvel = () => {
  return (
    <div>
      <h2>Film Popular Minggu Ini</h2>
      <div className="cardMovie">
        <div className="marvelMovie">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={antmanImage} />
            <Card.Body>
              <Card.Title>Antman</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">More info</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="marvelMovie">
          {" "}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={avengerImage} />
            <Card.Body>
              <Card.Title>Avanger</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">More info</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="marvelMovie">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={batmanImage} />
            <Card.Body>
              <Card.Title>Batman</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">More info</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Marvel;
