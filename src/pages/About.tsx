import React from 'react';
import { Users, Target, Heart, Code, Globe, Lightbulb, Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Code,
      title: 'Open Innovation',
      description: 'We believe in the power of open source to drive innovation and create better solutions for everyone.'
    },
    {
      icon: Users,
      title: 'Inclusive Community',
      description: 'Our community welcomes developers of all skill levels, backgrounds, and experiences.'
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'We foster an environment where knowledge sharing and skill development are at the core.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Contributing to projects that make a difference in communities around the world.'
    }
  ];

  const team = [
    {
      name: 'Abhijith H',
      role: 'Community Lead',
      image: '../assets/Abhijith_H.jpg',
      bio: 'Full-stack developer with 8+ years of experience in open source projects.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Technical Director',
      image: 'https://drive.google.com/file/d/1HmeS6QkAGUzAXPyEVpSAQ49BRlBEgxTU/view?usp=drive_link',
      bio: 'DevOps engineer passionate about Linux systems and container technologies.'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Education Coordinator',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
      bio: 'Computer science professor dedicated to making technology education accessible.'
    },
    {
      name: 'James Wilson',
      role: 'Legal Advisor',
      image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg',
      bio: 'Legal expert specializing in open source licensing and intellectual property.'
    }
  ];

  const milestones = [
    { year: '2020', event: 'FOSS CLUB Founded', description: 'Started as a small group of 10 passionate developers' },
    { year: '2021', event: 'First Hackathon', description: '50+ participants, 15 innovative projects created' },
    { year: '2022', event: '100 Members Milestone', description: 'Reached our first major membership goal' },
    { year: '2023', event: 'Major Open Source Contribution', description: 'Our community contributed to 50+ major OSS projects' },
    { year: '2024', event: '500+ Active Members', description: 'Became one of the largest FOSS communities in the region' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-foss-ivory via-white to-foss-ivory py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-foss-green">FOSS CLUB</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're a vibrant community of open source enthusiasts, developers, and innovators united by our 
              passion for collaborative technology development and knowledge sharing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-foss-green rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To foster a thriving ecosystem where open source technology drives innovation, 
                    education, and positive social impact.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-foss-yellow rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-gray-900" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A world where technology is accessible, collaborative, and serves the greater good 
                    through open source principles.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Values</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Collaboration, transparency, inclusivity, and continuous learning form the 
                    foundation of everything we do.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                alt="FOSS Community"
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-foss-green/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our core values guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-foss-green/10 rounded-2xl mb-6 group-hover:bg-foss-green group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-foss-green group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-foss-green transition-colors duration-200">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-foss-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The passionate individuals who drive our community forward and make everything possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-foss-green transition-colors duration-200">
                    {member.name}
                  </h3>
                  <p className="text-foss-green font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From humble beginnings to a thriving community - here's how we've grown together.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-foss-green/20"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-foss-green rounded-full flex items-center justify-center mr-3">
                          <Award className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-medium text-foss-green">{milestone.year}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-foss-green rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;