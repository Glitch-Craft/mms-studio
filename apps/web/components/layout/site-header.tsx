import Image from 'next/image'
import Link from 'next/link'
import { SiteNav } from '@/components/layout/site-nav'
import { Arrow } from '@/components/shared/arrow'
import { siteConfig } from '@/lib/site-config'
import logo from '@/public/mmshing-studio-logo.png'

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label={`${siteConfig.name}, home`}>
        <Image
          src={logo}
          alt={siteConfig.name}
          sizes="(max-width: 520px) 84px, 110px"
          preload
        />
      </Link>
      <SiteNav />
      <Link className="header-cta" href="/#contact">
        Start a project <Arrow diagonal />
      </Link>
    </header>
  )
}
