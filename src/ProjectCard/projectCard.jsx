export const ProjectCard = ({ title, description, imageUrl, githubUrl, liveUrl }) => {
    return (
        <div className="project-card">
            <img src={imageUrl} alt={title} className="project-image" />
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <div className="project-links">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
            </div>
        </div>
    );
}