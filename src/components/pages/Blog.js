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
                                    <h3>Posts</h3>
                                    <ul>
                                        <li>
                                            <Link className="nav-link" to="/post/:0" onClick={() => this.props.changePostId(0)}>Recent Post Title</Link>
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