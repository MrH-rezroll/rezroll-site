import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import MainNavigation from './MainNavigation';

 class Header extends Component {

    getId() {
      const id = new Date();
      return id;
    }

    render() {
        return (
        <header>
            <div className="row">
            <h1 className="col-lg-4" id="site-title"><Link className="navbar-brand" to="/" onClick={() => this.props.changePage("/")}>RezRoll</Link></h1>
            <p className="col-lg-8" id="slogan">Retro<em>ish</em> Software, Games and Stuff.</p>
            </div>
            <div  className="game-screen-wrapper">
            <div className="lcd-screen">
                <h3 key={this.getId()} >&lt;matthew hodge&gt;: 
                    <span><span>
                    {
                        this.props.currentPage === "/" ? " Home " : 
                        this.props.currentPage === "about" ? " About" : 
                        this.props.currentPage === "projects" ? " Projects" : 
                        this.props.currentPage === "experience" ? " Experience" : 
                        this.props.currentPage === "blog" ? " Blog" : 
                        this.props.currentPage === "post" ? " Post" : 
                        this.props.currentPage === "social" ? " Social" : 
                        " 404" 
                    }
                    </span></span>
                <br />
                    <span id="slogan-line">
                    {
                        this.props.currentPage === "/" ? "-- Welcome to My Projects and Nonsense. --" : 
                        this.props.currentPage === "about" ? "-- Who's this guy and what is Rezroll? --" : 
                        this.props.currentPage === "projects" ? "-- Here there be Dinosaur Babies. --" : 
                        this.props.currentPage === "experience" ? "-- My library of skills. --" : 
                        this.props.currentPage === "blog" ? "-- My Brainflow to remember and share. --" : 
                        this.props.currentPage === "post" ? "-- Occasional writing is good for the brain mellon. --" : 
                        this.props.currentPage === "social" ? "-- Linked In, YouTube and whatnot. --" : 
                        "-- Nothing to See Here --"
                    }
                    </span>
                </h3>
            </div>
            <MainNavigation currentPage={this.props.currentPage} changePage={this.props.changePage}/>
            </div>
        </header>
        )
    };
  }

  export default Header;