import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import pageLogo from '../assets/image/svg/pagelogo.svg'

const NavBar = () => {
    return (
        <>
            <section>
                <Navbar collapseOnSelect expand="md" bg="#FAFAFA" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home"><img src={pageLogo} alt="pagelogo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto p-0 mt-2">
                                <Nav.Link href="#features" className='navlinks_hover mx-lg-3 text-dark fs_24 fw-bold ff_space'>Home</Nav.Link>
                                <Nav.Link href="#pricing" className='navlinks_hover mx-lg-3 text-dark fs_24 fw-bold ff_space'>Rent</Nav.Link>
                                <Nav.Link href="#pricing" className='navlinks_hover mx-lg-3 text-dark fs_24 fw-bold ff_space'>Land</Nav.Link>
                                <Nav.Link href="#pricing" className='navlinks_hover mx-lg-3 text-dark fs_24 fw-bold ff_space'>Agent</Nav.Link>
                                <Nav.Link href="#pricing" className='navlinks_hover ms-lg-3 text-dark fs_24 fw-bold ff_space'>Contact Us</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link eventKey={2} href="#memes">
                                    <a href="#" className='get_started_btn fs_24 fw-bold ff_space text-white btn_hover'>Get Started  </a>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </section>
            <hr />
        </>
    )
}

export default NavBar