
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, Globe, Video, MessageSquare, Heart, Filter, 
  Award, Flag, User, MapPin, Languages
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';

// Sample user profiles data
const SAMPLE_PROFILES = [
  {
    id: 1,
    name: 'Emma',
    age: 28,
    location: 'Paris, France',
    languages: ['French', 'English'],
    interests: ['Photography', 'Travel', 'Art'],
    about: 'Art historian and photography enthusiast looking to practice English and meet creative people from around the world.',
    avatar: null,
    online: true,
    verified: true,
  },
  {
    id: 2,
    name: 'Miguel',
    age: 24,
    location: 'Madrid, Spain',
    languages: ['Spanish', 'English', 'Portuguese'],
    interests: ['Music', 'Cooking', 'Languages'],
    about: 'Music producer who loves to cook. Looking to improve my English and share recipes from Spanish cuisine!',
    avatar: null,
    online: true,
    verified: true,
  },
  {
    id: 3,
    name: 'Akiko',
    age: 31,
    location: 'Tokyo, Japan',
    languages: ['Japanese', 'English'],
    interests: ['Technology', 'Gaming', 'Anime'],
    about: 'Software developer and gaming enthusiast. Would love to chat about the latest tech trends and Japanese culture.',
    avatar: null,
    online: false,
    verified: true,
  },
  {
    id: 4,
    name: 'Carlos',
    age: 26,
    location: 'São Paulo, Brazil',
    languages: ['Portuguese', 'English', 'Spanish'],
    interests: ['Football', 'Dance', 'Beach'],
    about: 'Football player and beach lover. Want to share Brazilian culture and learn about yours!',
    avatar: null,
    online: true,
    verified: false,
  },
  {
    id: 5,
    name: 'Priya',
    age: 29,
    location: 'Mumbai, India',
    languages: ['Hindi', 'English', 'Marathi'],
    interests: ['Yoga', 'Cooking', 'Reading'],
    about: 'Yoga instructor and culinary enthusiast. Love discussing books and sharing recipes from different cultures.',
    avatar: null,
    online: false,
    verified: true,
  },
  {
    id: 6,
    name: 'David',
    age: 32,
    location: 'Sydney, Australia',
    languages: ['English'],
    interests: ['Surfing', 'Travel', 'Photography'],
    about: 'Avid surfer and world traveler. Always looking to meet people with interesting stories and perspectives.',
    avatar: null,
    online: true,
    verified: true,
  },
];

const ProfileCard = ({ profile }: { profile: typeof SAMPLE_PROFILES[0] }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-32 bg-gradient-to-r from-chat-primary to-chat-secondary flex items-center justify-center">
        {profile.avatar ? (
          <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
        ) : (
          <User className="h-12 w-12 text-white" />
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <h3 className="font-semibold text-lg">{profile.name}, {profile.age}</h3>
            {profile.verified && (
              <div className="flex items-center ml-1" title="Verified Profile">
                <Award className="h-4 w-4 text-chat-primary" />
              </div>
            )}
          </div>
          <div className={`text-xs px-2 py-0.5 rounded-full ${profile.online ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
            {profile.online ? 'Online' : 'Offline'}
          </div>
        </div>
        
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin className="h-3 w-3 mr-1" />
          {profile.location}
        </div>
        
        <div className="mb-3">
          <div className="flex items-center text-sm text-gray-600 mb-1">
            <Languages className="h-3 w-3 mr-1" />
            <span className="font-medium">Languages:</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {profile.languages.map((lang, index) => (
              <span key={index} className="text-xs bg-chat-light px-2 py-0.5 rounded-full text-chat-secondary">
                {lang}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-3 text-sm">
          <div className="line-clamp-2 text-gray-600">
            {profile.about}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {profile.interests.map((interest, index) => (
            <span key={index} className="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">
              {interest}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <Button variant="outline" size="sm" className="rounded-full">
            <Heart className="h-4 w-4 mr-1" />
            Like
          </Button>
          
          <Link to="/video-chat">
            <Button size="sm" className="rounded-full bg-chat-primary hover:bg-chat-secondary text-white">
              <Video className="h-4 w-4 mr-1" />
              Video Chat
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Lounge = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [profiles, setProfiles] = useState(SAMPLE_PROFILES);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would filter profiles based on the search term
    console.log('Searching for:', searchTerm);
  };
  
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Global Lounge</h1>
            <p className="text-gray-600">Connect with interesting people from around the world</p>
          </div>
          
          <form onSubmit={handleSearch} className="flex w-full md:w-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by name, interests, location..."
                className="pl-10 pr-4 py-2 rounded-l-md border-r-0"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button type="submit" className="rounded-l-none bg-chat-primary hover:bg-chat-secondary">
              Search
            </Button>
          </form>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="md:w-1/4 bg-white p-4 rounded-xl shadow-sm border border-gray-200">
            <h2 className="font-semibold text-lg mb-4 flex items-center">
              <Filter className="h-4 w-4 mr-2" /> Filters
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Location</h3>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>Worldwide</option>
                  <option>Europe</option>
                  <option>North America</option>
                  <option>South America</option>
                  <option>Asia</option>
                  <option>Africa</option>
                  <option>Australia</option>
                </select>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Languages</h3>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                  <option>Any</option>
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                  <option>Chinese</option>
                  <option>Japanese</option>
                </select>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Status</h3>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="online-only" className="rounded text-chat-primary focus:ring-chat-primary" />
                  <label htmlFor="online-only" className="text-sm">Online Only</label>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Age Range</h3>
                <div className="flex items-center gap-2">
                  <input type="number" min="18" max="100" placeholder="Min" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
                  <span>to</span>
                  <input type="number" min="18" max="100" placeholder="Max" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Interests</h3>
                <Input type="text" placeholder="e.g. travel, music, food" className="w-full" />
              </div>
              
              <Button className="w-full bg-chat-primary hover:bg-chat-secondary">
                Apply Filters
              </Button>
            </div>
          </div>
          
          <div className="md:w-3/4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-lg">{profiles.length} People Online</h2>
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-2">Sort by:</span>
                <select className="border border-gray-300 rounded-md px-2 py-1 text-sm">
                  <option>Recently Active</option>
                  <option>Nearby</option>
                  <option>Similar Interests</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {profiles.map((profile) => (
                <ProfileCard key={profile.id} profile={profile} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Lounge;
