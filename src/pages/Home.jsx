import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="page home-page">
      <section className="home-intro">
        <div className="home-headshot">
          <img src="/images/crystal yang.jpeg" alt="Crystal Yang" />
        </div>

        <div className="home-copy">
          <p className="home-audemy-line">
            I&apos;m Crystal, founder of{' '}
            <a className="audemy-word" href="https://audemy.org/" target="_blank" rel="noreferrer">
              <img src="/images/audemylogo.png" alt="" aria-hidden="true" />
              <strong>Audemy</strong>
            </a>.
          </p>
          <p>
            I&apos;ve always loved building weird little things and studying how great companies take off.
          </p>
          <p>
            I&apos;m a{' '}
            <a href="https://www.forbes.com/profile/crystal-yang/" target="_blank" rel="noreferrer">
              Forbes 30 Under 30
            </a>{' '}
            honoree, a Penn M&amp;T student (Wharton &amp; AI), and a speaker on accessible gaming
            &amp; inclusive AI. My work sits somewhere between accessible gaming, human-centered AI{' '}
            <a href="https://scholar.google.com/citations?user=xaeJeRYAAAAJ&hl=en" target="_blank" rel="noreferrer">
              research
            </a>
            , education, and social impact.
          </p>
          <p>
            My favorite drink is iced water, I love improvising jazz pieces on the piano, and I look
            forward to seeing Bing&apos;s daily wallpaper every morning. Enjoy my corner of the internet!
          </p>

          <div className="home-actions" aria-label="Homepage links">
            <Link className="button home-button" to="/press">Featured in</Link>
            <Link className="button home-button" to="/work">My Work</Link>
            <Link className="button home-button" to="/about">About me!</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
