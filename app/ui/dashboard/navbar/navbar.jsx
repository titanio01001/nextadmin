"use client"

import './navbar.module.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './navbar.module.css';


function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body">
      <Container fluid className={styles.Container}>
        <Navbar.Brand className={styles.title} href="">Eulen Suite</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <ul className={styles.ul}>
              <li className= {styles.li}><Nav.Link href="/">Home</Nav.Link></li>
              <li className= {styles.li}><NavDropdown title="Opcion 1" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown></li>
            <li className= {styles.li}><NavDropdown title="Opcion 2" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> </li>
            <li className= {styles.li}> <Form className="d-flex">
            <Form.Control
              className={styles.search}
              type="search"
              placeholder="  Buscar..."
              
            />
            <Button variant="outline-success">
              <span></span>
            </Button>
          </Form></li>
          </ul>
            
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample