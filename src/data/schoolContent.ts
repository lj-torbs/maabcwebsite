export type NavItem = {
  label: string
  href: string
}

export type Stat = {
  value: string
  label: string
}

export type CardItem = {
  title: string
  text: string
}

export type FacultyMember = {
  name: string
  role: string
  focus: string
}

export type Room = {
  name: string
  purpose: string
  capacity: string
}

export type Report = {
  title: string
  href: string
}

export const schoolName = 'MAABCI'
export const schoolSubtitle = 'Our sufficiency is of God 2 Cor. 3:5'

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about-us' },
  // { label: 'Vision & Mission', href: '#vision-mission' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Faculties', href: '#faculties' },
  { label: 'Our Campus', href: '#rooms' },
  { label: 'Enroll Now', href: '#enroll-now' },
  { label: 'Ministry Partner', href: '#donation' },
  { label: 'Contact', href: '#contact' },
]

export const stats: Stat[] = [
  { value: '2026', label: 'School year updates' },
  { value: '9', label: 'Core school areas' },
  { value: '100%', label: 'Community-centered learning' },
]

export const reports: Report[] = [
  {
    title: 'July 2026 MAABC President\'s Report',
    href: '/July-2026-MAABC-Presidents-Report.pdf',
  },
  {
    title: 'April 2026 MAABC President\'s Report',
    href: '/April-2026-MAABC-Presidents-Report.pdf',
  },
]

export const values: CardItem[] = [
  {
    title: 'Faith-guided character',
    text: 'Students are encouraged to practice discipline, respect, compassion, and responsibility in daily learning.',
  },
  {
    title: 'Academic confidence',
    text: 'Lessons are structured to help learners build knowledge, ask questions, and progress with steady support.',
  },
  {
    title: 'Family partnership',
    text: 'Parents, teachers, and volunteers work together so school programs stay connected to community needs.',
  },
]

export const achievements: CardItem[] = [
  {
    title: 'School updates shared',
    text: 'MAABC keeps families, donors, and community members informed through regular school updates.',
  },
  {
    title: 'Expanded learning programs',
    text: 'Classroom and activity spaces are organized around instruction, youth development, and community service.',
  },
  {
    title: 'Community engagement',
    text: 'MAABC continues to connect education with service through events, giving opportunities, and family outreach.',
  },
]

export const faculty: FacultyMember[] = [
  {
    name: 'Academic Director',
    role: 'School Leadership',
    focus: 'Curriculum planning, teacher support, and student progress.',
  },
  {
    name: 'Quran Instructor',
    role: 'Religious Studies',
    focus: 'Recitation, memorization support, and age-appropriate Islamic studies.',
  },
  {
    name: 'Classroom Teacher',
    role: 'Core Instruction',
    focus: 'Foundational skills, lesson delivery, and parent communication.',
  },
  {
    name: 'Program Coordinator',
    role: 'Student Services',
    focus: 'Schedules, enrollment flow, activities, and school operations.',
  },
]

export const rooms: Room[] = [
  {
    name: 'Main Classroom',
    purpose: 'Daily instruction, small-group learning, and student assessments.',
    capacity: 'Flexible seating',
  },
  {
    name: 'Prayer Room',
    purpose: 'Focused recitation, memorization circles, and quiet study.',
    capacity: 'Small groups',
  },
  {
    name: 'Multipurpose Hall',
    purpose: 'Assemblies, parent meetings, programs, and community events.',
    capacity: 'Large gatherings',
  },
  {
    name: 'Activity Room',
    purpose: 'Projects, youth programs, tutoring, and supervised enrichment.',
    capacity: 'Rotating groups',
  },
]

export const donationFunds: CardItem[] = [
  {
    title: 'Student support',
    text: 'Help cover learning materials, scholarships, and classroom supplies.',
  },
  {
    title: 'Facility care',
    text: 'Support safe, clean, and welcoming rooms for instruction and events.',
  },
  {
    title: 'Programs and service',
    text: 'Fund youth activities, family events, and community outreach.',
  },
]

export const contactDetails = {
  location: 'Mt. Apo Bulatukan Something chuchu',
  phone: '(000) 000-0000',
  email: 'maabc59@email.com',
  hours: '24/7',
}
