
import './App.css';
import Menubar from './Components/Menubar'
import About from './Components/About'
import React from 'react';
import ReactDOM from 'react-dom';
import Project from './Components/Project'
import Contact from './Components/Contact'
import Filmboardimage from './filmboard.png'
import Ideanicheimage from './ideaniche.png'
import Campaigntheoryimage from './campaigntheory.png'
import Dogappimage from './dogapp.png'
import Travelappimage from './travelapp.png'
import Teslaimage from './tesla.png'
import DesignProject from './Components/DesignProject'
import arrow from './arrow.svg'
import BackgroundImage from './background.jpg'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tesla: {
        image: Teslaimage,
        description: "Came across a top design on Behance, and approached it through code [Not mobile responsive due to Tesla's static screen]. Took screenshots, cut out each component in Sketch: labeling grid percentages, padding, margins, and overall layout of each component. Built the layout using React and separated the components into BottomBar, MusicView, PlayBar, SecondaryBar, and TopBar. Added an animation that allowed the user to swipe up on the playbar showcasing the MusicView. Captured the user's window height and subtracted it from the user's Y mouse position while setting boundaries to then change the CSS height of the component resulting in a seamless swipe.",
        tools: ["ReactJS", "CSS", "Mouse Events", "Grid", "React-Feathers", "Sketch"],
        githubLink: "https://github.com/rl45/tesla",
        websiteLink: "https://5fc35081c2e60873f54d31a2--tesla-interface.netlify.app",
        name: "tesla"
      },
      filmboard: {
        image: Filmboardimage,
        description: "Filmboard is a pre-production software that improves the workflow speed for Filmmakers and their clients. Features include moodboards, storyboards, shot lists, vendor uploads, and sharing with users. I created Filmboard with a MERN Stack and hosted it on Heroku. As a freelance video producer, there was an itch to create a cheaper and simpler workflow for my clients and I instead of paying for 5 different tools. During this journey, it's crucial to find product validation, design through Sketch, then develop it exactly.",
        tools: ["MongoDB", "Express", "ReactJS", "NodeJS", "CSS"],
        githubLink: "https://github.com/rl45/filmboard/",
        websiteLink: "https://filmboard.io",
        name: "filmboard"
      },
      ideaniche: {
        image: Ideanicheimage,
        description: "Ideaniche is a tool to search the top questions within any of the 138,000 subreddits. Ideaniche was created out of a need to find problems worth solving by tapping into Reddit communities and using NLP to parse the semantics of each post to find the top upvoted questions.",
        tools: ["NLP", "ReactJS", "NodeJS", "CSS", "Puppeteer"],
        githubLink: "https://github.com/rl45/ideanichemain3",
        websiteLink: "https://redditscraperclient.herokuapp.com",
        name: "ideaniche"
      },
      campaigntheory: {
        image: Campaigntheoryimage,
        description: "Campaigntheory was created for a local entreprenuer that was interested in starting a marketing agency. The key was to create a convicing landing page that allowed customers to subscribe to a reoccuring fee throuh Zoho. This project also required using graphics and video elements to improve the visual component.",
        tools: ["HTML", "CSS", "Javascript", "Netlify", "Zoho"],
        githubLink: "https://github.com/rl45/campaigntheorywebsite",
        websiteLink: "https://www.campaigntheory.io",
        name: "campaigntheory"
      },
      dogapp: {
        image: Dogappimage,
        description: "As a dog owner, I saw a need in creating an app that included training sessions, nearby dog parks, and ability to connect to other dogs. The main inspiration was to keep the app minimal and decrease the amount of interactions for the user. In the mapView, you're able to see both the maps and nearby locations without wasting any space. ",
        tools: ["Sketch", "SketchAppResources"],
        name: "dogapp"
      },
      travelapp: {
        image: Travelappimage,
        description: "As a photographer. I'm always searching for the next best landscape location. I designed this travelApp to have a clean interface that allows me to find locations based off of catergories with each location consisting of descriptions, reviews, and gallary images from other users. Each component can expand once a user taps on it, but by having a preview window, it allows me to give more information to the user.",
        tools: ["Sketch", "SketchAppResources"],
        name: "travelapp"
      }
    }
  }

  render() {
    return (
      <div>
        <Menubar></Menubar>
        <div class="container" id="home">
          <div className="Home">
            <div className="white content" >
              <h1 className="name">Raymond Lee</h1>
              <p className="bio">My purpose is to make impactful applications that brings value to thousands of people.</p>
            </div>
          </div>
          <About></About>
          <div class="wrapper">
            <Project props={this.state.tesla}></Project>
            <Project props={this.state.filmboard}></Project>
            <Project props={this.state.ideaniche}></Project>
            <Project props={this.state.campaigntheory}></Project>
            <DesignProject props={this.state.travelapp}></DesignProject>
            <DesignProject props={this.state.dogapp}></DesignProject>
          </div>
          <Contact></Contact>
        </div>
      </div>
    );
  }
}

export default App;
