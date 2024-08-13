
import './projectCard.css';
import { Link } from 'react-router-dom';


const ProjectCard = (props) => {


  
  return (
    <div className="projectCard">
      <img className="cardImage" src={props.image} alt={props.name} />
      <div className="projectDes">
        <p className='projectName'>{props.name}</p>
        <p>{props.description}</p>
        <Link to={props.link}><button  className='showBtn'>show</button></Link>
      </div>
    </div>
  );
};

export default ProjectCard;

