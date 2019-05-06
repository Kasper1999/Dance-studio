import React from "react";
import './styles.scss';
import {NavLink} from "react-router-dom";
import { Modal} from 'antd';
import 'antd/dist/antd.css';

class StyleCard extends React.Component {
    state = { visible: false };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = () => {
        this.setState({
            visible: false,
        });
    };
    handleCancel = () => {
        this.setState({
            visible: false,
        });
        console.log(this.state.visible);
    };
    render() {
        const {image, title, urlVideo, description } = this.props;
        console.log(urlVideo);
        return (
            <div
                className="style-card" 
                style={{
                    backgroundImage: `url(${image})`,
                }}
            >
                <div className="style-card__hover" onClick={this.showModal}></div>
                <p onClick={this.showModal}>
                    <NavLink>{title}</NavLink>
                </p>
                <Modal
                    className={"album__Modal"}
                    width={700}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    align={"center"}
                >
                    <div className={'style-card__modalImage'}>
                        <p className='style-card__modalImage_title'>{title}</p>
                    </div>
                    <p className="style-card__modalTitle"> {description}</p>
                    <iframe id="video" className='style-card__modalVideo' title={'myFrame'} src={urlVideo} height={'200px'} width={'300px'} frameBorder="0" allow="accelerometer"  allowFullScreen />
                   </Modal>
            </div>
        );
    }
}

export default StyleCard;
/*<div onClick={this.showModal}
     className="style-card"
     style={{
         backgroundImage: `url(${image})`,
     }}>
    <p ><NavLink to={link}>{title}</NavLink></p>
    <Modal
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
    > afaf</Modal>
</div>*/