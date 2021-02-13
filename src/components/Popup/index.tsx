import React from 'react';
import './popup.scss';

type PopupType = {
    closed: Function,
    children: JSX.Element
}

const Popup = (props:PopupType) =>{

    const { closed, children } = props;

    return (
        <div className='popup'>
            <div className='popup-inner'>
                <div className='popup-header'>
                    <button onClick={() =>closed()}>X</button>
                </div>
                {children}
            </div>
        </div>
    );

}

export default Popup;