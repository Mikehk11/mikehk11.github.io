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
          h3="Healthcare"
          p="healthcare landing page"
        />
        <ProjectCard
          src={imgcssa}
          link=" https://mikehk11.github.io/css-animations2/"
          h3="Flex Card"
          p="css animated flex card"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Voice Assitant"
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
