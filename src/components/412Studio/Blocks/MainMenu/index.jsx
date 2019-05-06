import React from "react";
import { NavLink } from "react-router-dom";
import { map } from 'lodash';
import { nav } from './config';
import './styles.scss';


class MainMenu extends React.Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav-list">
          {map(nav, item => (
            <li><NavLink exact to={item.link}>{item.name}</NavLink></li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default MainMenu;