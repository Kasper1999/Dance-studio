import React from "react";
import { loc } from "../../../localization";
import './styles.scss';

export class Partners extends React.Component {
    render() {
        return (
            <section id="partners" className="partners section">
                <div className="width-container">
                    <h2 className="head partners__head">{loc.sscoPartners}</h2>
                    <div className="red-block"></div>
                    <div className="red-block"></div>
                    <div className="red-block"></div>
                    <div className="red-block"></div>
                    <div className="red-block"></div>
                    <div className="red-block"></div>
                </div>
            </section>

        );
    }
}

