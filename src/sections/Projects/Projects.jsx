import styles from './ProjectsStyles.module.css';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import imagehc from '../../assets/imagehc.webp';
import imgcssa from '../../assets/imgcssa.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={imagehc}
          link=" https://mikehk11.github.io/healthcare/"
          h3="SASS"
          p="platform SASS colllaboration"
        />
        <ProjectCard
          src={imgcssa}
          link=" https://mikehk11.github.io/css-animations2/"
          h3="Animation flex card"
          p="personal mission statement"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="AI voice assitant"
          p="python project voice AI"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Book Store"
          p="book store react"
        />
      </div>
    </section>
  );
}

export default Projects;
