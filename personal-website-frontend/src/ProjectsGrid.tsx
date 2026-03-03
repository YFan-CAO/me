import type { Project } from './projectsData'

type Props = {
  items: Project[]
}

export function ProjectsGrid({ items }: Props) {
  return (
    <div className="projects-grid">
      {items.map((project) => (
        <article key={project.id} className="project-card">
          <header className="project-header">
            <h3 className="project-title">{project.name}</h3>
            <div className="project-meta">
              {project.period && (
                <span className="project-chip project-chip--period">
                  {project.period}
                </span>
              )}
              {project.isCrossPlatform && (
                <span className="project-chip project-chip--cross">
                  Cross-platform
                </span>
              )}
              {project.isHarmony && (
                <span className="project-chip project-chip--harmony">
                  HarmonyOS
                </span>
              )}
            </div>
          </header>
          <p className="project-role">{project.role}</p>
          <p className="project-summary">{project.summary}</p>
          <div className="project-footer">
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-tech">
              {project.techStack.map((tech) => (
                <span key={tech} className="project-tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

