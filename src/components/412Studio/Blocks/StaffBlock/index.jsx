import React from "react";
import './styles.scss';
class StaffBlock extends React.Component {
    render() {
        const {width, personalImage, descr, URl} = this.props;
        return (

            <div className={'staff'}>
                <div className={'staff__trainers'}
                     style={{
                         width: `${width}`,

                     }}
                >
                    <div className={'staff__image'} style={{backgroundImage: `url(${personalImage})`}} />
                    <div className={'staff_title'}>
                        <p className={'staff__description'}>{descr}</p>
                    </div>
                </div>
                <p className={'staff__masterClass'}>Мастер класс тренера</p>
                <iframe className={'staff__video'} title={'myFrame'} src={`${URl}`} height={'200px'} width={'370px'} frameBorder="0"
                        allow="accelerometer" allowFullScreen> </iframe>
            </div>
        )
    }
}

export default StaffBlock;
/*<div className={'staff__video'}>
                   <iframe title={'myFrame'} src={`${URL}`} height={'300px'} width={'570px'} frameBorder="0"
                           allow="accelerometer" allowFullScreen></iframe>
               </div>*/