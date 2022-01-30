import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
  
class MainNavigation extends Component {

    render(){
        return(
            <nav className="navbar navbar-expand-md navbar-light">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar">start</span>
                </button>
            </div>
            <div id="navbarNav" className="navbar-collapse collapse">
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
            </div>
            </nav>
        );
    }
}

export default MainNavigation;