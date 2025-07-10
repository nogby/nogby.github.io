import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

const Benefits = () => {
  const [counters, setCounters] = useState({
    costReduction: 0,
    customerSatisfaction: 0,
    fasterProcessing: 0
  });

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          costReduction: Math.round(65 * progress),
          customerSatisfaction: Math.round(92 * progress),
          fasterProcessing: Math.round(80 * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('benefits-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      text: 'Reduce operational costs by up to 65%',
      subtext: 'through AI phone agents and automated workflows'
    },
    {
      text: 'Improve customer satisfaction by 92%',
      subtext: 'with 24/7 multilingual AI support'
    },
    {
      text: 'Increase lead conversion by 45%',
      subtext: 'through predictive lead scoring and sub-minute response times'
    },
    {
      text: 'Reduce response time by 95%',
      subtext: 'with automated correspondence management'
    },
    {
      text: 'Accelerate claims processing by 80%',
      subtext: 'with intelligent claims automation and real-time decisions'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div id="benefits-section">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose Our Conversational AI Platform?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our AI-powered phone agents and automation platform deliver measurable results that transform your insurance operations and customer experience.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold">{benefit.text}</p>
                    <p className="text-gray-600">{benefit.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Statistics */}
          <div className="grid gap-6">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {counters.costReduction}%
              </div>
              <div className="text-gray-800 font-semibold">Operational Savings</div>
              <div className="text-gray-600">Through AI automation</div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-teal-600 mb-2">
                {counters.customerSatisfaction}%
              </div>
              <div className="text-gray-800 font-semibold">CSAT Improvement</div>
              <div className="text-gray-600">24/7 AI support impact</div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {counters.fasterProcessing}%
              </div>
              <div className="text-gray-800 font-semibold">Processing Speed</div>
              <div className="text-gray-600">Claims automation boost</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;