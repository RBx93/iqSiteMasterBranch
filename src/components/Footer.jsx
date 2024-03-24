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
                            <Link to='/' className="site-title">
                                <img src={logoImage} style={{height:'13rem'}} alt="Iota Omega Chapter of Omega Psi Phi" />
                            </Link>
                        </Col>
                        <Col>
                            <ul style={{listStyle: 'none', fontSize: '1rem'}}>
                                <li><Link to='/chapterlinelist'>Chapter Line List</Link></li>
                                <li><a href="http://www.oppf.org" target="_blank" rel="noopener noreferrer">OPPF.org</a></li>
                                <li><a href="https://members.oppf.org/OPPMembers/ChapterSearch/ChapterSearch.aspx" target="_blank" rel="noopener noreferrer">Find A Chapter</a></li>
                                <li><a href="https://oppf.org/interested-in-omega-psi-phi-fraternity/" target="_blank" rel="noopener noreferrer">How To Join</a></li>
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