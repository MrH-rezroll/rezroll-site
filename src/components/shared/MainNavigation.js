import React, { Component }  from 'react';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
  
class MainNavigation extends Component {

    render(){
        return(
            <Navbar bg="light" expand="md">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="me-auto" id="navbarNav">
                            <br />
                            <ul className="navbar-nav">
                                <li className={this.props.currentPage === "/" ? "active" : ""}>
                                    <Link className="nav-link" to="/" onClick={() => this.props.changePage("/")}>Home</Link>
                                </li>
                                <li className={this.props.currentPage === "about" ? "active" : ""}>
                                    <Link className="nav-link" to="about" onClick={() => this.props.changePage("about")}>About</Link>
                                </li>
                                <li className={this.props.currentPage === "projects" ? "active" : ""}>
                                    <Link className="nav-link" to="projects" onClick={() => this.props.changePage("projects")}>Projects</Link>
                                </li>
                                <li className={this.props.currentPage === "experience" ? "active" : ""}>
                                    <Link className="nav-link" to="experience" onClick={() => this.props.changePage("experience")}>Experience</Link>
                                </li>
                                <li className={this.props.currentPage === "blog" ? "active" : ""}>
                                    <Link className="nav-link" to="blog" onClick={() => this.props.changePage("blog")}>Blog</Link>
                                </li>
                                <li className={this.props.currentPage === "social" ? "active" : ""}>
                                    <Link className="nav-link" to="social" onClick={() => this.props.changePage("social")}>Social</Link>
                                </li>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default MainNavigation;