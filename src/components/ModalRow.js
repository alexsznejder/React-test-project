import React from "react";

const ModalRow = props => {
  return (
    <div className="row">
      <div className="labels">
        <label htmlFor={props.name}>{props.label}</label>
      </div>
      <div className="inputs">
        {props.type === "textarea" ? (
          <textarea
            name={props.name}
            value={props.value}
            onChange={props.handleChange}
          ></textarea>
        ) : (
          <input
            type={props.type}
            name={props.name}
            value={props.value}
            onChange={props.handleChange}
          ></input>
        )}

        {props.errors[props.name] && (
          <div className="errors">
            <span>{props.errors[props.name]}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalRow;
