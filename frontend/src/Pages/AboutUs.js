import React from "react";
import "../AboutUs.css";
import member1 from "../../src/image/img1.jpg";

function AboutUs() {
  return (
    <>
    <div className="about-container">
      <div className="about-intro">
        <h1 className="about-title">This is Travel in VietNam </h1>
        <span className="about-description">
          Our team wants to create a travel blog for those who need to find out
          information (schedule, how to book, how to move, famous places, ..)
          about the place they want to go first. When traveling in the present
          as well as in the future, it is also aimed at people who like to share
          travel experiences, their own objective feelings about the places they
          have experienced, thereby leading to useful suggestions.
        </span>
      </div>
      <div className="member-container--leader">
        <img src={member1} className="leader-img" alt="member-img" />
        <h2 className="member-name"> Who's leader?</h2>
        <h3> Trần Võ Tấn Tài - 20521863</h3>
        <div className="member-description">
          
          Hmmm... Let's see. I would probably describe myself as a girl who
          can't function when her stomach is growling. That's why I'm always
          keeping one eye on the streets to find the perfect bakery (with carrot
          cake). Next, I can't resist puppy cuteness, especially at the beach
          with sunset.
        </div>
      </div>
      <div className="about-member-container">
        <div className="member-container">
          <div className="member-intro">
            <img src={member1} className="member-img" alt="member-img" />
            <h3 className="member-name"> Trần Võ Tấn Tài - 20521863</h3>
            <span className="member-description">
             
              Hmmm... Let's see. I would probably describe myself as a girl who
              can't function when her stomach is growling. That's why I'm always
              keeping one eye on the streets to find the perfect bakery (with
              carrot cake). Next, I can't resist puppy cuteness, especially at
              the beach with sunset.
            </span>
          </div>
        </div>
        <div className="member-container">
          <img src={member1} className="member-img" alt="member-img" />
          <h3 className="member-name"> Trần Võ Tấn Tài - 20521863</h3>
          <span className="member-description">
        
            Hmmm... Let's see. I would probably describe myself as a girl who
            can't function when her stomach is growling. That's why I'm always
            keeping one eye on the streets to find the perfect bakery (with
            carrot cake). Next, I can't resist puppy cuteness, especially at the
            beach with sunset.
          </span>
        </div>
        <div className="member-container">
          <img src={member1} className="member-img" alt="member-img" />
          <h3 className="member-name"> Trần Võ Tấn Tài - 20521863</h3>
          <span className="member-description">
            
            Hmmm... Let's see. I would probably describe myself as a girl who
            can't function when her stomach is growling. That's why I'm always
            keeping one eye on the streets to find the perfect bakery (with
            carrot cake). Next, I can't resist puppy cuteness, especially at the
            beach with sunset.
          </span>
        </div>
        <div className="member-container">
          <img src={member1} className="member-img" alt="member-img" />
          <h3 className="member-name"> Trần Võ Tấn Tài - 20521863</h3>
          <span className="member-description">
            <span> </span>
            Hmmm... Let's see. I would probably describe myself as a girl who
            can't function when her stomach is growling. That's why I'm always
            keeping one eye on the streets to find the perfect bakery (with
            carrot cake). Next, I can't resist puppy cuteness, especially at the
            beach with sunset.
          </span>
        </div>
      </div>
    </div>
    </>
  );
}

export default AboutUs;
