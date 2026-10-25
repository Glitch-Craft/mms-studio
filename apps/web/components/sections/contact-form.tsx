'use client'

import { type FormEvent, useState } from 'react'
import { Arrow } from '@/components/shared/arrow'
import { contactServices } from '@/lib/content'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // TODO: post to the NestJS API (apps/api) once it exists.
    setSent(true)
  }

  return (
    <form id="contact" className="reveal" onSubmit={handleSubmit}>
      <p>Tell us what’s on your mind.</p>
      <label>
        Your name
        <input required name="name" placeholder="Jane Smith" />
      </label>
      <label>
        Email address
        <input
          required
          type="email"
          name="email"
          placeholder="jane@company.com"
        />
      </label>
      <label>
        I&apos;m interested in
        <select name="service" defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          {contactServices.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
      </label>
      <label>
        Project details
        <textarea
          required
          name="details"
          placeholder="A little about your idea..."
          rows={3}
        />
      </label>
      <button className="submit" type="submit">
        {sent ? (
          'Message sent — thank you'
        ) : (
          <>
            Send inquiry <Arrow diagonal />
          </>
        )}
      </button>
    </form>
  )
}
