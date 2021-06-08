import AddCharacter from "./AddCharacter";
import "./App.css";
import CharacterCell from "./components/CharacterCell";
import { useState } from "react";

function App(props) {
  const [characters, setCharacters] = useState([]);
  const [roundNumber, handleUpdateRound] = useState(0);
  const activateCharacter = (id) => {
    setCharacters([
      ...characters.map((character) => {
        if (character.characterName === id) {
          character.active = true;
        } else {
          character.active = false;
        }
        return character;
      }),
    ]);
  };

  const removeCharacter = (id) => {
    setCharacters(
      characters.filter((character) => character.characterName !== id)
    );
  };

  return (
    <div className="app-board">
      <h1>INitiative</h1>
      <span>
        <img src="./components/init_UNderline.png" alt=""></img>
      </span>
      <input
        type="button"
        className="fight"
        value="Fight"
        onClick={() => {
          setCharacters((unsortedCharacters) => [
            ...unsortedCharacters.sort(
              (characterA, characterB) =>
                characterB.characterInit - characterA.characterInit
            ),
          ]);
        }}
      />

      <div className="round-tracker">
        <h2>Round</h2>
        <div className="round-actions">
          <button
            className="round-action decrement"
            onClick={() => handleUpdateRound(roundNumber - 1)}
          >
            -
          </button>
          <input
            type="text"
            className="round-score"
            placeholder="0"
            onClick={(e) => handleUpdateRound(e.target.value)}
            value={roundNumber}
          />

          <button
            className="round-action increment"
            onClick={() => handleUpdateRound(roundNumber + 1)}
          >
            +
          </button>
        </div>
      </div>

      {characters.map((character) => (
        <CharacterCell
          {...character}
          key={character.characterName}
          handleActivate={() => {
            activateCharacter(character.characterName);
          }}
          handleRemoveCharacter={() => {
            removeCharacter(character.characterName);
          }}
        />
      ))}
      <AddCharacter
        createCharacter={(character) =>
          setCharacters((state) => [...state, character])
        }
      />
    </div>
  );
}

export default App;
