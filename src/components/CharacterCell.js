import React from "react";

const CharacterCell = (props) => {
  return (
    <span class="character-cell">
      <span>
        <h2>{props.characterName}</h2>
      </span>
      <div class="initiative-display">{props.characterInit}</div>
    </span>
  );
};

export default CharacterCell;
