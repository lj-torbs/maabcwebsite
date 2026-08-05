import { publicAsset } from '../lib/publicAsset'

export type NavItem = {
  label: string
  href: string
}

export type CardItem = {
  title: string
  text: string
}

export type Room = {
  name: string
  purpose: string
}

export type Report = {
  title: string
  href: string
}

export const schoolName = 'MAABCI'
export const schoolFullName = 'Mt. Apo Alliance Bible College, Inc.'
export const schoolSubtitle = 'Our Sufficiency is of God (2 Cor. 3:5)'

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about-us' },
  // { label: 'Vision & Mission', href: '#vision-mission' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Faculties', href: '#faculties' },
  { label: 'Our Campus', href: '#rooms' },
  { label: 'Enroll Now', href: '#enroll-now' },
  { label: 'Ministry Partner', href: '#donation' },
  { label: 'Contact Us', href: '#contact' },
]

export const reports: Report[] = [
  {
    title: 'July 2026 MAABCI President\'s Report',
    href: publicAsset('July-2026-MAABC-Presidents-Report.pdf'),
  },
  {
    title: 'April 2026 MAABCI President\'s Report',
    href: publicAsset('April-2026-MAABC-Presidents-Report.pdf'),
  },

]

export const heroContent = {
  headline: 'Equipping Christ-like Servant Leaders for God’s Glory',
  subheadline:
    'Welcome to Mt. Apo Alliance Bible College, Inc. We provide holistic, faith-filled education to equip faithful leaders who will transform local and global communities.',
}

export const welcomeContent = {
  title: 'Welcome to MAABCI',
  text: 'At Mt. Apo Alliance Bible College, Inc., our mission is centered on scripture, spiritual growth, and practical ministry preparation. Grounded in our biblical foundation "Our sufficiency is of God" (2 Corinthians 3:5), we are dedicated to mentoring students into grounded, Christ-like leaders ready to answer God\'s call. Whether you are preparing for pastoral ministry, church leadership, or community outreach, MAABCI provides the training, community, and guidance you need for your journey.',
}

export const academicPrograms = {
  eyebrow: 'Equipping for the Harvest',
  title: 'Academic Pathways Designed for Field-Ready Leadership',
  degreeProgramsTitle: 'Our Degree Programs (5-Year Programs)',
  degreePrograms: [
    'Bachelor of Theology in Pastoral Studies (for Men)',
    'Bachelor of Theology in Christian Education (for Women)',
    'Bachelor of Theology in Youth Ministry (for Men and Women)',
  ],
  certificateProgramsTitle: 'Our Certificate Programs (1 to 2-Year Programs)',
  certificatePrograms: [
    'Certificate of Ministry in Pastoral Leadership',
    'Certificate of Ministry in Christian Counseling',
    'Certificate of Ministry in Church Music',
    'Certificate of Ministry in Community Development',
  ],
  tuitionTitle: 'Invest in Your Ministry Calling',
  tuitionText: 'We strive to keep quality, faith-based education accessible so you can focus on your calling.',
  tuitionRate: '₱240.00 per unit',
  estimatedCost: '₱15,500 per semester (Includes miscellaneous fees; final total varies depending on enrolled units)',
}

export const campusHighlights: CardItem[] = [
  {
    title: 'President’s Office & Administrative Hubs',
    text: 'Centralized guidance and student services.',
  },
  {
    title: 'Chapel (Church)',
    text: 'The spiritual center of our campus for daily prayer and worship gatherings.',
  },
  {
    title: 'Classrooms & Gymnasium',
    text: 'Dedicated environments for learning, sports, and community events.',
  },
  {
    title: 'On-Campus Housing',
    text: 'Dormitories for men and women, along with faculty and couples\' cottages.',
  },
]

export const finalCta = {
  title: 'Take the Next Step in Your Faith Journey',
  text: 'Your calling matters, and you don\'t have to navigate it alone. Join a community of believers dedicated to scripture, prayerfulness, and humble service. Whether you are ready to begin your enrollment or simply have questions about our programs, our team is here to walk alongside you.',
}

export const aboutText =
  'Mt. Apo Alliance Bible College, Inc. (MAABCI) is a Christ-centered educational institution located in New Bulatukan, Makilala, North Cotabato. Founded in 1959, MAABCI is dedicated to equipping students with strong spiritual foundations, academic growth, and practical leadership skills.'

export const vision =
  'MAABCI is a Christ-centered institution where local and global communities will benefit from her equipping of holistic and Christ-like servant leaders for the glory of God.'

export const mission =
  'MAABCI exists to equip potential leaders to become holistic and Christ-like servant leaders who will lead in transforming local and global communities for the glory of God.'

export const values: CardItem[] = [
  {
    title: 'P - Prayerfulness',
    text: 'We depend completely on God through prayer in everything we do.',
  },
  {
    title: 'R - Relationship',
    text: 'We build loving, respectful, and healthy connections with each other and our community.',
  },
  {
    title: 'A - Accountability',
    text: 'We are responsible to God and to one another for our actions and decisions.',
  },
  {
    title: 'I - Integrity',
    text: 'We live with honesty, strong moral principles, and Christ-like character.',
  },
  {
    title: 'S - Submission',
    text: 'We humbly yield to God’s word, will, and authority.',
  },
  {
    title: 'E - Excellence',
    text: 'We bring our best effort in academic, spiritual, and daily life to glorify God.',
  },
]

export const rooms: Room[] = [
  {
    name: 'President’s Office',
    purpose: 'The administrative office for school leadership and executive decisions.',
  },
  {
    name: 'Department of Academic Affairs Office',
    purpose: 'Handles academic programs, curriculum, and student scholastic records.',
  },
  {
    name: 'Department of Student Affairs Office',
    purpose: 'Manages student activities, guidance, and student life.',
  },
  {
    name: 'General Management Services Office',
    purpose: 'Handles campus operations, financial management, and daily administrative services.',
  },
  {
    name: 'Chapel',
    purpose: 'The spiritual center of our campus used for worship services, prayer gatherings, and fellowship.',
  },
  {
    name: 'Classrooms',
    purpose: 'Dedicated spaces for daily instruction, group learning, and academic focus.',
  },
  {
    name: 'Gymnasium',
    purpose: 'A multi-purpose venue for sports, school gatherings, and events.',
  },
  {
    name: 'Canteen',
    purpose: 'Campus dining area providing meals and refreshments for students and staff.',
  },
  {
    name: 'Men’s Dormitory',
    purpose: 'On-campus housing for male students.',
  },
  {
    name: 'Ladies’ Dormitory',
    purpose: 'On-campus housing for female students.',
  },
  {
    name: 'Faculty Cottages',
    purpose: 'On-campus living quarters for faculty members and teachers.',
  },
  {
    name: 'Couples’ Cottages',
    purpose: 'Residential accommodations for married students and staff families.',
  },
]

export const admissionRequirements = {
  newStudents: [
    'Report Card / Transcript of Records',
    'Honorable Dismissal',
    '1-page Type-written Personal Testimony in English',
    'Recommendation Letter from the Applicant\'s Pastor (If there is no Church Pastor, an Elder may do)',
    'Photocopy of PSA Birth Certificate',
    'Photocopy of Baptismal Certificate',
    'Photocopy of Medical Certificate',
    'Photocopy of Marriage Certificate (for married applicants)',
    '2 copies of recent 1x1 ID Picture',
    'Member\'s Data Record (PhilHealth)',
  ],
  transferees: [
    'Honorable Dismissal / Certificate of Good Moral Character',
    'Transcript of Records',
    'Certificate of Subjects Taken',
    'Recommendation Letter from the Church Pastor',
    'Photocopy of PSA Birth Certificate',
    'Photocopy of Medical Certificate',
    'Photocopy of PSA Marriage Certificate (for married applicants)',
    '2 copies of recent 1x1 ID Picture',
    'Member\'s Data Record (PhilHealth)',
  ],
}

export const donationFunds: CardItem[] = [
  {
    title: 'Student Support',
    text: 'Helps cover scholarships, learning materials, and ministry training supplies for deserving students.',
  },
  {
    title: 'Facility Care',
    text: 'Helps maintain safe, clean, and functioning classrooms, dormitories, and chapel spaces.',
  },
  {
    title: 'Programs & Service',
    text: 'Funds youth ministries, community outreach projects, and special spiritual events.',
  },
]

export const contactDetails = {
  location: 'New Bulatukan, Makilala, North Cotabato, Philippines',
  email: 'maabc59@email.com',
  hours: 'Monday – Friday (8:00 AM – 5:00 PM)',
  bank: 'PNB - 405810012854',
}

export const socialLinks = [
  {
    label: 'Official Facebook Page: Mt. Apo Alliance Bible College, Inc.',
    href: 'https://www.facebook.com/MAABCofficialpage',
  },
  {
    label: 'Community Facebook Profile: Apo Speaks',
    href: 'https://www.facebook.com/profile.php?id=61581687428798',
  },
]
