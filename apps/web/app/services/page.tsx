import type { Metadata } from 'next'
import Image from 'next/image'
import { PageFooter } from '@/components/layout/page-footer'
import { Arrow } from '@/components/shared/arrow'
import { photos } from '@/lib/content'

export const metadata: Metadata = { title: 'Services' }

const services = [
  {
    number: '01',
    title: 'Identity',
    detail: 'Strategy · Naming · Visual systems',
    image: photos.storefront,
  },
  {
    number: '02',
    title: 'Sound + motion',
    detail: 'Production · Film · Reels',
    image: photos.studio,
  },
  {
    number: '03',
    title: 'Digital',
    detail: 'Websites · Experiences · Content',
    image: photos.screen,
  },
  {
    number: '04',
    title: 'Automation',
    detail: 'Workflows · Integrations · AI',
    image: photos.sign,
  },
]

export default function ServicesPage() {
  return (
    <>
      <main>
        <section className="services-intro">
          <span>MM / Services menu</span>
          <h1>
            Pick a
            <br />
            <em>frequency.</em>
          </h1>
          <p>
            Bring us a brief, a half-formed thought, or a problem you can’t name
            yet.
          </p>
        </section>
        <section className="service-bands">
          {services.map((service) => (
            <article key={service.number}>
              <b>{service.number}</b>
              <div>
                <h2>{service.title}</h2>
                <p>{service.detail}</p>
              </div>
              <Image
                src={service.image}
                alt=""
                width={480}
                height={300}
                sizes="(max-width: 520px) 85vw, 240px"
              />
              <Arrow diagonal />
            </article>
          ))}
        </section>
      </main>
      <PageFooter note="Let’s make it happen." />
    </>
  )
}
