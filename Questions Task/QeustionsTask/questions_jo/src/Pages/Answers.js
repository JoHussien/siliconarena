import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const Answers = (props) => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem>
        Reply One <hr/><Card.Link href="#">Upvote </Card.Link>{" "}
        <Card.Link href="#">Downvote </Card.Link>{" "}
        <Card.Link href="#">Remove </Card.Link>
      </ListGroupItem>
      <ListGroupItem>
        Reply Three Body <hr/><Card.Link href="#">Upvote </Card.Link>{" "}
        <Card.Link href="#">Downvote </Card.Link>{" "}
        <Card.Link href="#">Remove </Card.Link>
      </ListGroupItem>
      <ListGroupItem>
        Reply Two Body <hr/><Card.Link href="#">Upvote </Card.Link>{" "}
        <Card.Link href="#">Downvote </Card.Link>{" "}
        <Card.Link href="#">Remove </Card.Link>
      </ListGroupItem>
    </ListGroup>
    <Card.Body>
      <Card.Link href="#">Upvote Question </Card.Link>
      <Card.Link href="#">Downvote Question</Card.Link>
      <Card.Link href="#">Remove Question</Card.Link>
    </Card.Body>
  </Card>
);

export default Answers;
