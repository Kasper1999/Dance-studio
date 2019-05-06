import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { AnimatedSwitch } from 'react-router-transition';
import Home from "./components/412Studio/HomePage";
import Staff from "./components/412Studio/StaffPage";
import Schedule from "./components/412Studio/SchedulePage";
import Styles from "./components/412Studio/StylesPage";
import Contacts from "./components/412Studio/ContactsPage";
import Gallery from "./components/412Studio/GalleryPage";
import SSCO from "./components/SSCO/MainPage";
import AppEntry from "./components";
import { 
  HOME_APP_ENDPOINT,
  STAFF_APP_ENDPOINT,
  SCHEDULE_APP_ENDPOINT,
  STYLES_APP_ENDPOINT,
  CONTACTS_APP_ENDPOINT,
  GALLERY_APP_ENDPOINT,
  MAIN412PAGE_APP_ENDPOINT,
  STREET_STYLE_APP_ENDPOINT,
} from "./constants";

class ApplicationRouter extends React.Component {
  render() {
    return (
      <Router>
          <Route exact path={HOME_APP_ENDPOINT} component={AppEntry}></Route>
          <Route exact path={STREET_STYLE_APP_ENDPOINT} component={SSCO}></Route>
          <Route exact path={MAIN412PAGE_APP_ENDPOINT} component={Home}></Route>
          <Route exact path={STAFF_APP_ENDPOINT} component={Staff}></Route>
          <Route exact path={SCHEDULE_APP_ENDPOINT} component={Schedule}></Route>
          <Route exact path={STYLES_APP_ENDPOINT} component={Styles}></Route>
          <Route exact path={CONTACTS_APP_ENDPOINT} component={Contacts}></Route>
          <Route exact path={GALLERY_APP_ENDPOINT} component={Gallery}></Route>
      </Router>
    );
  }
}
 
export default ApplicationRouter;