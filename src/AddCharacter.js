import React, { useState } from "react";
import InitInput from "./components/InitInput";

const AddCharacter = (props) => {
  const [characterName, setCharacterName] = useState("");
  const [characterInit, setCharacterInit] = useState(0);
  const [characterType, setCharacterType] = useState("pc");
  const handleUpdateInitiative = (val) => {
    setCharacterInit(val);
  };

  const characterInfo = React.useRef(null);

  const createCharacter = (character) => {
    props.createCharacter({
      characterName,
      characterInit,
      active: false,
      characterType,
    });
    characterInfo.current.value = "";
    setCharacterInit(0);
    setCharacterType("pc");
  };

  return (
    <div class="add-character">
      <span>
        <input
          className="character-name-input"
          type="text"
          ref={characterInfo}
          placeholder="Character Name"
          onInput={(e) => setCharacterName(e.target.value)}
        />
        <input
          type="submit"
          className="add-character"
          value="Add Character"
          onClick={createCharacter}
        />
      </span>

      <InitInput
        characterInit={characterInit}
        handleUpdateInitiative={handleUpdateInitiative}
      />
      <div class="type-selector">
        <h2>Type</h2>
        <div class="buttons">
          <label
            for="PC"
            onClick={() => {
              setCharacterType("pc");
            }}
          >
            {" "}
            <input name="type" type="radio" value="PC" id="PC" /> PC{" "}
          </label>
          <label
            for="NPC"
            onClick={() => {
              setCharacterType("npc");
            }}
          >
            {" "}
            <input name="type" type="radio" value="NPC" id="NPC" /> NPC{" "}
          </label>
          <label
            for="enemy"
            onClick={() => {
              setCharacterType("enemy");
            }}
          >
            {" "}
            <input
              name="type"
              type="radio"
              value="enemy"
              id="enemy"
            /> Enemy{" "}
          </label>
          <label
            for="other"
            onClick={() => {
              setCharacterType("other");
            }}
          >
            {" "}
            <input
              name="type"
              type="radio"
              value="other"
              id="other"
            /> Other{" "}
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddCharacter;
