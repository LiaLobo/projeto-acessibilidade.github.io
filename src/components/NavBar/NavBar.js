import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Logo from '../../assets/Logo/LogoAD01.png'

import './navBar.css'

const NavBar = () => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"><img className='nav-imgLogo' src={Logo} alt='Logo da página: ícone de cérebro escrito ao lado acessibilidade digital'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Porque ser acessível</Nav.Link>
                <Nav.Link href="#link">Comece agora</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default NavBar