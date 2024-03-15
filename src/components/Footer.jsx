import React from 'react'
import '../css/Footer.css'
import logoImage from '../assets/logo.png'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div class="footer">
                <Container fluid >
                    <Row class="row row-cols-3" style={{padding:'1rem', textAlign:'center'}}>
                        <Col>
                            <ul style={{listStyle: 'none', fontSize: '1rem'}}>
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/ourprograms'>Our Programs</Link>
                                </li>
                                <li>
                                    <Link to='/historyoppf'>Omega History</Link>
                                </li>
                                <li>
                                    <Link to='/contactus'>Contact Us</Link>
                                </li>
                            </ul>
                        </Col>
            
                        <Col style={{alignContent: 'center'}}>
                            <img src={logoImage} style={{height:'13rem'}} alt="Iota Omega Chapter of Omega Psi Phi" />
                        </Col>
                        <Col>
                            <ul style={{listStyle: 'none', fontSize: '1rem'}}>
                                <li><Link to='#'>Chapter Line List</Link></li>
                                <li><Link to='www.oppf.org'>OPPF.org</Link></li>
                                <li><Link to='#'>Find A Chapter</Link></li>
                                <li><Link to='#'>How To Join</Link></li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{textAlign: 'center'}}>
                        <p>
                            @{new Date().getFullYear()} Iota Omega Chapter of Omega Psi Phi Inc. 
                            <br/>
                            All right reserved
                        </p>
                        </Col>
                    </Row>
                </Container> 
                
    </div>
  )
}

export default Footer