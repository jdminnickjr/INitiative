import React from "react";
import TypeIcon from "./TypeIcon.js";

const CharacterCell = (props) => {
  return (
    <span
      onClick={() => {
        props.handleActivate();
      }}
      className={
        props.active
          ? "character-cell character-cell--active"
          : "character-cell"
      }
    >
      <span>
        <button
          className="remove-player"
          onClick={(e) => {
            e.stopPropagation();
            props.handleRemoveCharacter();
          }}
        >
          ✖
        </button>
        <h2>{props.characterName}</h2>
      </span>

      <label className="concentration">
        C
        <input
          name="concentration"
          type="checkbox"
          value="concentration"
          id="concenteration"
        />
      </label>

      <span className="type-icon">
        {" "}
        <TypeIcon type={props.characterType} />
      </span>
      <div className="initiative-display">{props.characterInit}</div>
    </span>
  );
};

export default CharacterCell;
