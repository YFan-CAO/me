import type { ExperienceItem } from './experienceData'

type Props = {
  items: ExperienceItem[]
}

export function ExperienceTimeline({ items }: Props) {
  return (
    <ol className="timeline">
      {items.map((item, index) => (
        <li
          key={item.id}
          className={`timeline-item${
            item.isMeituan ? ' timeline-item--meituan' : ''
          }${item.isCurrent ? ' timeline-item--current' : ''}`}
        >
          <div className="timeline-line" aria-hidden="true" />
          <div className="timeline-dot" aria-hidden="true" />
          <div className="timeline-content">
            <div className="timeline-meta">
              <span className="timeline-period">{item.period}</span>
              <span className="timeline-index">
                {String(items.length - index).padStart(2, '0')}
              </span>
            </div>
            <div className="timeline-main">
              <div className="timeline-title-row">
                <h3 className="timeline-title">
                  {item.title} · {item.org}
                </h3>
                {item.isMeituan && (
                  <span className="timeline-tag timeline-tag--meituan">
                    当前阶段
                  </span>
                )}
                {item.isCurrent && (
                  <span className="timeline-tag timeline-tag--current">
                    美团
                  </span>
                )}
              </div>
              {item.location && (
                <div className="timeline-location">{item.location}</div>
              )}
              {item.highlight && (
                <p className="timeline-highlight">{item.highlight}</p>
              )}
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}

