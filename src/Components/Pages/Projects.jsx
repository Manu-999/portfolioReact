import React from 'react';
import './Projects.scss';
import Project from '../Project';

function Projects() {
    return (
        <div className="projects">
            <h1 className="projects-title">Aquí puedes ver algunos de mis proyectos, realizados con React, Angular, NodeJS y MongoDB</h1>
            <div className="projects-container">
                <Project
                    title="Plataforma de viajes"
                    name="travels.png"
                />
                <Project
                    title="Aplicación de tareas"

                />
                <Project
                    title="Aplicación de películas"
                    name="movies.png"
                />
            </div>
        </div>
    )

};

export default Projects;