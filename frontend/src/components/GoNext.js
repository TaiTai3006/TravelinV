import React, { useState } from "react";
import danang from "../image/danang.jpg";

function GoNext() {
  const [places, setPlace] = useState([
    {
      id: 1,
      province: "Da Nang",
      img: { danang },
    },
    {
      id: 2,
      province: "Da Nang",
      img: { danang },
    },
    {
      id: 3,
      province: "Da Nang",
      img: { danang },
    },
    {
      id: 4,
      province: "Da Nang",
      img: { danang },
    },
    {
      id: 5,
      province: "Da Nang",
      img: { danang },
    },
    {
      id: 6,
      province: "Da Nang",
      img: { danang },
    },
    {
      id: 7,
      province: "Da Nang",
      img: { danang },
    },
    {
      id: 8,
      province: "Da Nang",
      img: { danang },
    },
    {
      id: 9,
      province: "Da Nang",
      img: { danang },
    },
    {
      id: 10,
      province: "Da Nang",
      img: { danang },
    },
  ]);
  return (
    <>
      <div className="next-container">
        <div className="next-title">
          <p>Where to</p>
          <h2>Next?</h2>
        </div>
        <div className="next_place">
          {places.map((place) => {
            const { id, province, img } = place;
            return (
              <div className="next_place-item" key={id}>
                <a href="#">
                  <img
                    src={window.location.origin + danang}
                    alt={place.province}
                  />
                  <p>{province}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default GoNext;
