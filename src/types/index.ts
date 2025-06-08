export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  status: 'upcoming' | 'ongoing' | 'past';
  category: string;
  maxAttendees: number;
  currentAttendees: number;
  images: string[];
  registrationUrl?: string;
  tags: string[];
  speaker?: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface Reminder {
  eventId: string;
  type: 'email' | 'browser';
  time: string;
}