import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Blob 1 */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/15 rounded-full blur-2xl animate-blob"></div>
        
        {/* Floating Blob 2 */}
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-teal-400/10 rounded-full blur-2xl animate-blob animation-delay-2000"></div>
        
        {/* Floating Blob 3 */}
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-400/12 rounded-full blur-2xl animate-blob animation-delay-4000"></div>
        
        {/* Floating Blob 4 */}
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyan-400/15 rounded-full blur-2xl animate-blob animation-delay-6000"></div>
        
        {/* Floating Blob 5 */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-indigo-400/8 rounded-full blur-3xl animate-blob animation-delay-8000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-white text-sm font-medium">AI-Powered Insurance Solutions</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Redefining Insurance with{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              AI-Driven
            </span>{' '}
            Customer Experiences
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your insurance business with cutting-edge, conversational AI technology that enhances customer satisfaction,
            streamlines operations, and drives growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#consultation"
              className="group bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-2"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#features"
              className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-all duration-200 transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;