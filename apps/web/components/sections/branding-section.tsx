import Image from 'next/image'
import { Arrow } from '@/components/shared/arrow'
import { Doodle } from '@/components/shared/doodle'
import { photos } from '@/lib/content'

export function BrandingSection() {
  return (
    <section className="section branding">
      <Doodle type="star" label="Built to shine" />
      <div className="section-heading horizontal reveal">
        <div>
          <p className="eyebrow">03 / Identity</p>
          <h2>
            Brands with
            <br />
            <em>a pulse.</em>
          </h2>
        </div>
        <p>
          We build identities with a point of view — strategy, voice and visuals
          working as one.
        </p>
      </div>
      <div className="brand-grid">
        <article className="brand-card large reveal">
          <div className="brand-visual coral">
            <span>
              GOOD
              <br />
              NOISE
            </span>
            <small>GN®</small>
            <div className="project-tags">
              <b>LOUD</b>
              <b>INDEPENDENT</b>
            </div>
          </div>
          <div className="project-meta">
            <h3>Good Noise Records</h3>
            <p>Strategy · Identity · Campaign</p>
            <Arrow diagonal />
          </div>
        </article>
        <article className="brand-card reveal">
          <div className="brand-visual image">
            <Image
              src={photos.type}
              alt="Editorial typography on cream paper"
              fill
              sizes="(max-width: 850px) 90vw, 37vw"
            />
            <span>
              COMMON
              <br />
              GROUND
            </span>
            <div className="project-tags">
              <b>CULTURE</b>
              <b>COMMUNITY</b>
            </div>
          </div>
          <div className="project-meta">
            <h3>Common Ground</h3>
            <p>Identity · Art direction</p>
            <Arrow diagonal />
          </div>
        </article>
        <article className="brand-card reveal">
          <div className="brand-visual aqua">
            <div className="orb" />
            <span>
              OPEN
              <br />
              LATE
            </span>
          </div>
          <div className="project-meta">
            <h3>Open Late</h3>
            <p>Strategy · Packaging</p>
            <Arrow diagonal />
          </div>
        </article>
      </div>
    </section>
  )
}
