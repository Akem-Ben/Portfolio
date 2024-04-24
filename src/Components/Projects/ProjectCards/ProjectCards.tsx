import { Col } from 'react-bootstrap';
import '../Projects.css'

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string;
    image: string;
    projectUrl: string;
}

const ProjectCard = (CardProps:ProjectCardProps) => {

    return(
        <Col sm={6} md={4}>
            <div className='proj-imgbx'>
                <img src= {CardProps.image} alt='project' />
                <div className='proj-txtx'>
                    <h4>{CardProps.title}</h4>
                    <span>{CardProps.description}</span>
                </div>
            </div>
        </Col>
    )
}


export default ProjectCard