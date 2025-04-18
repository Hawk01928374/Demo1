
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { VideoIcon, Users, User, Settings, Menu, X, Home } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="border-b fixed top-0 left-0 right-0 bg-white z-50">
      <div className="container max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-chat-primary to-chat-secondary p-2 rounded-full">
            <VideoIcon className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl text-chat-dark">ChatterBox</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-1">
          <Link to="/">
            <Button variant={location.pathname === '/' ? 'default' : 'ghost'}>
              Home
            </Button>
          </Link>
          <Link to="/video-chat">
            <Button variant={location.pathname === '/video-chat' ? 'default' : 'ghost'}>
              <VideoIcon className="h-4 w-4 mr-2" /> Video Chat
            </Button>
          </Link>
          <Link to="/lounge">
            <Button variant={location.pathname === '/lounge' ? 'default' : 'ghost'}>
              <Users className="h-4 w-4 mr-2" /> Lounge
            </Button>
          </Link>
          <Link to="/profile">
            <Button variant={location.pathname === '/profile' ? 'default' : 'ghost'}>
              <User className="h-4 w-4 mr-2" /> Profile
            </Button>
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <Link to="/settings">
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <Link to="/video-chat">
              <Button className="bg-gradient-to-r from-chat-primary to-chat-secondary hover:opacity-90">
                Start Chatting
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="py-6">
                  <div className="flex items-center justify-start mb-8">
                    <div className="bg-gradient-to-r from-chat-primary to-chat-secondary p-2 rounded-full mr-2">
                      <VideoIcon className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-bold text-xl">ChatterBox</span>
                  </div>
                  
                  <nav className="flex flex-col space-y-4">
                    <Link 
                      to="/" 
                      className={`flex items-center px-4 py-3 rounded-md ${
                        location.pathname === '/' 
                          ? 'bg-chat-primary/10 text-chat-primary' 
                          : 'hover:bg-gray-100'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Home className="h-5 w-5 mr-3" />
                      Home
                    </Link>
                    
                    <Link 
                      to="/video-chat" 
                      className={`flex items-center px-4 py-3 rounded-md ${
                        location.pathname === '/video-chat' 
                          ? 'bg-chat-primary/10 text-chat-primary' 
                          : 'hover:bg-gray-100'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <VideoIcon className="h-5 w-5 mr-3" />
                      Video Chat
                    </Link>
                    
                    <Link 
                      to="/lounge" 
                      className={`flex items-center px-4 py-3 rounded-md ${
                        location.pathname === '/lounge' 
                          ? 'bg-chat-primary/10 text-chat-primary' 
                          : 'hover:bg-gray-100'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Users className="h-5 w-5 mr-3" />
                      Lounge
                    </Link>
                    
                    <Link 
                      to="/profile" 
                      className={`flex items-center px-4 py-3 rounded-md ${
                        location.pathname === '/profile' 
                          ? 'bg-chat-primary/10 text-chat-primary' 
                          : 'hover:bg-gray-100'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <User className="h-5 w-5 mr-3" />
                      Profile
                    </Link>
                    
                    <Link 
                      to="/settings" 
                      className={`flex items-center px-4 py-3 rounded-md ${
                        location.pathname === '/settings' 
                          ? 'bg-chat-primary/10 text-chat-primary' 
                          : 'hover:bg-gray-100'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Settings className="h-5 w-5 mr-3" />
                      Settings
                    </Link>
                  </nav>
                  
                  <div className="mt-8 px-4">
                    <Link to="/video-chat" onClick={() => setIsMenuOpen(false)}>
                      <Button className="w-full bg-gradient-to-r from-chat-primary to-chat-secondary hover:opacity-90">
                        Start Chatting
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
