import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import '../css/Navbar.css';

function BasicNavigation() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          <Link to='/' className="site-title">
            <img src={logoImage} alt="Iota Omega Chapter of Omega Psi Phi" style={{ width: '300px', height: '200px' }}/>
        </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Our Programs" id="basic-nav-dropdown">
              <NavDropdown.Item href="/ourprograms">Mandated Programs</NavDropdown.Item>
              <NavDropdown.Item href="/iqcalendar">Upcoming IQ Events</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="History" id="basic-nav-dropdown">
              <NavDropdown.Item href="/historyoppf">History of Omega</NavDropdown.Item>
              <NavDropdown.Item href="/iqhistory">IQ History</NavDropdown.Item>
              <NavDropdown.Item href="/chapterlinelist">IQ Chapter Line List</NavDropdown.Item>
              <NavDropdown.Item href="/chapterArchives">IQ Chapter Archives</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.oppf.org" target="_blank" rel="noopener noreferrer">
                Visit OPPF Site
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNavigation;