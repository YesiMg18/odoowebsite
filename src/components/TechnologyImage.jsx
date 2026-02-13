import React from 'react';
import "../scss/TechnologyImage.scss";
import Container from 'react-bootstrap/Container';

//Images
import nameIcon from "../assets/name-icon.svg";
import checkIcon from "../assets/check-icon.svg";
import AirbnbLogo from "../assets/airbnb.svg";
import startOn from "../assets/star-active.png";
import startOff from "../assets/star.svg";
import logoCard from "../assets/logo-cards.png";
import favoriteIcon from "../assets/favorite.png";
import linkIcon from "../assets/attach_file.svg";
import eyeIcon from "../assets/eye-icon.svg";
import personOne from "../assets/person_01.jpg";
import personTwo from "../assets/person_02.jpg";
import personThree from "../assets/person_03.jpg";




function TechImage() {
  return (
    <div>
        <Container className='cardsSection'>
            <div className='columnOneSection'>
                <div className='cardOneContainer'>
                    <img src={personThree}/>
                    <div className='cardOneText'>
                        <div>
                            <img src={nameIcon}/>
                            <p>Jimmy Hendrix</p>
                        </div>
                        <img src={favoriteIcon}/>
                    </div>
                </div>
                <div  className='cardTwoContainer'>
                    <img src={checkIcon}/>
                    <div>
                        <h4>300+ components</h4>
                        <p>Built to be customized.</p>
                    </div>
                </div>
            </div>
            <div className='columnTwoSection'>
               <div className='cardThreeContainer'>
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
               <div className='cardFourContainer'>
                    <img src={logoCard} />
                    <h4>Website UI Kit</h4>
                    <div className='imagesPersons'>
                        <img src={personThree}/>
                        <img src={personTwo}/>
                        <img src={personOne}/>
                    </div>
                    <div  className='icons'>
                        <img src={linkIcon}/>
                        <img src={eyeIcon}/>
                        <img src={favoriteIcon}/>
                    </div>
               </div>

            </div>
        </Container>
    </div>
  );
}

export default TechImage;