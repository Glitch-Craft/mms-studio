import type { Metadata } from 'next'
import Image from 'next/image'
import { PageFooter } from '@/components/layout/page-footer'
import { photos } from '@/lib/content'

export const metadata: Metadata = { title: 'About' }

export default function AboutPage() {
  return (
    <>
      <main>
        <section className="about-manifesto">
          <div>
            <p className="eyebrow">About / Our frequency</p>
            <h1>
              Not an agency.
              <br />
              <em>A creative signal.</em>
            </h1>
          </div>
          <Image
            src={photos.sign}
            alt="Studio sign on a textured wall"
            width={1200}
            height={1800}
            sizes="(max-width: 850px) 100vw, 35vw"
            preload
          />
        </section>
        <section className="about-story">
          <div className="about-note">
            <span>Est. 2020</span>
            <p>Independent, curious and happily hard to categorise.</p>
          </div>
          <div>
            <h2>We connect culture, craft and technology.</h2>
            <p>
              MM Shing is a small multidisciplinary studio working across sound,
              identity, digital and motion. We stay close to the work and
              collaborate with good people everywhere.
            </p>
            <div className="about-stats">
              <span>
                <b>05</b>Disciplines
              </span>
              <span>
                <b>01</b>Point of view
              </span>
              <span>
                <b>∞</b>Curiosity
              </span>
            </div>
          </div>
          <Image
            src={photos.studio}
            alt="Inside the creative music studio"
            width={1400}
            height={2100}
            sizes="(max-width: 850px) 92vw, 26vw"
          />
        </section>
      </main>
      <PageFooter note="Hong Kong ↔ Everywhere" />
    </>
  )
}
