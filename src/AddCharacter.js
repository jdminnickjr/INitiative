import React, { useState } from "react";

const AddCharacter = (props) => {
  const [characterName, setCharacterName] = useState("");
  const [characterInit, setCharacterInit] = useState(0);
  //   const [characterType, setCharaterType] = useState("");

  const createCharacter = (character) => {
    props.createCharacter({ characterName, characterInit });
  };

  return (
    <div class="add-character">
      <span>
        <input
          class="character-name-input"
          type="text"
          placeholder="Character Name"
          onInput={(e) => setCharacterName(e.target.value)}
        />
        <button
          class="add-character"
          value="Add Character"
          onClick={createCharacter}
        >
          Add Character{" "}
        </button>
      </span>

      <div class="init-input">
        <h2>Initiative</h2>
        <div class="init-actions">
          <button class="init-action decrement"> - </button>
          <input
            class="init-score"
            type="text"
            placeholder="0"
            onInput={(e) => setCharacterInit(e.target.value)}
          />

          <button class="init-action increment"> + </button>
        </div>
      </div>
      <div class="type-selector">
        <h2>Type</h2>
        <div class="buttons">
          <label for="PC">
            {" "}
            <input type="radio" value="PC" id="PC" /> PC{" "}
          </label>
          <label for="NPC">
            {" "}
            <input type="radio" value="NPC" id="NPC" /> NPC{" "}
          </label>
          <label for="enemy">
            {" "}
            <input type="radio" value="enemy" id="enemy" /> Enemy{" "}
          </label>
          <label for="other">
            {" "}
            <input type="radio" value="other" id="other" /> Other{" "}
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddCharacter;
