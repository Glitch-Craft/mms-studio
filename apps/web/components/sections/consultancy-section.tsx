import { ContactForm } from '@/components/sections/contact-form'
import { Doodle } from '@/components/shared/doodle'

export function ConsultancySection() {
  return (
    <section className="consultancy" id="about">
      <Doodle type="star" label="Let's talk" />
      <div className="reveal">
        <p className="eyebrow">06 / Consultancy</p>
        <h2>
          Need a fresh
          <br />
          <em>perspective?</em>
        </h2>
        <p>
          We help creative teams and growing brands find clarity, solve the
          right problems and move forward with confidence.
        </p>
        <ul>
          <li>Creative direction</li>
          <li>Brand & digital audits</li>
          <li>Growth strategy</li>
        </ul>
      </div>
      <ContactForm />
    </section>
  )
}
