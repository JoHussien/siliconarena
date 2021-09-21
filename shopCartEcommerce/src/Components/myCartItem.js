import "./cartItem.css";
import { Component } from "react";
const myCartItem = (props) => (
  <div className="item">
    <table style={{ width: "100%" }}>
      <tr>
        <th style={{ width: "40%" }}>
          {" "}
          <img id="prodimg" src={props.image} alt={props.image} />
          <p className='title'> {props.title} </p>
        </th>
        <th style={{ width: "15%" }}>
          <p className='color'>{props.color}</p>
        </th>
        <th style={{ width: "15%" }}>
          <p>{props.size}</p>
        </th>
        <th style={{ width: "15%" }}>
          <p>{props.amount}</p>
        </th>
        <th style={{ width: "15%" }}>
          <p className='price'>{props.price}</p>
        </th>
      </tr>
    </table>
  </div>
);
export default myCartItem;
