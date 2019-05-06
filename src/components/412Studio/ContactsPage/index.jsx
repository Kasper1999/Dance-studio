import React from "react";
import MainLayout from "../Blocks/MainLayout";
import './styles.scss';
import { loc } from "../../../localization";
import { map } from 'lodash';


import vk from '../../../img/vk.png';
import youtube from '../../../img/youtube.png';
import instagram from '../../../img/instagram.png';

const linksItems = [
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

class Contacts extends React.Component {
  render() {
    return (
      <MainLayout>
        <section className="contacts">
          <h2 className="contacts__head">{loc.contactsHead}</h2>
          <p className="contacts__p">{loc.contactsPhone} <br/> {loc.contactsEmail}</p>
          <div className="contacts__imgs">
            {
              map(linksItems, item => (
                <div className="contacts__img-block"><a href="google.com"><img className="contacts__img" src={item.icon} alt={item.text}/></a></div>
              ))
            }
          </div>
          <p className="contacts__p">{loc.contactsBottom}</p>
        </section>
      </MainLayout>
    );
  }
}

export default Contacts;