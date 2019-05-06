import React from 'react';
import ReactDOM from 'react-dom';
import ApplicationRouter from './ApplicationRouter';
import 'antd/dist/antd.css';
import './styles/styles.scss';

class Application extends React.Component {
  render() {
    return (
      <ApplicationRouter />
    );
  }
}

ReactDOM.render(
  <Application />, 
  document.getElementById('root')
);
