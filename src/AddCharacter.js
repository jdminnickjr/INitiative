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
    <div className="add-character">
      <span>
        <input
          className="character-name-input"
          type="text"
          ref={characterInfo}
          placeholder="Character Name"
          onInput={(e) => setCharacterName(e.target.value)}
        />
      </span>

      <InitInput
        characterInit={characterInit}
        handleUpdateInitiative={handleUpdateInitiative}
      />
      <div className="type-selector">
        <h2>Type</h2>
        <div className="buttons">
          <label
            onClick={() => {
              setCharacterType("pc");
            }}
          >
            {" "}
            <input className="custom-btn" name="type" type="radio" value="PC" id="PC" /> PC{" "}
            <span className="checkmark"></span>
          </label>
          <label
            onClick={() => {
              setCharacterType("npc");
            }}
          >
            {" "}
            <input className="custom-btn" name="type" type="radio" value="NPC" id="NPC" /> NPC{" "}
            <span className="checkmark"></span>
          </label>
          <label
            onClick={() => {
              setCharacterType("enemy");
            }}
          >
            {" "}
            <input
              className="custom-btn"
              name="type"
              type="radio"
              value="enemy"
              id="enemy"
            /> Enemy{" "}
            <span className="checkmark"></span>
          </label>
          <label
            onClick={() => {
              setCharacterType("other");
            }}
          >
            {" "}
            <input
              className="custom-btn"
              name="type"
              type="radio"
              value="other"
              id="other"
            /> Other{" "}
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
      <input
        type="submit"
        className="add-character"
        value="Add Character"
        onClick={createCharacter}
      />
    </div>
  );
};

export default AddCharacter;
