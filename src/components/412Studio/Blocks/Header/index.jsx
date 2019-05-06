import React from "react";
import { NavLink } from "react-router-dom";
import MainMenu from '../MainMenu';
import logoLeft from '../../../../img/logo-ss.png';
import logoRight from '../../../../img/logo-right.png';
import bars from '../../../../img/bars-solid.svg';
import './styles.scss';
import { STREET_STYLE_APP_ENDPOINT } from "../../../../constants";
 
class Header extends React.Component {
  render() {
    const classToggle = () => {
      const nav = document.querySelector('.nav');
      nav.classList.toggle('logo--menu--show');
    }
    return (
      <header className="header">
        <div className="logo logo--left">
          <NavLink to={STREET_STYLE_APP_ENDPOINT}>
            <img src={logoLeft} alt="Street Style Company"/>
          </NavLink>
        </div>
        <MainMenu /> 
        <div className="logo logo--right" on>
          <img src={logoRight} alt="412 Company"/>
        </div>
        <img className="logo logo--menu" onClick={() => classToggle()} src={bars} alt="Навигация"/>
      </header>
    );
  }
}

export default Header;