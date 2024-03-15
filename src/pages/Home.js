import React from 'react'
import Carousel from '../components/Carousel'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CharlesDrew from '../assets/Events/2024/bloodDrive/bloodDrive_CharlesDrew.JPG' 
import Divider from '@mui/material/Divider'
import MyCalendar from '../components/Calendar'

const Home = () => {
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
    <Row>
        <h3>Message from the Basileus</h3>
        <p>Dear Brothers, Friends and Supporters,</p>
        <p>I am delighted to welcome you to our official website, a digital space that embodies the spirit of our shared vision and collective endeavors. Serving as your Basileus, it is both an honor and a privilege to present a platform that encapsulates the values, ambitions, and progress we hold dear. </p>

        <p>In this dynamic era of constant change, where information and connectivity intertwine to shape the world, our website stands as a testament to our dedication to openness, inclusivity, and forward-thinking. Whether you are a seasoned member of our community or a newcomer exploring our digital landscape, I encourage you to immerse yourself in the diverse array of resources, updates, and possibilities available here.</p>

        <p>Our commitment to transparency and innovation is reflected in the content you'll discover, showcasing the positive impact we aspire to achieve together. As we collectively navigate the challenges and opportunities of our time, your engagement and collaboration are pivotal in steering us toward a future marked by justice, equality, and sustainability.</p>

        <p>I extend my gratitude to each one of you for being an integral part of our community. Together, let us explore, connect, and work towards a future where our shared efforts make a lasting and meaningful difference.</p>

        <p>With warm regards,</p>
        <h4 style={{ fontfamily: 'Agdasima'}}>Fred Gray Jr. Esq.</h4>
      </Row>
      <br/>
      <Row>
        <h5>Upcoming Event: </h5>
        <MyCalendar/>
        <br/>
        <p style={{textAlign: 'center'}}>Join Us At the Tuskegee Municipal Complex Auditorium</p>
        <p style={{textAlign: 'center'}}>On: Saturday, March 23, 2024</p>
        <p style={{textAlign: 'center'}}>From: 10:00AM to 2:00PM</p>
        <img src= {CharlesDrew} class="img-fluid" alt="DR. ERNEST E. JUST" style={{height: 300, padding: 25}}/>
        <br/>
        <p>Your generous contribution of blood has the power to save lives. We extend our heartfelt gratitude to all the donors who participated in this blood drive, offering vital assistance to address the urgent need within the black community. As a token of appreciation, our esteemed partners at Amazon are pleased to offer a $20 Gift Card, which will be sent to you via email. Your kindness and compassion make a significant difference in the lives of those in need. Thank you for your invaluable support.</p>
        <p>Please visit <strong style={{color:'#990000'}}>www.RedCrossBlood.org</strong> and use sponsor code <strong style={{color:'#990000'}}>"OmegaTuskegee"</strong> Or Call <strong >1-800-RED-CROSS (1-800-733-2767)</strong>.</p>
        <p>All donors will recieve a free health screening prior to donating. Screening for the Sickle Cell Trait is also provided for donors who self-identify as African-American.</p>
        <p style={{color:'#4CBB17'}}>PRO TIPS: Please Make sure to eat iron-rich foods and HYDRATE!!</p>
      </Row>
    </Container>
  )
}

export default Home