
import '../App.css';
import React from 'react';

class DesignProject extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: props
        }
    }

    webBtnClick(){
        window.open(this.state.data.props.websiteLink)
    }
    githubBtnClick(){
        window.open(this.state.data.props.githubLink)
    }
    render() {
        return (
            <section class="child" id={this.state.data.props.name}>
            <div className="top40 description fullscreen web2">
                <img src={this.state.data.props.image} width="100%" />
                <div className="margin10 fullscreen">
                    <p className="marginTop marginBottom">{this.state.data.props.description}</p>
                    <h5 className="lightHeader">Tools Used</h5>
                    <ul className="marginBottom">
                        {this.state.data.props.tools.map((value, index) => {
                            return <li className="lightItem" key={index}>{value}</li>
                        })}
                    </ul>
                </div>
            </div>
            </section>
        );
    }
}

export default DesignProject;
