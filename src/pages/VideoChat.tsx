
import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { 
  VideoIcon, MicIcon, MicOffIcon, VideoOffIcon, 
  MessageSquare, VolumeX, Volume2, RefreshCw, XCircle
} from 'lucide-react';

const VideoChat = () => {
  const [micEnabled, setMicEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [subtitlesEnabled, setSubtitlesEnabled] = useState(true);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [partnerName, setPartnerName] = useState<string | null>(null);

  // Simulated connection function
  const connectToRandomUser = () => {
    setIsLoading(true);
    
    // Simulate connection delay
    setTimeout(() => {
      setIsConnected(true);
      setIsLoading(false);
      setPartnerName('Alex from Spain');
    }, 2000);
  };

  // Simulated disconnect function
  const disconnect = () => {
    setIsConnected(false);
    setPartnerName(null);
  };

  return (
    <Layout>
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Video Chat</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left sidebar */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
              <h3 className="font-medium mb-3">Your Profile</h3>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-chat-primary flex items-center justify-center text-white font-bold">
                  U
                </div>
                <div>
                  <div className="font-medium">You</div>
                  <div className="text-sm text-green-600">Online</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Video</span>
                  <span className={videoEnabled ? "text-green-600" : "text-red-500"}>
                    {videoEnabled ? "On" : "Off"}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Microphone</span>
                  <span className={micEnabled ? "text-green-600" : "text-red-500"}>
                    {micEnabled ? "On" : "Off"}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Subtitles</span>
                  <span className={subtitlesEnabled ? "text-green-600" : "text-gray-500"}>
                    {subtitlesEnabled ? "Enabled" : "Disabled"}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
              <h3 className="font-medium mb-3">Preferences</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Language</span>
                  <span className="text-sm font-medium">English</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Region</span>
                  <span className="text-sm font-medium">Global</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Interests</span>
                  <span className="text-sm font-medium">All</span>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-2">
                  Edit Preferences
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
              <h3 className="font-medium mb-3">Safety Tools</h3>
              <div className="space-y-3">
                <Button variant="destructive" size="sm" className="w-full" disabled={!isConnected}>
                  <XCircle className="h-4 w-4 mr-2" /> End & Report
                </Button>
                <Button variant="outline" size="sm" className="w-full" disabled={!isConnected}>
                  Block User
                </Button>
                <p className="text-xs text-gray-500 mt-2">
                  Your safety is our priority. Use these tools if you experience any inappropriate behavior.
                </p>
              </div>
            </div>
          </div>
          
          {/* Main video area */}
          <div className="md:col-span-2 flex flex-col">
            <div className="bg-chat-dark rounded-xl overflow-hidden shadow-md aspect-video relative mb-4">
              {!isConnected ? (
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  {isLoading ? (
                    <div className="flex flex-col items-center">
                      <RefreshCw className="h-8 w-8 animate-spin mb-2" />
                      <p>Connecting to someone new...</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <p className="text-xl mb-4">Ready to meet someone new?</p>
                      <Button 
                        onClick={connectToRandomUser}
                        className="bg-chat-primary hover:bg-chat-secondary"
                      >
                        Start Random Chat
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  {/* This would be replaced with actual video streams in a real implementation */}
                  <div className="absolute inset-0 bg-gradient-to-b from-chat-dark/30 to-chat-dark/80 flex items-center justify-center">
                    <div className="text-white text-xl">Connected with {partnerName}</div>
                  </div>
                  
                  {/* User's video (small) */}
                  <div className="absolute bottom-4 right-4 w-1/4 aspect-video bg-chat-primary rounded-lg shadow-lg overflow-hidden border-2 border-white">
                    <div className="absolute inset-0 flex items-center justify-center text-white font-medium">
                      You
                    </div>
                  </div>
                  
                  {/* Subtitles area */}
                  {subtitlesEnabled && (
                    <div className="absolute bottom-4 left-4 right-4 bg-black/70 rounded p-2 text-white text-center mr-[28%]">
                      <p>I'm enjoying our conversation about travel experiences.</p>
                    </div>
                  )}
                </>
              )}
            </div>
            
            {/* Video controls */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 flex justify-between items-center">
              <div className="flex gap-2">
                <Button
                  variant={micEnabled ? "default" : "secondary"}
                  size="icon"
                  onClick={() => setMicEnabled(!micEnabled)}
                  className={micEnabled ? "bg-chat-primary hover:bg-chat-secondary" : ""}
                >
                  {micEnabled ? <MicIcon className="h-5 w-5" /> : <MicOffIcon className="h-5 w-5" />}
                </Button>
                
                <Button
                  variant={videoEnabled ? "default" : "secondary"}
                  size="icon"
                  onClick={() => setVideoEnabled(!videoEnabled)}
                  className={videoEnabled ? "bg-chat-primary hover:bg-chat-secondary" : ""}
                >
                  {videoEnabled ? <VideoIcon className="h-5 w-5" /> : <VideoOffIcon className="h-5 w-5" />}
                </Button>
                
                <Button
                  variant={subtitlesEnabled ? "default" : "secondary"}
                  size="icon"
                  onClick={() => setSubtitlesEnabled(!subtitlesEnabled)}
                  className={subtitlesEnabled ? "bg-chat-primary hover:bg-chat-secondary" : ""}
                >
                  {subtitlesEnabled ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M5 8l6 6" />
                      <path d="M4 14h7" />
                      <path d="M2 5h12" />
                      <path d="M7 2h1" />
                      <path d="M22 22l-5-10-5 10" />
                      <path d="M14 18h6" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <line x1="2" y1="2" x2="22" y2="22" />
                      <path d="M5 8l6 6" />
                      <path d="M4 14h7" />
                      <path d="M2 5h12" />
                      <path d="M7 2h1" />
                      <path d="M22 22l-5-10-5 10" />
                      <path d="M14 18h6" />
                    </svg>
                  )}
                </Button>
                
                <Button variant="outline" size="icon">
                  <MessageSquare className="h-5 w-5" />
                </Button>
                
                <Button variant="outline" size="icon">
                  {true ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
                </Button>
              </div>
              
              <div className="flex gap-2">
                {isConnected ? (
                  <>
                    <Button variant="outline" onClick={connectToRandomUser}>
                      <RefreshCw className="h-4 w-4 mr-2" /> Next Person
                    </Button>
                    <Button variant="destructive" onClick={disconnect}>
                      End Chat
                    </Button>
                  </>
                ) : (
                  <Button 
                    onClick={connectToRandomUser} 
                    className="bg-chat-primary hover:bg-chat-secondary"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Connecting...' : 'Start Random Chat'}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VideoChat;
