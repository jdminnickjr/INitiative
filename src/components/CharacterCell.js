import React from "react";
import TypeIcon from "./components/TypeIcon.js";

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

      <span className="type-icon">
        {" "}
        <TypeIcon type={props.characterType} />
      </span>
      <div className="initiative-display">{props.characterInit}</div>
    </span>
  );
};

export default CharacterCell;
