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
    <div className="cell_info">
      <label className="concentration">
        C
        <input
          className="concentration_radio"
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
      </div>
    </span>
  );
};

export default CharacterCell;
