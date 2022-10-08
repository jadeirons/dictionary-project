import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.slice(0, 1).map(function(definition, index) {
          return (
            <div key={index}>
              <p className="definition">{definition.definition}</p>
              <p className="example">
                <em>{definition.example}</em>
              </p>
              <Synonyms synonyms={props.meaning.synonyms} />
            </div>
          );
        })}
      </section>
    </div>
  );
}
