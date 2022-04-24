import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Blog from './pages/Blog';
//import Post from './pages/BlogPost';
import Social from './pages/Social';

import '../css/App.css';
import BlogPost from './pages/BlogPost';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: '/',
      postId: 0,
      posts: {
          0:{
              title: 'Roll for Resurection<br><em>Come on nat 20!</em>',
              date: 'January 30th, 2022',
              summary: '<p>I\'m leaving public education to find my place with a team of humans who are working on projects that make technology more human. I\'ve leveled up my skills and it\'s time for me to try again.</p>',
              body: '<p>It\’s been an amazing eight years at The Center for Advanced Research and Technology. In my time at CART I\’ve gained a new sense of self worth by acquiring my Bachelor degree in Software Development and my Master\’s in Applied Computer Science. I\’ve worked with students on some really cool projects from Hololens to web based AR with Vuforia. In the more recent pandemic years I had the opportunity to take my class to a meta-verse style classroom with Virbela and during that time I started to see how AR/VR/XR solutions are starting to build the future of human computer interaction.</p> <p>The current state of remote work opens opportunities that I couldn\’t have pursued eight years ago. I do not yet have my next job lined up; however, I\’m hearing it can take 4 months to a year to find one\’s place. I have built up resources to take a chance on myself, to grow my portfolio, finish some of my own projects and find my place on a team. If I don\’t take this chance now, I likely never will.</p> <p>I can’t wait to see what unfolds.</p>'
          },
          1:{
              title: 'Post 1 Title',
              date: 'date 1',
              summary: 'post 1 summary',
              body: '<p>Post 1 Body</p>'
          }
      }
    };
    this.changePage = this.changePage.bind(this);
    this.changePostId = this.changePostId.bind(this);
  }

  changePostId(postId){
    this.setState({
      postId: postId
    });
  }

  changePage(page) {
    this.setState({
      currentPage: page
    });
  }

  render() {
    return (
      <Router>
        <div id="wrapper">
          <Header currentPage={this.state.currentPage} changePage={this.changePage}/>
          <Routes>
            <Route path="/" element={<Home changePostId={this.changePostId} changePage={this.changePage} postTitle={this.state.posts[0].title}/>} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="blog" element={<Blog changePostId={this.changePostId}/>} />
            <Route path="post/:postId" element={<BlogPost postId={this.state.postId} postSummary={this.state.posts[this.state.postId].summary} postTitle={this.state.posts[this.state.postId].title} postBody={this.state.posts[this.state.postId].body} postDate={this.state.posts[this.state.postId].date}/>} />
            <Route path="social" element={<Social />} />
            <Route path="experience" element={<Experience />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
};

export default App;
