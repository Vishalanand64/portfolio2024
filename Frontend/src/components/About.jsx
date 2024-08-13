
import './About.css'


import Aboutcard from './Aboutcard'

const About = () => {
  return (
    <div className='about-page'>
      {/* <div className='about-toast'>
        <div className='toast'>
            
           About me
           
        </div>
      </div> */}

      <div className="about">About me</div>

      <div className="about-container">
        <div className="about-left">
            <p className='whatIDo'>What I Do</p>
            <Aboutcard role={"Web Development"}/>
            <Aboutcard role={"Web Designing"}/>
        </div>
        <div className="about-right">
            <p> <span style={{fontSize:"30px" , fontWeight:"600"}}>I'm <span style={{color:"#39758f"}}>Vishal Anand,</span></span> a full stack web developer with a strong command of both frontend and backend technologies. On the frontend, I excel in creating responsive, dynamic, and user-friendly interfaces using HTML, CSS, and JavaScript, with expertise in the React.js framework. On the backend, I have extensive experience with Node.js and Express.js, allowing me to build robust, scalable server-side applications. <br/> <br/>My skill set also includes working with MongoDB for efficient database management, and I am proficient in version control with Git and collaborative development using GitHub. With a comprehensive understanding of the MERN stack, I am adept at developing full-featured web applications from concept to deployment.</p>
        </div>
      </div>
    </div>
  )
}

export default About
