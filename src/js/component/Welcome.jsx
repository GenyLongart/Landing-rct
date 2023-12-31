import React from 'react';
import PropTypes from 'prop-types';

const Welcome = (props) => {
  return (
    <div className='container bg-secondary p-5'>
        <h1 className='h1'>{props.title}</h1>
        <p>{props.description}</p>
        <button className='btn btn-primary'>{props.label}</button>
    </div>
  )
}

Welcome.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    label: PropTypes.string
     
}

export default Welcome;