import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Logo from '../../assets/Logo/LogoAD01.png'
import { Link } from 'react-router-dom'

import './navBar.css'

const NavBar = () => (
    <nav>
        <Navbar bg="light" expand="lg" className='nav'>
            <Link to='/'>
                <Navbar.Brand href="#home"><img className='nav-imgLogo' src={Logo} alt='Logo da página: ícone de cérebro escrito ao lado acessibilidade digital'/></Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to='/'>
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Link>
                    <Link to='/acessibilidade'>
                        <Nav.Link href="#link">Porque ser acessível</Nav.Link>
                    </Link>
                    <Link to='/comece'>
                        <Nav.Link href="#link">Comece agora</Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </nav>
)

export default NavBar