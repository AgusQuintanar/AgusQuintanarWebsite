import React from "react";
import "./Styles/Projects.css";

export default class Home extends React.Component {
	render() {
		return (
			<div className="Projects">
                <div className="titleP">
                    <i aria-hidden="true" className="fa fa-tasks fa-fw"></i>
                    Side Projects
                    
					
				</div>
				<div className="content-wrapper">
					<div className="news-card">
						<a href="https://github.com/FundacionLaika/Laika_WebPage" target="_blank" className="news-card__card-link"></a>
						<img
							src="./project1.jpg"
							alt=""
							className="news-card__image"
						/>
						<div className="news-card__text-wrapper">
							<h2 className="news-card__title">
                                Laika’s Web App
							</h2>
							<div className="news-card__post-date">Jul 2020 - Present </div>
							<div className="news-card__details-wrapper">
								<p className="news-card__excerpt">
                                Developed a web database app for Fundación Laika, with over 150+ active stay animals and 8,000+ rescued animals.
								</p>
								<a href="https://github.com/FundacionLaika/Laika_WebPage" target="_blank"  className="news-card__read-more">
									GitHub{" "}
									<i className="fas fa-long-arrow-alt-right"></i>
								</a>
							</div>
						</div>
					</div>

					<div className="news-card">
						<a href="https://github.com/VSSS-AlphaSoccerFC" target="_blank" className="news-card__card-link"></a>
						<img
							src="./project2.png"
							alt=""
							className="news-card__image"
						/>
						<div className="news-card__text-wrapper">
							<h2 className="news-card__title">
                                LARC Very Small Size Soccer
							</h2>
							<div className="news-card__post-date">Jan 2020 - Present </div>
							<div className="news-card__details-wrapper">
								<p className="news-card__excerpt">
                                Developed a game strategy for a 3 vs 3 autonomous robot soccer competition using computer vision.
								</p>
								<a href="https://github.com/VSSS-AlphaSoccerFC" target="_blank" className="news-card__read-more">
									GitHub{" "}
									<i className="fas fa-long-arrow-alt-right"></i>
								</a>
							</div>
						</div>
					</div>

					<div className="news-card">
						<a href="https://github.com/AgusQuintanar/Aether" target="_blank" className="news-card__card-link"></a>
						<img
							src="./project3.png"
							alt=""
							className="news-card__image"
						/>
						<div className="news-card__text-wrapper">
							<h2 className="news-card__title"> Aether </h2>
							<div className="news-card__post-date">Sep 2019 – Nov 2019</div>
							<div className="news-card__details-wrapper">
								<p className="news-card__excerpt">
                                Developed a web search engine that indexed 20,000+ websites using Java, React and Node.js.
								</p>
								<a href="https://github.com/AgusQuintanar/Aether" target="_blank" className="news-card__read-more">
									GitHub{" "}
									<i className="fas fa-long-arrow-alt-right"></i>
								</a>
							</div>
						</div>
					</div>

					<div className="news-card">
						<a href="https://github.com/AgusQuintanar/CyclicCutwidth" target="_blank" className="news-card__card-link"></a>
						<img
							src="./project4.png"
							alt=""
							className="news-card__image"
						/>
						<div className="news-card__text-wrapper">
							<h2 className="news-card__title">
                            Cyclic Cutwidth Minimization
							</h2>
							<div className="news-card__post-date">Jun 2020</div>
							<div className="news-card__details-wrapper">
								<p className="news-card__excerpt">
                                An implementation of a metaheuristic for solving the Cyclic Cutwidth Minimization Problem.
								</p>
								<a href="https://github.com/AgusQuintanar/CyclicCutwidth" target="_blank" className="news-card__read-more">
									GitHub{" "}
									<i className="fas fa-long-arrow-alt-right"></i>
								</a>
							</div>
						</div>
					</div>

					<div className="news-card">
						<a href="https://github.com/AgusQuintanar/AlphaArcade" target="_blank" className="news-card__card-link"></a>
						<img
							src="./project5.webp"
							alt=""
							className="news-card__image"
						/>
						<div className="news-card__text-wrapper">
							<h2 className="news-card__title">
								PacMan
							</h2>
							<div className="news-card__post-date">Mar 2019 - May 2019</div>
							<div className="news-card__details-wrapper">
								<p className="news-card__excerpt">
									Developed PacMan videogame using Java and Swing.
								</p>
								<a href="https://github.com/AgusQuintanar/AlphaArcade" target="_blank" className="news-card__read-more">
									GitHub{" "}
									<i className="fas fa-long-arrow-alt-right"></i>
								</a>
							</div>
						</div>
					</div>

					<div className="news-card">
						<a href="https://github.com/AgusQuintanar/RSA-MessagesApp" target="_blank" className="news-card__card-link"></a>
						<img
							src="./project6.png"
							alt=""
							className="news-card__image"
						/>
						<div className="news-card__text-wrapper">
							<h2 className="news-card__title">
								RSA Messages App
							</h2>
							<div className="news-card__post-date">Jun 2020</div>
							<div className="news-card__details-wrapper">
								<p className="news-card__excerpt">
									Developed an encrypted messages using Python and TKinter.
								</p>
								<a href="https://github.com/AgusQuintanar/RSA-MessagesApp" target="_blank" className="news-card__read-more">
									GitHub{" "}
									<i className="fas fa-long-arrow-alt-right"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
