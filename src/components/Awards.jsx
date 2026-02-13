import React from 'react';
import "../scss/Awards.scss";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

//Images
import AirbnbLogo from "../assets/airbnb.svg";
import SpotifyLogo from "../assets/spotify.svg";
import AmazonLogo from "../assets/amazon.svg";
import SlackLogo from "../assets/slack.svg";
import PaypalLogo from "../assets/paypal.svg";
import startOn from "../assets/star-active.png";
import startOff from "../assets/star.svg";




function Awards() {
  return (
    <div>
        <Container fluid id="awards" className='awardsSection'>
            <div>
                <div className="awardsText">           
                    <b>Awards</b>
                    <p>Awards for design, creativity, and innovation on the Internet</p>
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
            <div className='cardTwoContainer'>
                <img src={AmazonLogo}/>
                    <div className='textCard'>
                        <p>They build modern-looking websites easily using Tabs.</p>
                        <Button variant="link">Learn more</Button>
                    </div>
            </div>
            <div className='cardTwoContainer'>
                <img src={SlackLogo}/>
                    <div className='textCard'>
                        <p>They build modern-looking websites easily using Tabs.</p>
                        <Button variant="link">Learn more</Button>
                </div>
            </div>
            <div className='cardOneContainer'>
                <img src={SpotifyLogo}/>
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
            <div className='cardTwoContainer'>
                <img src={PaypalLogo}/>
                    <div className='textCard'>
                        <p>They build modern-looking websites easily using Tabs.</p>
                        <Button variant="link">Learn more</Button>
                </div>
            </div>
            </div>


        </Container>
    </div>
  );
}

export default Awards;