import { Linkedin, Mail, Sprout } from 'lucide-react'
import { links } from '../data/siteData'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-rule" />
      <div className="footer-inner">
        <p>Crystal Yang</p>
        <div className="footer-links" aria-label="Footer links">
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={18} aria-hidden="true" />
            LinkedIn
          </a>
          <a href={links.email}>
            <Mail size={18} aria-hidden="true" />
            Email
          </a>
          <a href={links.audemy} target="_blank" rel="noreferrer">
            <Sprout size={18} aria-hidden="true" />
            Audemy
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
