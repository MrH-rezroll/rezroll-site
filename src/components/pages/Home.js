import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import twitchLCD from './../../images/lcd-twitch.gif';
import parse from "html-react-parser";

class Home extends Component {
    constructor(post){
        super();
        this.post = post;
    }
    render() {
        return(
            <main id="home-page">
                <hr className="featurette-divider" />
                <div className="row featurette">
                    <div className="container marketing col-lg-12">
                        <div className="inner-marketing-row-wrapper row">
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <span className="gb-green-box">
                                            <p><strong>*BETA NOTE: </strong>
                                                This site is an ongoing exercise in React. It currently showcases some of my projects, and the blog is almost ready.
                                            </p>
                                        </span>
                                    </div>
                                    <div className="col-lg-4">
                                        <span className="gb-blue-box">
                                            <Link className="btn btn-secondary" to="/" role="button">Featured Video &raquo;</Link>
                                            <br />
                                            <br />
                                            <p><em>YouTube channel starting around Aug/Sept.</em></p>
                                        </span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <span className="gb-purple-box">
                                            <Link className="btn btn-secondary" to="/" role="button">View Content &raquo;</Link>
                                            <br />
                                            <br />
                                            <p><em>I haven't decided what I'm putting here yet.</em></p>
                                        </span>
                                    </div>
                                    <div className="col-lg-8">
                                        <span className="gb-pink-box">
                                            <Link className="btn btn-secondary" to="/post/:0" onClick={() => this.props.changePostId(0)} role="button">Featured Post &raquo;</Link>
                                            <br />
                                            <br />
                                            <p>{parse(this.post.postTitle)}</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <span className="gb-purple-box-lg">
                                    <Link id="featured-project-button" className="btn btn-secondary" to="projects" role="button" onClick={() => this.props.changePage("projects")}>Featured Project &raquo;</Link>
                                    <img id="featured-project-image" alt="Twtich LCD" src={twitchLCD} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Home;