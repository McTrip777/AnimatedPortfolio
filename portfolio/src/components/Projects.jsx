import React, { useState, useEffect } from 'react'
import { ProjectData } from './ProjectData'
import '../styles/project.css'
import github from '../images/github.png'

const Projects = (props) => {
    const [index, setIndex] = useState(0)
    const [images, setImages] = useState([])

    useEffect(() => {
        const images = ProjectData.map((proj) => {
            return proj.img
        })
        setImages(images)
    },[])

    useEffect(() => {
        projectDisplay()
    }, [index])

    const increment = () => {
        if (index < ProjectData.length - 1) {
            let value = index + 1
            setIndex(value)
        } else {
            setIndex(0)
        }

    }
    const decrement = () => {
        if (index > 0) {
            let value = index - 1
            setIndex(value)
        } else {
            setIndex(ProjectData.length - 1)
        }

    }

    let currentProj

    const projectDisplay = () => {
        const proj = ProjectData[index]
        currentProj = <div className="project" key={index} >
            <div className="projectTextContainer">
                {/* <p>{ProjectData[index].description}</p> */}
                <a href={proj.url} target="_blank" rel="noreferrer">
                    <img src={images[index] ? images[index] : "https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} alt="" className='projectImage'/>
                </a>
                <div className='projectDetails'>
                    <h2>{proj.name}</h2>
                    <a href={proj.github}>
                        <img src={github} alt="Github Link" className='githubLink'/>
                    </a>
                </div>
            </div>
        </div>
        return currentProj
    }

    return (
        <div className="projectContainer">
            <div className="projectTitle">
                <h2>Projects</h2>
            </div>
            <div className="allProjects">
                <div className="projectButtons arrowLeft" onClick={decrement}><p>&#8592;</p></div>
                    {projectDisplay()}
                <div className="projectButtons arrowRight" onClick={increment}><p>&#8594;</p></div>
            </div>
        </div>
    )
}
export default Projects