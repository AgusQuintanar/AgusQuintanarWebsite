import React from "react";
import "./Styles/Experience.css";

export default class Experience extends React.Component {
    render() {
        return (
            <div>
                <div className="titleP">
                    <i aria-hidden="true" className="fa fa-briefcase fa-fw"></i>
                    Experience
                </div>

                <div className="Skills">
                    <div className="grid">
                        <div className="grid__item">
                            <div className="card">
                                <img
                                    className="card__img"
                                    src="./exp_datadog2.jpeg"
                                    alt="Snowy Mountains"
                                />
                                <div className="card__content">
                                    <h1 className="card__header">
                                        <b>DATADOG</b>
                                    </h1>
                                    <p className="card__text_exp">
                                        <div className="sec1">
                                            <b>Software Engineer Intern</b>
                                            <br></br>
                                            Internal Analytics Infrastructure
                                            team
                                        </div>

                                        <div className="sec2">
                                            <i>
                                                Jan 2023 – Apr. 2023
                                                <br></br>
                                                New York, NY
                                            </i>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid__item">
                            <div className="card">
                                <img
                                    className="card__img"
                                    src="./exp_meta.gif"
                                    alt="Canyons"
                                />
                                <div className="card__content">
                                    <h1 className="card__header">
                                        <b>META</b>
                                    </h1>
                                    <p className="card__text_exp">
                                        <div className="sec1">
                                            <b>Software Engineer Intern</b>
                                            <br></br>
                                            Recommendations team
                                        </div>

                                        <div className="sec2">
                                            <i>
                                                May 2022 – Aug. 2022
                                                <br></br>
                                                Menlo Park, CA
                                            </i>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid__item">
                            <div className="card">
                                <img
                                    className="card__img"
                                    src="./exp_datadog.jpeg"
                                    alt="Desert"
                                />
                                <div className="card__content">
                                    <h1 className="card__header">
                                        <b>DATADOG</b>
                                    </h1>
                                    <p className="card__text_exp">
                                        <div className="sec1">
                                            <b>Software Engineer Intern</b>
                                            <br></br>
                                            Internal Analytics Infrastructure
                                            team
                                        </div>

                                        <div className="sec2">
                                            <i>
                                                Jan. 2022 – Apr. 2022
                                                <br></br>
                                                New York, NY
                                            </i>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid__item">
                            <div className="card">
                                <img
                                    className="card__img"
                                    src="./exp_fb2.gif"
                                    alt="Snowy Mountains"
                                />
                                <div className="card__content">
                                    <h1 className="card__header">
                                        <b>FACEBOOK</b>
                                    </h1>
                                    <p className="card__text_exp">
                                        <div className="sec1">
                                            <b>Production Engineer Intern</b>
                                            <br></br>
                                            MySQL Infrastructure team
                                        </div>

                                        <div className="sec2">
                                            <i>
                                                Jun. 2021 – Aug. 2021
                                                <br></br>
                                                Menlo Park, CA (Remote)
                                            </i>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid__item">
                            <div className="card">
                                <img
                                    className="card__img"
                                    src="./exp_uber.png"
                                    alt="Canyons"
                                />
                                <div className="card__content">
                                    <h1 className="card__header">
                                        <b>UBER</b>
                                    </h1>
                                    <p className="card__text_exp">
                                        <div className="sec1">
                                            <b>Academic Engineer Intern</b>
                                            <br></br>
                                            Funnel team
                                        </div>

                                        <div className="sec2">
                                            <i>
                                                Feb. 2021 – Jun 2021
                                                <br></br>
                                                Remote
                                            </i>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid__item">
                            <div className="card">
                                <img
                                    className="card__img"
                                    src="./exp_gl2.jpeg"
                                    alt="Desert"
                                />
                                <div className="card__content">
                                    <h1 className="card__header">
                                        <b>GRUPO LUTHE</b>
                                    </h1>
                                    <p className="card__text_exp">
                                        <div className="sec1">
                                            <b>Junior Software Developer</b>
                                            <br></br>
                                            Development team
                                        </div>

                                        <div className="sec2">
                                            <i>
                                                Jul. 2018 – Mar. 2020
                                                <br></br>
                                                Guadalajara, MX
                                            </i>
                                        </div>
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
