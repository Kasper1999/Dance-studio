import React from "react";
import { loc } from "../../../localization";
import './styles.scss';
import imgMail from "../../../img/at-solid.svg";
import imgPhone from "../../../img/phone-solid.svg";
import imgVk from "../../../img/vk-brands.svg";
import imgYoutube from "../../../img/youtube-brands.svg";
import imgInsta from "../../../img/instagram-brands.svg";
import { map } from 'lodash';

const LinksArray = [
    { link: "www.google.com", name: imgVk, text: "Мы ВКонтакте" },
    { link: "www.google.com", name: imgYoutube, text: "Мы в Ютубе" },
    { link: "www.google.com", name: imgInsta, text: "Мы в Инстаграм" }
]

export class Contacts extends React.Component {
    render() {
        return (
            <section id="contacts" className="contacts contacts__styles section">
                <div className="width-container">
                    <h2 className="head contacts__head">{loc.sscoContacts}</h2>
                    <div className="contacts__container">
                        <img className="contacts__img" src={imgMail} alt="Имэйл" />
                        <p className="contacts__text">{loc.sscoMail}</p>
                    </div>
                    <div className="contacts__container">
                        <img className="contacts__img" src={imgPhone} alt="Телефон" />
                        <p className="contacts__text">{loc.sscoPhone}</p>
                    </div>
                    <div className="contacts__media-row">
                        {map(LinksArray, Item => (
                            <a href={Item.link}><img className="contacts__media" src={Item.name} alt={Item.text} /></a>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

