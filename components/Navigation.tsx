import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../public/logo.png';
import Image from 'next/image';
import { Nav, NavDropdown } from 'react-bootstrap';

function Navigation() {
  return (
    <>
      <Navbar id='navbar' bg='dark' variant='dark'>
        <Container id='navContainer'>
          <Navbar.Brand id='brandLogo' href='/'>
            <Image
              id='kentobeansLogo'
              src={logo}
              alt='Kentobeans Logo'
              width='30'
              height='30'
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </Navbar.Brand>
          <Navbar.Toggle id='navbarToggle' aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='commands' id='commandsLink'>
                Bot Commands
              </Nav.Link>
              <Nav.Link href='#link' id='sotnLink'>
                Song of the Night
              </Nav.Link>
              <Nav.Link href='#link' id='botControlsLink'>
                Kentobot Controls
              </Nav.Link>
              <Nav.Link href='#link' id='bumpsLink'>
                Bumps
              </Nav.Link>
              <NavDropdown title='Bean Rewards' id='rewardsDropdown'>
                <NavDropdown.Item id='livelearn' href='#action/3.1'>
                  Live Learn
                </NavDropdown.Item>
                <NavDropdown.Item id='djhour' href='#action/3.2'>
                  DJ Hour
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
