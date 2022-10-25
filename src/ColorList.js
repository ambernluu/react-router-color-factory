import React from "react";
import { Link } from "react-router-dom";
import "./ColorList.css";

const ColorList = ({colors}) => {
  const colorLinks = Object.keys(colors).map(colorName => (
    <li key={colorName}>
      <Link to={`/colors/${colorName}`}>{colorName}</Link>
    </li>
  ));

  return (
    <div className="ColorList">
      <header className="ColorList-header">
        <h1>COLORS</h1>
        <h2>
          <Link to="/colors/new">Add a new color</Link>
        </h2>
      </header>
      <div>
        <p>Pick a color!</p>
        <ul>{colorLinks}</ul>
      </div>
    </div>
  );
}

export default ColorList;
