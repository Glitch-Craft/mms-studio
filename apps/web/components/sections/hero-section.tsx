import Image from 'next/image'
import { Arrow } from '@/components/shared/arrow'
import { photos } from '@/lib/content'
import clapperboard from '@/public/clapperboard.png'

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">
          Independent multidisciplinary studio · Est. 2020
        </p>
        <div className="hero-title">
          <Image
            className="film-cut"
            src={clapperboard}
            alt=""
            sizes="64px"
            preload
          />
          <h1>
            IDEAS THAT
            <br />
            PLAY <em>LOUD.</em>
          </h1>
        </div>
        <div className="hero-bottom">
          <div>
            <p>Ideas that sound good, look sharp and move people.</p>
            <div className="hero-disciplines">
              <span>Sound</span>
              <span>Identity</span>
              <span>Digital</span>
            </div>
          </div>
          <a
            className="circle-link"
            href="#work"
            aria-label="Explore selected work"
          >
            <Arrow diagonal />
          </a>
        </div>
      </div>
      <div className="hero-image">
        {/* Sized by the photo's own aspect ratio, which sets the hero height on desktop. */}
        <Image
          src={photos.studio}
          alt="Headphones and synthesizer in a music studio"
          width={1400}
          height={2100}
          sizes="(max-width: 850px) 100vw, 40vw"
          preload
        />
        <div className="hero-overlay-word" aria-hidden="true">
          STUDIO
        </div>
        <span className="image-tag">Hong Kong ↔ Everywhere</span>
        <span className="sticker">
          PLAY
          <br />
          LOUD
        </span>
        <span className="hero-edition">
          ISSUE 001
          <br />
          CREATIVE
          <br />
          INDEPENDENT
        </span>
      </div>
    </section>
  )
}
