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
          link="https://mikehk11.github.io/healthcare/"
          h3="HealthCare"
          p="HealthCare management"
        />
        <ProjectCard
          src={imgcssa}
          link=" https://mikehk11.github.io/css-animations2/"
          h3="Animation"
          p="cool CSS animation"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
