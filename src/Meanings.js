import React from "react";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.slice(0, 1).map(function(definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <p>
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
