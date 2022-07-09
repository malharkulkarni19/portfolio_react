import './WorkCardStyle.css';
import React from 'react'
import { NavLink } from 'react-router-dom';

const WorkCard = (props) => {
  return (
    <div className='project-card'>
                <img src={props.imgsrc} alt='' style={{width:"300px", height:"220px", margin:"19.5px"}}></img>
                <h2 className='project-title'>{props.title}</h2>
                <div className='pro-details'>
                    <p>{props.text}</p>
                    <div className='pro-btns'>
                        <NavLink  to={props.view} className='btn' target="__blank">View Source</NavLink>
                    </div>
                 </div>
    </div>
  )
}

export default WorkCard