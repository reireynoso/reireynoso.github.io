import React from 'react'
import HomeIcon from './HomeIcon'
import information from '../information'
import EducationCard from './EducationCard'
import Header from './Header'
import WorkCard from './WorkCard'

const Resume = ({location: {pathname}}) => {
    return (
        <>
        <HomeIcon />
        <Header pathname={pathname}/>
        <div className="link-container">
            <h1 className="resume-content-title">Resume</h1>
            <a href="/reinald-resume.pdf" target="_blank" className="resume-download" download>Download Resume</a>
            <div className="education-container">
                <h2 className="resume-content-subtitle">Education</h2>
                {
                information.education.map(edu => <EducationCard key={edu.school} edu ={edu}/>)
                }
            </div>
            

            <div className="work-container">
                <h2 className="resume-content-subtitle">Employment History</h2>
                {
                    information.work.map(wk => <WorkCard key={wk.title} work={wk}/>)
                }
            </div>
        </div>
        </>
    )
}

export default Resume