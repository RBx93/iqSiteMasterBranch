import React from 'react'
import Carousel from '../components/Carousel';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Container>
      <Row>
        <Carousel fluid/>
      </Row>
      <Row class="row row-cols-4" style={{padding:'1rem', textAlign:'center'}}>
        <Col>
          <h1 style={{fontSize: '32px', padding: '1rem', background: '#CFB53B', color: '#7851A9'}}>Calendar</h1>
        </Col>
        <Col>
          <Link to='/iqhistory'>
            <h1 style={{fontSize: '32px', padding: '1rem', background: '#7851A9', color: '#CFB53B'}}>Chapter History</h1>
          </Link>
        </Col>
        <Col>
          <Link to='/historyoppf'>
            <h1 style={{fontSize: '32px', padding: '1rem', background: '#CFB53B', color: '#7851A9'}}>Omega History</h1>
          </Link>
        </Col>
        <Col>
          <h1 style={{fontSize: '32px', padding: '1rem', background: '#7851A9', color: '#CFB53B'}}>Leadership</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default Home