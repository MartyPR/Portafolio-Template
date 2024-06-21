import * as React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import projects, { Projects_uni } from '../../utils/data';

import './ProjectDetails.css'
const ProjectDetails = () => {
    const {projectId}=useParams();  

    const project= projects.find((project)=>project.id===parseInt(projectId))
    if (!project) {
        return <Navigate to="/404" replace />;
      }
    
  return (
    <div className='project-details-container'>ProjectDetails
        
      <h1>Post Details :{projectId}</h1>
      <h2>{project.title}</h2>
      <p>{project.content}</p>
      <p>{project.author}</p>
    </div>
  )
}

export const ProjectDetailsUni = ()=>{
    const {projectUniId}=useParams();  

    const project= Projects_uni.find((project)=>project.id===parseInt(projectUniId))
    if (!project) {
        return <Navigate to="/404" replace />;
      }
    
  return (
    <div className='project-details-container'>ProjectDetails
      <h1>Post Details :{projectUniId}</h1>
      <h2>{project.title}</h2>
      <p>{project.content}</p>
      <p>{project.author}</p>
    </div>
    
  )
}


export default ProjectDetails