import AddCharacter from "./AddCharacter";
import "./App.css";
import CharacterCell from "./components/CharacterCell";
import { useState } from "react";

function App(props) {
  const [characters, setCharacters] = useState([]);
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
      <h1>Initiative tracker</h1>
      <input
        type="button"
        className="fight"
        value="Fight!"
        onClick={() => {
          setCharacters((unsortedCharacters) => [
            ...unsortedCharacters.sort(
              (characterA, characterB) =>
                characterB.characterInit - characterA.characterInit
            ),
          ]);
        }}
      />

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
