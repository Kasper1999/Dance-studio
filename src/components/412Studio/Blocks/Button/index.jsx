import React from "react";
import './styles.scss';
import {NavLink} from "react-router-dom";
import {loc} from "../../../../localization";
import {CONTACTS_APP_ENDPOINT} from "../../../../constants";

class Button extends React.Component {
  render() {
    return (
      <div className="button-component">
          <NavLink to={CONTACTS_APP_ENDPOINT} className="button-main-page" >
            {loc.try}
          </NavLink>
      </div>
    );
  }
}

export default Button;