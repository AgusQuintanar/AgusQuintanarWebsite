import React from "react";
import "./Styles/Social.css";

export default class Distinctions extends React.Component {
	render() {
		return (
			<div>
				<div className="titleP">
					<i aria-hidden="true" className="fa fa-share-alt fa-fw"></i>
					Social
				</div>

				<div className="Social">
					<div className="socialContainer">
						<div className="card">
							<div className="face face1">
								<a
									href="https://www.linkedin.com/in/agustin-salvador-quintanar-de-la-mora-573867170/"
									target="_blank"
								>
									<div className="content">
										<div className="icon">
											<i
												className="fa fa-linkedin-square"
												aria-hidden="true"
											></i>
										</div>
									</div>
								</a>
							</div>
						</div>
						<div className="card">
							<div className="face face1">
								<a
									href="https://mailto:agusquintanar17@gmail.com/"
									target="_blank"
								>
									<div className="content">
										<div className="icon">
											<i
												className="fa fa-envelope-square"
												aria-hidden="true"
											></i>
										</div>
									</div>
								</a>
							</div>
						</div>
						<div className="card">
							<div className="face face1">
								<a
									href="https://github.com/AgusQuintanar"
									target="_blank"
								>
									<div className="content">
										<div className="icon">
											<i
												className="fa fa-github-square"
												aria-hidden="true"
											></i>
										</div>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
