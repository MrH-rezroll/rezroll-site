import React, { Component }  from 'react';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
  
class MainNavigation extends Component {
    
    render(){
        return(
            <Navbar collapseOnSelect bg="light" expand="md">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <br />
                                <ul className="navbar-nav">
                                    <li className={this.props.currentPage === "/" ? "active" : ""}>
                                        <NavItem>
                                            <Nav.Link eventKey="1" as={Link} className="nav-link" to="/" onClick={() => this.props.changePage("/")}>Home</Nav.Link>
                                        </NavItem>
                                    </li>
                                    <li className={this.props.currentPage === "about" ? "active" : ""}>
                                        <NavItem>
                                            <Nav.Link eventKey="1" as={Link} className="nav-link" to="about" onClick={() => this.props.changePage("about")}>About</Nav.Link>
                                        </NavItem>
                                    </li>
                                    <li className={this.props.currentPage === "projects" ? "active" : ""}>
                                        <NavItem>
                                            <Nav.Link eventKey="1" as={Link} className="nav-link" to="projects" onClick={() => this.props.changePage("projects")}>Projects</Nav.Link>
                                        </NavItem>
                                    </li>
                                    <li className={this.props.currentPage === "experience" ? "active" : ""}>
                                        <NavItem>
                                            <Nav.Link eventKey="1" as={Link} className="nav-link" to="experience" onClick={() => this.props.changePage("experience")}>Experience</Nav.Link>
                                        </NavItem>
                                    </li>
                                    <li className={this.props.currentPage === "blog" ? "active" : ""}>
                                        <NavItem>
                                            <Nav.Link eventKey="1" as={Link} className="nav-link" to="blog" onClick={() => this.props.changePage("blog")}>Blog</Nav.Link>
                                        </NavItem>
                                    </li>
                                    <li className={this.props.currentPage === "social" ? "active" : ""}>
                                        <NavItem>
                                            <Nav.Link eventKey="1" as={Link} className="nav-link" to="social" onClick={() => this.props.changePage("social")}>Social</Nav.Link>
                                        </NavItem>
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