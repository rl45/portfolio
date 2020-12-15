
import '../App.css';
import React from 'react';
import Resume from '../resume.pdf'

class About extends React.Component {

    constructor(props) {
        super(props)

    }

    linkedinClick() {
        window.open('https://www.linkedin.com/in/rlee45/')
    }
    resumeBtnClick(){
        window.location.href({Resume});
    }
    render() {
        return (
            <section class="child" id="about" >
                <div className="margin10 top40 description fullscreen web">

                    <div>
                        <p>As the son of two immigrant parents, I learned the importance of work-ethic from an early age. With their strong hard-working mentality engrained in me, I graduated from UC Santa Cruz with a Computer Science degree and started at a marketing internship at a nearby startup.
                           Both of my parents were small business owners so I understood the struggle of finding leads, and differentiating from other local businesses. I quickly realized I wanted to make a larger impact with my career and also wanted to work directly with clients. So, I set out on my own.
                           <br /><br />While I was studying Computer Science in the morning and building up my web development skills, I would do freelance video production for small businesses, agencies, corporate companies, and sports-teams. Some clients include Oakland-Roots, Udemy, Summitry, All-Cal Financial, and Jamestown.<br /><br />
                            Since graduating, my focus is to combine my marketing skills and Computer Science skills to create purposeful applications to bring value to thousands of people.
            </p>

                        <div className="bottomButton">
                        <a  href={Resume} download="resume.pdf"><button className="width50 websiteButton">Download Resume</button></a>
                        <button className="marginTop5 width50 linkedinButton" onClick={this.linkedinClick.bind(this)}> Linkedin Profile</button>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default About;
