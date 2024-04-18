import React, {useEffect} from 'react'
import Carousel from '../components/Carousel'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Vineyards from '../assets/Events/2024/vineyardTaste/whipporwillVinyards.jpg'
import Divider from '@mui/material/Divider'
import MyCalendar from '../components/Calendar'
import Basileus from '../assets/ChapterArchives/FredGrayJr_Bas2024.JPG'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Row><Carousel fluid /></Row>
      <Divider/>

      <Row class="row row-cols-4" style={{ padding: '1rem', textAlign: 'center' }}>
        <Col>
          <Link to='/iqcalendar'><h1 style={{ fontSize: '32px', padding: '1rem', background: '#CFB53B', color: '#7851A9' }}>Calendar</h1></Link>
      </Col>
      <Col>
        <Link to='/iqhistory'>
          <h1 style={{ fontSize: '32px', padding: '1rem', background: '#7851A9', color: '#CFB53B' }}>Chapter History</h1>
        </Link>
      </Col>
      <Col>
        <Link to='/historyoppf'>
          <h1 style={{ fontSize: '32px', padding: '1rem', background: '#CFB53B', color: '#7851A9' }}>Omega History</h1>
        </Link>
      </Col>
      <Col>
        <h1 style={{ fontSize: '32px', padding: '1rem', background: '#7851A9', color: '#CFB53B' }}>Leadership</h1>
      </Col>
    </Row>
    <br />    
    <Row>
        <h3>Message from the Basileus</h3>
        <Col className='col-sm-4'>
            <img src= {Basileus} alt="MessageFromBas" style={{height: 400, width: 375}}/>
            <h4 style={{padding: 10, fontSize: '16px', textAlign: 'left'}}>Current Omega Year Basileus 2023-2024</h4>
        </Col>
        <Col>
          <p>Dear Brothers, Friends and Supporters,</p>
          <p>I am delighted to welcome you to our official website, a digital space that embodies the spirit of our shared vision and collective endeavors. Serving as your Basileus, it is both an honor and a privilege to present a platform that encapsulates the values, ambitions, and progress we hold dear. </p>
          <p>In this dynamic era of constant change, where information and connectivity intertwine to shape the world, our website stands as a testament to our dedication to openness, inclusivity, and forward-thinking. Whether you are a seasoned member of our community or a newcomer exploring our digital landscape, I encourage you to immerse yourself in the diverse array of resources, updates, and possibilities available here.</p>
          <p>Our commitment to transparency and innovation is reflected in the content you'll discover, showcasing the positive impact we aspire to achieve together. As we collectively navigate the challenges and opportunities of our time, your engagement and collaboration are pivotal in steering us toward a future marked by justice, equality, and sustainability.</p>

          <p>I extend my gratitude to each one of you for being an integral part of our community. Together, let us explore, connect, and work towards a future where our shared efforts make a lasting and meaningful difference.</p>

          <p>With warm regards,</p>
          <h4 style={{ fontfamily: 'Agdasima'}}>Fred Gray Jr. Esq.</h4>
        </Col>
      </Row>
      <br/>
      <Row>
        <h5>Upcoming Event: </h5>
        <MyCalendar/>
        <br/>
        <img src= {Vineyards} class="img-fluid" alt="DR. ERNEST E. JUST" style={{height: 375, padding: 25}}/>
        <h2 style={{textAlign: 'center', color: '#7851A9'}}>Taste of the Vineyards </h2>
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
      </Row>
    </Container>
  )
}

export default Home