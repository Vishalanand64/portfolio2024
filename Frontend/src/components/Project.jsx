
import './Project.css'
import ProjectCard from './ProjectCard'
import github from '../assets/github.jpg'
import todo from '../assets/todo.jpg'



const project = () => {
  return (
    <div className='work-page'>
    <div className='project'>
       Projects
      </div>
    
    <div className="main-project-container">
      <div className='main-project'>

      <div className="projectContainerTop">
      <ProjectCard  name="GitHub Detective" description="GitHub Detective is a web application built with HTML, CSS, and JS. It utilizes the GitHub API to search for users and display comprehensive details."  image={github} link="https://githdetective.netlify.app"/>

      <ProjectCard  name="Todo List" description="A to-do list application built with HTML, CSS, and JavaScript, featuring task storage in session storage to preserve data across user sessions."  image={todo}  link="https://vishaltodos.netlify.app/"/>
      </div>
      <div className="projectContainerBottom">
      <ProjectCard  name="In progress" description="some more react projects are in progress"  />

     <ProjectCard  name="In progress" description="some more react projects are in progress"  />
      </div>
      </div>
    </div>
      
    </div>
  )
}

export default project
