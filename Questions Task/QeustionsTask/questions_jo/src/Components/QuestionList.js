import Container from "react-bootstrap/Container";
import Question from "./Question";

const QuestionList = () => (
  <Container className="QeustionList">
    <Question
      userName="Jo"
      questionTitle="First Question"
      questionBody="This is the first question"
      date="2"
    />
    <br />
    <Question
      userName="Eslam"
      questionTitle="Second Question"
      questionBody="This is the second question"
      date="4"
    />
    <br />
    <Question
      userName="Hossam"
      questionTitle="Third Question"
      questionBody="This is the third question"
      date="10"
    />
    <br />
    <Question
      userName="Ahmed"
      questionTitle="Last Question"
      questionBody="This is the last question"
      date="11"
    />
  </Container>
);
export default QuestionList;
