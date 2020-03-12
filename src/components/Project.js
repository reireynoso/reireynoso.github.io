import React from 'react'
import HomeIcon from './HomeIcon'
import ProjectCard from './ProjectCard'
import information from '../information'

const Project = () => {
    console.log(information)
    return (
        <div className="link-container">
            <HomeIcon/>
            <h1 className="project-content-title">Projects</h1>
            
            <div className="project-container">
                {
                    information.projects.map(project => <ProjectCard project ={project}/>)
                }
            </div>
        </div>
    )
}

export default Project