import { Image } from 'lucide-react'

const ImageCard = ({ src, alt, title, caption, className = '' }) => {
  return (
    <figure className={`image-card ${className}`}>
      {src ? (
        <img src={src} alt={alt || title || ''} loading="lazy" />
      ) : (
        <div className="image-placeholder">
          <Image aria-hidden="true" />
          <span>Image coming soon</span>
        </div>
      )}
      {(title || caption) && (
        <figcaption>
          {title && <strong>{title}</strong>}
          {caption && <span>{caption}</span>}
        </figcaption>
      )}
    </figure>
  )
}

export default ImageCard
