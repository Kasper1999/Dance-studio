import React from "react";
import { loc } from "../../../localization";
import './styles.scss';

export class About extends React.Component {
    render() {
        return (
            <section id="about" className="about section">
                <div className="about-container width-container">
                    <h2 className="head about__head"> {loc.sscoAbout} </h2>
                    <p className="about__text"> {loc.sscoTextAbout} </p>
                    <div className="btn-container">
                        <button className="about__button button"> узнать <span className="red-text">больше</span></button>
                    </div>
                </div>
            </section>

        );
    }
}

