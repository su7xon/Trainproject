import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  AlertTriangle, 
  Clock, 
  CreditCard, 
  MapPin, 
  Star,
  FileText,
  Phone,
  Ambulance,
  Utensils,
  Sofa,
  Train,
  Gift,
  Building
} from 'lucide-react';

const QuickActions: React.FC = () => {
  const actions = [
    {
      title: 'Safety Dashboard',
      description: 'Voice alerts, panic button, live tracking',
      icon: Shield,
      path: '/safety',
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600'
    },
    {
      title: 'File Complaint',
      description: 'Report theft, food issues, facility problems',
      icon: AlertTriangle,
      path: '/complaint',
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600'
    },
    {
      title: 'Train Status',
      description: 'Live running status and delay information',
      icon: Clock,
      path: '/train-status',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      title: 'PNR Status',
      description: 'Check booking status and seat details',
      icon: FileText,
      path: '/pnr-status',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600'
    },
    {
      title: 'Hotel Booking',
      description: 'Find hotels near railway stations',
      icon: Building,
      path: '/hotel-booking',
      color: 'bg-indigo-500',
      hoverColor: 'hover:bg-indigo-600'
    },
    {
      title: 'Live Tracking',
      description: 'Real-time train location and platform info',
      icon: MapPin,
      path: '/tracking',
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600'
    },
    {
      title: 'Reviews & Ratings',
      description: 'Rate coaches, vendors, and facilities',
      icon: Star,
      path: '/reviews',
      color: 'bg-yellow-500',
      hoverColor: 'hover:bg-yellow-600'
    },
    {
      title: 'Refund Status',
      description: 'Track cancellation and refund processing',
      icon: CreditCard,
      path: '/refund',
      color: 'bg-cyan-500',
      hoverColor: 'hover:bg-cyan-600'
    },
    {
      title: 'Emergency Contacts',
      description: 'Railway helplines and local police',
      icon: Phone,
      path: '/emergency',
      color: 'bg-red-600',
      hoverColor: 'hover:bg-red-700'
    },
    {
      title: 'One Call Police',
      description: 'Direct connection to Railway Police',
      icon: Phone,
      path: '/police-call',
      color: 'bg-red-700',
      hoverColor: 'hover:bg-red-800'
    },
    {
      title: 'Ambulance',
      description: 'Emergency medical assistance',
      icon: Ambulance,
      path: '/ambulance',
      color: 'bg-pink-500',
      hoverColor: 'hover:bg-pink-600'
    },
    {
      title: 'Live Food Complaint',
      description: 'Report food quality issues instantly',
      icon: Utensils,
      path: '/food-complaint',
      color: 'bg-orange-600',
      hoverColor: 'hover:bg-orange-700'
    },
    {
      title: 'Seat/Interior Review',
      description: 'Rate coach cleanliness and comfort',
      icon: Sofa,
      path: '/seat-review',
      color: 'bg-teal-500',
      hoverColor: 'hover:bg-teal-600'
    },
    {
      title: 'Live Coach Tracker',
      description: 'Track your coach location in real-time',
      icon: Train,
      path: '/coach-tracker',
      color: 'bg-cyan-500',
      hoverColor: 'hover:bg-cyan-600'
    },
    {
      title: 'Offers',
      description: 'Special discounts and travel deals',
      icon: Gift,
      path: '/offers',
      color: 'bg-emerald-500',
      hoverColor: 'hover:bg-emerald-600'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Quick Actions</h2>
        <div className="text-sm text-gray-500">Choose what you need</div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {actions.map((action, index) => {
          const IconComponent = action.icon;
          return (
            <Link
              key={index}
              to={action.path}
              className={`p-4 ${action.color} ${action.hoverColor} text-white rounded-xl transition-all transform hover:scale-105 hover:shadow-lg group animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-white bg-opacity-20 rounded-full mb-3 group-hover:bg-opacity-30 transition-all">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{action.title}</h3>
                <p className="text-xs opacity-90 leading-tight">{action.description}</p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Emergency Helpline Banner */}
      <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-red-500 rounded-full">
              <Phone className="h-4 w-4 text-white" />
            </div>
            <div>
              <div className="font-semibold text-red-800">24/7 Emergency Helpline</div>
              <div className="text-sm text-red-600">For immediate assistance during travel</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-red-600">139</div>
            <div className="text-xs text-red-500">Toll Free</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;