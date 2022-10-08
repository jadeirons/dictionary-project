import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio && props.phonetic.text) {
    return (
      <span className="Phonetic">
        <span className="phonetic-text">{props.phonetic.text}</span>
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noopener noreferrer"
          className="phonetic-listen"
        >
          Listen
        </a>
      </span>
    );
  } else {
  }
  return null;
}
