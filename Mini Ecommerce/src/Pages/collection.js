// import "../styles/collectionStyle.scss"
import "../styles/collectionStyle.css";
// import item1 from'../images/item1.jpg'
// import item2 from'../images/item2.jpg'
// import item3 from'../images/item3.jpg'
// import item4 from'../images/item4.jpg'
// import item5 from'..//images/item5.jpg'
import { Container } from "react-bootstrap";


const collection = (props) => (
  <div>
    <h1 className="h1">Lean too far</h1>
    <br />
    {/* <div className="grid-container">
      <div className="item1">
          Gronlid
      <img src={item1} width="100px"/>
      </div>
      <div className="item2">
        Ekebol
      </div>
      <div className="item3">
        Ingrid
        <img src={item3}width="100px" />
      </div>
      <div className="item4">
        <Container> Shell
        <img src={item4}width="100px" />
        </Container>
      </div>

      <div className="item5">
        Leifrane
        <img src={item5} width="100px" />
      </div>
    </div> */}
  </div>
);

export default collection;
