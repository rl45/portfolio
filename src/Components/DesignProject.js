
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
            <div class="hvrbox">
                <img src={this.state.data.props.image} alt="Raymond Lee Project" class="hvrbox-layer_bottom portfolio_image" />
                <div class="hvrbox-layer_top">
                    <div class="hvrbox-text">
                        <div className="margin10 fullscreen text">
                            <p className="marginTop">{this.state.data.props.description}</p>
                            <h5 className="lightHeader">Tools Used</h5>
                            <ul className="marginBottom">
                                {this.state.data.props.tools.map((value, index) => {
                                    return <li className="lightItem" key={index}>{value}</li>
                                })}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default DesignProject;
