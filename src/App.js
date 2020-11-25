
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
import arrow from './arrow.svg'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
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
        websiteLink: "https://ideaniche.herokuapp.com",
        name: "ideaniche"
      },
      campaigntheory: {
        image: Campaigntheoryimage,
        description: "Campaigntheory was created for a local entreprenuer that was interested in starting a marketing agency. The key was to create a convicing landing page that allowed customers to subscribe to a reoccuring fee throuh Zoho. This project also required using graphics and video elements to improve the visual component.",
        tools: ["HTML", "CSS", "Javascript", "Netlify", "Zoho"],
        githubLink: "https://github.com/rl45/campaigntheorywebsite",
        websiteLink: "https://campaigntheory.io",
        name:"campaigntheory"
      },
    }
  }

  render() {
    return (
      <div>
        <Menubar></Menubar>
        <div class="container" id="home">
          <div className="Home">
            <h1 className="margin10 title40 white" >Hi, my name is Ray and I am a recent Computer Science graduate based in Bay Area, CA. Looking for a Front-End Web Developer position.</h1>
          </div>
          <About></About>
          <Project props={this.state.filmboard}></Project>
          <Project props={this.state.ideaniche}></Project>
          <Project props={this.state.campaigntheory}></Project>
          <Contact></Contact>
        </div>
      </div>
    );
  }
}

export default App;
