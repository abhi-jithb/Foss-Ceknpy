import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { Calendar, Users, Code, ArrowRight, Star, Github, Zap } from 'lucide-react';
import { events } from '../data/events';

const Home: React.FC = () => {
  const upcomingEvents = events.filter(event => event.status === 'upcoming').slice(0, 3);
  
  const features = [
    {
      icon: Code,
      title: 'Open Source Projects',
      description: 'Contribute to meaningful projects that impact developers worldwide.',
      color: 'bg-blue-500'
    },
    {
      icon: Users,
      title: 'Community Learning',
      description: 'Learn from experienced developers and share your knowledge.',
      color: 'bg-foss-green'
    },
    {
      icon: Zap,
      title: 'Skill Development',
      description: 'Build your technical skills through workshops and hands-on projects.',
      color: 'bg-foss-yellow'
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Join FOSS CLUB?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're more than just a community - we're a movement dedicated to making technology accessible, 
              collaborative, and beneficial for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-foss-green/20">
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${feature.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-foss-green transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-foss-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-600">
                Don't miss out on our latest workshops, talks, and community gatherings.
              </p>
            </div>
            <Link
              to="/events"
              className="hidden sm:inline-flex items-center px-6 py-3 bg-foss-green text-white font-semibold rounded-lg hover:bg-foss-green-dark transition-colors duration-200"
            >
              View All Events
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.images[0]}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {event.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-foss-green transition-colors duration-200">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-foss-green" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-foss-green" />
                      {event.currentAttendees}/{event.maxAttendees} attending
                    </div>
                  </div>
                  
                  <Link
                    to="/events"
                    className="inline-flex items-center text-foss-green font-medium hover:text-foss-green-dark transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link
              to="/events"
              className="inline-flex items-center px-6 py-3 bg-foss-green text-white font-semibold rounded-lg hover:bg-foss-green-dark transition-colors duration-200"
            >
              View All Events
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Growing Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join thousands of developers, students, and tech enthusiasts who are passionate about open source.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Community Members', value: '50+', icon: Users },
              { label: 'Open Source Projects', value: '10+', icon: Code },
              { label: 'GitHub Stars', value: '2.5K+', icon: Star },
              { label: 'Code Contributions', value: '100+', icon: Github },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-foss-green/10 rounded-2xl mb-4 group-hover:bg-foss-green group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-foss-green group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;