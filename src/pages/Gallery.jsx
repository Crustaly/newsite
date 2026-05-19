import { MapPin } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import { favorites, photoAlbum } from '../data/siteData'

const uniquePhotoAlbum = photoAlbum.filter(
  (item, index, album) => album.findIndex((photo) => photo.image === item.image) === index,
)

const About = () => {
  return (
    <div className="page">
      <section className="about-intro">
        <div>
          <h1>About Me</h1>
          <p>
            A tiny scrapbook of life and things I love!
          </p>
        </div>
        <img
          src="/images/gallerynew/IMG_2645.JPG"
          alt="Crystal Yang"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </section>

      <section className="content-section about-favorites-section">
        <SectionHeader title="My Favorite Things" />
        <dl>
          {favorites.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="content-section">
        <SectionHeader title="Photo album" />
        <div className="album-grid polaroid-album-grid">
          {uniquePhotoAlbum.map((item) => (
            <figure className="album-polaroid" key={item.image}>
              <img src={item.image} alt="" loading="lazy" decoding="async" />
              <figcaption>
                <MapPin size={15} aria-hidden="true" />
                <span>{item.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

    </div>
  )
}

export default About
