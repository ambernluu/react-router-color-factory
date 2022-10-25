import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const NewColorForm = ({addColor}) => {
  const [form, updateForm] = useState({name: "", hex:"#ffffff"});
  const history = useHistory();

  const handleChange = (e) => {
    e.persist();
    updateForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ [form.name]: form.hex });
    history.push("/colors");
  }

  const {hex, name} = form;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name of color</label>
          <input
            name="name"
            id="name"
            placeholder="Enter color name"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="hex">Select a color</label>
          <input
            type="color"
            name="hex"
            id="hex"
            onChange={handleChange}
            value={hex}
          />
        </div>
        <input type="Submit" value="Add color" readOnly />
      </form>
    </div>
  );
}

export default NewColorForm;
