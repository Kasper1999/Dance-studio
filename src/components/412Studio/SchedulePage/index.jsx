import React from "react";
import MainLayout from "../Blocks/MainLayout";
import './styles.scss';
import {loc} from "../../../localization";
import { map } from 'lodash';
import { Tabs } from 'antd';
import { maps } from "./maps";

import img1 from '../../../img/House.jpg';

const TabPane = Tabs.TabPane;

const Top = () => (
    <div className="top">{loc.schedule_top}</div>
);

const WeeklySchedule =  [
    {
        img: img1,
        text: "a",
    },
    {
        img: img1,
        text: "a"
    },
    {
        img: img1,
        text: "a"
    },
    {
        img: img1,
        text: "a"
    },
    {
        img: img1,
        text: "a"
    },
    {
        img: img1,
        text: "a"
    },
    {
        img: img1,
        text: "a"
    },
    {
        img: img1,
        text: "a"
    },
    {
        img: img1,
        text: "a"
    },
    {
        img: img1,
        text: "a"
    }
];

const array_places = loc.addresses;

class Schedule extends React.Component {
  render() {
    return (
      <MainLayout>
          <section className="schedule_wrapper">
              <Top/>
              <Tabs
                  defaultActiveKey="0"
                  tabPosition="left"
                  style={{
                      height: 885,
                      width: "auto"
                  }}
              >
                  {map(WeeklySchedule, item => (
                      <TabPane tab={array_places[WeeklySchedule.indexOf(item)]} key={WeeklySchedule.indexOf(item)}>
                          <div className="map_element">
                              <iframe className="map_element__maps"
                                  src={maps[WeeklySchedule.indexOf(item)]}
                                  width="600" height="300" title="map-place">.</iframe></div>
                          <img className="time_img" src={item.img} alt={item.text}/>
                      </TabPane>
                  ))}
              </Tabs>
           </section>
      </MainLayout>
    );
  }
}
 
export default Schedule;