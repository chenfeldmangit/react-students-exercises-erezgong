import React from 'react';
import PropTypes from 'prop-types';

export default function FormItem(props) {
    return (
        <div id={props.id} className="form-item">
            <span className="caption">{props.caption}</span>
            <textarea className="box" maxLength={props.maxLength} value={props.currentValue}
                      onChange={props.fieldChange}/>
            <span className="counter">{props.nameCounter + "/" + props.maxLength}</span>
        </div>
    );
}

FormItem.propTypes = {
    id: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    maxLength: PropTypes.string.isRequired,
    currentValue: PropTypes.string.isRequired,
    fieldCounter: PropTypes.number.isRequired,
    fieldChange: PropTypes.func.isRequired
};