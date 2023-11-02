import React from 'react'
import '../css/Navbar.css'
import logoImage from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'

export default function Navbar() {
  return <nav className='nav'>
    <Container fluid>
    <Row>
      <Col sm={4}>
        <Link to='/' className="site-title">
            <img src={logoImage} alt="Iota Omega Chapter of Omega Psi Phi" />
        </Link>
      </Col>
      <Col className='sticky=top' >
        <ul >
            <li><Link to='/ourprograms'>Our Programs</Link></li>
            <li><Link to='/historyoppf'>History of Omega</Link></li>
            <li><Link to='/iqhistory'>IQ History</Link></li>
            <li><Link to='/contactus'>Contact Us</Link></li>
        </ul>
      </Col>
    </Row>
    </Container>
  </nav>
}
