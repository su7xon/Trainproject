import React, { useState, useEffect } from 'react';
import { AlertCircle, Mic, Video, MapPin, Phone, X, CheckCircle } from 'lucide-react';

const EmergencyPanic: React.FC = () => {
  const [isPanicActive, setIsPanicActive] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Voice command detection simulation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'h' && e.ctrlKey) {
        activatePanic();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Start voice listening
  useEffect(() => {
    setIsListening(true);
    // In real implementation, this would use Web Speech API
  }, []);

  const activatePanic = () => {
    setIsPanicActive(true);
    setIsRecording(true);
    setCountdown(10);
    
    // Simulate location sharing and alerts
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Here would trigger actual emergency protocols
          sendEmergencyAlert();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const sendEmergencyAlert = () => {
    // Simulate emergency alert sending
    console.log('Emergency alert sent to Railway Police and family contacts');
    setIsPanicActive(false);
    setIsRecording(false);
    setShowSuccessMessage(true);
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  const cancelPanic = () => {
    setIsPanicActive(false);
    setIsRecording(false);
    setCountdown(0);
  };

  // Success Message Popup
  if (showSuccessMessage) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl animate-fade-in">
          <div className="p-4 bg-green-100 rounded-full w-16 h-16 mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Alert Sent Successfully!</h2>
          <p className="text-gray-600 mb-4">Emergency call has been sent to the nearest local police station and Railway Police Force.</p>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <div className="text-green-800 text-sm space-y-1">
              <p>✓ Location shared with authorities</p>
              <p>✓ Emergency contacts notified</p>
              <p>✓ Audio/Video recording started</p>
              <p>✓ Railway Police alerted</p>
            </div>
          </div>
          
          <button 
            onClick={() => setShowSuccessMessage(false)}
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  if (isPanicActive) {
    return (
      <div className="fixed inset-0 bg-red-600 bg-opacity-95 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
          <div className="animate-pulse">
            <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-2">EMERGENCY ACTIVATED</h2>
          <p className="text-gray-600 mb-6">Alert being sent to Railway Police and your emergency contacts</p>
          
          <div className="text-4xl font-bold text-red-500 mb-6">{countdown}</div>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex flex-col items-center">
              <div className="p-3 bg-red-100 rounded-full mb-2">
                <MapPin className="h-6 w-6 text-red-500" />
              </div>
              <span className="text-xs text-gray-600">Location Shared</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 bg-red-100 rounded-full mb-2">
                <Mic className={`h-6 w-6 text-red-500 ${isRecording ? 'animate-pulse' : ''}`} />
              </div>
              <span className="text-xs text-gray-600">Recording Audio</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 bg-red-100 rounded-full mb-2">
                <Video className={`h-6 w-6 text-red-500 ${isRecording ? 'animate-pulse' : ''}`} />
              </div>
              <span className="text-xs text-gray-600">Recording Video</span>
            </div>
          </div>
          
          <button 
            onClick={cancelPanic}
            className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold"
          >
            Cancel Emergency
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Emergency Panic Button - Always Visible */}
      <button 
        onClick={activatePanic}
        className="fixed bottom-6 right-6 p-4 bg-red-500 text-white rounded-full shadow-2xl hover:bg-red-600 transition-all transform hover:scale-110 z-40 animate-pulse"
        title="Emergency Panic Button - Press for immediate help"
      >
        <AlertCircle className="h-8 w-8" />
      </button>

      {/* Voice Command Indicator */}
      {isListening && (
        <div className="fixed bottom-6 left-6 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg z-40">
          <div className="flex items-center space-x-2">
            <Mic className="h-4 w-4 animate-pulse" />
            <span>Voice commands active: Say "Help"</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EmergencyPanic;