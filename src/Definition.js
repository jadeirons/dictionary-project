import React from "react";
import Phonetic from "./Phonetic.js";
import Meanings from "./Meanings.js";

export default function Definition(props) {
  if (props.definition) {
    return (
      <div className="Definition">
        <h2>
          {props.definition.word}{" "}
          {props.definition.phonetics
            .slice(0, 2)
            .map(function(phonetic, index) {
              return (
                <div key={index}>
                  <Phonetic phonetic={phonetic} />
                </div>
              );
            })}
        </h2>

        {props.definition.meanings.map(function(meaning, index) {
          return (
            <div key={index}>
              <Meanings meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
