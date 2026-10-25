import Image from 'next/image'
import type { ReactNode } from 'react'
import { Doodle } from '@/components/shared/doodle'
import { photos } from '@/lib/content'

function ServiceIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      className="service-icon"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

const services = [
  {
    number: '01',
    title: 'Workflow design',
    description: 'We map the friction and design systems that make work flow.',
    image: photos.type,
    imageAlt: 'Editorial planning materials',
    icon: (
      <>
        <path
          d="M7 24h34M24 7v34M12 12l24 24M36 12 12 36"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="24" cy="24" r="7" fill="currentColor" />
      </>
    ),
  },
  {
    number: '02',
    title: 'Tool integration',
    description: 'Your apps, data and teams finally talking to each other.',
    image: photos.screen,
    imageAlt: 'Connected digital tools on screen',
    icon: (
      <>
        <rect
          x="5"
          y="8"
          width="15"
          height="13"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="28"
          y="27"
          width="15"
          height="13"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M20 14h8c5 0 8 4 8 9M28 34h-8c-5 0-8-4-8-9"
          stroke="currentColor"
          strokeWidth="2"
        />
      </>
    ),
  },
  {
    number: '03',
    title: 'AI & agents',
    description:
      'Useful, responsible AI built around how you actually operate.',
    image: photos.mixer,
    imageAlt: 'Technology control interface',
    icon: <path d="M8 35 21 8l5 20 14-5-17 17-5-19z" fill="currentColor" />,
  },
]

export function AutomationSection() {
  return (
    <section className="section automation" id="services">
      <Doodle type="reach" label="Work smarter" />
      <div className="section-heading horizontal reveal">
        <div>
          <p className="eyebrow">05 / Automation</p>
          <h2>
            Less busywork.
            <br />
            <em>More momentum.</em>
          </h2>
        </div>
        <p>
          Smart systems that connect your tools, streamline your process and
          give your team time back.
        </p>
      </div>
      <div className="automation-poster">
        <Image
          src={photos.screen}
          alt="Creative digital workspace"
          fill
          sizes="100vw"
        />
        <div>
          <small>Systems that scale</small>
          <strong>
            MORE FLOW.
            <br />
            <em>LESS FRICTION.</em>
          </strong>
          <span>Connect → Simplify → Grow</span>
        </div>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <article key={service.number} className="reveal">
            <span>{service.number}</span>
            <div className="service-image">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 850px) 90vw, 30vw"
              />
              <ServiceIcon>{service.icon}</ServiceIcon>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
