import React, { Component }  from 'react';
  
class Footer extends Component {
    render() {
        return (
            <>
            <hr className="featurette-divider" />
            <footer className="footer">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <span className="text-muted">Copyright &copy;{new Date().getFullYear()} RezRoll, <a target="blank" alt="Matthew Hodge on Linked In" href="https://www.linkedin.com/in/rezroll/">Matthew Hodge</a></span>
                </div>
                <div className="col-lg-6">
                    <span className="text-muted"><span id="date-accessed"></span></span>
                </div>
                </div>
            </div>
            </footer>
            </>
        );
    }
}

export default Footer;