import React, { Component }  from 'react';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import objectCollection from '../../images/object-collection.jpeg';
import cityBuildings from '../../images/city-buildings.jpeg';
import cityStuff from '../../images/city-stuff.jpeg';
import apocRex1 from '../../images/apoc-rex1.jpeg';
import apocRex2 from '../../images/apoc-rex2.jpeg';
import apocRex3 from '../../images/apoc-rex3.jpeg';
import house1 from '../../images/house1.png';
import house2 from '../../images/house2.png';
import house3 from '../../images/house3.png';
import house4 from '../../images/house4.png';
import house5 from '../../images/house5.png';
import cove1 from '../../images/cove1.jpeg';
import cove2 from '../../images/cove2.jpeg';
import cove3 from '../../images/cove3.jpeg';
import cove4 from '../../images/cove4.jpeg';
import cove5 from '../../images/cove5.jpeg';
import gate1 from '../../images/gate1.jpeg';
import gate2 from '../../images/gate2.png';
import gate3 from '../../images/gate3.jpeg';
import gate4 from '../../images/gate4.png';
import gate5 from '../../images/gate5.png';
import gate6 from '../../images/gate6.png';

class Projects extends Component {
    render() {
        return(
            <main id="projects-page">
                <hr className="featurette-divider" />
                <div className="row featurette">
                    <div className="container marketing col-lg-12">
                        <div className="inner-marketing-row-wrapper row">
                            <div className="col-lg-4">
                                <div className="row gb-purple-box-lg">
                                    <h3>"Tactical Twitch" Dual Screen Handheld LCD Game with COLOR Graphics!</h3> 
                                    <p>
                                        Unity (2021 - current)
                                        <br />
                                        <strong>Status:</strong> Actively Developing
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                        <div className="gb-blue-box">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/4piny7TLkDw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        <Button onClick={() => (document.getElementById("desc-twitch-lcd").classList.toggle("collapse"))} className="btn btn-secondary">Project Description</Button>
                                        <div className="collapse" id="desc-twitch-lcd">
                                                <br />
                                                <p>After 5 years of "higher education" in computer programming/science my 
                                                    coding ability has leveled up; however, my time for such projects has 
                                                    gone down. As is often the case, now that I have peak ability I also 
                                                    have peak responsibility; so, this new design capitalizes on all of 
                                                    the art assets and game play concepts I've already created, allowing 
                                                    me to spend my limited free time coding the best Unity game I can. 
                                                    This isn't going for an immersive world and complex story. It's more 
                                                    about the experience and the narrative of the device. If you'd like 
                                                    to hear more, I'll be happy to talk about it. <em>Oh, and I feel 
                                                    obligated to say this; the game in the video is very much a WIP, but 
                                                    it is moving along at a brisk pace.</em>
                                                </p>
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
                                    <h3>"Tactical Twitch" Nintendo 3DS Project</h3>
                                    <p>
                                        Unity (2020), Nintendo 3DS
                                        <br />
                                        <strong>Status:</strong> Archived
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="gb-green-box" >
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/RPlFbSRFyXA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        <Button onClick={() => (document.getElementById("desc-twitch-3ds").classList.toggle("collapse"))} className="btn btn-secondary">Project Description</Button>
                                        <div className="collapse" id="desc-twitch-3ds">
                                            <br />
                                        <p>
                                            This was very cool. After years of education were coming to a close, 
                                            I purchased the official Developer 3DS Console from the Nintendo 
                                            Developer Portal. I attempted to reuse code written in other 
                                            prototypes, but quickly ran into problems when everything constantly 
                                            crashed on loading my game. The Nintendo Dev portal has private forums, 
                                            but most of creating Unity projects for 3DS is on the developer to 
                                            figure out. I very quickly learned the benefit of instantiating only 
                                            the GameObjects you need, and to never instantiate or destroy objects 
                                            during runtime on this platform. Under the hood, it was not as powerful 
                                            as modern systems and has a lower amount of memory.
                                        </p>	
                                        <p>
                                            The approach I took to to get my prototype loading on the N3DS was to plan 
                                            every game object I would need and instantiate all of it when the game first 
                                            loads. I then dynamically enable and set what I need for play, when I need it. 
                                            In doing this, I made sure the amount of memory used by the time the game 
                                            reached the title screen was the only amount of memory it would use while 
                                            running; so, no loosing track of how many objects exist and maxing out the 
                                            memory for that reason. I also began making games in one scene, and moved away 
                                            from treating scenes as levels. I use scenes to work on individual assets, but 
                                            those are turned to prefabs that are then used in the "main" scene, where the 
                                            actual product is coming together.
                                        </p>
                                        <p>
                                            Unfortunately my time with the N3DS has been cut short. Nintendo ended their 
                                            arrangement with Unity for the N3DS and the software is no longer available 
                                            via the developer portal. Alas, the Nintendo 3DS has come to its effective end. 
                                            It was fun and educational while it lasted.
                                        </p>
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
                                    <h3>A Concept Middleware to Tell Better Stories (2020)</h3>
                                    <p><strong><em>The video is currently down due to the university closing the Google account it was uploaded to. I'll record something new for it when time allows; however, if you're interested the project can be found on my <a title="UWG final project" href="https://github.com/MrH-rezroll/GameStoryDrive-UWG-Final" target="blank">GitHub</a> page where I forked it from my University of West Georgia account.</em></strong></p>
                                    <p>
                                        Java-JavaFX-Maven and MySQL
                                        <br />
                                        <strong>Status:</strong> Active, Temp Hold
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="gb-pink-box">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/u12q2yzJ-rs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        <Button onClick={() => (document.getElementById("desc-story-mapper").classList.toggle("collapse"))} className="btn btn-secondary">Project Description</Button>
                                        <div className="collapse" id="desc-story-mapper">
                                            <br />
                                            <p>
                                                This project is one I conceived and pitched to my professor as my team's 
                                                graduate project. It was green-lit and my team and I built it. It is a 
                                                database designed around storing the story, items, quests and other information 
                                                with clear semantic meaning to the content and to guide quests to have good 
                                                story structure. The GUI input information to the database in a way that uses 
                                                the language of the "hero's journey" and directs quests to follow story and 
                                                character archetypes. There is both a GUI and DB design implemented here. The 
                                                database that results from use of the tool is meant to be implemented in a game 
                                                engine that can make a MySQL DB connection. My intent is to build an 
                                                implementation example by creating a boiler plate Unity project that implements 
                                                the database this tool creates and maintains, if and when time allows. 
                                                Ultimately I hope to release it on GitHub.
                                            </p>
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
                                    <h3>"Tactical Twitch" Prototype (2014)</h3> 
                                    <p>
                                        Unity
                                        <br />
                                        <strong>Status:</strong> Archived
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="gb-blue-box">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/NaTEHKtrW9o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        <Button onClick={() => (document.getElementById("desc-twitch-2014").classList.toggle("collapse"))} className="btn btn-secondary">Project Description</Button>
                                        <div className="collapse" id="desc-twitch-2014">
                                            <br />
                                            <p>
                                                This is footage from a prototype I built in Unity. There are a couple of 
                                                carts, rocks and barricade models I pulled from the Asset Store. Also, the 
                                                particle effects for explosions came from the Asset Store. Other than that, 
                                                everything shown here was created by me, including the gameplay code.
                                            </p>
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
                                    <h3>Mixed Reality Star Wars Demo with Students (2016)</h3>
                                    <p>
                                        Unity, Microsoft Hololens (1st edition)
                                        <br />
                                        <strong>Status:</strong> Archived
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="gb-green-box">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/xk1pGxy1H6E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        <Button onClick={() => (document.getElementById("desc-hololens").classList.toggle("collapse"))} className="btn btn-secondary">Project Description</Button>
                                        <div className="collapse" id="desc-hololens">
                                            <br />
                                            <p>
                                                This footage is taken from a Unity project I guided students to create. 
                                                It was a Star Wars themed game where one uses a turret to shoot down Tie 
                                                Fighters. The game was built in Unity and we used the Hololens Toolkit to 
                                                get it going on the first generation Hololens dev unit. Everything you see 
                                                was created by the students at my direction.
                                            </p>
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
                                    <h3>WebGL AR Business Card (2016)</h3>
                                    <p>
                                        ThreeJS, Argon3 Browser, Vuforia
                                        <br />
                                        <strong>Status:</strong> Archived
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="gb-pink-box">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Yy_hgvQx1Rs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        <Button onClick={() => (document.getElementById("about-ar-card").classList.toggle("collapse"))} className="btn btn-secondary">Project Description</Button>
                                        <div className="collapse" id="about-ar-card">
                                            <br />
                                            <p>
                                                This is a demonstration of an AR Business Card I designed. It uses a 
                                                browser called Argon3 (now Argon4) and the threeJS WebGL rendering 
                                                library. 3D models are converted to JSON files that threeJS could load. 
                                                The ability to display AR is the work of the Argon3 Developers. The visual 
                                                content and all scripting for interaction was made be me. An image target 
                                                solution by Vuforia was implemented to track the image on the business card. 
                                                (the site is no longer live)
                                            </p>
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
                                    <h3>3D Platforming Prototype 2012)</h3>
                                    <p>
                                        Unity
                                        <br />
                                        <strong>Status:</strong> Archived
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="gb-blue-box">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ENMR3W6218Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        <Button onClick={() => (document.getElementById("about-sky").classList.toggle("collapse"))} className="btn btn-secondary">Project Description</Button>
                                        <div className="collapse" id="about-sky">
                                            <br />
                                            <p>
                                                I created this concept demo In Unity (version 4.x) for a local web app 
                                                competition, I designed the gameplay, created the art, and wrote the code 
                                                that provides the functionality. This particular video was used as digital 
                                                signage for my display booth at the competition. In this video you will also 
                                                get a glimpse of my character modeling, rigging and animation in XSI SoftImage. 
                                                Gameplay is inspired by "Mario 3D Land" and in this particular demo the player 
                                                must collect "power orbs" to power up the turret and create a bridge to 
                                                progress in the environment. That part is toward the end. 
                                                <em>(ignore the code scroll, that was just for a visual to catch attention 
                                                when passing by the sign)</em>
                                            </p>
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
                                    <h3>Residential Home Visualization (2016)</h3>
                                    <p>
                                        Blender (modeling texturing rendering), <br />Photoshop (for texture design, not post)
                                        <br />
                                        <strong>Status:</strong> Archived
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="gb-green-box">
                                        <div style={{height:"400px"}}>
                                            <Carousel style={{height:"100%",overflow:"hidden",backgroundColor:"#3f3f3f"}}>
                                                <Carousel.Item interval={3000}>
                                                <img className="d-block w-100" src={house1} alt="House One" />
                                                </Carousel.Item>
                                                <Carousel.Item interval={3000}>
                                                <img className="d-block w-100" src={house2} alt="House Two" />
                                                </Carousel.Item>
                                                <Carousel.Item interval={3000}>
                                                <img className="d-block w-100" src={house3} alt="House Three" />
                                                </Carousel.Item>
                                                <Carousel.Item interval={3000}>
                                                <img className="d-block w-100" src={house4} alt="House Four" />
                                                </Carousel.Item>
                                                <Carousel.Item interval={3000}>
                                                <img className="d-block w-100" src={house5} alt="House Five" />
                                                </Carousel.Item>
                                            </Carousel>
                                        </div>
                                        <br />
                                        <Button onClick={() => (document.getElementById("about-home-model").classList.toggle("collapse"))} className="btn btn-secondary">Project Description</Button>
                                        <div className="collapse" id="about-home-model">
                                            <br />
                                            <p>
                                                This model was optimized for real-time environments, with an original vision 
                                                of using it in a Unity built Hololens application; however, as the client 
                                                changed requirements the final render was done with the Blender Cycles 
                                                rendering engine. In this final composition, I did not model the trees, bushes 
                                                and flowers. Those are from a foliage pack I purchased.
                                            </p>
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
                                    <h3>Home Development Fly Through (2014)</h3>
                                    <p>
                                        Unity
                                        <br />
                                        <strong>Status:</strong> Archived
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="gb-pink-box">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/S8wnkgykM_M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        <Button onClick={() => (document.getElementById("about-home-dev").classList.toggle("collapse"))} className="btn btn-secondary">Project Description</Button>
                                        <div className="collapse" id="about-home-dev">
                                            <br />
                                            <p>
                                                This neighborhood fly through was created in Unity and recorded directly out of 
                                                Unity to cut out render times due to a short deadline required to use this as 
                                                an illustration for our city council. I scripted the interactivity, modeled, 
                                                textured and lit nearly everything. A couple of the home models were outsourced, 
                                                but the work received back had a ton of flipped normals that I had to clean up 
                                                and remap. Also, this is the near final copy. The final version had better 
                                                audio to camera movement beat coordination, but that final render is not 
                                                available.
                                            </p>
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
                                    <h3>A Whole Bunch of Stuff (2012-13)</h3>
                                    <p>
                                        XSI SoftImage
                                        <br />
                                        <strong>Status:</strong> Archived
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="gb-blue-box">
                                        <div style={{height:"400px"}}>
                                            <Carousel style={{height:"100%",overflow:"hidden",backgroundColor:"#3f3f3f"}}>
                                                <Carousel.Item interval={3000}>
                                                <img className="d-block w-100" src={objectCollection} alt="Object Collection" />
                                                </Carousel.Item>
                                                <Carousel.Item interval={3000}>
                                                <img className="d-block w-100" src={cityBuildings} alt="City Buildings" />
                                                </Carousel.Item>
                                                <Carousel.Item interval={3000}>
                                                <img className="d-block w-100" src={cityStuff} alt="City Stuff" />
                                                </Carousel.Item>
                                                <Carousel.Item interval={3000}>
                                                <img className="d-block w-100" src={apocRex1} alt="Apocalypse Rex 1" />
                                                </Carousel.Item>
                                                <Carousel.Item interval={3000}>
                                                <img className="d-block w-100" src={apocRex2} alt="Apocalypse Rex 2" />
                                                </Carousel.Item>
                                                <Carousel.Item interval={3000}>
                                                <img className="d-block w-100" src={apocRex3} alt="Apocalypse Rex 3" />
                                                </Carousel.Item>
                                            </Carousel>
                                        </div>
                                        <br />
                                        <Button onClick={() => (document.getElementById("about-stuff").classList.toggle("collapse"))} className="btn btn-secondary">Project Description</Button>
                                        <div className="collapse" id="about-stuff">
                                            <br />
                                            <p>
                                                These are objects created for various personal projects. The load of things 
                                                that look like a dorm room, was meant for a dorm room rendering that a local 
                                                landlord was interested in. They are all modeled and rendered in XSI SoftImage. 
                                                As SoftImage is now a dead product (RIP 2014) my skills have all transferred 
                                                and improved in Blender and Maya. Polycounts were low enough for use in a real 
                                                time rendering engine. In fact, "Apocalypse Rex" was actively used in one of my 
                                                many prototypes I haven't listed on this portfolio page.
                                            </p>
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
                                    <h3>Fantasy (SG1 Inspired) Environment (2008)</h3>
                                    <p>
                                        XSI Softiamge, GameCore
                                        <br />
                                        <strong>Status:</strong> Archived
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="gb-green-box">
                                        <div style={{height:"400px"}}>
                                            <Carousel style={{height:"100%",overflow:"hidden",backgroundColor:"#3f3f3f"}}>
                                                <Carousel.Item interval={3000}>
                                                <img className="d-block w-100" src={cove1} alt="Cove 1" />
                                                </Carousel.Item>
                                                <Carousel.Item interval={3000}>
                                                <img className="d-block w-100" src={cove2} alt="Cove 2" />
                                                </Carousel.Item>
                                                <Carousel.Item interval={3000}>
                                                <img className="d-block w-100" src={cove3} alt="Cove 3" />
                                                </Carousel.Item>
                                                <Carousel.Item interval={3000}>
                                                <img className="d-block w-100" src={cove4} alt="Cove 4" />
                                                </Carousel.Item>
                                                <Carousel.Item interval={3000}>
                                                <img className="d-block w-100" src={cove5} alt="Cove 5" />
                                                </Carousel.Item>
                                            </Carousel>
                                        </div>
                                        <br />
                                        <Button onClick={() => (document.getElementById("about-sg-env").classList.toggle("collapse"))} className="btn btn-secondary">Project Description</Button>
                                        <div className="collapse" id="about-sg-env">
                                            <br />
                                            <p>
                                                This environment was first sketched on paper, both the complete scene and 
                                                individual elements of the scene. The sketches were then used as view port 
                                                backgrounds in XSI SoftImage where I modeled and texture mapped the objects. 
                                                The actual environment the screenshots are from is a DX9 game engine called 
                                                "Game Core" which lived and died around the same time as Unity 1.x - 2.x.
                                            </p>
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
                                    <h3>Stargate Stuff and a WIP Alien (2006-07)</h3>
                                    <p>
                                        XSI Softimage
                                        <br />
                                        <strong>Status:</strong> Archived
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="gb-pink-box">
                                        <div style={{height:"500px"}}>
                                            <Carousel style={{height:"100%",overflow:"hidden",backgroundColor:"#3f3f3f"}}>
                                                <Carousel.Item interval={3000}>
                                                <img className="d-block w-100" src={gate1} alt="StarGate 1" />
                                                </Carousel.Item>
                                                <Carousel.Item interval={3000}>
                                                <img className="d-block w-100" src={gate2} alt="StarGate 2" />
                                                </Carousel.Item>
                                                <Carousel.Item interval={3000}>
                                                <img className="d-block w-100" src={gate3} alt="StarGate 3" />
                                                </Carousel.Item>
                                                <Carousel.Item interval={3000}>
                                                <img className="d-block w-100" src={gate4} alt="Alien Head 4" />
                                                </Carousel.Item>
                                                <Carousel.Item interval={3000}>
                                                <img className="d-block w-100" src={gate5} alt="StarGate 5" />
                                                </Carousel.Item>
                                                <Carousel.Item interval={3000}>
                                                <img className="d-block w-100" src={gate6} alt="StarGate 6" />
                                                </Carousel.Item>
                                            </Carousel>
                                        </div>
                                        <br />
                                        <Button onClick={() => (document.getElementById("about-stuff2").classList.toggle("collapse"))} className="btn btn-secondary">Project Description</Button>
                                        <div className="collapse" id="about-stuff2">
                                            <br />
                                            <p>
                                                The lit gate scene was rendered in GameCore and part of a real time game scene demo.
                                            </p>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Projects;