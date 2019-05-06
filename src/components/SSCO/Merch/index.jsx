import React from "react";
import { loc } from "../../../localization";
import './styles.scss';
import { map } from 'lodash';
import imgSweetBlack from "../../../img/412sweetshotBlack.jpg";
import imgSweetGreen from "../../../img/412sweetshotGreen.jpg";
import imgSweetRed from "../../../img/412sweetshotRed.jpg";

const ImgArray = [
    imgSweetBlack, imgSweetGreen, imgSweetRed
]


export class Merch extends React.Component {
    render() {
        return (
            <section id="merch" className="merch section">
                <div className="width-container">
                    <h2 className="head merch__head">{loc.sscoMerch}</h2>
                    <div className="merch__grid">
                        {map(ImgArray, item => (
                            <div className="merch__container">
                                <div className="merch__img-container">
                                    <img className="merch__img" src={item} alt="Свитшот 412" />
                                </div>
                                <div className="merch__container-text">
                                    <p className="merch__text"> свитшот <span className="red-text">412</span> </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="btn-container">
                        <button className="merch__button button">как <span className="red-text">купить</span></button>
                    </div>
                </div>
            </section>
        );
    }
}

