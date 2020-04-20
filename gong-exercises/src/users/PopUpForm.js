import React from 'react';
import FormItem from "../common/FormItem";
import PropTypes from "prop-types";

export default function PopUpForm(props) {
    return (
        <div>
            {
              props.items.map(item => {
                  return <FormItem id={item.id} caption={item.caption} maxLength={item.maxLength}
                                   currentValue={''} fieldCounter={0} fieldChange={()=>{}}/>
              })
            }
        </div>
    )
}

PopUpForm.propTypes = {
    items: PropTypes.array.isRequired
};
