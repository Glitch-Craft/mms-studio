'use client'

import { useState } from 'react'
import { tracks, type Track } from '@/lib/content'

function TrackRow({
  track,
  active,
  onPlay,
}: {
  track: Track
  active: boolean
  onPlay: () => void
}) {
  return (
    <article className={`track ${active ? 'track-active' : ''}`}>
      <span className="track-number">{track.number}</span>
      <button
        className="play"
        onClick={onPlay}
        aria-label={`${active ? 'Pause' : 'Play'} ${track.title}`}
      >
        {active ? 'Ⅱ' : '▶'}
      </button>
      <div>
        <h3>{track.title}</h3>
        <p>{track.genre}</p>
      </div>
      <div className="wave" aria-hidden="true">
        {Array.from({ length: 18 }, (_, i) => (
          <i key={i} />
        ))}
      </div>
      <span className="duration">{track.duration}</span>
    </article>
  )
}

export function TrackList() {
  const [activeTrack, setActiveTrack] = useState<number | null>(0)

  return (
    <div className="track-list">
      {tracks.map((track, index) => (
        <TrackRow
          key={track.number}
          track={track}
          active={activeTrack === index}
          onPlay={() => setActiveTrack(activeTrack === index ? null : index)}
        />
      ))}
      <p className="player-note">Selected productions · Audio previews</p>
    </div>
  )
}
