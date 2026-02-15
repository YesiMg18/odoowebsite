import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../scss/Faqs.scss";

//Images
import fileIcon from "../assets/file-icon.svg";
import lockIcon from "../assets/lock-icon.svg";
import folderIcon from "../assets/folder-icon.svg";
import addIcon from "../assets/more-icon.svg";
import { Button } from 'react-bootstrap';






function Faqs() {
  return (
    <div>
        <Container fluid id="faqs">
         <section className='faqsSection'>
            <div className='faqsTitle'>
                <h2>Helpful answers</h2>
                <p>Start building fast, beautiful, and modern-looking websites in no time.</p>
            </div>
            <Row className='cardsContainer'> 
                <Col>
                    <div className='cardItem'>
                        <div className='cardItemText'>
                            <img src={fileIcon}/>
                            <p>Which license do I need?</p>
                        </div>
                    <button><img src={addIcon}/></button>
                    </div>
                    <div className='cardItem'>
                        <div className='cardItemText'>
                            <img src={lockIcon}/>
                            <p>How do I get access to my database?</p>
                        </div>
                    <button><img src={addIcon}/></button>
                    </div>
                    <div className='cardItem'>
                        <div className='cardItemText'>
                            <img src={folderIcon}/>
                            <p>Which license do I need?</p>
                        </div>
                    <button><img src={addIcon}/></button>
                    </div>
                </Col>
                <Col>
                <div className='cardItem'>
                        <div className='cardItemText'>
                            <img src={fileIcon}/>
                            <p>Which license do I need?</p>
                        </div>
                    <button><img src={addIcon}/></button>
                    </div>
                    <div className='cardItem'>
                        <div className='cardItemText'>
                            <img src={lockIcon}/>
                            <p>How do I get access to my database?</p>
                        </div>
                    <button><img src={addIcon}/></button>
                    </div>
                    <div className='cardItem'>
                        <div className='cardItemText'>
                            <img src={folderIcon}/>
                            <p>How do I see previous orders?</p>
                        </div>
                    <button><img src={addIcon}/></button>
                    </div>
                </Col>
            </Row>
            <div className='faqsActions'>
                <p>I want to start a new project.</p>
                <div>
                    <Button>Buy now</Button>
                    <Button variant="link" >Learn more</Button>
                </div>
                
            </div>
         </section>
        </Container>
    </div>
  );
}

export default Faqs;