import React from 'react';
import '../App.css';
import './Blurb.css';

function Blurb(props) {
    return (
        <div className='blurb-container'>
            <h3>{props.title}</h3>
            <h4>{props.subtitle}</h4>
            <p>{props.text}</p>
            <br/>
            <h4><a href="#" className="u">{props.address}</a></h4>
        </div>
    )
}

export default Blurb;
