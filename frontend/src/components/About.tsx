import React from 'react';
import { motion } from 'motion/react';
import { Target, Heart, Zap, Mail, Phone, MapPin, Clock } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">About PawsStore</h1>
        <p className="text-gray-500 text-lg max-w-3xl mx-auto">Your trusted destination for premium pet supplies and cutting-edge pet care technology.</p>
      </div>

      <div className="bg-white rounded-[2rem] p-8 sm:p-12 border border-gray-100 shadow-sm mb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Story</h2>
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>Founded in 2020, PawsStore has grown to become one of the most trusted names in pet supplies. We're passionate about bringing you the latest and greatest products for your furry, feathered, and scaled friends at competitive prices.</p>
          <p>Our mission is simple: to provide exceptional products, outstanding customer service, and a seamless shopping experience. Whether you're a new pet parent or a seasoned animal lover, we're here to help you find exactly what you need.</p>
          <p>With a carefully curated selection of premium brands and products, we ensure that every item in our catalog meets our high standards for quality, safety, and performance.</p>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: 'Quality First', desc: 'We only stock products that we would use for our own pets.', color: 'text-blue-500', bg: 'bg-blue-50' },
            { icon: Heart, title: 'Customer Satisfaction', desc: 'Our team is dedicated to making your shopping experience perfect.', color: 'text-pink-500', bg: 'bg-pink-50' },
            { icon: Zap, title: 'Fast & Reliable', desc: 'Quick shipping and reliable support whenever you need it.', color: 'text-orange-500', bg: 'bg-orange-50' }
          ].map((value, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center"
            >
              <div className={`${value.bg} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <value.icon className={`w-8 h-8 ${value.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-[2rem] p-8 sm:p-12 border border-gray-100 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="bg-blue-50 p-4 rounded-2xl">
                <Mail className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                <p className="text-gray-500 text-sm">support@pawsstore.com</p>
                <p className="text-gray-500 text-sm">sales@pawsstore.com</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-blue-50 p-4 rounded-2xl">
                <MapPin className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Visit Us</h3>
                <p className="text-gray-500 text-sm">123 Pet Street</p>
                <p className="text-gray-500 text-sm">San Francisco, CA 94105</p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="bg-blue-50 p-4 rounded-2xl">
                <Phone className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                <p className="text-gray-500 text-sm">1-800-PAWS-SHOP</p>
                <p className="text-gray-500 text-sm">(1-800-729-7746)</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-blue-50 p-4 rounded-2xl">
                <Clock className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
                <p className="text-gray-500 text-sm">Mon-Fri: 9AM - 6PM PST</p>
                <p className="text-gray-500 text-sm">Sat-Sun: 10AM - 4PM PST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
