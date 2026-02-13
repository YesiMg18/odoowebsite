import React from "react";
import "./scss/App.scss"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

//Components
import TechImage from "./components/TechnologyImage";
import Awards from "./components/Awards";
import Navbar from "./components/Navbar";


//Images
import GoogleLogo from "./assets/google-white.svg";
import SpotifyLogo from "./assets/spotify-white.svg";
import AirbnbLogo from "./assets/airbnb-white.svg";
import PaypalLogo from "./assets/paypal-white.svg";
import Mastercard from "./assets/mastercard.svg";
import CardImage from "./assets/cardHero.png";
import ArrowNext from "./assets/arrow-next.svg";
import ImageTool from "./assets/img_01.jpg";
import PlayIcon from "./assets/play-icon.svg";
import CheckIcon from "./assets/check_box.svg";
import ImageFeature from "./assets/img_02.jpg";
import ImageInstall from "./assets/img_03.jpg";
import DownloadAppStore from "./assets/download-on-the-app-store-1.svg";
import DownloadPlayStore from "./assets/playstore.png";
import Arrow from "./assets/arrow_forward.svg";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Container className="heroSection">
      <Row>
        <Col className="heroTextContainer">
        <div className="heroText">
          <h1>Development done right</h1>
          <p>Build a beautiful, modern website with flexible components built from scratch.</p>
          <button type="button" class="btn btn-light">Get started</button>
          <div className="heroLogos">
            <p>Trusted by:</p>
            <img src={GoogleLogo} />
            <img src={SpotifyLogo}/>
            <img src={AirbnbLogo}/>
            <img src={PaypalLogo}/>
          </div>
        </div>
        </Col>
        <Col>
          <div>
            <div className="heroCardSection">
              <div className="manageTitle">
                <h4>Manage cards</h4>
              <Button variant="outline-secondary">Add new</Button>
              </div>
              
              <div className="cardContainer">
                <img src={CardImage}/>
                <div className="cardItems">
                  <div>
                    <h4>Startbucks</h4>
                    <h4>$5,50 USD</h4>
                  </div>
                  <p>Pending - San Francisco, United States</p>
                </div>
                <div className="cardItems">
                  <div>
                    <h4>Nike Sports</h4>
                    <h4>$129,00 USD</h4>
                  </div>
                  <p>Pending - Lisbon, Portugal</p>
                </div>
                <Button variant="link">View all</Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      </Container>
      <Container className="toolSection">
        <Row>
          <Col className="projectContainer"> 
            <div className="projectCard">
              <div className="cardContainer">
                <h4>Awesome projects</h4>
                <div className="itemContainer">
                  <div className="itemData">
                  <p>Create the new logo</p>
                    <div>
                      <p>3:50</p>
                      <img src={ArrowNext}/>
                    </div>
                   
                  </div>   
                   <div className="progressBarContainer">
                      <div className="progressBarOne"></div>
                   </div>                           
                </div>
                <div className="itemContainer">
                  <div className="itemData">
                  <p>Set up the color palette</p>
                    <div>
                      <p>4:00</p>
                      <img src={ArrowNext}/>
                    </div>
                   
                  </div>   
                   <div className="progressBarContainer">
                      <div className="progressBarTwo"></div>
                   </div>                           
                </div>
                <div className="itemContainer">
                  <div className="itemData">
                  <p>Wireframe and prototype</p>
                    <div>
                      <p>6:50</p>
                      <img src={ArrowNext}/>
                    </div>
                   
                  </div>   
                   <div className="progressBarContainer">
                      <div className="progressBarThree"></div>
                   </div>                           
                </div>
              </div>
            </div>
            <div className="projectImage">
              <div className="image">
                <img src={ImageTool}/>
                <Button variant="light" className="imageButton">Play video</Button>
              </div>
            </div>
          </Col>
          <Col>
          <div className="toolTextContainer">
            <div className="toolText">
              <b>Tools</b>
              <h3>We build for designers and developers</h3>
              <p>Get components and examples, including tons of variables that will help you grow your business.</p>
            </div>
              
          </div>
          </Col>
        </Row>
      </Container>
      <Container className="featuresSection">
        <Row>
          <Col>
          <div className="featuresTextContainer">
            <div className="featuresText">
              <b>Features</b>
              <h3>Get components and examples, including tons of variables that will help you grow your business.</h3>
              <div className="featuresCheck">
                <img src={CheckIcon}/>
                <p>Perfect for modern startups</p>
              </div>
              <div className="featuresCheck">
                <img src={CheckIcon}/>
                <p>Fully customizable and scalable</p>
              </div>
            </div>
          </div>
          </Col>
          <Col>
            <div className="imageFeaturesContainer">
              <div className="imageFeatures">
                 <img src={ImageFeature}/>
                 <Button variant="light" className="imageButton">Play video</Button>
              </div>
             </div>
          </Col>
        </Row>
      </Container>
      <Container className="technologySection">
        <Row>
          <Col>
            <TechImage/>
          </Col>
          <Col>
          <div className="technologyTextContainer">           
              <b>Technology</b>
              <h3>We use the latest technologies on the market</h3>
              <p>Get components and examples, including tons of variables that will help you grow your business.</p>
              <Button variant="link">See case studies</Button>
          </div>
          </Col>
        </Row>
      </Container>
      <Container className="installSection">
        <Row>
          <Col>
          <div className="installTextContainer">
              <b>Easy to install</b>
              <h3>Download, install and run.</h3>
              <p>Get components and examples, including tons of variables that will help you grow your business.</p>
              <div className="installDownload">
                <button><img src={DownloadAppStore}/></button>
                <button><img src={DownloadPlayStore}/></button>
              </div>
          </div>
          </Col>
          <Col>
            <div className="imageInstallContainer">
              <div className="imageInstall">
                 <img src={ImageInstall}/>
                 <Button variant="light" className="imageButton">Play video</Button>
              </div>
             </div>
          </Col>
        </Row>
      </Container>
      <Container className="bannerSection">
        <Row>
          <Col>
            <div className="bannerContainer" >
              <div className="bannerText">
                <h4>Infinite solutions</h4>
                <p>Intuitive markup, powerful and lightning-fast build tools,
                everything you need to turn your ideas into incredible products.  
                </p>
              </div>
              <Button type="submit" variant="light" className="bannerButton">Learn more<img src={Arrow} width="18" height="18" alt=""/></Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Awards/>
    </div>
  );
}

export default App;
