import Image from 'next/image'
import { Doodle } from '@/components/shared/doodle'
import { TrackList } from '@/components/sections/track-list'
import { photos } from '@/lib/content'

export function MusicSection() {
  return (
    <section className="section music" id="work">
      <Doodle type="music" label="Turn it up" />
      <div className="section-heading reveal">
        <p className="eyebrow">01 / Sound</p>
        <h2>
          Music that
          <br />
          <em>stays with you.</em>
        </h2>
        <p>
          From first demo to final master, we shape sonic worlds for artists,
          films and brands.
        </p>
      </div>
      <div className="music-layout reveal">
        <div className="album">
          <Image
            src={photos.mixer}
            alt="Audio mixing desk"
            fill
            sizes="(max-width: 850px) 90vw, 35vw"
          />
          <div className="album-type">
            AFTER
            <br />
            DARK
          </div>
          <span>MM001 — 2025</span>
        </div>
        <TrackList />
      </div>
    </section>
  )
}
