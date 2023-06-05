import React from "react";
import "./Styles/Home.css";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";

export default class Home extends React.Component {
    state = {
        nameStatus: 0,
    };
    render() {
        return (
            <div className="Home">
                <div className="Banner">
                    <div className="InfoPanel">
                        <div className="NameH">
                            <Typewriter
                                string="Hi, I am "
                                delay={80}
                                className="HiText"
                                stopBlinkinOnComplete
                                onComplete={() => {
                                    this.setState({
                                        nameStatus: 1,
                                    });
                                }}
                            />
                            {this.state.nameStatus >= 1 ? (
                                <Typewriter
                                    string="Agustin Quintanar "
                                    delay={80}
                                    className="NameText"
                                    initDelay
                                    stopBlinkinOnComplete
                                    onComplete={() => {
                                        this.setState({
                                            nameStatus: 2,
                                        });
                                    }}
                                />
                            ) : null}
                        </div>
                        {this.state.nameStatus === 2 ? (
                            <div className="InfoH">
                                <Typewriter
                                    string="A Computer Systems Engineer "
                                    delay={80}
                                    className="InfoText"
                                    initDelay
                                />
                            </div>
                        ) : null}
                       
                    </div>
                    <div className="PhotoPanel">
                        <img src="./foto2.PNG" alt="" />
                    </div>
					{/* <div className="cvButton">
                            <a href="#" class="button">
                                <div class="button__line"></div>
                                <div class="button__line"></div>
                                <span class="button__text">ENTRY</span>
                                <div class="button__drow1"></div>
                                <div class="button__drow2"></div>
                            </a>
                        </div> */}
                </div>
            </div>
        );
    }
}
