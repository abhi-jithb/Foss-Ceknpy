import React from 'react';
import { Code, Github, Twitter, Mail, Heart, Instagram, Contact } from 'lucide-react';
import { FaWhatsapp} from "react-icons/fa";
import { BiSolidHappyHeartEyes } from "react-icons/bi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-foss-green rounded-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">FOSS CLUB CEKnpy</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building a vibrant community of open source enthusiasts, developers, and innovators.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foss-yellow">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="/events" className="text-gray-400 hover:text-white transition-colors duration-200">Events</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold mb-4 text-foss-yellow">Community</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Join Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Contribute</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-foss-yellow">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/fossceknpy/" className="p-2 bg-gray-800 rounded-lg hover:bg-foss-green transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-foss-green transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://wa.me/7736977391" className="p-2 bg-gray-800 rounded-lg hover:bg-foss-green transition-colors duration-200">
                <FaWhatsapp className="w-5 h-6"/>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 FOSS CLUB CEKnpy. Open source community.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-2 sm:mt-0">
            Made with <BiSolidHappyHeartEyes className="w-4 h-4 text-green-500 mx-1" /> by <a href='https://linkedin.com/in/abhi-jithb'> Abhijith</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;