import React from 'react';
import "../scss/Awards.scss";
import Container from 'react-bootstrap/Container';

//Images
import AirbnbLogo from "../assets/airbnb.svg";
import startOn from "../assets/star-active.png";
import startOff from "../assets/star.svg";




function Awards() {
  return (
    <div>
        <Container>
            <div>
                <div className="awardsText">           
                    <b>Technology</b>
                    <h3>We use the latest technologies on the market</h3>
                    <p>Get components and examples, including tons of variables that will help you grow your business.</p>
                </div>
            </div>
            <div className='cardsContainer'>
            <div className='cardOneContainer'>
                <img src={AirbnbLogo}/>
                    <div>
                        <img src={startOn}/>
                        <img src={startOn}/>
                        <img src={startOn}/>
                        <img src={startOn}/>
                        <img src={startOff}/>
                    </div>
                    <div className='textThreeCard'>
                        <h4>4.95 out of 5 stars </h4>
                        <p>from 23 reviews</p>
                    </div>
               </div>
            </div>


        </Container>
    </div>
  );
}

export default Awards;