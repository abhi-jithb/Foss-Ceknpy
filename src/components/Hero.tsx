import React from 'react';
import { ArrowRight, Users, Code, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Active Members', value: '50+' },
    { icon: Code, label: 'Projects', value: '20+' },
    { icon: Heart, label: 'Contributors', value: '10+' },
  ];

  return (
    <div className="relative bg-gradient-to-br from-foss-ivory via-white to-foss-ivory min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23009B4D' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='7' r='1'/%3E%3Ccircle cx='7' cy='53' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Welcome to{' '}
                <span className="text-foss-green">FOSS CLUB</span>
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Join our vibrant community of open source enthusiasts, developers, and innovators. 
                Together, we're building the future of technology through collaboration and shared knowledge.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/events"
                className="inline-flex items-center px-8 py-4 bg-foss-green text-white font-semibold rounded-xl hover:bg-foss-green-dark transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Explore Events
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-foss-green text-foss-green font-semibold rounded-xl hover:bg-foss-green hover:text-white transition-all duration-200"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-foss-green/10 rounded-xl mb-3">
                    <stat.icon className="w-6 h-6 text-foss-green" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-fade-in">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                alt="FOSS Community"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-foss-green/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-xl animate-bounce-gentle">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-foss-yellow rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-gray-800" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Open Source</div>
                  <div className="text-sm text-gray-600">Community Driven</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl animate-bounce-gentle" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-foss-green rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">500+ Members</div>
                  <div className="text-sm text-gray-600">Growing Daily</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;