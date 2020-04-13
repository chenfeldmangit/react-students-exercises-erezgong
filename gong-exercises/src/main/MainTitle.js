import React from 'react';
import PropTypes from 'prop-types';

function MainTitle(props) {
    return (
        <h2 className="title">{props.title}</h2>
    );
}

MainTitle.propTypes = {
    title: PropTypes.string.isRequired
};

export default MainTitle;