import React from 'react';
import { Calendar, Clock, MapPin, Users, Bell, ExternalLink, Tag } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
  onSetReminder?: (eventId: string) => void;
  onRegister?: (eventId: string) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onSetReminder, onRegister }) => {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'ongoing': return 'bg-green-100 text-green-800';
      case 'past': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const isEventFull = event.currentAttendees >= event.maxAttendees;
  const attendancePercentage = (event.currentAttendees / event.maxAttendees) * 100;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.images[0]}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(event.level)}`}>
            {event.level.charAt(0).toUpperCase() + event.level.slice(1)}
          </span>
        </div>
      </div>

      {/* Event Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-foss-green transition-colors duration-200">
            {event.title}
          </h3>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2 text-foss-green" />
            {formatDate(event.date)}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2 text-foss-green" />
            {event.time}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-foss-green" />
            {event.location}
          </div>
          {event.speaker && (
            <div className="flex items-center text-sm text-gray-600">
              <Users className="w-4 h-4 mr-2 text-foss-green" />
              Speaker: {event.speaker}
            </div>
          )}
        </div>

        {/* Attendance Progress */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Attendance</span>
            <span className="text-sm font-medium text-gray-900">
              {event.currentAttendees}/{event.maxAttendees}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                attendancePercentage >= 90 ? 'bg-red-500' : 
                attendancePercentage >= 70 ? 'bg-yellow-500' : 'bg-foss-green'
              }`}
              style={{ width: `${attendancePercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {event.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="inline-flex items-center px-2 py-1 bg-foss-ivory text-foss-green text-xs font-medium rounded-full">
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
          {event.tags.length > 3 && (
            <span className="text-xs text-gray-500">+{event.tags.length - 3} more</span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {event.status !== 'past' && (
            <>
              {event.registrationUrl && (
                <button
                  onClick={() => onRegister?.(event.id)}
                  disabled={isEventFull}
                  className={`flex-1 flex items-center justify-center px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                    isEventFull
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-foss-green text-white hover:bg-foss-green-dark hover:shadow-md'
                  }`}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {isEventFull ? 'Event Full' : 'Register'}
                </button>
              )}
              <button
                onClick={() => onSetReminder?.(event.id)}
                className="px-4 py-2 border border-foss-green text-foss-green rounded-lg font-medium text-sm hover:bg-foss-green hover:text-white transition-all duration-200"
              >
                <Bell className="w-4 h-4" />
              </button>
            </>
          )}
          {event.status === 'past' && (
            <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg font-medium text-sm cursor-default">
              Event Completed
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;