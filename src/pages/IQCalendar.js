import React, {useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CharlesDrew from '../assets/Events/2024/bloodDrive/bloodDrive.jpg' 
import MyCalendar from '../components/Calendar'

const IQcalendar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
        <Container>
        <Row>
          <h1 className="text-center my-4" style={{textDecoration:'underline', color: '#7851A9'}}>IQ Calendar</h1>
        <Row>
        <MyCalendar/>
        <br/>
        
      </Row>
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