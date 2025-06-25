import React, { useState } from 'react';
import Header from '../components/Header';
import { 
  Shield, 
  Mic, 
  Video, 
  MapPin, 
  Phone, 
  Users, 
  AlertTriangle,
  Clock,
  CheckCircle,
  Volume2,
  Camera
} from 'lucide-react';

const SafetyDashboard: React.FC = () => {
  const [isVoiceActive, setIsVoiceActive] = useState(true);
  const [recentAlerts, setRecentAlerts] = useState([
    {
      id: 1,
      type: 'panic',
      location: 'Coach B4, Train 12951',
      time: '2 minutes ago',
      status: 'active',
      responder: 'RPF Team Delhi'
    },
    {
      id: 2,
      type: 'harassment',
      location: 'Platform 3, New Delhi',
      time: '15 minutes ago',
      status: 'resolved',
      responder: 'Station Security'
    }
  ]);

  const emergencyContacts = [
    { name: 'Railway Police', number: '139', type: 'primary' },
    { name: 'Women Helpline', number: '1091', type: 'secondary' },
    { name: 'Emergency Services', number: '112', type: 'secondary' }
  ];

  const safetyFeatures = [
    {
      icon: Mic,
      title: 'Voice Detection',
      description: 'Always listening for "Help" or "Bachao"',
      status: isVoiceActive ? 'Active' : 'Inactive',
      color: isVoiceActive ? 'text-green-500' : 'text-red-500'
    },
    {
      icon: MapPin,
      title: 'Live Location',
      description: 'GPS tracking for emergency response',
      status: 'Active',
      color: 'text-green-500'
    },
    {
      icon: Camera,
      title: 'Auto Recording',
      description: 'Emergency video/audio capture',
      status: 'Ready',
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      title: 'Quick Contacts',
      description: 'Instant access to help numbers',
      status: 'Connected',
      color: 'text-green-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Safety Dashboard</h1>
          <p className="text-gray-600">Your personal safety command center with AI-powered protection</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Safety Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Emergency Panic Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Emergency Response</h2>
                <div className="flex items-center space-x-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Protected</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <button className="p-8 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105 shadow-xl">
                  <Shield className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">PANIC BUTTON</h3>
                  <p className="text-red-100 text-sm">Tap for immediate emergency alert</p>
                </button>

                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="flex items-center space-x-3 mb-2">
                      <Volume2 className="h-5 w-5 text-blue-500" />
                      <span className="font-semibold text-blue-800">Voice Commands</span>
                    </div>
                    <p className="text-sm text-blue-700">Say "Help" or "Bachao" to activate</p>
                    <button 
                      onClick={() => setIsVoiceActive(!isVoiceActive)}
                      className={`mt-2 px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                        isVoiceActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {isVoiceActive ? 'Active' : 'Inactive'}
                    </button>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                    <div className="flex items-center space-x-3 mb-2">
                      <MapPin className="h-5 w-5 text-purple-500" />
                      <span className="font-semibold text-purple-800">Location Sharing</span>
                    </div>
                    <p className="text-sm text-purple-700">Auto-shared with Railway Police</p>
                    <div className="mt-2 text-xs text-purple-600">Coach B4, Platform 2</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Safety Features */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Safety Features Status</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {safetyFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-gray-100 rounded-lg">
                          <IconComponent className={`h-5 w-5 ${feature.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                          <div className={`text-xs font-medium mt-2 ${feature.color}`}>
                            {feature.status}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recent Safety Alerts */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Safety Alerts</h2>
              <div className="space-y-4">
                {recentAlerts.map((alert) => (
                  <div key={alert.id} className="p-4 border border-gray-200 rounded-xl">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-full ${
                          alert.status === 'active' ? 'bg-red-100' : 'bg-green-100'
                        }`}>
                          {alert.status === 'active' ? (
                            <AlertTriangle className="h-4 w-4 text-red-500" />
                          ) : (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 capitalize">{alert.type} Alert</h3>
                          <p className="text-sm text-gray-600">{alert.location}</p>
                          <p className="text-xs text-gray-500 mt-1">Responded by: {alert.responder}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          alert.status === 'active' 
                            ? 'bg-red-100 text-red-700' 
                            : 'bg-green-100 text-green-700'
                        }`}>
                          {alert.status}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{alert.time}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Emergency Contacts */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Emergency Contacts</h2>
              <div className="space-y-3">
                {emergencyContacts.map((contact, index) => (
                  <button
                    key={index}
                    className={`w-full p-4 rounded-xl border-2 transition-all hover:shadow-md ${
                      contact.type === 'primary'
                        ? 'border-red-200 bg-red-50 hover:bg-red-100'
                        : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                        <p className="text-2xl font-bold text-red-600">{contact.number}</p>
                      </div>
                      <Phone className="h-6 w-6 text-gray-400" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Safety Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Safety Tips</h2>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800 font-medium">Always keep your phone charged during travel</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-green-800 font-medium">Share your journey details with family</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-800 font-medium">Stay alert in crowded areas</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <p className="text-sm text-purple-800 font-medium">Use the panic button if you feel unsafe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyDashboard;