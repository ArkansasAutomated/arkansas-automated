import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Workflow, BarChart3, Database, HeadphonesIcon } from 'lucide-react';
import './Features.css';

const featuresData = [
  {
    icon: <Bot size={24} />,
    title: 'Custom AI Agents',
    description: 'Bespoke AI models trained on your specific business data to handle customer service, sales, or operations.',
    span: 'col-span-2'
  },
  {
    icon: <Workflow size={24} />,
    title: 'Workflow Automation',
    description: 'Connect your existing tools to eliminate manual data entry and human error.',
    span: 'col-span-1'
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'Predictive Analytics',
    description: 'Turn raw data into actionable insights to forecast trends and optimize inventory.',
    span: 'col-span-1'
  },
  {
    icon: <Database size={24} />,
    title: 'Data Integration',
    description: 'Seamlessly sync data across your CRM, ERP, and marketing platforms in real-time.',
    span: 'col-span-1'
  },
  {
    icon: <HeadphonesIcon size={24} />,
    title: '24/7 Support Bots',
    description: 'Never miss a lead with intelligent chatbots that book appointments and answer FAQs instantly.',
    span: 'col-span-1'
  }
];

const SpotlightCard: React.FC<{ feature: any, index: number }> = ({ feature, index }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`bento-card glass-panel spotlight-wrapper ${feature.span}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        className="spotlight-effect"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0,240,255,.15), transparent 40%)`,
        }}
      />
      
      <div className="bento-content-inner">
        <div className="bento-icon">{feature.icon}</div>
        <h3 className="bento-title">{feature.title}</h3>
        <p className="bento-desc">{feature.description}</p>
      </div>
    </motion.div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="section features-section" id="features">
      <div className="container">
        <div className="features-header">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="heading-lg"
          >
            Built for <span className="text-gradient">Scale.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-lg features-subtitle"
          >
            Everything you need to automate your Arkansas business, from custom chatbots to complex workflow integrations.
          </motion.p>
        </div>

        <div className="bento-grid">
          {featuresData.map((feature, index) => (
            <SpotlightCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
