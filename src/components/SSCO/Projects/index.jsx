import React from "react";
import { loc } from "../../../localization";
import { map } from 'lodash';
import './styles.scss';
import imgProj1 from "../../../img/sscoProject1.jpg";
import imgProj2 from "../../../img/sscoProject2.jpg";
import { Carousel } from 'antd';

const ImgArray = [
    imgProj1, imgProj2
]

export class Projects extends React.Component {
    render() {
        return (
            <section id="projects" className="projects section">
                <div className="width-container">
                    <h2 className="head projects__head">{loc.sscoProjects}</h2>
                    <Carousel effect="fade">
                    {map(ImgArray, item => (
                        <div className="projects__container">
                            <div className="projects__img-container">
                                <img className="projects__img" src={item} alt="Фото команды" />
                            </div>
                            <div className="projects__container-text">
                                <h3 className="projects__container-head"> {loc.sscoProjectsHeads[ImgArray.indexOf(item)]}</h3>
                                <p className="projects__container-p"> {loc.sscoProjectsTexts[ImgArray.indexOf(item)]}</p>
                            </div>
                        </div>
                    ))}
                    </Carousel>
                    
                    


                </div>
            </section>
        );
    }
}

