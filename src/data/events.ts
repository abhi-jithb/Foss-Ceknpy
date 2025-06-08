import { Event } from '../types';

export const events: Event[] = [
  {
    id: '1',
    title: 'Introduction to Open Source Development',
    description: 'Learn the fundamentals of contributing to open source projects, understanding Git workflows, and making your first pull request.',
    date: '2025-02-15',
    time: '14:00',
    location: 'Main Auditorium',
    status: 'upcoming',
    category: 'Workshop',
    maxAttendees: 100,
    currentAttendees: 45,
    images: [
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg'
    ],
    registrationUrl: '#',
    tags: ['Git', 'GitHub', 'Beginner'],
    speaker: 'Sarah Chen',
    level: 'beginner'
  },
  {
    id: '2',
    title: 'Linux System Administration Bootcamp',
    description: 'Comprehensive hands-on workshop covering Linux system administration, server management, and DevOps practices.',
    date: '2025-01-28',
    time: '10:00',
    location: 'Computer Lab 1',
    status: 'ongoing',
    category: 'Bootcamp',
    maxAttendees: 30,
    currentAttendees: 28,
    images: [
      'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg',
      'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg'
    ],
    registrationUrl: '#',
    tags: ['Linux', 'DevOps', 'System Admin'],
    speaker: 'Marcus Rodriguez',
    level: 'intermediate'
  },
  {
    id: '3',
    title: 'Contributing to Kubernetes',
    description: 'Advanced session on contributing to one of the most popular open source container orchestration platforms.',
    date: '2025-02-20',
    time: '16:00',
    location: 'Tech Hub',
    status: 'upcoming',
    category: 'Advanced Workshop',
    maxAttendees: 25,
    currentAttendees: 18,
    images: [
      'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg',
      'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg'
    ],
    registrationUrl: '#',
    tags: ['Kubernetes', 'Cloud', 'Containers'],
    speaker: 'Dr. Emily Watson',
    level: 'advanced'
  },
  {
    id: '4',
    title: 'FOSS CLUB Annual Hackathon 2024',
    description: '48-hour hackathon focused on building solutions for social good using open source technologies.',
    date: '2024-12-15',
    time: '09:00',
    location: 'Innovation Center',
    status: 'past',
    category: 'Hackathon',
    maxAttendees: 200,
    currentAttendees: 186,
    images: [
      'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
      'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg'
    ],
    tags: ['Hackathon', 'Social Good', 'Competition'],
    level: 'intermediate'
  },
  {
    id: '5',
    title: 'Open Source Licensing Workshop',
    description: 'Understanding different open source licenses, legal implications, and choosing the right license for your project.',
    date: '2024-11-20',
    time: '15:30',
    location: 'Conference Room A',
    status: 'past',
    category: 'Educational',
    maxAttendees: 50,
    currentAttendees: 42,
    images: [
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
    ],
    tags: ['Legal', 'Licensing', 'Documentation'],
    speaker: 'Prof. James Wilson',
    level: 'beginner'
  }
];