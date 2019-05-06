import * as React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './styles.scss';


class MainLayout extends React.Component {
    render() {
      return (
        <React.Fragment>
          <Header />
          <div className="content">
            {this.props.children}
          </div>
          <Footer />
        </React.Fragment>
      );
    }
  }

export default MainLayout;