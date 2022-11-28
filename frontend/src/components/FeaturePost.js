import React, { useState } from "react";
import dalat from "../image/dalat.jpg";

function FeaturePost() {
  const [posts, setpost] = useState([
    {
      id: 1,
      title: "10 Best Places To Visit In Da Lat ",
      img: "https://i.pinimg.com/564x/49/61/c4/4961c45f5411a2dc19a9e57918742e48.jpg",
    },
    {
      id: 2,
      title: "10 Best Places To Visit In Da Lat ",
      img: "https://i.pinimg.com/564x/41/4d/a3/414da3bc207e7956fa256f8db19b7574.jpg",
    },
    {
      id: 3,
      title: "10 Best Places To Visit In Da Lat ",
      img: "https://i.pinimg.com/564x/de/bc/bf/debcbfce7461d56be7a3e0897028ccfd.jpg",
    },
  ]);
  return (
    <div className="feature_post--container">
      {posts.map((posts) => {
        const { id, title, img } = posts;
        return (
          <a href="#" className="feature_post" key={id}>
            <h2 className="feature_post--title">{title} </h2>
            <div className="feature_post--img">
              <img src={img} alt={title} />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default FeaturePost;
