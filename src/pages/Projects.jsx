import { ArrowRight, ExternalLink } from 'lucide-react'
import ImageCard from '../components/ImageCard'
import {
  audemyGallery,
  awards,
  hackathonProjects,
  impactStats,
  researchPapers,
  workSections,
} from '../data/siteData'

const WorkHeading = ({ title, description }) => (
  <div className="work-heading-block">
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>
)

const renderEmphasis = (text) =>
  text.split(/(\*\*.*?\*\*)/g).map((part) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={part}>{part.slice(2, -2)}</strong>
    }

    return part
  })

const InitiativeSection = ({ section }) => (
  <div>
    <section className="work-text-section initiative-section">
      <div>
        <WorkHeading title={section.eyebrow} description={section.title} />
        <div className="prose-block">
          {section.body.map((paragraph) => (
            <p key={paragraph}>{renderEmphasis(paragraph)}</p>
          ))}
        </div>
        <a className="inline-text-link" href={section.link} target="_blank" rel="noreferrer">
          {section.cta} <ExternalLink size={17} aria-hidden="true" />
        </a>
      </div>
      <ImageCard src={section.image} alt="" />
    </section>
    <div className="work-section-divider" />
  </div>
)

const Work = () => {
  const [katyYouthHacks, ...otherInitiatives] = workSections

  return (
    <div className="page">
      <section className="work-intro">
        <img
          src="/images/projects/crystal_yang_speaking.png"
          alt="Crystal Yang speaking"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div>
          <h1>Building accessible games, AI tools, and social impact ventures.</h1>
          <p>
            Forbes 30 Under 30 founder of Audemy, creating play and learning experiences for blind
            and visually impaired learners.
          </p>
          <span>Read more about my work below ↓</span>
        </div>
      </section>
      <div className="work-hero-divider" />

      <section className="work-text-section" id="audemy">
        <WorkHeading title="Audemy" description="Accessible audio games for blind and visually impaired learners." />

        <div className="image-row audemy-gallery-row">
          {audemyGallery.map((item) => (
            <ImageCard key={item.title} src={item.image} alt={item.alt} />
          ))}
        </div>

        <div className="prose-block">
          <p>
            Audemy started because my friend couldn&apos;t play Wordle. So, I spent my summer building
            Heard-le, an audio-based version she could play.
          </p>
          <p>
            Through the process, I learned that <strong>over 70% of blind students were at least a grade
            level behind in school due to a lack of educational resources</strong>. I decided to take the
            audio-based conversational algorithm I developed and apply it to education, and thus,
            <strong> Audemy was born</strong>.
          </p>
        </div>
      </section>

      <h2 className="award-section-title">Impact</h2>
      <section className="stat-section" aria-label="Audemy impact">
        {impactStats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </section>

      <section className="work-text-section">
        <h2 className="award-section-title">Awards and Recognition</h2>
        <p className="recognition-copy">
          Featured in Forbes, OpenAI, Intel, Google, Wharton, NPR, PBS, Fox, Hershey&apos;s,
          Taco Bell Foundation, and more. Check out my full press coverage list{' '}
          <a href="/press">here</a>.
        </p>
        <div className="award-list">
          {awards.map((award) => (
            <article className="award-item" key={award.name}>
              <img className="award-logo" src={award.logo} alt="" aria-hidden="true" loading="lazy" decoding="async" />
              <div>
                <h3>{award.name}</h3>
                <p>{award.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="work-text-section audemy-next-steps">
        <p className="next-step">
          Next steps: I&apos;m currently working on Buzzle, the world&apos;s first audio-only gaming
          console for blind users.
        </p>
      </section>
      <div className="work-section-divider" />

      {katyYouthHacks && <InitiativeSection section={katyYouthHacks} />}

      <section className="work-text-section">
        <WorkHeading title="Research" description="Making accessible technology more usable, measurable, and real." />
        <div className="prose-block">
          <p>
            My research focuses on accessible AI, audio-based interfaces, and learning tools for blind
            and visually impaired students. I&apos;ve published three first-author papers at ACM conferences
            and presented accessibility research in Paris, Costa Rica, and Japan.
          </p>
        </div>
        <div className="text-list">
          {researchPapers.map((paper) => (
            <article className="text-list-item" key={paper.title}>
              <h3>{paper.title}</h3>
              <p>{paper.description}</p>
              <a href={paper.link} target="_blank" rel="noreferrer">
                Read publication <ArrowRight size={16} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </section>
      <div className="work-section-divider" />

      {otherInitiatives.map((section) => (
        <InitiativeSection key={section.id} section={section} />
      ))}

      <section className="work-text-section">
        <WorkHeading title="Hackathons" description="My fast builds, weird ideas, and prototypes." />
        <div className="text-list">
          {hackathonProjects.map((project) => (
            <article className="text-list-item with-image" key={project.title}>
              <ImageCard src={project.image} alt="" />
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span>{project.award}</span>
                <a href={project.link} target="_blank" rel="noreferrer">
                  Link <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <div className="work-section-divider" />

      <section className="work-text-section">
        <div className="music-text-image">
          <div>
            <WorkHeading title="Music" />
            <div className="prose-block">
              <p>
                Before I was building audio games, I was already obsessed with sound. I perform in my
                string quartet and spend way too many hours improvising jazz pieces on the piano. I&apos;m a
                <strong> Texas all-state violist</strong>, and my ensemble won <strong>first in the state
                at the UIL chamber music state championship</strong>.
              </p>
            </div>
            <a className="inline-text-link" href="https://www.youtube.com/live/06SGB08uPVc?si=EnYx-q0_8sWrsaht&t=4739" target="_blank" rel="noreferrer">
              Watch my string quartet <ExternalLink size={17} aria-hidden="true" />
            </a>
          </div>
          <ImageCard src="/images/projects/viola.png" alt="Crystal Yang playing viola" />
        </div>
      </section>
    </div>
  )
}

export default Work
