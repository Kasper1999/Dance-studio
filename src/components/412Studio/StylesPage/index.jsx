import React from "react";
import MainLayout from "../Blocks/MainLayout";
import './styles.scss';
import StyleCard from "../Blocks/StyleCard";
import { map } from 'lodash';
import hop from '../../../img/HIP-HOP.jpg';
import breakDance from '../../../img/BreakDance.jpg';
import house from '../../../img/House.jpg';
import vogue from '../../../img/Vogue.jpg';
import funk from '../../../img/Jazz-Funk.jpg';

const ArrayDance =  [
  { img: hop, title: 'HIP-HOP', descr: 'Описание хипхопа', urlVideo: 'https://www.youtube.com/embed/Tny0kKExXxA' },
  { img: breakDance, title: 'BreakDance', descr: 'Описание брейкданса', urlVideo: 'https://www.youtube.com/embed/ZYcicrC5-lQ' },
  { img: house, title: 'House', descr: 'Описание хауса', urlVideo: 'https://www.youtube.com/embed/eQ5_YX_VKMQ' },
  { img: vogue, title: 'Vogue', descr: 'Описание вога', urlVideo: 'https://www.youtube.com/embed/4acKo7v_Yo8' },
  { img: funk, title: 'Jazz-Funk', descr: 'Описание джазфанка', urlVideo: 'https://www.youtube.com/embed/DeYhn1EACco' }
];

class Styles extends React.Component {
  render() {
    return <MainLayout>
      <div className="style-block">
          {map(ArrayDance, item => (
            <StyleCard 
              urlVideo={item.urlVideo}
              description={item.descr}
              image={item.img}
              imageModal={house}
              title={item.title}
              link="google.com"
            />
          ))}
      </div>
    </MainLayout>;
  }
}

export default Styles;