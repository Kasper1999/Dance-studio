import React from "react";
import './styles.scss';
import {NavLink} from "react-router-dom";
class MainCard extends React.Component {
  render() {
    const { width, image, title, link } = this.props;
      return (
          <NavLink to={link} className="menu-card-link"
                   style={{width: `${width}`,}}>
              <div
                  className="main-card"
                  style={{
                      backgroundImage: `url(${image})`,
                  }}
              >
                  <p><NavLink to={link}>{title}</NavLink></p>
              </div>
          </NavLink>
      )
  }
}

export default MainCard;
