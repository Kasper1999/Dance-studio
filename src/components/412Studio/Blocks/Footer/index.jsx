import React from "react";
import { map } from 'lodash';
import './styles.scss'

import vk from '../../../../img/vk.png';
import youtube from '../../../../img/youtube.png';
import instagram from '../../../../img/instagram.png';

const linksItems =  [
    {
        icon: vk,
        text: "vk"
    },
    {
        icon: youtube,
        text: "youtube"
    },
    {
        icon: instagram,
        text: "instagram"
    },
];

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="circles">
                    {map(linksItems, item => (
                        <div className="fa-ico"><a href="https://www.google.com"><img className="circles_img" src={item.icon} alt={item.text}/></a></div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Footer;