import React, { useState } from 'react';
import Header from '../components/Header';
import { ChefHat, Clock, Star, Plus, Minus, ShoppingCart, MapPin, Phone } from 'lucide-react';

const FoodToSeat: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('meals');
  const [cart, setCart] = useState<any[]>([]);
  const [seatNumber, setSeatNumber] = useState('');
  const [coachNumber, setCoachNumber] = useState('');

  const categories = [
    { id: 'meals', name: 'Meals', icon: ChefHat },
    { id: 'snacks', name: 'Snacks', icon: '🍿' },
    { id: 'beverages', name: 'Beverages', icon: '☕' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' }
  ];

  const foodItems = {
    meals: [
      {
        id: 1,
        name: 'Veg Thali',
        price: 120,
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        description: 'Dal, Rice, Roti, Sabzi, Pickle',
        rating: 4.2,
        time: '25-30 min',
        vendor: 'Railway Catering'
      },
      {
        id: 2,
        name: 'Chicken Biryani',
        price: 180,
        image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
        description: 'Aromatic basmati rice with tender chicken',
        rating: 4.5,
        time: '30-35 min',
        vendor: 'Biryani Express'
      },
      {
        id: 3,
        name: 'Paneer Butter Masala',
        price: 150,
        image: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
        description: 'Rich paneer curry with rice/roti',
        rating: 4.3,
        time: '20-25 min',
        vendor: 'North Indian Kitchen'
      }
    ],
    snacks: [
      {
        id: 4,
        name: 'Samosa (2 pcs)',
        price: 30,
        image: 'https://images.pexels.com/photos/14477/pexels-photo-14477.jpeg',
        description: 'Crispy fried pastry with spiced filling',
        rating: 4.0,
        time: '10-15 min',
        vendor: 'Station Snacks'
      },
      {
        id: 5,
        name: 'Sandwich',
        price: 50,
        image: 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg',
        description: 'Grilled veg/chicken sandwich',
        rating: 3.8,
        time: '15-20 min',
        vendor: 'Quick Bites'
      }
    ],
    beverages: [
      {
        id: 6,
        name: 'Masala Chai',
        price: 15,
        image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
        description: 'Hot spiced tea',
        rating: 4.1,
        time: '5-10 min',
        vendor: 'Chai Point'
      },
      {
        id: 7,
        name: 'Cold Coffee',
        price: 40,
        image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
        description: 'Refreshing iced coffee',
        rating: 4.0,
        time: '5-10 min',
        vendor: 'Coffee Corner'
      }
    ],
    desserts: [
      {
        id: 8,
        name: 'Gulab Jamun',
        price: 25,
        image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
        description: 'Sweet milk dumplings in syrup',
        rating: 4.4,
        time: '5-10 min',
        vendor: 'Sweet Treats'
      }
    ]
  };

  const addToCart = (item: any) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId: number) => {
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    if (existingItem && existingItem.quantity > 1) {
      setCart(cart.map(cartItem => 
        cartItem.id === itemId 
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ));
    } else {
      setCart(cart.filter(cartItem => cartItem.id !== itemId));
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleOrder = () => {
    if (cart.length > 0 && seatNumber && coachNumber) {
      alert(`Order placed successfully! Food will be delivered to Coach ${coachNumber}, Seat ${seatNumber} in 25-30 minutes.`);
      setCart([]);
      setSeatNumber('');
      setCoachNumber('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="p-4 bg-emerald-100 rounded-full w-16 h-16 mx-auto mb-4">
            <ChefHat className="h-8 w-8 text-emerald-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Food to Seat</h1>
          <p className="text-gray-600">Order delicious food delivered directly to your seat</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Food Menu */}
          <div className="lg:col-span-3">
            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Categories</h2>
              <div className="grid grid-cols-4 gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedCategory === category.id
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">{typeof category.icon === 'string' ? category.icon : <ChefHat className="h-6 w-6 mx-auto" />}</div>
                    <p className="font-medium text-gray-900 text-sm">{category.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Food Items */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 capitalize">{selectedCategory}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {foodItems[selectedCategory as keyof typeof foodItems]?.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-gray-900">{item.name}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-gray-600">{item.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-bold text-emerald-600">₹{item.price}</span>
                      <div className="flex items-center space-x-1 text-gray-500 text-sm">
                        <Clock className="h-4 w-4" />
                        <span>{item.time}</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-3">By {item.vendor}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="font-medium">
                          {cart.find(cartItem => cartItem.id === item.id)?.quantity || 0}
                        </span>
                        <button
                          onClick={() => addToCart(item)}
                          className="p-1 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors text-sm"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cart & Delivery Info */}
          <div className="space-y-6">
            {/* Delivery Location */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Delivery Location</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Coach Number</label>
                  <input
                    type="text"
                    value={coachNumber}
                    onChange={(e) => setCoachNumber(e.target.value)}
                    placeholder="e.g., B4, A1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Seat Number</label>
                  <input
                    type="text"
                    value={seatNumber}
                    onChange={(e) => setSeatNumber(e.target.value)}
                    placeholder="e.g., 25, 26"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Cart */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Your Order</h3>
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-4">Your cart is empty</p>
              ) : (
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-600">₹{item.price} x {item.quantity}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => addToCart(item)}
                          className="p-1 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                  
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold text-gray-900">Total:</span>
                      <span className="font-bold text-emerald-600 text-lg">₹{getTotalPrice()}</span>
                    </div>
                    
                    <button
                      onClick={handleOrder}
                      disabled={cart.length === 0 || !seatNumber || !coachNumber}
                      className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <ShoppingCart className="h-5 w-5" />
                        <span>Place Order</span>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Delivery Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Delivery Information</h4>
              <div className="text-blue-700 text-sm space-y-1">
                <p>• Delivery time: 25-30 minutes</p>
                <p>• Cash on delivery available</p>
                <p>• Track your order in real-time</p>
                <p>• Contact delivery person directly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodToSeat;