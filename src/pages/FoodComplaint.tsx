import React, { useState } from 'react';
import Header from '../components/Header';
import { Utensils, Camera, Star, MapPin, Clock, AlertTriangle } from 'lucide-react';

const FoodComplaint: React.FC = () => {
  const [complaintType, setComplaintType] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
  const [vendorLocation, setVendorLocation] = useState('');

  const complaintTypes = [
    { id: 'overpriced', name: 'Overpriced Items', color: 'bg-orange-500' },
    { id: 'quality', name: 'Poor Quality', color: 'bg-red-500' },
    { id: 'hygiene', name: 'Hygiene Issues', color: 'bg-yellow-500' },
    { id: 'service', name: 'Poor Service', color: 'bg-purple-500' }
  ];

  const handleSubmit = () => {
    if (complaintType && description && vendorLocation) {
      alert('Food complaint submitted successfully! Complaint ID: FC001');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="p-4 bg-orange-100 rounded-full w-16 h-16 mx-auto mb-4">
              <Utensils className="h-8 w-8 text-orange-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Live Food Complaint</h1>
            <p className="text-gray-600">Report food quality and vendor issues instantly</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Complaint Type</label>
              <div className="grid grid-cols-2 gap-3">
                {complaintTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setComplaintType(type.id)}
                    className={`p-3 border-2 rounded-lg transition-all ${
                      complaintType === type.id
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`w-4 h-4 ${type.color} rounded-full mx-auto mb-2`}></div>
                    <p className="font-medium text-gray-900 text-sm">{type.name}</p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Vendor Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={vendorLocation}
                  onChange={(e) => setVendorLocation(e.target.value)}
                  placeholder="e.g., Platform 2, Coach B4, Station Canteen"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Rate Your Experience</label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className={`p-1 ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
                  >
                    <Star className="h-6 w-6 fill-current" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                placeholder="Describe the issue in detail..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Add Photo Evidence</label>
              <button className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
                <Camera className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                <span className="text-sm text-gray-600">Take Photo of Food/Bill</span>
              </button>
            </div>

            <button
              onClick={handleSubmit}
              disabled={!complaintType || !description || !vendorLocation}
              className="w-full bg-orange-500 text-white py-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Food Complaint
            </button>
          </div>

          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              <p className="text-yellow-800 font-medium">Quick Tips</p>
            </div>
            <div className="text-yellow-700 text-sm space-y-1">
              <p>• Take photos of food and bill as evidence</p>
              <p>• Note vendor name and location clearly</p>
              <p>• Report immediately for faster action</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodComplaint;