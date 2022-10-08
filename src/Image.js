import React from "react";
import "./Image.css";

export default function Image(props) {
  if (props.image) {
    return (
      <section className="Images">
        <div className="row">
          {props.image.map(function(photo, index) {
            return (
              <span key={index} className="col-4">
                <img
                  src={photo.src.landscape}
                  alt="search result"
                  className="img-fluid"
                />
              </span>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
