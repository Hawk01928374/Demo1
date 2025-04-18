
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { 
  Settings as SettingsIcon, 
  Volume2, 
  BellRing, 
  Monitor, 
  Moon, 
  SunMedium,
  Video, 
  Mic, 
  Speaker, 
  Globe, 
  Shield, 
  Phone,
  HelpCircle
} from 'lucide-react';
import Layout from '@/components/layout/Layout';

const Settings = () => {
  // Audio/Video settings
  const [videoQuality, setVideoQuality] = useState('high');
  const [microphoneGain, setMicrophoneGain] = useState([70]);
  const [speakerVolume, setSpeakerVolume] = useState([80]);
  const [videoDevice, setVideoDevice] = useState('default');
  const [audioInputDevice, setAudioInputDevice] = useState('default');
  const [audioOutputDevice, setAudioOutputDevice] = useState('default');
  
  // Notification settings
  const [notificationSettings, setNotificationSettings] = useState({
    newMatches: true,
    messageNotifications: true,
    emailNotifications: false,
  });
  
  // Appearance settings
  const [theme, setTheme] = useState('system');
  
  // Language settings
  const [appLanguage, setAppLanguage] = useState('english');
  const [translationEnabled, setTranslationEnabled] = useState(true);
  const [primaryLanguage, setPrimaryLanguage] = useState('english');
  
  // Privacy settings
  const [privacySettings, setPrivacySettings] = useState({
    shareOnlineStatus: true,
    allowLocationSharing: false,
    allowProfileIndexing: true,
  });
  
  const handleSaveSettings = () => {
    // In a real app, this would save the settings to a server
    console.log('Saving settings...');
    // Display a success message
  };
  
  return (
    <Layout>
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold flex items-center">
            <SettingsIcon className="h-7 w-7 mr-3 text-chat-primary" />
            Settings
          </h1>
          <Button
            onClick={handleSaveSettings}
            className="bg-chat-primary hover:bg-chat-secondary"
          >
            Save Changes
          </Button>
        </div>
        
        <div className="space-y-8">
          {/* Audio/Video Settings */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Video className="h-5 w-5 mr-2 text-chat-primary" /> 
              Audio & Video
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-3">Video Settings</h3>
                
                <div className="space-y-4">
                  <div>
                    <Label className="mb-1 block">Video Quality</Label>
                    <RadioGroup 
                      value={videoQuality} 
                      onValueChange={setVideoQuality}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="low" id="video-low" />
                        <Label htmlFor="video-low">Low (save bandwidth)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="medium" id="video-medium" />
                        <Label htmlFor="video-medium">Medium</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="high" id="video-high" />
                        <Label htmlFor="video-high">High (best quality)</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div>
                    <Label className="mb-1 block">Camera</Label>
                    <select 
                      className="w-full border border-gray-300 rounded-md px-3 py-2" 
                      value={videoDevice}
                      onChange={(e) => setVideoDevice(e.target.value)}
                    >
                      <option value="default">Default Camera</option>
                      <option value="camera1">Front Camera</option>
                      <option value="camera2">External Webcam</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Audio Settings</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <Label className="flex items-center">
                        <Mic className="h-4 w-4 mr-1" /> Microphone Input
                      </Label>
                      <span className="text-sm text-gray-500">{microphoneGain}%</span>
                    </div>
                    <Slider 
                      value={microphoneGain} 
                      onValueChange={setMicrophoneGain} 
                      max={100} 
                      step={1}
                    />
                    <select 
                      className="w-full border border-gray-300 rounded-md px-3 py-2 mt-2" 
                      value={audioInputDevice}
                      onChange={(e) => setAudioInputDevice(e.target.value)}
                    >
                      <option value="default">Default Microphone</option>
                      <option value="mic1">Headset Microphone</option>
                      <option value="mic2">External Microphone</option>
                    </select>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <Label className="flex items-center">
                        <Speaker className="h-4 w-4 mr-1" /> Speaker Volume
                      </Label>
                      <span className="text-sm text-gray-500">{speakerVolume}%</span>
                    </div>
                    <Slider 
                      value={speakerVolume} 
                      onValueChange={setSpeakerVolume} 
                      max={100} 
                      step={1}
                    />
                    <select 
                      className="w-full border border-gray-300 rounded-md px-3 py-2 mt-2" 
                      value={audioOutputDevice}
                      onChange={(e) => setAudioOutputDevice(e.target.value)}
                    >
                      <option value="default">Default Speakers</option>
                      <option value="speaker1">Headphones</option>
                      <option value="speaker2">External Speakers</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Button variant="outline" size="sm">
                Test Audio and Video
              </Button>
            </div>
          </div>
          
          {/* Notifications */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <BellRing className="h-5 w-5 mr-2 text-chat-primary" /> 
              Notifications
            </h2>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-medium">New Matches</Label>
                  <p className="text-sm text-gray-500">Get notified when someone wants to chat with you</p>
                </div>
                <Switch 
                  checked={notificationSettings.newMatches}
                  onCheckedChange={(checked) => setNotificationSettings({
                    ...notificationSettings,
                    newMatches: checked
                  })}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-medium">Message Notifications</Label>
                  <p className="text-sm text-gray-500">Get notified about new messages</p>
                </div>
                <Switch 
                  checked={notificationSettings.messageNotifications}
                  onCheckedChange={(checked) => setNotificationSettings({
                    ...notificationSettings,
                    messageNotifications: checked
                  })}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-medium">Email Notifications</Label>
                  <p className="text-sm text-gray-500">Receive updates via email</p>
                </div>
                <Switch 
                  checked={notificationSettings.emailNotifications}
                  onCheckedChange={(checked) => setNotificationSettings({
                    ...notificationSettings,
                    emailNotifications: checked
                  })}
                />
              </div>
            </div>
          </div>
          
          {/* Appearance */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Monitor className="h-5 w-5 mr-2 text-chat-primary" /> 
              Appearance
            </h2>
            
            <div>
              <Label className="mb-2 block">Theme</Label>
              <RadioGroup 
                value={theme} 
                onValueChange={setTheme}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="light" id="theme-light" />
                  <Label htmlFor="theme-light" className="flex items-center">
                    <SunMedium className="h-4 w-4 mr-2" /> Light Mode
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dark" id="theme-dark" />
                  <Label htmlFor="theme-dark" className="flex items-center">
                    <Moon className="h-4 w-4 mr-2" /> Dark Mode
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="system" id="theme-system" />
                  <Label htmlFor="theme-system" className="flex items-center">
                    <Monitor className="h-4 w-4 mr-2" /> System Default
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          
          {/* Language Settings */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Globe className="h-5 w-5 mr-2 text-chat-primary" /> 
              Language & Translation
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label className="mb-2 block">App Language</Label>
                <select 
                  className="w-full border border-gray-300 rounded-md px-3 py-2" 
                  value={appLanguage}
                  onChange={(e) => setAppLanguage(e.target.value)}
                >
                  <option value="english">English</option>
                  <option value="spanish">Español</option>
                  <option value="french">Français</option>
                  <option value="german">Deutsch</option>
                  <option value="chinese">中文</option>
                  <option value="japanese">日本語</option>
                </select>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Label className="font-medium">Real-time Translation</Label>
                    <p className="text-sm text-gray-500">Auto-translate during video chats</p>
                  </div>
                  <Switch 
                    checked={translationEnabled}
                    onCheckedChange={setTranslationEnabled}
                  />
                </div>
                
                {translationEnabled && (
                  <div>
                    <Label className="mb-2 block">Your Primary Language</Label>
                    <select 
                      className="w-full border border-gray-300 rounded-md px-3 py-2" 
                      value={primaryLanguage}
                      onChange={(e) => setPrimaryLanguage(e.target.value)}
                    >
                      <option value="english">English</option>
                      <option value="spanish">Español</option>
                      <option value="french">Français</option>
                      <option value="german">Deutsch</option>
                      <option value="chinese">中文</option>
                      <option value="japanese">日本語</option>
                    </select>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Privacy Settings */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-chat-primary" /> 
              Privacy & Safety
            </h2>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-medium">Show Online Status</Label>
                  <p className="text-sm text-gray-500">Let others see when you're online</p>
                </div>
                <Switch 
                  checked={privacySettings.shareOnlineStatus}
                  onCheckedChange={(checked) => setPrivacySettings({
                    ...privacySettings,
                    shareOnlineStatus: checked
                  })}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-medium">Location Sharing</Label>
                  <p className="text-sm text-gray-500">Allow sharing your city/country</p>
                </div>
                <Switch 
                  checked={privacySettings.allowLocationSharing}
                  onCheckedChange={(checked) => setPrivacySettings({
                    ...privacySettings,
                    allowLocationSharing: checked
                  })}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-medium">Public Profile</Label>
                  <p className="text-sm text-gray-500">Allow your profile to appear in the lounge</p>
                </div>
                <Switch 
                  checked={privacySettings.allowProfileIndexing}
                  onCheckedChange={(checked) => setPrivacySettings({
                    ...privacySettings,
                    allowProfileIndexing: checked
                  })}
                />
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Button variant="outline" size="sm" className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600">
                Clear Chat History
              </Button>
            </div>
          </div>
          
          {/* Help & Support */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <HelpCircle className="h-5 w-5 mr-2 text-chat-primary" /> 
              Help & Support
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Need Assistance?</h3>
                <p className="text-sm text-gray-600 mb-2">
                  If you're experiencing any issues or have questions, our support team is here to help.
                </p>
                <Button variant="outline" className="mr-2">
                  <HelpCircle className="h-4 w-4 mr-2" /> FAQ
                </Button>
                <Button variant="outline">
                  <Phone className="h-4 w-4 mr-2" /> Contact Support
                </Button>
              </div>
              
              <div className="text-sm text-gray-500">
                <p>App Version: 1.0.0</p>
                <p>© 2025 ChatterBox Global Lounge</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
