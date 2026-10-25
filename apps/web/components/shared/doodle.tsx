import type { ReactNode } from 'react'

type DoodleType = 'music' | 'camera' | 'cut' | 'reel' | 'reach' | 'star'

const drawings: Record<DoodleType, ReactNode> = {
  music: (
    <>
      <path d="M18 35V12l21-4v22M18 17l21-4" />
      <circle cx="12" cy="36" r="6" />
      <circle cx="33" cy="31" r="6" />
    </>
  ),
  camera: (
    <>
      <rect x="5" y="13" width="38" height="27" rx="3" />
      <path d="m15 13 3-6h12l3 6" />
      <circle cx="24" cy="26" r="8" />
      <circle cx="37" cy="19" r="1" />
    </>
  ),
  cut: (
    <>
      <circle cx="12" cy="36" r="7" />
      <circle cx="36" cy="36" r="7" />
      <path d="m17 31 19-19M31 31 12 12" />
    </>
  ),
  reel: (
    <>
      <rect x="11" y="4" width="26" height="40" rx="7" />
      <path d="m21 18 10 6-10 6z" />
      <path d="M18 9h12M18 39h12" />
    </>
  ),
  reach: (
    <>
      <path d="M6 39 20 25l8 7L43 9" />
      <path d="M31 9h12v12" />
      <circle cx="10" cy="14" r="4" />
      <path d="M4 25c1-5 3-7 6-7s6 2 7 6" />
    </>
  ),
  star: <path d="m24 3 4 15 15 6-15 5-4 16-5-16-15-5 15-6z" />,
}

export function Doodle({ type, label }: { type: DoodleType; label: string }) {
  return (
    <div className={`doodle doodle-${type}`}>
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        {drawings[type]}
      </svg>
      <span>{label}</span>
    </div>
  )
}
