
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { 
  User, Camera, Edit2, Save, Globe, Languages, XCircle, 
  PlusCircle, Award, Eye, EyeOff, Shield, Bell, MessageSquare
} from 'lucide-react';

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Your Name',
    age: 25,
    location: 'New York, USA',
    languages: ['English'],
    interests: ['Travel', 'Photography', 'Music'],
    about: 'Share a bit about yourself here. What do you enjoy talking about? What are you looking to learn from others around the world?',
    profileVisibility: 'public',
    onlineStatus: true,
    safetyPreferences: {
      allowDirectMessages: true,
      showLocationCity: true,
      enableContentFiltering: true,
      enableNotifications: true,
    }
  });
  
  const [newLanguage, setNewLanguage] = useState('');
  const [newInterest, setNewInterest] = useState('');
  
  const handleAddLanguage = () => {
    if (newLanguage && !profileData.languages.includes(newLanguage)) {
      setProfileData({
        ...profileData,
        languages: [...profileData.languages, newLanguage]
      });
      setNewLanguage('');
    }
  };
  
  const handleRemoveLanguage = (language: string) => {
    setProfileData({
      ...profileData,
      languages: profileData.languages.filter(lang => lang !== language)
    });
  };
  
  const handleAddInterest = () => {
    if (newInterest && !profileData.interests.includes(newInterest)) {
      setProfileData({
        ...profileData,
        interests: [...profileData.interests, newInterest]
      });
      setNewInterest('');
    }
  };
  
  const handleRemoveInterest = (interest: string) => {
    setProfileData({
      ...profileData,
      interests: profileData.interests.filter(item => item !== interest)
    });
  };
  
  const handleSaveProfile = () => {
    // In a real app, this would send the updated profile data to a server
    console.log('Saving profile:', profileData);
    setEditMode(false);
  };
  
  return (
    <Layout>
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Your Profile</h1>
          <Button 
            variant={editMode ? "default" : "outline"}
            onClick={() => editMode ? handleSaveProfile() : setEditMode(true)}
            className={editMode ? "bg-chat-primary hover:bg-chat-secondary" : ""}
          >
            {editMode ? (
              <>
                <Save className="h-4 w-4 mr-2" /> Save Changes
              </>
            ) : (
              <>
                <Edit2 className="h-4 w-4 mr-2" /> Edit Profile
              </>
            )}
          </Button>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
          {/* Profile Header/Cover */}
          <div className="h-48 bg-gradient-to-r from-chat-primary to-chat-secondary relative">
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2">
              <div className="w-32 h-32 rounded-full border-4 border-white bg-white flex items-center justify-center overflow-hidden">
                <User className="h-16 w-16 text-chat-primary" />
                
                {editMode && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                    <Camera className="h-8 w-8 text-white" />
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Profile Content */}
          <div className="pt-20 px-6 pb-6">
            <div className="text-center mb-6">
              {editMode ? (
                <Input 
                  type="text" 
                  value={profileData.name} 
                  onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                  className="text-2xl font-bold text-center mb-1"
                />
              ) : (
                <h2 className="text-2xl font-bold mb-1">{profileData.name}, {profileData.age}</h2>
              )}
              
              <div className="flex items-center justify-center text-gray-600 mb-2">
                <Globe className="h-4 w-4 mr-1" />
                {editMode ? (
                  <Input 
                    type="text" 
                    value={profileData.location} 
                    onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                    className="w-auto text-sm"
                  />
                ) : (
                  profileData.location
                )}
              </div>
              
              <div className="flex justify-center gap-2">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                  Verified Account <Award className="h-3 w-3 inline ml-0.5" />
                </span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                  {profileData.profileVisibility === 'public' ? 'Public Profile' : 'Private Profile'}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-3">About Me</h3>
                {editMode ? (
                  <Textarea 
                    value={profileData.about} 
                    onChange={(e) => setProfileData({...profileData, about: e.target.value})}
                    className="h-32"
                    placeholder="Share a bit about yourself..."
                  />
                ) : (
                  <p className="text-gray-600">{profileData.about}</p>
                )}
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <Languages className="h-4 w-4 mr-2" /> Languages I Speak
                </h3>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {profileData.languages.map((language, index) => (
                      <div 
                        key={index} 
                        className="bg-chat-light text-chat-secondary rounded-full px-3 py-1 text-sm flex items-center"
                      >
                        {language}
                        {editMode && (
                          <button 
                            onClick={() => handleRemoveLanguage(language)}
                            className="ml-1 text-gray-500 hover:text-red-500"
                          >
                            <XCircle className="h-3.5 w-3.5" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {editMode && (
                    <div className="flex gap-2">
                      <Input 
                        type="text" 
                        placeholder="Add language" 
                        value={newLanguage}
                        onChange={(e) => setNewLanguage(e.target.value)}
                        className="flex-grow"
                      />
                      <Button 
                        onClick={handleAddLanguage} 
                        variant="outline" 
                        size="sm"
                      >
                        <PlusCircle className="h-4 w-4 mr-1" /> Add
                      </Button>
                    </div>
                  )}
                </div>
                
                <h3 className="font-semibold text-lg mb-3">Interests</h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  {profileData.interests.map((interest, index) => (
                    <div 
                      key={index} 
                      className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm flex items-center"
                    >
                      {interest}
                      {editMode && (
                        <button 
                          onClick={() => handleRemoveInterest(interest)}
                          className="ml-1 text-gray-500 hover:text-red-500"
                        >
                          <XCircle className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                
                {editMode && (
                  <div className="flex gap-2">
                    <Input 
                      type="text" 
                      placeholder="Add interest" 
                      value={newInterest}
                      onChange={(e) => setNewInterest(e.target.value)}
                      className="flex-grow"
                    />
                    <Button 
                      onClick={handleAddInterest} 
                      variant="outline" 
                      size="sm"
                    >
                      <PlusCircle className="h-4 w-4 mr-1" /> Add
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <Shield className="h-5 w-5 mr-2 text-chat-primary" /> Privacy & Safety
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-3">Profile Visibility</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Public Profile</span>
                  </div>
                  <Switch 
                    checked={profileData.profileVisibility === 'public'}
                    onCheckedChange={(checked) => setProfileData({
                      ...profileData, 
                      profileVisibility: checked ? 'public' : 'private'
                    })}
                    disabled={!editMode}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Show City Location</span>
                  </div>
                  <Switch 
                    checked={profileData.safetyPreferences.showLocationCity}
                    onCheckedChange={(checked) => setProfileData({
                      ...profileData, 
                      safetyPreferences: {
                        ...profileData.safetyPreferences,
                        showLocationCity: checked
                      }
                    })}
                    disabled={!editMode}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Bell className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Enable Notifications</span>
                  </div>
                  <Switch 
                    checked={profileData.safetyPreferences.enableNotifications}
                    onCheckedChange={(checked) => setProfileData({
                      ...profileData, 
                      safetyPreferences: {
                        ...profileData.safetyPreferences,
                        enableNotifications: checked
                      }
                    })}
                    disabled={!editMode}
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Safety Preferences</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Allow Direct Messages</span>
                  </div>
                  <Switch 
                    checked={profileData.safetyPreferences.allowDirectMessages}
                    onCheckedChange={(checked) => setProfileData({
                      ...profileData, 
                      safetyPreferences: {
                        ...profileData.safetyPreferences,
                        allowDirectMessages: checked
                      }
                    })}
                    disabled={!editMode}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <EyeOff className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Content Filtering</span>
                  </div>
                  <Switch 
                    checked={profileData.safetyPreferences.enableContentFiltering}
                    onCheckedChange={(checked) => setProfileData({
                      ...profileData, 
                      safetyPreferences: {
                        ...profileData.safetyPreferences,
                        enableContentFiltering: checked
                      }
                    })}
                    disabled={!editMode}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Show Online Status</span>
                  </div>
                  <Switch 
                    checked={profileData.onlineStatus}
                    onCheckedChange={(checked) => setProfileData({
                      ...profileData, 
                      onlineStatus: checked
                    })}
                    disabled={!editMode}
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="font-medium mb-3">Blocked Users</h3>
            <p className="text-gray-500 text-sm mb-2">You haven't blocked any users yet.</p>
            <Button variant="outline" size="sm" disabled>Manage Blocked Users</Button>
          </div>
        </div>
        
        <div className="flex justify-between">
          <Button variant="outline" className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600">
            Delete Account
          </Button>
          
          {editMode && (
            <Button 
              onClick={handleSaveProfile}
              className="bg-chat-primary hover:bg-chat-secondary"
            >
              <Save className="h-4 w-4 mr-2" /> Save Profile
            </Button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
