
import '../App.css';
import React from 'react';

class Project extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: props
        }
    }

    webBtnClick() {
        window.open(this.state.data.props.websiteLink)
    }
    githubBtnClick() {
        window.open(this.state.data.props.githubLink)
    }
    render() {
        return (
            <div class="hvrbox">
                <img src={this.state.data.props.image} alt="Raymond Lee Project" class="hvrbox-layer_bottom" />
                <div class="hvrbox-layer_top">
                    <div class="hvrbox-text">
                        <div className="margin10 fullscreen text">
                            <p className="marginTop marginBottom">{this.state.data.props.description}</p>
                            <h5 className="lightHeader">Tools Used</h5>
                            <ul className="marginBottom">
                                {this.state.data.props.tools.map((value, index) => {
                                    return <li className="lightItem" key={index}>{value}</li>
                                })}
                            </ul>
                            <div className="bottomButton">
                                <button className="width100 websiteButton" onClick={this.webBtnClick.bind(this)}>Visit Website</button>
                                <button className="marginTop5 width100 githubButton" onClick={this.githubBtnClick.bind(this)}>View Github Code</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        );
    }
}

export default Project;
