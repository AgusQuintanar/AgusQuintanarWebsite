import React from "react";

export default class Distinctions extends React.Component {
	render() {
		return (
			<div>
				<div className="titleP">
					<i aria-hidden="true" className="fa fa-trophy fa-fw"></i>
					Distinctions
				</div>

				<div className="Skills">
					<div className="grid">
						<div className="grid__item">
							<div className="card">
								<img
									className="card__img"
									src="./award1.png"
									alt=""
								/>
								<div className="card__content">
									<h1 className="card__header">
                                    Highest GPA <br /> (97.7/100) 
									</h1>
                                    <p className="card__text">
                                    In Computer Systems Engineer <br /> (<i> Second semester </i>) <br /> <strong>At Tecnológico de Monterrey</strong>
										
									</p>
								</div>
							</div>
						</div>
						<div className="grid__item">
							<div className="card">
								<img
									className="card__img"
									src="./award1.png"
									alt="Desert"
								/>
								<div className="card__content">
									<h1 className="card__header">
                                    Second highest GPA <br />  (97/100) 
									</h1>
									<p className="card__text">
                                    In Computer Systems Engineer <br /> (<i> Third semester </i>) <br /> <strong>At Tecnológico de Monterrey</strong>
									</p>
								</div>
							</div>
						</div>
						<div className="grid__item">
							<div className="card">
								<img
									className="card__img"
									src="./award3.png"
									alt="Canyons"
								/>
								<div className="card__content">
									<h1 className="card__header">
										SocialData Challenge <br /> (2018)
									</h1>
									<p className="card__text">
                                    Analyzed the correlation between education and criminality using <strong>Python, ScikitLearn</strong> {" "}and{" "} <strong>Pandas.</strong> 
										
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
