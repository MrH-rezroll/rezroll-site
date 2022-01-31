import React, { Component }  from 'react';
import { Link } from 'react-router-dom';

class Blog extends Component {
    render() {
        return(
            <main id="blog-page">
                <hr className="featurette-divider" />
                <div className="row featurette">
                    <div className="container marketing col-lg-12">
                        <div className="inner-marketing-row-wrapper row">
                            <div className="col-lg-12">
                                <div className="row gb-purple-box">
                                    <h2>Blog Posts</h2>
                                    <hr/>
                                    <ul>
                                        <li>
                                            <h3>Roll for Resurection<br/><em>Come on nat 20!</em></h3>
                                            <p>
                                                I'm leaving public education to find my place with a team of humans who are working on projects that make technology more human. I've leveled up my skills and it's time for me to try again.
                                                <br/><Link className="btn btn-secondary" role="button" to="/post/:0" onClick={() => this.props.changePostId(0)}>Read Post &raquo;</Link>
                                            </p>
                                            <hr/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Blog;