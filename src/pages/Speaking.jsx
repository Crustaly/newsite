import { ExternalLink, Mail } from 'lucide-react'
import { featuredSpeakingAppearances, links } from '../data/siteData'

const speakingHeroImages = [
  '/images/gallery/speakingintel.png',
  '/images/gallery/IMG_1542.jpeg',
  '/images/gallery/image_720.png',
]

const Speaking = () => {
  return (
    <div className="page">
      <section className="speaking-intro">
        <div className="speaking-intro-copy">
          <h1>I speak about accessible gaming, inclusive AI, and youth-led social impact.</h1>
          <p>
            From national AI events to education and accessibility conferences, I share the story
            behind Audemy, and how one version of Wordle became a global platform for blind and
            visually impaired learners.
          </p>
        </div>

        <div className="speaking-photo-strip">
          {speakingHeroImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt=""
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={index === 0 ? 'high' : undefined}
            />
          ))}
        </div>
      </section>

      <section className="speaking-section">
        <div className="speaking-section-header">
          <h2>Featured Appearances</h2>
          <p>
            I&apos;ve spoken, presented, or been featured at events and conferences focused on AI,
            accessibility, education, gaming, and youth innovation.
          </p>
        </div>

        <div className="speaking-card-grid">
          {featuredSpeakingAppearances.map((appearance) => (
            <a className="speaking-appearance-card" href={appearance.link} target="_blank" rel="noreferrer" key={appearance.title}>
              <img src={appearance.image} alt="" loading="lazy" decoding="async" />
              <div>
                <span>{appearance.year}</span>
                <h3>{appearance.title}</h3>
                <p>{appearance.description}</p>
              </div>
              <ExternalLink size={17} aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section className="speaking-contact">
        <div>
          <h2>Bring Crystal to your event</h2>
          <p>
            I&apos;m available for keynotes, panels, workshops, school visits, interviews, podcasts,
            and conference sessions on accessible gaming, inclusive AI, education technology, and
            youth-led social impact.
          </p>
          <p>For speaking inquiries, please include the event name, date, location, audience, format, and budget if available.</p>
        </div>
        <a className="speaking-contact-link" href={links.email}>
          Contact Me for Speaking <Mail size={18} aria-hidden="true" />
        </a>
      </section>
    </div>
  )
}

export default Speaking
