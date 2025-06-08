import { Event } from '../types';
import day1 from '../assets/events/day1.jpeg'
import day2 from '../assets/events/day2.jpeg'
import day3 from '../assets/events/day3.jpeg'
import day4 from '../assets/events/day4.jpeg'
import day5 from '../assets/events/day5.jpeg'
import day6 from '../assets/events/day6.jpeg'
// If you have more images, import them as needed

export const events: Event[] = [
  {
    id: '1',
    title: 'Boost Your Career with FOSS',
    description: 'Discover how Free and Open Source Software (FOSS) can accelerate your career growth, enhance your skills, and expand your professional opportunities through real-world contributions and networking.',
    date: '2025-06-05',
    time: '7:00 pm',
    location: 'Google Meet',
    status: 'past',
    category: 'Workshop',
    maxAttendees: 100,
    currentAttendees: 45,
    images: [day1],
    registrationUrl: 'https://lu.ma/ykt85xcr',
    tags: ['FOSS', 'Career', 'Professional Development'],
    speaker: 'Riya P Mathew',
    level: 'beginner'
  },
  {
    id: '2',
    title: 'JavaScript: Creating Web Magic',
    description: 'Explore the power of JavaScript in modern web development, from dynamic interfaces to interactive experiences, and learn how open source libraries can help you innovate online.',
    date: '2025-06-06',
    time: '10:00',
    location: 'Google Meet',
    status: 'past',
    category: 'Workshop',
    maxAttendees: 30,
    currentAttendees: 28,
    images: [day2],
    registrationUrl: 'https://lu.ma/ykt85xcr',
    tags: ['JavaScript', 'Web Development', 'Frontend'],
    speaker: 'Misthah KP',
    level: 'beginner'
  },
  {
    id: '3',
    title: 'GitStart: Version Control Essentials',
    description: 'A hands-on introduction to Git and GitHub, covering essential workflows, collaboration strategies, and how to contribute to open source projects effectively.',
    date: '2025-06-07',
    time: '7:00 pm',
    location: 'Google Meet',
    status: 'past',
    category: 'Workshop',
    maxAttendees: 25,
    currentAttendees: 18,
    images: [day3],
    registrationUrl: 'https://lu.ma/ykt85xcr',
    tags: ['Git', 'GitHub', 'Collaboration'],
    speaker: 'Abhimanyu R B',
    level: 'beginner'
  },
  {
    id: '4',
    title: 'Data Visualization in Open Source',
    description: 'Learn the fundamentals of data visualization using open source tools, and discover how to turn raw data into compelling, actionable insights.',
    date: '2025-06-08',
    time: '7:00 pm',
    location: 'Google Meet',
    status: 'ongoing',
    category: 'Workshop',
    maxAttendees: 200,
    currentAttendees: 186,
    images: [day4],
    registrationUrl: 'https://lu.ma/ykt85xcr',
    speaker: 'Alfia Hussian',
    tags: ['Data Visualization', 'Open Source', 'Analytics'],
    level: 'beginner'
  },
  {
    id: '5',
    title: 'Cybersecurity and Open Source',
    description: 'Understand the intersection of cybersecurity and open source—explore best practices, tools, and how community-driven solutions help secure today’s digital world.',
    date: '2025-06-09',
    time: '7:00 pm',
    location: 'Google Meet',
    status: 'upcoming',
    category: 'Workshop',
    maxAttendees: 50,
    currentAttendees: 42,
    images: [day5],
    registrationUrl: 'https://lu.ma/ykt85xcr',
    tags: ['Cybersecurity', 'Open Source', 'Security'],
    speaker: 'Aron Anil P',
    level: 'intermediate'
  },
  {
    id: '6',
    title: 'Docker: Streamlining Development with Containers',
    description: 'Get started with Docker and containerization, learn how open source container tools are transforming software development, and simplify your deployment workflows.',
    date: '2025-06-10',
    time: '7:00 pm',
    location: 'Google Meet',
    status: 'upcoming',
    category: 'Workshop',
    maxAttendees: 40,
    currentAttendees: 35,
    images: [day6],
    registrationUrl: 'https://lu.ma/ykt85xcr',
    tags: ['Docker', 'Containers', 'DevOps'],
    speaker: 'Abhijith B',
    level: 'beginner'
  },
  {
    id: '7',
    title: 'FOSS Applications in the Real World',
    description: 'Explore real-world case studies of FOSS adoption across industries, and see how open source solutions are driving innovation and solving practical problems.',
    date: '2025-06-11',
    time: '7:00 pm',
    location: 'Google Meet',
    status: 'upcoming',
    category: 'Seminar',
    maxAttendees: 60,
    currentAttendees: 54,
    images: [], // Add day7 if you have it, e.g., [day7]
    registrationUrl: 'https://lu.ma/ykt85xcr',
    tags: ['FOSS', 'Industry', 'Case Studies'],
    speaker: 'Priya Nair',
    level: 'intermediate'
  },
  {
    id: '8',
    title: 'Building Without Code: Low-Code Tools & Career Paths in Open Source',
    description: 'Discover how low-code and no-code platforms are making open source accessible to everyone, and learn how to build powerful applications and launch new career paths without deep coding expertise.',
    date: '2025-06-12',
    time: '7:00 pm',
    location: 'Google Meet',
    status: 'upcoming',
    category: 'Workshop',
    maxAttendees: 80,
    currentAttendees: 63,
    images: [], // Add day8 if you have it, e.g., [day8]
    registrationUrl: 'https://lu.ma/ykt85xcr',
    tags: ['Low-Code', 'No-Code', 'Career'],
    speaker: '...',
    level: 'beginner'
  }
];
