import React, { useState, useEffect } from "react";

function Slider() {
  const [slide, setSlide] = useState([
    {
      id: 1,
      image:
        "https://deih43ym53wif.cloudfront.net/solo-traveller-shutterstock_623123408_509518df42.jpeg",
      text: "maria ferguson",
      title: "office manager",
      quote:
        "Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.",
      button: "Travel Tips",
    },
    {
      id: 2,
      image:"https://www.sos.eu/media/3513/travelling-alone.jpg?width=940&center=0.5,0.5&mode=crop&quality=95&height=319.99997",
      text: "john doe",
      title: "regular guy",
      quote:
        "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
      button: "Travel Tips",
    },
    {
      id: 3,
      image:
        "https://www.edreams.com/blog/wp-content/uploads/sites/3/2018/11/solo-asia.jpg",
      text: "peter smith",
      title: "product designer",
      button: "Travel Tips",

      quote:
        "Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.",
    },
    {
      id: 4,
      image:
        "https://media.timeout.com/images/105859745/750/422/image.jpg",
      text: "susan andersen",
      title: "the boss",
      button: "Travel Tips",

      quote:
        "Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ",
    },
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);


  useEffect(() => {
    setTimeout(() => {
      setCurrentSlide(() => {
        // console.log(currentSlide);
        if (currentSlide + 1 > slide.length - 1) {
          return 0;
        } else {
          return currentSlide + 1;
        }
      });
    }, 2000);
  });

  return (
    <div className="slideshow-container">
      <div
        className="slideshow-slide"
        style={{ backgroundImage: `url(${slide[currentSlide].image})`, 
        transform: `translate3d(${-slide[currentSlide].index * 100}%, 0, 0)` }}
      >
        <div className="slideshow-slide-text">
                <p>{slide[currentSlide].text}</p>

                <h3>{slide[currentSlide].title}</h3>
                <span>{slide[currentSlide].quote}</span>
                <button>{slide[currentSlide].button}</button>
              </div>

      </div>
    </div>
  );
}

export default Slider;
