import './App.css'
import { profile } from './profileData'
import { experiences } from './experienceData'
import { projects } from './projectsData'
import { ExperienceTimeline } from './ExperienceTimeline'
import { ProjectsGrid } from './ProjectsGrid'
import avatarImage from './assets/avatar.png'

function App() {
  const handleNavClick = (targetId: string) => {
    const el = document.getElementById(targetId)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="app-shell fade-in">
      <div className="layout-two-column">
        <aside className="summary-column">
          <header className="app-header">
            <img src={avatarImage} alt="个人头像" className="avatar" />
            <div className="identity">
              <div className="identity-name">{profile.name}</div>
              <div className="identity-role">{profile.role}</div>
            </div>
            <span className="chip">
              <span className="chip-dot" />
              技术向
            </span>
          </header>
          <div className="summary-meta">
            <p className="summary-meta-line">{profile.oneLiner}</p>
            <p className="summary-meta-line">
              {profile.years} · {profile.location}
            </p>
            <p className="summary-meta-line">{profile.team}</p>
          </div>
          <div className="summary-tags">
            {profile.tags.map((tag) => (
              <span key={tag} className="summary-tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="summary-nav">
            <div className="summary-nav-label">SECTIONS</div>
            <button
              type="button"
              className="summary-nav-link"
              onClick={() => handleNavClick('home')}
            >
              HOME · 概览
            </button>
            <button
              type="button"
              className="summary-nav-link"
              onClick={() => handleNavClick('experience')}
            >
              EXPERIENCE · 履历
            </button>
            <button
              type="button"
              className="summary-nav-link"
              onClick={() => handleNavClick('projects')}
            >
              PROJECTS · 项目
            </button>
            <button
              type="button"
              className="summary-nav-link"
              onClick={() => handleNavClick('skills')}
            >
              SKILLS · 技能
            </button>
            <button
              type="button"
              className="summary-nav-link"
              onClick={() => handleNavClick('contact')}
            >
              CONTACT · 联系
            </button>
          </div>
        </aside>

        <div>
          <nav className="app-nav" aria-label="Primary">
            <button
              type="button"
              className="nav-button nav-button--active"
              onClick={() => handleNavClick('home')}
            >
              HOME
            </button>
            <button
              type="button"
              className="nav-button"
              onClick={() => handleNavClick('experience')}
            >
              EXPERIENCE
            </button>
            <button
              type="button"
              className="nav-button"
              onClick={() => handleNavClick('projects')}
            >
              PROJECTS
            </button>
            <button
              type="button"
              className="nav-button"
              onClick={() => handleNavClick('skills')}
            >
              SKILLS
            </button>
            <button
              type="button"
              className="nav-button"
              onClick={() => handleNavClick('contact')}
            >
              CONTACT
            </button>
          </nav>

          <main className="app-main" aria-label="个人网站内容">
            <section id="home" className="section">
              <div className="section-header">
                <h2 className="section-title">HOME</h2>
                <span className="section-kicker">个人概览 · Overview</span>
              </div>
              <p className="section-placeholder">
                {profile.oneLiner}
                <br />
                {profile.years} · {profile.location} · {profile.team}
              </p>
            </section>

            <section id="experience" className="section">
              <div className="section-header">
                <h2 className="section-title">EXPERIENCE</h2>
                <span className="section-kicker">履历时间线 · Timeline</span>
              </div>
              <ExperienceTimeline items={experiences} />
            </section>

            <section id="projects" className="section">
              <div className="section-header">
                <h2 className="section-title">PROJECTS</h2>
                <span className="section-kicker">技术项目 · Showcase</span>
              </div>
              <ProjectsGrid items={projects} />
            </section>

            <section id="skills" className="section">
              <div className="section-header">
                <h2 className="section-title">SKILLS</h2>
                <span className="section-kicker">技能矩阵 · Highlights</span>
              </div>
              <div className="skills-grid">
                {profile.techStacks.map((group) => (
                  <div
                    key={group.group}
                    className={`skills-group${
                      group.featured ? ' skills-group--featured' : ''
                    }`}
                  >
                    <div className="skills-group-header">
                      <h3 className="skills-group-title">{group.group}</h3>
                      {group.featured && (
                        <span className="skills-group-badge">Core</span>
                      )}
                    </div>
                    <div className="skills-tags">
                      {group.items.map((item) => {
                        const isEng =
                          item.includes('工程') || item.includes('CI/CD')
                        const isHarmony =
                          item.includes('Harmony') || item.includes('ArkTS')
                        const isMulti = item.includes('跨端')

                        let extraClass = ''
                        if (isEng) extraClass = ' skill-tag--eng'
                        if (isHarmony || isMulti) {
                          extraClass = ' skill-tag--harmony'
                        }

                        return (
                          <span
                            key={item}
                            className={`skill-tag${extraClass}`}
                          >
                            {item}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="contact" className="section">
              <div className="section-header">
                <h2 className="section-title">CONTACT</h2>
                <span className="section-kicker">联系与外链 · Contact</span>
              </div>
              <div className="contact-layout">
                <div className="contact-main">
                  <p className="contact-text">
                    如果你正在为团队寻找大前端工程师，或希望就多端 / 鸿蒙相关方向交流，欢迎通过以下方式联系我：
                  </p>
                  <div className="contact-email">
                    <span className="contact-email-label">Email</span>
                    <a
                      href="mailto:your.email@example.com"
                      className="contact-email-value"
                    >
                      your.email@example.com
                    </a>
                  </div>
                  <div className="contact-links">
                    <a
                      href="https://github.com/your-github"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-link"
                    >
                      <span className="contact-link-icon">GH</span>
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://your-blog.example.com"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-link"
                    >
                      <span className="contact-link-icon">B</span>
                      <span>Blog</span>
                    </a>
                  </div>
                </div>
                <aside className="contact-cta">
                  <div className="contact-cta-label">联系我</div>
                  <div className="contact-cta-body">
                    <p>
                      一封简短的介绍（你是谁、在看哪个岗位 / 机会）
                      就足够了，其余细节我们可以慢慢聊。
                    </p>
                    <button
                      type="button"
                      className="contact-cta-button"
                      onClick={() => handleNavClick('home')}
                    >
                      回到主页
                    </button>
                  </div>
                </aside>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
