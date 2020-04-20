import React from 'react';
import FormTextItem from "../common/FormTextItem";
import PropTypes from "prop-types";
import close from '../assets/common/close.svg';

export default function PopUpForm(props) {
    return (
        <div className="overlay-background">
            <div className="overlay-window">
                <div className="header">
                    <div className="icon-wrapper header-item"
                         onClick={props.cancelHandler}>
                        <img className="icon" src={close} alt="close"/>
                    </div>
                    <h2 className="title header-item">{props.header}</h2>
                    <div className="small-button save header-item"
                         onClick={() => props.saveHandler(this.state.currentName, this.state.currentTag)}>
                        <span className="caption">Save</span>
                    </div>
                </div>
                <div className="form">
                    {
                        props.items.map(item => {
                            return <FormTextItem caption={item.caption} maxLength={item.maxLength}
                                                 currentValue={''} fieldCounter={0} fieldChange={() => {
                            }}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

PopUpForm.propTypes = {
    header: PropTypes.string.isRequired,
    cancelHandler: PropTypes.func.isRequired,
    saveHandler: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
};
