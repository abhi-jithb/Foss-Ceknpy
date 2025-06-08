import React, { useState } from 'react';
import { Search, Filter, Calendar, Clock, MapPin, Users } from 'lucide-react';
import EventCard from '../components/EventCard';
import { events } from '../data/events';
import { Event } from '../types';

const Events: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const categories = ['all', ...Array.from(new Set(events.map(event => event.category)))];
  const statuses = ['all', 'upcoming', 'ongoing', 'past'];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || event.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const upcomingEvents = filteredEvents.filter(event => event.status === 'upcoming');
  const ongoingEvents = filteredEvents.filter(event => event.status === 'ongoing');
  const pastEvents = filteredEvents.filter(event => event.status === 'past');

  const handleSetReminder = (eventId: string) => {
    // In a real app, this would integrate with a notification system
    alert(`Reminder set for event ${eventId}! You'll be notified before the event starts.`);
  };

  const handleRegister = (eventId: string) => {
    // In a real app, this would handle actual registration
    alert(`Registration initiated for event ${eventId}! Redirecting to registration form...`);
  };

  const EventSection: React.FC<{ title: string; events: Event[]; description?: string }> = ({ title, events, description }) => {
    if (events.length === 0) return null;

    return (
      <div className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          {description && <p className="text-gray-600">{description}</p>}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(event => (
            <EventCard
              key={event.id}
              event={event}
              onSetReminder={handleSetReminder}
              onRegister={handleRegister}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-foss-ivory via-white to-foss-ivory py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Community <span className="text-foss-green">Events</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join our workshops, talks, hackathons, and community gatherings. Learn, network, 
              and contribute to the open source ecosystem.
            </p>
          </div>

          {/* Event Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Total Events', value: events.length.toString(), icon: Calendar },
              { label: 'Upcoming', value: upcomingEvents.length.toString(), icon: Clock },
              { label: 'Active Participants', value: '50+', icon: Users },
              { label: 'Locations', value: '5+', icon: MapPin },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-foss-green/10 rounded-2xl mb-4 group-hover:bg-foss-green group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-7 h-7 text-foss-green group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search events, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-foss-green focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-foss-green focus:border-transparent transition-all duration-200 bg-white min-w-[200px]"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-foss-green focus:border-transparent transition-all duration-200 bg-white min-w-[180px]"
              >
                {statuses.map(status => (
                  <option key={status} value={status}>
                    {status === 'all' ? 'All Events' : status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Events Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <>
              <EventSection
                title="Ongoing Events"
                events={ongoingEvents}
                description="Events currently happening - join us now!"
              />
              
              <EventSection
                title="Upcoming Events"
                events={upcomingEvents}
                description="Mark your calendar and register for these exciting upcoming events."
              />
              
              <EventSection
                title="Past Events"
                events={pastEvents}
                description="Check out our previous events and see what you missed."
              />
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;