
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { VideoIcon, Users, Globe, ShieldCheck } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const TranslateIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 8l6 6" />
    <path d="M4 14h7" />
    <path d="M2 5h12" />
    <path d="M7 2h1" />
    <path d="M22 22l-5-10-5 10" />
    <path d="M14 18h6" />
  </svg>
);

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-chat-primary to-chat-secondary text-white py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Connect With People Around The World
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Instant video conversations with new friends from every corner of the globe.
                Share stories, experiences, and create meaningful connections in real-time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/video-chat">
                  <Button size="lg" className="bg-white text-chat-secondary hover:bg-white/90">
                    <VideoIcon className="mr-2 h-5 w-5" /> Start Video Chat
                  </Button>
                </Link>
                <Link to="/lounge">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Users className="mr-2 h-5 w-5" /> Browse Lounge
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="relative">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="aspect-video bg-chat-dark rounded-t-lg flex items-center justify-center">
                    <div className="text-chat-primary text-2xl font-semibold">Video Preview</div>
                  </div>
                  <div className="p-4 flex items-center justify-between bg-white">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-chat-primary flex items-center justify-center text-white font-bold">
                        U
                      </div>
                      <div className="ml-3">
                        <div className="font-medium">You</div>
                        <div className="text-sm text-gray-500">Online</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="rounded-full">
                        <VideoIcon className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                          <line x1="12" y1="19" x2="12" y2="23"></line>
                          <line x1="8" y1="23" x2="16" y2="23"></line>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg rotate-6">
                  <div className="bg-chat-light p-2 rounded">
                    <div className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-chat-secondary" />
                      <span className="font-medium text-chat-dark">Global Conversations</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg -rotate-6">
                  <div className="bg-chat-light p-2 rounded">
                    <div className="flex items-center gap-2">
                      <TranslateIcon className="h-5 w-5 text-chat-secondary" />
                      <span className="font-medium text-chat-dark">Live Translation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Discover ChatterBox Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-chat-primary/10 flex items-center justify-center mb-4">
                <VideoIcon className="h-6 w-6 text-chat-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1:1 Video Chats</h3>
              <p className="text-gray-600">
                Connect face-to-face with people from around the world in high-quality video conversations.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-chat-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-chat-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Lounge</h3>
              <p className="text-gray-600">
                Browse profiles and connect with interesting people from diverse backgrounds and cultures.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-chat-primary/10 flex items-center justify-center mb-4">
                <TranslateIcon className="h-6 w-6 text-chat-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Live Translation</h3>
              <p className="text-gray-600">
                Break language barriers with real-time voice-to-subtitle translation during your conversations.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-chat-primary/10 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-chat-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cultural Exchange</h3>
              <p className="text-gray-600">
                Learn about different cultures, languages, and perspectives directly from locals around the world.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-chat-primary/10 flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-chat-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Safety Features</h3>
              <p className="text-gray-600">
                Enjoy peace of mind with our comprehensive safety tools including blocking and reporting capabilities.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-chat-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-chat-primary">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Profile Customization</h3>
              <p className="text-gray-600">
                Create your unique profile to showcase your interests, languages, and what you're looking to chat about.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-chat-light">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Connect Globally?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start meeting new people from around the world today. Create meaningful connections and expand your horizons.
          </p>
          <Link to="/video-chat">
            <Button size="lg" className="bg-gradient-to-r from-chat-primary to-chat-secondary hover:opacity-90 text-white">
              Start Video Chatting Now
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
