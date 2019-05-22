import React from 'react';
import './Project.scss';

function Project(props) {

    const style = {
        backroundImage: `url('../../images/${props.name}')`,
        backgroundReapeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <div className="project" style={style}>
            <h1 className="project-title">{props.title}</h1>
        </div>
    )
};

export default Project;
