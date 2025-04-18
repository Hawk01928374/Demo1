
import { Link } from 'react-router-dom';
import { GlobeIcon, ShieldCheck, InfoIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-chat-dark text-white py-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <GlobeIcon className="h-5 w-5 mr-2" /> Global Connections
            </h3>
            <p className="text-gray-300">
              Connect with people from around the world in real-time video conversations.
              Share experiences, learn new languages, and make global friendships.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <ShieldCheck className="h-5 w-5 mr-2" /> Safety First
            </h3>
            <p className="text-gray-300">
              Your safety is our priority. We provide tools to report, block, and stay in control
              of your experience on ChatterBox.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <InfoIcon className="h-5 w-5 mr-2" /> Resources
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>
                <Link to="/about" className="hover:text-chat-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/guidelines" className="hover:text-chat-primary transition-colors">
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-chat-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-chat-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ChatterBox Global Lounge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
