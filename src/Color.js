import React from "react";
import { Link } from "react-router-dom";
import "./Color.css";

const Color = ({hex, color, history}) => {
  if (!hex) {
    history.push("/colors");
  }

  return (
    <div className="Color" style={{ backgroundColor: hex }}>
      <h2>{color}</h2>
      <p>
        <Link to="/">Back</Link>
      </p>
    </div>
  );
}

export default Color;
