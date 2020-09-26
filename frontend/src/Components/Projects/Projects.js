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
						<a href="#" className="news-card__card-link"></a>
						<img
							src="https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
							alt=""
							className="news-card__image"
						/>
						<div className="news-card__text-wrapper">
							<h2 className="news-card__title">
								Amazing First Title
							</h2>
							<div className="news-card__post-date">Jan 29, 2018</div>
							<div className="news-card__details-wrapper">
								<p className="news-card__excerpt">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Est pariatur nemo tempore
									repellat? Ullam sed officia iure architecto
									deserunt distinctio, pariatur&hellip;
								</p>
								<a href="#" className="news-card__read-more">
									Read more{" "}
									<i className="fas fa-long-arrow-alt-right"></i>
								</a>
							</div>
						</div>
					</div>

					<div className="news-card">
						<a href="#" className="news-card__card-link"></a>
						<img
							src="https://images.pexels.com/photos/631954/pexels-photo-631954.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
							alt=""
							className="news-card__image"
						/>
						<div className="news-card__text-wrapper">
							<h2 className="news-card__title">
								Amazing Second Title that is Quite Long
							</h2>
							<div className="news-card__post-date">Jan 29, 2018</div>
							<div className="news-card__details-wrapper">
								<p className="news-card__excerpt">
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Ullam obcaecati ex natus
									nulla rem sequi laborum quod fugit&hellip;
								</p>
								<a href="#" className="news-card__read-more">
									Read more{" "}
									<i className="fas fa-long-arrow-alt-right"></i>
								</a>
							</div>
						</div>
					</div>

					<div className="news-card">
						<a href="#" className="news-card__card-link"></a>
						<img
							src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
							alt=""
							className="news-card__image"
						/>
						<div className="news-card__text-wrapper">
							<h2 className="news-card__title">Amazing Title</h2>
							<div className="news-card__post-date">Jan 29, 2018</div>
							<div className="news-card__details-wrapper">
								<p className="news-card__excerpt">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Officiis beatae&hellip;
								</p>
								<a href="#" className="news-card__read-more">
									Read more{" "}
									<i className="fas fa-long-arrow-alt-right"></i>
								</a>
							</div>
						</div>
					</div>

					<div className="news-card">
						<a href="#" className="news-card__card-link"></a>
						<img
							src="https://images.pexels.com/photos/248486/pexels-photo-248486.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
							alt=""
							className="news-card__image"
						/>
						<div className="news-card__text-wrapper">
							<h2 className="news-card__title">
								Amazing Forth Title that is Quite Long
							</h2>
							<div className="news-card__post-date">Jan 29, 2018</div>
							<div className="news-card__details-wrapper">
								<p className="news-card__excerpt">
									Lorem ipsum dolor sit amet!
								</p>
								<a href="#" className="news-card__read-more">
									Read more{" "}
									<i className="fas fa-long-arrow-alt-right"></i>
								</a>
							</div>
						</div>
					</div>

					<div className="news-card">
						<a href="#" className="news-card__card-link"></a>
						<img
							src="https://images.pexels.com/photos/206660/pexels-photo-206660.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
							alt=""
							className="news-card__image"
						/>
						<div className="news-card__text-wrapper">
							<h2 className="news-card__title">
								Amazing Fifth Title
							</h2>
							<div className="news-card__post-date">Jan 29, 2018</div>
							<div className="news-card__details-wrapper">
								<p className="news-card__excerpt">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Est pariatur nemo tempore
									repellat? Ullam sed officia iure architecto
									deserunt distinctio&hellip;
								</p>
								<a href="#" className="news-card__read-more">
									Read more{" "}
									<i className="fas fa-long-arrow-alt-right"></i>
								</a>
							</div>
						</div>
					</div>

					<div className="news-card">
						<a href="#" className="news-card__card-link"></a>
						<img
							src="https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
							alt=""
							className="news-card__image"
						/>
						<div className="news-card__text-wrapper">
							<h2 className="news-card__title">
								Amazing 6<sup>th</sup> Title
							</h2>
							<div className="news-card__post-date">Jan 29, 2018</div>
							<div className="news-card__details-wrapper">
								<p className="news-card__excerpt">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Est pariatur nemo tempore
									repellat? Ullam sed officia.
								</p>
								<a href="#" className="news-card__read-more">
									Read more{" "}
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
