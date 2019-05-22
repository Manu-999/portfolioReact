import React from 'react';
import './Project.scss';

function Project(props) {
    return (
        <div className="project">
            <h1 className="project-title">{props.children}</h1>
            <img src={props.src}></img>
        </div>
    )
};

export default Project;