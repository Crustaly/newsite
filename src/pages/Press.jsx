import { ArrowRight, ExternalLink } from 'lucide-react'
import ImageCard from '../components/ImageCard'
import {
  additionalRecognitionLinks,
  extraPressLinks,
  featuredAwardRecognition,
  featuredPress,
  interviewProfileLinks,
  pressLogos,
  researchPublicationGroups,
} from '../data/siteData'

const PressSection = ({ title, children }) => (
  <section className="press-section">
    <h2>{title}</h2>
    {children}
  </section>
)

const LinkList = ({ items }) => (
  <div className="press-link-list">
    {items.map((item) => (
      <a href={item.url} target="_blank" rel="noreferrer" key={item.title}>
        <span>{item.title}</span>
        <ExternalLink size={16} aria-hidden="true" />
      </a>
    ))}
  </div>
)

const AwardLogo = ({ award }) => {
  if (award.logo) {
    return <img src={award.logo} alt={award.organization} />
  }

  return <span>{award.textLogo || award.organization}</span>
}

const AwardRecognition = () => (
  <div className="award-recognition">
    <div className="award-recognition-grid">
      {featuredAwardRecognition.map((award) => (
        <a
          className="award-recognition-card"
          href={award.url}
          key={award.award}
          target="_blank"
          rel="noreferrer"
        >
          <div className="award-logo-mark">
            <AwardLogo award={award} />
          </div>
          <div>
            <h3>{award.award}</h3>
            {award.context && <p>{award.context}</p>}
          </div>
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      ))}
    </div>

    <div className="additional-recognition">
      <h3>Additional Recognition</h3>
      <LinkList items={additionalRecognitionLinks} />
    </div>
  </div>
)

const PressArchive = ({ items }) => (
  <div className="press-archive-grid">
    {items.map((item) => (
      <a className="press-archive-row" href={item.url} target="_blank" rel="noreferrer" key={item.source}>
        <div>
          <h3>{item.source}</h3>
          <p>{item.description}</p>
          <span>
            {item.tag}
            {item.year ? ` · ${item.year}` : ''}
          </span>
        </div>
        <ExternalLink size={17} aria-hidden="true" />
      </a>
    ))}
  </div>
)

const ResearchPublications = ({ groups }) => (
  <div className="research-publications">
    {groups.map((group) => (
      <div className="research-group" key={group.title}>
        <h3>{group.title}</h3>
        <div className="research-card-grid">
          {group.items.map((item) => (
            <a className="research-card" href={item.url} target="_blank" rel="noreferrer" key={item.title}>
              <div>
                <span>{item.type}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
              <ExternalLink size={17} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    ))}
  </div>
)

const Press = () => {
  return (
    <div className="page">
      <PressSection title="Featured Press">
        <div className="featured-press-grid">
          {featuredPress.map((item) => (
            <article className="featured-press-card" key={`${item.publisher}-${item.title}`}>
              <ImageCard src={item.image} alt={`${item.publisher} article image`} />
              <div>
                <span>{item.publisher}</span>
                <h3>{item.title}</h3>
                <a href={item.url} target="_blank" rel="noreferrer">
                  Read article <ArrowRight size={15} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </PressSection>

      <section className="featured-cloud">
        <h1>Featured in</h1>
        <div className="press-logo-cloud">
          {pressLogos.map((logo) => (
            <img key={logo.name} src={logo.image} alt={logo.name} />
          ))}
        </div>
      </section>

      <PressSection title="Awards & Recognition">
        <AwardRecognition />
      </PressSection>

      <PressSection title="Research and Publications">
        <ResearchPublications groups={researchPublicationGroups} />
      </PressSection>

      <PressSection title="More Press">
        <PressArchive items={extraPressLinks} />
      </PressSection>

      <PressSection title="Interviews and Profiles">
        <LinkList items={interviewProfileLinks} />
      </PressSection>
    </div>
  )
}

export default Press
