import AddCharacter from "./AddCharacter";
import "./App.css";
import CharacterCell from "./components/CharacterCell";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  const createCharacter = (character) => {};
  return (
    <div class="app-board">
      <h1>Initiative tracker</h1>
      <input type="button" class="fight" value="Fight!" />

      {characters.map((character) => (
        <CharacterCell {...character} />
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
