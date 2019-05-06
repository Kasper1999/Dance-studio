import React from "react";
import MainLayout from '../Blocks/MainLayout/index.jsx';
import { loc } from "../../../localization";
import Button from '../Blocks/Button/index.jsx';
import './styles.scss';
import MainCard from "../Blocks/MainCard";
import style from '../../../img/styles.jpg';
import schedule from '../../../img/schedule.jpg';
import contacts from '../../../img/contacts.jpg';
import gallery from '../../../img/gallery.jpg';
import staff from '../../../img/staff.jpg';

import {
  MAIN_CARD_WIDTH,
  MAIN_CARD_SECONT_WIDTH,
  STAFF_APP_ENDPOINT,
  SCHEDULE_APP_ENDPOINT,
  STYLES_APP_ENDPOINT,
  CONTACTS_APP_ENDPOINT,
  GALLERY_APP_ENDPOINT
} from "../../../constants/index.js";

class Home extends React.Component {
  render() {
    return (
      <MainLayout >
        <main className="main">
          <section className="main__block">
            <p className="main__text">
              <h1 className="main__head">{loc.overVideoTexth1}</h1>
              {loc.overVideoTextspan}
            </p>
          </section>
        </main>
        <Button />
        <div className="main__cards">
          <div className="main__cards__row">
            <MainCard width={MAIN_CARD_WIDTH} image={staff} title={loc.staff} link={STAFF_APP_ENDPOINT} />
            <MainCard width={MAIN_CARD_WIDTH} image={schedule} title={loc.schedule} link={SCHEDULE_APP_ENDPOINT} />
          </div>
          <div className="main__cards__row">
            <MainCard width={MAIN_CARD_SECONT_WIDTH} image={style} title={loc.styles} link={STYLES_APP_ENDPOINT} />
          </div>
          <div className="main__cards__row">
            <MainCard width={MAIN_CARD_WIDTH} image={contacts} title={loc.contacts} link={CONTACTS_APP_ENDPOINT} />
            <MainCard width={MAIN_CARD_WIDTH} image={gallery} title={loc.gallery} link={GALLERY_APP_ENDPOINT} />
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default Home;
