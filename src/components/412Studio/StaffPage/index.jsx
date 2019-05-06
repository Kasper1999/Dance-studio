import React from "react";
import MainLayout from "../Blocks/MainLayout";
//import album from '../../../img/album.png';
// import StaffBlock from "../Blocks/StaffBlock";
// import {lazovscayaDescr} from "./config";
import Katya from "../../../img/Katya.jpg"
import { map } from 'lodash';
import StaffCard from "../Blocks/StaffCard";
import './styles.scss';
import { staffs } from './config.jsx';


class Staff extends React.Component {
  render() {
    return (
      <MainLayout>
        <div>
          {/*<StaffBlock width={'80%'}  title={lazovscayaDescr}  image={''} URL=*/}
        </div>
        <section className="staffPage">
          <h1>КОМАНДА <br/> 412 Studio</h1>
          <div className="staffPage__img-block">
            {map(staffs, item => {
              return (
                <StaffCard name={item.name} style={item.style} image={item.image} descr={item.descript} personImage={Katya} URL={'https://www.youtube.com/embed/kxopViU98Xo'}/>
              )
            })}
          </div>
        </section>
      </MainLayout>
    );
  }
}

export default Staff;