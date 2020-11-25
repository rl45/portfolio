
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
import DesignProject from './Components/DesignProject'
import arrow from './arrow.svg'
import BackgroundImage from './background.jpg'


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
        websiteLink: "https://redditscraperclient.herokuapp.com",
        name: "ideaniche"
      },
      campaigntheory: {
        image: Campaigntheoryimage,
        description: "Campaigntheory was created for a local entreprenuer that was interested in starting a marketing agency. The key was to create a convicing landing page that allowed customers to subscribe to a reoccuring fee throuh Zoho. This project also required using graphics and video elements to improve the visual component.",
        tools: ["HTML", "CSS", "Javascript", "Netlify", "Zoho"],
        githubLink: "https://github.com/rl45/campaigntheorywebsite",
        websiteLink: "https://campaigntheory.io",
        name: "campaigntheory"
      },
      dogapp: {
        image: Dogappimage,
        description: "During my last year of college, I got an Australian Shepherd, Finn, who loves to play 24/7 so I had to figure out a way to balance college and keep him satisfied. Time was limited, and I didn't have time for 15-minute mediocre Youtube courses that funnel you into a $200 program. I needed a quick way to pull up different training techniques, find nearby dogparks with more accurate reviews, and connect to other dogs for one-on-one training sessions.",
        tools: ["Sketch", "SketchAppResources"],
        name: "dogapp"
      },
      travelapp: {
        image: Travelappimage,
        description: "I'm 20 years old, 2 months away from turning 21. It's the summer between my sophomore and junior year. I'm in a hotel room in Portland, and I find an insane deal for a roundtrip flight to Kona, Hawaii. As I arrive, I walk into a car rental place based off of rumours I heard online that these specific companies allow younger drivers (20-21) to rent cars if they pay a premium. And that was false. So, as I'm waiting outside at 5pm for 1 hour for my $75 uber ride to a overpacked hostel, I design an app that showcases every landmark with directions, descriptions, reviews, and images. ",
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
              <h1>Raymond Lee</h1>
              <p >I am a recent Computer Science graduate from UC Santa Cruz. Love making purposeful applications that brings value to people.</p>
            </div>
          </div>
          <About></About>
          <Project props={this.state.filmboard}></Project>
          <Project props={this.state.ideaniche}></Project>
          <Project props={this.state.campaigntheory}></Project>
          <DesignProject props={this.state.travelapp}></DesignProject>
          <DesignProject props={this.state.dogapp}></DesignProject>
          <Contact></Contact>
        </div>
      </div>
    );
  }
}

export default App;
