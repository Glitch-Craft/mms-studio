import Image from 'next/image'
import { Arrow } from '@/components/shared/arrow'
import { Doodle } from '@/components/shared/doodle'
import { photos } from '@/lib/content'

const cardSizes = '(max-width: 850px) 90vw, 36vw'

export function CreativeSection() {
  return (
    <section className="section creative">
      <Doodle type="camera" label="Frame it" />
      <div className="creative-title">
        <p className="eyebrow">02 / Creative studio</p>
        <h2>
          MADE TO
          <br />
          <em>MOVE.</em>
        </h2>
      </div>
      <div className="creative-cards">
        <article className="photo-card reveal">
          <Doodle type="camera" label="Edit" />
          <Image
            src={photos.type}
            alt="Editorial typography artwork"
            width={1200}
            height={1600}
            sizes={cardSizes}
          />
          <div>
            <span>Photo editing</span>
            <Arrow diagonal />
          </div>
        </article>
        <article className="type-card reveal">
          <Doodle type="cut" label="Cut" />
          <div className="frame-lines">
            <Image
              src={photos.mixer}
              alt="Audio and video production controls"
              fill
              sizes={cardSizes}
            />
            <span>00:14:23</span>
            <b>REC</b>
            <strong>
              STORIES
              <br />
              IN MOTION
            </strong>
          </div>
          <div>
            <span>Video creation</span>
            <Arrow diagonal />
          </div>
        </article>
        <article className="reel-card reveal">
          <Doodle type="reel" label="Views +" />
          <div className="phone">
            <div className="reel-gradient">
              <Image
                src={photos.screen}
                alt="Digital content creation screen"
                fill
                sizes={cardSizes}
              />
              <span>
                DON&apos;T
                <br />
                SCROLL
              </span>
            </div>
          </div>
          <div>
            <span>Reels & social</span>
            <Arrow diagonal />
          </div>
        </article>
      </div>
    </section>
  )
}
