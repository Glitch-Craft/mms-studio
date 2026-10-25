import Image from 'next/image'
import { siteConfig } from '@/lib/site-config'
import logo from '@/public/mmshing-studio-logo.png'

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-logo">
        <Image src={logo} alt={siteConfig.name} sizes="180px" />
      </div>
      <div>
        <p>
          Make something
          <br />
          worth remembering.
        </p>
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
      </div>
      <div className="footer-links">
        {siteConfig.socials.map((social) => (
          <a key={social.label} href={social.href}>
            {social.label}
          </a>
        ))}
      </div>
      <small>© 2025 {siteConfig.name}</small>
    </footer>
  )
}
