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
									string="Agus Quintanar "
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
									string="A Computer Systems Engineering Student "
									delay={80}
									className="InfoText"
									initDelay
								/>
							</div>
						) : null}
					</div>
					<div className="PhotoPanel">
						<img src="./foto-agus.png" alt="" />
					</div>
				</div>
			</div>
		);
	}
}
