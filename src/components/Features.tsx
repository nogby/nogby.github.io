import React from 'react';
import { 
  Phone,
  FileCheck,
  Globe,
  Target,
  Mail,
  BarChart3
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Phone,
      title: 'Conversational AI Agents',
      description: 'AI-powered voice and chat agents that handle inbound/outbound calls and text messages for lead qualification, renewals, and 24/7 customer support automatically.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FileCheck,
      title: 'Intelligent Claims Automation',
      description: 'Automated claims processing workflows that extract key details, structure data, and guide real-time adjuster decisions.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Globe,
      title: 'Multilingual Customer Support',
      description: 'AI voice systems that automatically detect and respond in English, French, or Spanish for personalized customer interactions.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Target,
      title: 'Predictive Lead Scoring',
      description: 'AI algorithms that prioritize high-value prospects and automate lead qualification with sub-minute response times.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Mail,
      title: 'Email Automation',
      description: 'AI that converts complex email communications into structured data and automates outreach to involved parties.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'AI-driven dashboards providing sentiment analysis, conversation quality scoring, and ROI tracking for business decisions.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Revolutionary AI Solutions for Insurance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-powered solutions transform every aspect of the insurance experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;