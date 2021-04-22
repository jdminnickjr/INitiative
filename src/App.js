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
    console.log(characters, id);
    setCharacters(
      characters.filter((character) => character.characterName !== id)
    );
    setCharacters([]);
    console.log(characters);
  };

  return (
    <div class="app-board">
      <h1>Initiative tracker</h1>
      <input
        type="button"
        class="fight"
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
