import React from "react";
import "./Styles/Skills.css";

export default class Skills extends React.Component {
	render() {
		return (
			<div>
				<div className="titleP">
					<i aria-hidden="true" className="fa fa-cogs fa-fw"></i>
					Top Skills
				</div>

				<div className="Skills">
					<div className="grid">
						<div className="grid__item">
							<div className="card">
								<img
									className="card__img"
									src="./skill1.png"
									alt="Snowy Mountains"
								/>
								<div className="card__content">
									<h1 className="card__header">
										Competitive Programming
									</h1>
									<p className="card__text">
										I have participated in <strong> ICPC </strong> and
										trained in  <strong>Codeforces.</strong>
									</p>
								</div>
							</div>
                        </div>
                        <div className="grid__item">
							<div className="card">
								<img
									className="card__img"
									src="./skill2.jpg"
									alt="Canyons"
								/>
								<div className="card__content">
									<h1 className="card__header">
										Databases
									</h1>
									<p className="card__text">
										I have experience with {" "}
										<strong> MySQL, Oracle SQL, Cassandra, </strong> {' '} and {' '}<strong> MongoDB. </strong>
									</p>
								</div>
							</div>
						</div>
						<div className="grid__item">
							<div className="card">
								<img
									className="card__img"
									src="./skill3.png"
									alt="Desert"
								/>
								<div className="card__content">
									<h1 className="card__header">
										Full Stack Development
									</h1>
									<p className="card__text">
										I have experience with {' '}
                                        <strong> React, Node, Python, C++, Java</strong> {' '} and {' '}<strong> AWS. </strong>
                                       
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
