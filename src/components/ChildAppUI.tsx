// @ts-nocheck

import React, { useState } from 'react';
import { Bell, Settings, User, Home, TrendingUp, Users, Brain, ChevronRight,  Star, ArrowUp, ArrowDown, ArrowRight  } from 'lucide-react';

const ChildAppUI = () => {
  const [activeTab, setActiveTab] = useState('home');

  const Header = ({ title }) => (
    <div className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">{title}</h1>
      <Bell size={24} className="text-gray-500" />
    </div>
  );

  const TabBar = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2">
      <TabButton icon={<Home size={24} />} label="Home" tabName="home" />
      <TabButton icon={<TrendingUp size={24} />} label="Trends" tabName="trends" />
      <TabButton icon={<Users size={24} />} label="Family" tabName="family" />
      <TabButton icon={<Settings size={24} />} label="Settings" tabName="settings" />
    </div>
  );

const TabButton = ({ icon, label, tabName }) => (
  <button
    className={`flex flex-col items-center ${
      activeTab === tabName ? 'text-blue-600' : 'text-gray-600'
    } hover:text-blue-500 transition-colors`}
    onClick={() => setActiveTab(tabName)}
  >
    {React.cloneElement(icon, { size: 24, className: 'mb-1' })}
    <span className="text-xs">{label}</span>
  </button>
);

  const HomeScreen = () => (
    <div className="p-4 space-y-6">
      <div className="bg-blue-100 rounded-lg p-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Mom's Status</h2>
          <p className="text-sm text-gray-600">Last check-in: 2 hours ago</p>
        </div>
        <div className="text-2xl">😊</div>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Recent Check-ins</h3>
        <div className="flex justify-between">
          {['😊', '😊', '😐', '😊', '😊', '🙂', '😊'].map((emoji, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-2xl mb-1">{emoji}</div>
              <div className="text-xs text-gray-500">{index === 0 ? 'Today' : index === 1 ? 'Yesterday' : `${index} days ago`}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Today's Highlights</h3>
        <div className="bg-white rounded-lg shadow p-4 space-y-2">
          <div className="flex items-center">
            <span className="text-2xl mr-2">💊</span>
            <p>Medication taken on time</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 space-y-2">
          <div className="flex items-center">
            <span className="text-2xl mr-2">🚶‍♀️</span>
            <p>30-minute walk completed</p>
          </div>
        </div>
      </div>
    </div>
  );


const TrendsScreen = () => {
  const moodData = [
    { day: 'Mon', mood: 'happy' },
    { day: 'Tue', mood: 'happy' },
    { day: 'Wed', mood: 'okay' },
    { day: 'Thu', mood: 'sad' },
    { day: 'Fri', mood: 'happy' },
    { day: 'Sat', mood: 'okay' },
    { day: 'Sun', mood: 'happy' },
  ];

  const MoodEmoji = ({ mood }) => {
    switch (mood) {
      case 'happy': return '😊';
      case 'okay': return '😐';
      case 'sad': return '😢';
      default: return '😐';
    }
  };

  const activityData = [
    { name: 'Medicine', days: 6, icon: '💊', trend: 'up' },
    { name: 'Walking', days: 4, icon: '🚶‍♀️', trend: 'same' },
    { name: 'Reading', days: 5, icon: '📚', trend: 'down' },
  ];

  const TrendArrow = ({ trend }) => {
    switch (trend) {
      case 'up': return <ArrowUp className="text-emerald-600" size={24} />;
      case 'down': return <ArrowDown className="text-rose-600" size={24} />;
      case 'same': return <ArrowRight className="text-amber-600" size={24} />;
      default: return null;
    }
  };

  const getMoodTrend = () => {
    const happyCount = moodData.filter(day => day.mood === 'happy').length;
    if (happyCount >= 5) return 'up';
    if (happyCount <= 2) return 'down';
    return 'same';
  };

  const moodTrend = getMoodTrend();

  return (
    <div className="p-4 space-y-8 bg-gray-100">
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-800">Mom's Mood This Week</h3>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between mb-4">
            {moodData.map((day, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-3xl mb-2">
                  <MoodEmoji mood={day.mood} />
                </div>
                <div className="text-sm font-medium text-gray-600">{day.day}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center space-x-4 mt-4 bg-gray-100 p-3 rounded-lg">
            <TrendArrow trend={moodTrend} />
            <span className="text-lg font-semibold text-gray-700">
              {moodTrend === 'up' ? "Getting Happier!" : 
               moodTrend === 'down' ? "Feeling Down" : "Staying Steady"}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-800">Mom's Activities</h3>
        <div className="space-y-4">
          {activityData.map((activity, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <span className="text-2xl mr-2">{activity.icon}</span>
                  <span className="font-semibold text-lg text-gray-700">{activity.name}</span>
                </div>
                <span className="text-xl font-bold text-indigo-600">{activity.days}/7</span>
              </div>
              <div className="flex mt-2">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1/7 h-6 ${
                      i < activity.days ? 'bg-indigo-400' : 'bg-gray-200'
                    } ${i === 0 ? 'rounded-l-full' : ''} ${
                      i === 6 ? 'rounded-r-full' : ''
                    } ${i > 0 ? 'ml-1' : ''}`}
                  ></div>
                ))}
              </div>
              <div className="flex items-center mt-2 bg-gray-100 p-2 rounded-lg">
                <TrendArrow trend={activity.trend} />
                <span className="ml-2 font-medium text-sm text-gray-700">
                  {activity.trend === 'up' ? 'Doing more!' : 
                   activity.trend === 'down' ? 'Doing less' : 'Same as before'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-800">AI Helper Says:</h3>
        <div className="bg-amber-50 rounded-lg p-4 flex items-start border border-amber-100">
          <Star className="text-amber-500 mr-2 flex-shrink-0" size={24} />
          <p className="text-sm text-gray-700">
            Mom's mood is {moodTrend === 'up' ? 'getting better' : moodTrend === 'down' ? 'not as good' : 'staying the same'}.
            She's taking medicine more often, which is great!
            Let's encourage more walks to help her feel even better.
          </p>
        </div>
      </div>
    </div>
  );
};

  const FamilyScreen = () => (
    <div className="p-4 space-y-4">
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="font-semibold mb-4">Family Members</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <User size={24} className="mr-3 text-blue-500" />
              <span>Mom (Primary Care)</span>
            </div>
            <ChevronRight size={20} className="text-gray-500" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <User size={24} className="mr-3 text-green-500" />
              <span>John (Brother)</span>
            </div>
            <ChevronRight size={20} className="text-gray-500" />
          </div>
        </div>
      </div>
      <button className="w-full bg-blue-500 text-white py-3 rounded-lg mt-4">
        Add Family Member
      </button>
    </div>
  );

  const SettingsScreen = () => (
    <div className="p-4 space-y-4">
      <div className="bg-white rounded-lg shadow">
        <button className="w-full py-3 px-4 flex justify-between items-center">
          <div className="flex items-center">
            <User size={20} className="mr-3 text-gray-500" />
            <span>Account Settings</span>
          </div>
          <ChevronRight size={20} className="text-gray-500" />
        </button>
      </div>
      <div className="bg-white rounded-lg shadow">
        <button className="w-full py-3 px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Bell size={20} className="mr-3 text-gray-500" />
            <span>Notifications</span>
          </div>
          <ChevronRight size={20} className="text-gray-500" />
        </button>
      </div>
      <div className="bg-white rounded-lg shadow">
        <button className="w-full py-3 px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Settings size={20} className="mr-3 text-gray-500" />
            <span>Check-in Configuration</span>
          </div>
          <ChevronRight size={20} className="text-gray-500" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen pb-16">
      <Header title={activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} />
      {activeTab === 'home' && <HomeScreen />}
      {activeTab === 'trends' && <TrendsScreen />}
      {activeTab === 'family' && <FamilyScreen />}
      {activeTab === 'settings' && <SettingsScreen />}
      <TabBar />
    </div>
  );
};

export default ChildAppUI;