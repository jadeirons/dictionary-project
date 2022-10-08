import React from "react";

export default function Phonetic(props) {
  if (props.phonetic.audio && props.phonetic.text) {
    return (
      <div className="Phonetic">
        {props.phonetic.text}
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noopener noreferrer"
        >
          Listen
        </a>
      </div>
    );
  } else {
  }
  return null;
}
