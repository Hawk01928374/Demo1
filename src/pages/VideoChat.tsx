// imports
import { useState, useEffect, useRef } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import {
  VideoIcon, MicIcon, MicOffIcon, VideoOffIcon,
  MessageSquare, VolumeX, Volume2, RefreshCw, XCircle
} from 'lucide-react';
import Peer from 'simple-peer';
import io from 'socket.io-client';

const socket = io('https://chitchat-backend-op5h.onrender.com'); // signaling server

const VideoChat = () => {
  const [micEnabled, setMicEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [subtitlesEnabled, setSubtitlesEnabled] = useState(true);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [partnerName, setPartnerName] = useState<string | null>(null);

  const localVideoRef = useRef<HTMLVideoElement | null>(null);
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null);
  const peerRef = useRef<Peer.Instance | null>(null);
  const localStream = useRef<MediaStream | null>(null);

  useEffect(() => {
    // Step 1: Get user media
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
      localStream.current = stream;
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
        localVideoRef.current.muted = true;
      }
    });

    // Step 2: Socket event listeners
    socket.on('other-user', handleReceiveCall);
    socket.on('user-joined', handleUserJoined);
    socket.on('signal', handleSignal);
    socket.on('return-signal', handleReturnSignal);

    return () => {
      socket.off('other-user');
      socket.off('user-joined');
      socket.off('signal');
      socket.off('return-signal');
    };
  }, []);

  // Step 3: Initiator connects
  const handleReceiveCall = (userId: string) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: localStream.current!,
    });

    peer.on('signal', signal => {
      socket.emit('signal', { signal, userToSignal: userId });
    });

    peer.on('stream', stream => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = stream;
      }
    });

    peer.on('close', () => cleanup());
    peer.on('error', () => cleanup());

    peerRef.current = peer;
    setIsConnected(true);
    setPartnerName('Stranger');
  };

  // Step 3: Receiver connects
  const handleUserJoined = ({ signal, callerId }: any) => {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: localStream.current!,
    });

    peer.on('signal', signal => {
      socket.emit('return-signal', { signal, callerId });
    });

    peer.on('stream', stream => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = stream;
      }
    });

    peer.on('close', () => cleanup());
    peer.on('error', () => cleanup());

    peer.signal(signal);
    peerRef.current = peer;
    setIsConnected(true);
    setPartnerName('Stranger');
  };

  const handleSignal = ({ signal }: any) => {
    peerRef.current?.signal(signal);
  };

  const handleReturnSignal = ({ signal }: any) => {
    peerRef.current?.signal(signal);
  };

  // Step 5: Connect
  const connectToRandomUser = () => {
    setIsLoading(true);
    setPartnerName(null);
    cleanup();

    setTimeout(() => {
      socket.emit('join-room');
      setIsLoading(false);
    }, 1000);
  };

  // Step 5: Disconnect
  const disconnect = () => {
    cleanup();
    setIsConnected(false);
    setPartnerName(null);
  };

  const cleanup = () => {
    if (peerRef.current) {
      peerRef.current.destroy();
      peerRef.current = null;
    }
    if (remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = null;
    }
  };

  return (
    <Layout>
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Video Chat</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar - leave unchanged */}

          {/* Video Area */}
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
                  <video
                    ref={remoteVideoRef}
                    autoPlay
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4 w-1/4 aspect-video bg-chat-primary rounded-lg shadow-lg overflow-hidden border-2 border-white">
                    <video
                      ref={localVideoRef}
                      autoPlay
                      playsInline
                      muted
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {subtitlesEnabled && (
                    <div className="absolute bottom-4 left-4 right-4 bg-black/70 rounded p-2 text-white text-center mr-[28%]">
                      <p>I'm enjoying our conversation about travel experiences.</p>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Controls - unchanged */}
            {/* ... your original control buttons here ... */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VideoChat;


