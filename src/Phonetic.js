import React from "react";

export default function Phonetic(props) {
  console.log(props);

  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.phonetic.text}
        </a>
      </div>
    );
  } else {
  }
  return (
    <div className="Phonetic">
      <p className="phonetic-no-link">{props.phonetic.text}</p>
    </div>
  );
}
