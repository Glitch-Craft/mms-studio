export const photos = {
  studio:
    'https://images.unsplash.com/photo-1783980632895-808d298dd1df?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400',
  mixer:
    'https://images.unsplash.com/photo-1787622925848-208a4ac045d5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200',
  screen:
    'https://images.unsplash.com/photo-1583215794430-78a2c664751e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200',
  type: 'https://images.unsplash.com/photo-1778167093203-543e1f0fb445?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200',
  storefront:
    'https://images.unsplash.com/photo-1770591060040-25fd7d6a4c1f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200',
  sign: 'https://images.unsplash.com/photo-1774967550555-a4c7d4958f6a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200',
}

export type Track = {
  number: string
  title: string
  genre: string
  duration: string
}

export const tracks: Track[] = [
  {
    number: '01',
    title: 'Neon Memory',
    genre: 'Alt Pop / Production',
    duration: '03:42',
  },
  {
    number: '02',
    title: 'Southbound',
    genre: 'Original score',
    duration: '03:18',
  },
  {
    number: '03',
    title: 'Soft Static',
    genre: 'Brand sound / Mix',
    duration: '03:57',
  },
]

export const contactServices = [
  'Music & sound',
  'Branding',
  'Web design',
  'Automation',
  'Creative services',
  'Consultancy',
]
