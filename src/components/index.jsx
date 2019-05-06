import React from "react";
import { NavLink } from "react-router-dom";
import { STREET_STYLE_APP_ENDPOINT, MAIN412PAGE_APP_ENDPOINT } from "../constants/endpoints";
import SSCOLogo from '../img/logo/SS.png';
import Studio412Logo from '../img/logo/412.png';
import './styles.scss';

class AppEntry extends React.Component {
  render() {
    const link = 'https://www.youtube.com/embed/Mp2YXi0mixk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1';
    return (
        <div className="app-entry-page">
          <div className="app-entry-page-video">
            <div className="app-entry-page-video-content">
              <iframe title="video" src={link} frameBorder="0" allowFullScreen />
            </div>
          </div>
          <div className="app-entry-page-half">
            <NavLink exact to={STREET_STYLE_APP_ENDPOINT}>
              <img src={SSCOLogo} alt=""/>
            </NavLink>
          </div>
          <div className="app-entry-page-half">
            <NavLink exact to={MAIN412PAGE_APP_ENDPOINT}>
              <img src={Studio412Logo} alt=""/>
            </NavLink>
          </div>
        </div>
    );
  }
}

export default AppEntry;