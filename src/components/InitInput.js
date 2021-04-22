import React, { useState } from "react";

const InitInput = ({ characterInit, handleUpdateInitiative }) => {
  return (
    <div className="init-input">
      <h2>Initiative</h2>
      <div className="init-actions">
        <button
          className="init-action decrement"
          onClick={() => handleUpdateInitiative(characterInit - 1)}
        >
          -
        </button>
        <input
          type="text"
          className="init-score"
          placeholder="0"
          onInput={(e) => handleUpdateInitiative(e.target.value)}
          value={characterInit}
        />

        <button
          className="init-action increment"
          onClick={() => handleUpdateInitiative(parseInt(characterInit) + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default InitInput;
