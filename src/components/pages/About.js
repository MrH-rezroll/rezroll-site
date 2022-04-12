import React, { Component }  from 'react';
import Button from 'react-bootstrap/Button';

class About extends Component {
    render(){
        return(
            <main id="about-page">
                <hr className="featurette-divider" />
                <div className="row featurette">
                    <div className="container marketing col-lg-12">
                        <div className="inner-marketing-row-wrapper row">
                            <div className="col-lg-4">
                                <div className="row gb-purple-box-lg">
                                    <h3>What is “RezRoll”?</h3>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                        <div className="gb-blue-box">
                                            <h3>Short Answer</h3>
                                            <p>I’m so glad you asked. That’s an easy one. It’s a word that I made up... </p>
                                            <Button onClick={() => (document.getElementById("about-rezroll").classList.toggle("collapse"))} className="btn btn-secondary">Would you like to know more?</Button>
                                            <div className="collapse" id="about-rezroll">
                                                <br />
                                                <h3>Longer than Necessary Answer</h3>
                                                <p>Well, I’m not the best at games. I often find myself looking to “Roll for Resurrection”. At 38 years old I’ve just acquired the knowledge and confidence I wish I had in my 20’s. I’m looking to start again. It’s also a bit dual purpose in meaning. It’s my next attempt, but it also describes my style. </p>
                                                <p>I like new tech, but what really excites me are the things I always dreamed of making when I was a kid. I would spend hours playing various games, even those abomination Tiger LCD games, but then I would spend even more time thinking about how I would make all of those things so much better if I was in charge (something most kids do when they have no idea of how to make a thing).</p> 
                                                <p>I’m out to gain traction as a technologist by using new tools/techniques to make what my 90’s kid self thought the future would look like, and on the back of all of that I did the most creative-genius thing I could think of in 30 seconds or less and smashed two words together. “Roll for Resurrection” = RezRoll.</p>
                                                <Button onClick={() => (document.getElementById("about-rezroll").classList.toggle("collapse"))} className="btn btn-secondary">That's enough.</Button>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row featurette">
                    <div className="container marketing col-lg-12">
                        <div className="inner-marketing-row-wrapper row">
                            <div className="col-lg-4">
                                <div className="row gb-purple-box-lg">
                                    <h3>What Did Your Last Attempt Look Like?</h3>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="gb-pink-box">
                                        <h3>Short Answer</h3>
                                        <p>
                                            I tried to get a sole proprietorship going, offering services in the range of programming and digital art.
                                            I unexpectedly found myself accepting a teaching position that has turned into a rewarding career; so, 
                                            I dropped my previous business endevours to focus on my job as an instructor and invest in my own personal
                                            education.
                                        </p>
                                            <Button onClick={() => (document.getElementById("about-step2").classList.toggle("collapse"))} className="btn btn-secondary">Would you like to know more?</Button>
                                        <div className="collapse" id="about-step2">
                                            <br />
                                            <h3>Longer than Necessary Answer</h3>
                                            <p>Long ago (in tech time) my education consisted of an AS in digital animation and I was a self taught programmer. The world wasn’t as friendly to remote work as it is now, and my job opportunities were geographically limited. I was desperate to work as a content creator and specifically a game developer if I could help it, but I was also starving for a paycheck.</p> 
                                            <p>The old saying “step 1: idea, step 3: profit” summed me up pretty well so I did business as a freelancer trying to build a sole proprietorship going by the name “Step 2 | Digital Design”. It made sense at the time. No one knows what "step 2" is. How does one get from an idea to profit? Well, that would be me. I was going to be “step 2” for my clients and myself.</p>
                                            <p>Perhaps it could have gone somewhere, but I was trying to be too many things. I proved good at more art related jobs, and out of my depth in some heavier programming scenarios. I found the limit of what my own self taught ability could do and I “didn’t know what I didn’t know”.</p>
                                            <p>With the passage of time has come higher education, deeper understanding, and an ability to seek out and understand the things I don’t know that I don’t know. I could have used the name Step 2 again, but it just doesn’t feel right. I'm over “Step 2”. </p>
                                            <Button onClick={() => (document.getElementById("about-step2").classList.toggle("collapse"))} className="btn btn-secondary">That's enough.</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default About