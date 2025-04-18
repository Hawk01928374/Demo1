
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { VideoIcon, Users, User, Settings, Home } from 'lucide-react';

const MobileNav = () => {
  const location = useLocation();
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden z-50">
      <div className="flex items-center justify-around p-2">
        <Link to="/" className="flex flex-col items-center px-3 py-2">
          <Home className={`h-5 w-5 ${location.pathname === '/' ? 'text-chat-primary' : 'text-gray-500'}`} />
          <span className={`text-xs mt-1 ${location.pathname === '/' ? 'text-chat-primary font-medium' : 'text-gray-500'}`}>
            Home
          </span>
        </Link>
        
        <Link to="/video-chat" className="flex flex-col items-center px-3 py-2">
          <VideoIcon className={`h-5 w-5 ${location.pathname === '/video-chat' ? 'text-chat-primary' : 'text-gray-500'}`} />
          <span className={`text-xs mt-1 ${location.pathname === '/video-chat' ? 'text-chat-primary font-medium' : 'text-gray-500'}`}>
            Video
          </span>
        </Link>
        
        <Link to="/lounge" className="flex flex-col items-center px-3 py-2">
          <Users className={`h-5 w-5 ${location.pathname === '/lounge' ? 'text-chat-primary' : 'text-gray-500'}`} />
          <span className={`text-xs mt-1 ${location.pathname === '/lounge' ? 'text-chat-primary font-medium' : 'text-gray-500'}`}>
            Lounge
          </span>
        </Link>
        
        <Link to="/profile" className="flex flex-col items-center px-3 py-2">
          <User className={`h-5 w-5 ${location.pathname === '/profile' ? 'text-chat-primary' : 'text-gray-500'}`} />
          <span className={`text-xs mt-1 ${location.pathname === '/profile' ? 'text-chat-primary font-medium' : 'text-gray-500'}`}>
            Profile
          </span>
        </Link>
        
        <Link to="/settings" className="flex flex-col items-center px-3 py-2">
          <Settings className={`h-5 w-5 ${location.pathname === '/settings' ? 'text-chat-primary' : 'text-gray-500'}`} />
          <span className={`text-xs mt-1 ${location.pathname === '/settings' ? 'text-chat-primary font-medium' : 'text-gray-500'}`}>
            Settings
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
