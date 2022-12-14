import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../public/logo.png';
import Image from 'next/image';
import { Nav, NavDropdown } from 'react-bootstrap';
import { signOut, useSession } from 'next-auth/react';
import UserNavItem from './UserNavItem';

function Navigation() {
  const { data: session } = useSession();

  return (
    <>
      <Navbar id='navbar' expand='lg' bg='dark' variant='dark'>
        <Container id='navContainer'>
          <Navbar.Brand id='brandLogo' href='/'>
            <Image
              id='kentobeansLogo'
              src={logo}
              alt='Kentobeans Logo'
              width='30'
              height='30'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='commands' id='commandsLink'>
                Bot Commands
              </Nav.Link>
              <Nav.Link href='sotn' id='sotnLink'>
                Song of the Night
              </Nav.Link>
              <Nav.Link href='#link' id='botControlsLink' disabled>
                Kentobot Controls
              </Nav.Link>
              <Nav.Link href='#link' id='bumpsLink' disabled>
                Bumps
              </Nav.Link>
              <NavDropdown title='Bean Rewards' id='rewardsDropdown' disabled>
                <NavDropdown.Item id='livelearn' href='#action/3.1'>
                  Live Learn
                </NavDropdown.Item>
                <NavDropdown.Item id='djhour' href='#action/3.2'>
                  DJ Hour
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className='justify-content-end'>
            <UserNavItem />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
