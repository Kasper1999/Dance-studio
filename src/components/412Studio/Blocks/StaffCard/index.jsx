import React from "react";
import './styles.scss';
import 'antd/dist/antd.css';
import {Modal} from 'antd';
import StaffBlock from "../StaffBlock";
class StaffCard extends React.Component {
    state = {visible: false};
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

    render() {
        const {style, image, name,descr,URL,personImage} = this.props;
        return (
            <div>
                <div onClick={this.showModal} className="staffCard" style={{backgroundImage: `url(${image})`}}>
                    <h2 className="staffCard__head">{style}</h2>
                    <a href="/" className="staffCard__link">{name}</a>

                </div>

                <Modal
                    className={"album__Modal"}
                   width={700}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    align={"center"}
                ><StaffBlock descr={descr} URl={URL} personalImage={personImage}/> </Modal>


            </div>
        );
    }
}

export default StaffCard;