import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const Question = (props) => (
  <Card className="text-center">
    <Card.Header>{props.userName}</Card.Header>
    <Card.Body>
      <Card.Title>{props.questionTitle}</Card.Title>
      <Card.Text>{props.questionBody}</Card.Text>
      <Button variant="primary" href="answers">Show Full Question.</Button>
    </Card.Body>
    <Card.Footer className="text-muted">{props.date} days ago</Card.Footer>
  </Card>
);
export default Question;
