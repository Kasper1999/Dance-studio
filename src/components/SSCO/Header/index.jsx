import React from "react";
import { loc } from "../../../localization";
import './styles.scss';
import { map } from 'lodash';
import bars from '../../../img/bars-solid.svg';


const sscoNav = [
    { name: loc.sscoAbout, link: '#about' },
    { name: loc.sscoProjects, link: '#projects' },
    { name: loc.sscoPartners, link: '#partners' },
    { name: loc.sscoMerch, link: '#merch' },
    { name: loc.sscoContacts, link: '#contacts' }
];

export class Header extends React.Component {
    render() {
        const classToggle = () => {
            const nav = document.querySelector('.nav__list');
            nav.classList.toggle('logo--menu--show');
          }
        return (
            <header id="header">
                <div className="width-container flex-container">
                    <nav className="nav nav--ssco">
                        <ul className="nav__list">
                            {map(sscoNav, Item => (
                                <a className="nav__link" href={Item.link}><li className="nav__item">{Item.name}</li></a>
                            ))}
                        </ul>
                    </nav>
                    <img className="logo logo--menu" onClick={() => classToggle()} src={bars} alt="Навигация"/>
                </div>
            </header>

        );
    }
}

