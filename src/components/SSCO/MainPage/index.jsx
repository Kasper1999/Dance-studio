import React from "react";
import {loc} from "../../../localization";
import './styles.scss';
import { Header } from "../Header";
import { Footer } from "../Footer";
import { About } from "../About";
import { Projects } from "../Projects";
import { Partners } from "../Partners";
import { Merch } from "../Merch";
import { Contacts } from "../Contacts";



class SSCO extends React.Component {
  render() {
    return (
        <React.Fragment>
          <Header />
          <div className="wrapper">
            <About />
            <Projects />
            <Partners />
            <Merch />
            <Contacts />
          </div>
          <Footer />
        </React.Fragment>
    );
  }
}

export default SSCO;
