import type { Metadata } from 'next'
import Image from 'next/image'
import { PageFooter } from '@/components/layout/page-footer'
import { photos } from '@/lib/content'

export const metadata: Metadata = { title: 'Work' }

// The collage is two columns: a/c sit in the wide one, b/d in the narrow one.
const projects = [
  {
    className: 'work-a',
    tag: '01 / Identity',
    title: 'Common Ground',
    image: photos.type,
    alt: 'Common Ground identity campaign',
    width: 1200,
    height: 1600,
    sizes: '(max-width: 850px) 92vw, 56vw',
  },
  {
    className: 'work-b',
    tag: '02 / Sound',
    title: 'After Dark',
    image: photos.mixer,
    alt: 'After Dark music production',
    width: 1200,
    height: 800,
    sizes: '(max-width: 850px) 92vw, 34vw',
  },
  {
    className: 'work-c',
    tag: '03 / Campaign',
    title: 'Good Noise',
    image: photos.storefront,
    alt: 'Good Noise storefront identity',
    width: 1200,
    height: 900,
    sizes: '(max-width: 850px) 92vw, 56vw',
  },
  {
    className: 'work-d',
    tag: '04 / Digital',
    title: 'Knowhere',
    image: photos.screen,
    alt: 'Knowhere digital experience',
    width: 1200,
    height: 1800,
    sizes: '(max-width: 850px) 92vw, 34vw',
  },
]

export default function WorkPage() {
  return (
    <>
      <main>
        <section className="work-hero">
          <p className="eyebrow">Selected work / 2022—2025</p>
          <h1>
            Things we’ve
            <br />
            <em>made shing.</em>
          </h1>
          <p>Identity, sound and digital projects with something to say.</p>
        </section>
        <section className="work-collage">
          {projects.map((project) => (
            <article key={project.title} className={project.className}>
              <Image
                src={project.image}
                alt={project.alt}
                width={project.width}
                height={project.height}
                sizes={project.sizes}
              />
              <span>{project.tag}</span>
              <h2>{project.title}</h2>
            </article>
          ))}
        </section>
      </main>
      <PageFooter note="Selected work / MM Shing" />
    </>
  )
}
