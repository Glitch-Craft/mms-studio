import Image from 'next/image'
import { Arrow } from '@/components/shared/arrow'
import { Doodle } from '@/components/shared/doodle'
import { photos } from '@/lib/content'

export function WebSection() {
  return (
    <section className="section web">
      <Doodle type="reach" label="Reach further" />
      <div className="web-intro reveal">
        <p className="eyebrow">04 / Digital</p>
        <h2>
          Websites made
          <br />
          to be <em>felt.</em>
        </h2>
        <p>
          Clear thinking, expressive design and smooth interactions. No
          templates, no filler.
        </p>
        <a className="text-link" href="#contact">
          Build something with us <Arrow />
        </a>
      </div>
      <article className="web-feature reveal">
        <div className="browser">
          <div className="browser-bar">
            <i />
            <i />
            <i />
            <span>knowhere.space</span>
          </div>
          <div className="site-mock">
            <Image
              src={photos.screen}
              alt="Digital creative workspace"
              fill
              sizes="(max-width: 850px) 90vw, 55vw"
            />
            <div className="mock-copy">
              <small>Independent culture journal</small>
              <strong>
                KNOW
                <br />
                HERE
              </strong>
            </div>
          </div>
        </div>
        <div className="project-meta light">
          <h3>Knowhere Journal</h3>
          <p>Web design · Development · 2025</p>
          <Arrow diagonal />
        </div>
      </article>
    </section>
  )
}
