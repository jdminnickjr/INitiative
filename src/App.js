import AddCharacter from "./AddCharacter";
import "./css/application.css";
import CharacterCell from "./CharacterCell";
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

  const roundCheck = roundNumber === 0 ? 0 : 1;

  return (
    <div className="app-board">
      <h1>INitiative</h1>
      <div className="top">
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
            onClick={() => handleUpdateRound(roundNumber - roundCheck)}
          >
            -
          </button>
          <input
            type="number"
            min="0"
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
