import React, { Component }  from 'react';
import { useParams } from 'react-router-dom';
import { withRouter } from "react-router";
import parse from "html-react-parser";

class BlogPost extends Component {
    constructor(post){
        super();
        this.post = post;
    }
    render() {
        return(
            <main id="blogpost-page">
                <hr className="featurette-divider" />
                <div className="row featurette">
                    <div className="container marketing col-lg-12">
                        <div className="inner-marketing-row-wrapper row">
                            <div className="col-lg-12">
                                <div className="row gb-purple-box">
                                    <h3>{parse(this.post.postTitle)}</h3>
                                    <p>Posted on: {this.post.postDate}</p>
                                    <h4>Summary</h4>
                                    <div>{parse(this.post.postSummary)}<br/><hr/></div>
                                    <div>{parse(this.post.postBody)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default BlogPost;