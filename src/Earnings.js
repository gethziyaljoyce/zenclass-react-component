import React from "react";

function Earnings(props) {
  return (
    <div>
      <h3>Earnings Overview </h3>
      <p>Total Earnings this months: {props.monthly}</p>

      <p>EARNINGS (ANNUAL) : {props.annual} </p>

      <p>Tasks done: {props.tasks} </p>
      <p>Pending Requests: {props.requests}</p>
    </div>
  );
}

export default Earnings;