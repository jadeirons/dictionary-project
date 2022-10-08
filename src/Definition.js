import React from "react";
import Phonetic from "./Phonetic.js";
import Meanings from "./Meanings.js";
import "./Definition.css";

export default function Definition(props) {
  if (props.definition) {
    return (
      <section className="Definition">
        <section className="row">
          <span className="word col-6">{props.definition.word}</span>
          <span className="phonetics col-6">
            {props.definition.phonetics
              .slice(0, 2)
              .map(function(phonetic, index) {
                return (
                  <span key={index}>
                    <Phonetic phonetic={phonetic} />
                  </span>
                );
              })}
          </span>
        </section>

        {props.definition.meanings.map(function(meaning, index) {
          return (
            <div key={index}>
              <Meanings meaning={meaning} />
            </div>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
