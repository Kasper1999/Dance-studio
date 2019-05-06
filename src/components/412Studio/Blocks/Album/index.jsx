import React from "react";
import './styles.scss';
import { Modal } from 'antd';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

class Album extends React.Component {
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
    };
    render(){
        const {  title,URL } = this.props;
        return (<div>
                <div className="album" onClick={this.showModal}>
                    <div className="album__title"><p>{title}</p></div>
                    <div className="album__image" style={{backgroundImage: `url(${URL})`}}/>
                </div>
                <Modal 
                    className={"album__Modal"}
                    width={700}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    align={"center"}
                >
                    <Carousel className={"album__Slider"}>
                        <div className={"album_page"}><h3>6</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel>
                </Modal>
            </div>
        );
    }
}
export default Album;