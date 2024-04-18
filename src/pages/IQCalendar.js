import React, {useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Vineyards from '../assets/Events/2024/vineyardTaste/vineyardFlyer.png' 
import VineyardLogo from '../assets/Events/2024/vineyardTaste/whipporwillVinyards.jpg'
import CharlesDrew from '../assets/Events/2024/bloodDrive/bloodDrive.jpg' 
import MyCalendar from '../components/Calendar'

const IQcalendar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
        <Container>
        <Row>
          <MyCalendar/>
        <br/>
        </Row>
        <Row style={{textAlign: 'center'}}><h3>Upcoming Events:</h3></Row>
        <Row style={{textAlign: 'center'}}><h3>Past Events:</h3></Row>
        <Row xs={1} sm={1} fluid style={{backgroundColor: '#CFB53B', color: 'white', padding: '1rem'}}>
        <img src= {VineyardLogo} class="img-fluid" alt="DR. ERNEST E. JUST" style={{height: 375, padding: 25}}/>
          <Col className='col-sm-4'>
            <img src= {Vineyards} class="img-fluid" alt="Taste of the Vineyards" style={{height: 400}}/>
          </Col>
          <Col className='col-sm-8'>
            <h2 style={{textAlign: 'center'}}>Taste of the Vineyards </h2>
            <br/>
            <p style={{textAlign: 'center'}}>Join Us Whippoorwill Vineyards, Notasulga, AL</p>
            <p style={{textAlign: 'center'}}>On: Saturday, April 13, 2024</p>
            <p style={{textAlign: 'center'}}>From: 2:00 PM - 4:00 PM</p>
            <p>Join us for an afternoon of wine indulgence at the breathtaking Whippoorwill Vineyards! 🌿✨ Immerse yourself in the beauty of our vineyard landscape as you savor a curated selection of our finest wines.</p>
            <p>✨ Event Highlights:</p>
            <ul>
              <li>🍷 Entrance to the Vineyard: Explore the serene beauty of Whippoorwill Vineyards with exclusive access to our stunning vineyard grounds.</li>
              <li>🍇 Tour of the Facility and 📚 Educational Session: Embark on a guided tour of our state-of-the-art facility and learn about the artistry behind wine making. Discover the intricate process of wine production in an engaging educational session led by our expert vintners.</li>
              <li>🍷 Tasting of Select Wines: Indulge your palate with a curated selection of our finest wines, carefully crafted to perfection.</li>
              <li>💸 Discounts on Wine: Enjoy exclusive discounts on wine purchases made during the event, perfect for stocking up your wine cellar!</li>
            </ul>
        
            <p>🔔 RSVP Now!</p>
            <p>Secure your spot for this exclusive event by purchasing a ticket via paypal. Please scan Don't miss out on this opportunity to experience the best of Whippoorwill Vineyards!</p>
          </Col>
        </Row>

        <Row xs={1} sm={1} fluid style={{backgroundColor: '#7851A9', color: 'white', padding: '1rem'}}>
          <Col className='col-sm-4'>
            <img src= {CharlesDrew} class="img-fluid" alt="DR. ERNEST E. JUST" style={{height: 400}}/>
          </Col>
          <Col className='col-sm-8'>
            <h2 style={{textAlign: 'center'}}>Dr. Charles Drew Blood Drive </h2>
            <br/>
            <p style={{textAlign: 'center'}}>Join Us At the Tuskegee Municipal Complex Auditorium</p>
            <p style={{textAlign: 'center'}}>On: Saturday, March 23, 2024</p>
            <p style={{textAlign: 'center'}}>From: 10:00AM to 2:00PM</p>
            <p>Your generous contribution of blood has the power to save lives. We extend our heartfelt gratitude to all the donors who participated in this blood drive, offering vital assistance to address the urgent need within the black community. As a token of appreciation, our esteemed partners at Amazon are pleased to offer a $20 Gift Card, which will be sent to you via email. Your kindness and compassion make a significant difference in the lives of those in need. Thank you for your invaluable support.</p>
            <p>Please visit <strong style={{color:'#990000'}}>www.RedCrossBlood.org</strong> and use sponsor code <strong style={{color:'#990000'}}>"OmegaTuskegee"</strong> Or Call <strong >1-800-RED-CROSS (1-800-733-2767)</strong>.</p>
            <p>All donors will receive a free health screening prior to donating. Screening for the Sickle Cell Trait is also provided for donors who self-identify as African-American.</p>
            <p style={{color:'#4CBB17'}}>PRO TIPS: Please Make sure to eat iron-rich foods and HYDRATE!!</p>
          </Col>
        </Row>
      </Container>
  )
}

export default IQcalendar