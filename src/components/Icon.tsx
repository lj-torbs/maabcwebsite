import type { ReactNode } from 'react'

export type IconName =
  | 'book'
  | 'building'
  | 'chart'
  | 'clock'
  | 'compass'
  | 'flag'
  | 'graduation'
  | 'heart'
  | 'mail'
  | 'mapPin'
  | 'megaphone'
  | 'palette'
  | 'phone'
  | 'pin'
  | 'rocket'
  | 'target'
  | 'users'

type IconProps = {
  name: IconName
  className?: string
}

const paths: Record<IconName, ReactNode> = {
  book: (
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z" />
    </>
  ),
  building: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 21v-6h6v6" />
      <path d="M9 9h.01" />
      <path d="M12 9h.01" />
      <path d="M15 9h.01" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="m7 15 4-4 3 3 5-7" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m16 8-2.5 5.5L8 16l2.5-5.5L16 8z" />
    </>
  ),
  flag: (
    <>
      <path d="M5 22V4" />
      <path d="M5 4h11l-1.5 4L16 12H5" />
    </>
  ),
  graduation: (
    <>
      <path d="m22 10-10-5-10 5 10 5 10-5z" />
      <path d="M6 12v5c3 2 9 2 12 0v-5" />
    </>
  ),
  heart: (
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  megaphone: (
    <>
      <path d="m3 11 18-6v14L3 13v-2z" />
      <path d="M7 14v4a2 2 0 0 0 2 2h1" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3a9 9 0 0 0 0 18h1.5a2 2 0 0 0 1.2-3.6 1.5 1.5 0 0 1 .9-2.7H17a4 4 0 0 0 4-4C21 6.4 17 3 12 3z" />
      <path d="M7.5 10h.01" />
      <path d="M10 7.5h.01" />
      <path d="M14 7.5h.01" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
  ),
  pin: (
    <>
      <path d="m12 17-5 5 2-7-5-5 7-.5L12 2l1 7.5 7 .5-5 5 2 7-5-5z" />
    </>
  ),
  rocket: (
    <>
      <path d="M4.5 16.5c-1 1-1.5 3-1.5 4.5 1.5 0 3.5-.5 4.5-1.5" />
      <path d="M9 15 5 19" />
      <path d="M14 4c3.5-1.5 6-1 6-1s.5 2.5-1 6c-1.5 3.6-5 7-8 8l-4-4c1-3 4.4-6.5 8-8z" />
      <circle cx="15" cy="9" r="1.5" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
      <path d="M16 3.1a4 4 0 0 1 0 7.8" />
    </>
  ),
}

function Icon({ name, className = 'h-5 w-5' }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  )
}

export default Icon
