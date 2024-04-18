import { Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import OppfShieldImage from '../assets/oppfWithshield.png';
import '../css/Navbar.css';

function BasicNavigation() {
  return (
      <Navbar className="navbar-with-banner">
        <Container>
          <Navbar.Brand href="#home">
            <Link to='/' className="site-title">
              <img src={logoImage} alt="Iota Omega Chapter of Omega Psi Phi" style={{ width: '300px', height: '200px' }}/>
            </Link>
          </Navbar.Brand>
          <Navbar.Collapse id="nav a">
            <Nav className="me-auto">
              <Nav.Link className='nav' href="/">Home</Nav.Link>
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

          <Navbar.Brand href="https://oppf.org/">
            <Link to='/' className="site-title">
              <img src={OppfShieldImage} alt="Omega Psi Phi Inc." style={{ width: '320px', height: '150px' }}/>
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default BasicNavigation;