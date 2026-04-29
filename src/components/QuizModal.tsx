import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Briefcase, Bot, CheckCircle2 } from 'lucide-react';
import Cal, { getCalApi } from "@calcom/embed-react";
import './QuizModal.css';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    businessType: '',
    automationGoal: ''
  });

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"arkansasautomated-15min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  // Business Types
  const businessTypes = [
    'Local Service Business',
    'E-Commerce',
    'Real Estate',
    'Agency / B2B',
    'Other'
  ];

  // Automation Goals
  const automationGoals = [
    '24/7 AI Receptionist',
    'Lead Gen & Qualification',
    'Automated Data Entry',
    'Customer Support Bot',
    'Custom Workflow'
  ];

  const handleNext = (field: 'businessType' | 'automationGoal', value: string) => {
    setSelections(prev => ({ ...prev, [field]: value }));
    setTimeout(() => setStep(prev => prev + 1), 300); // Slight delay for selection animation
  };

  const handleClose = () => {
    setStep(1); // Reset on close
    setSelections({ businessType: '', automationGoal: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay">
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
          
          <motion.div 
            className="modal-container glass-panel"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button className="modal-close" onClick={handleClose}>
              <X size={24} />
            </button>

            <div className="modal-content">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div 
                    key="step1"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="quiz-step"
                  >
                    <div className="step-indicator">Step 1 of 2</div>
                    <h2 className="heading-md mb-2">What type of business do you run?</h2>
                    <p className="body-lg mb-6">This helps us tailor the strategy to your specific needs.</p>
                    
                    <div className="options-grid">
                      {businessTypes.map(type => (
                        <button 
                          key={type}
                          className={`quiz-option ${selections.businessType === type ? 'selected' : ''}`}
                          onClick={() => handleNext('businessType', type)}
                        >
                          <Briefcase className="option-icon" size={20} />
                          {type}
                          {selections.businessType === type && <CheckCircle2 className="check-icon" size={20} />}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div 
                    key="step2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="quiz-step"
                  >
                    <div className="step-indicator">Step 2 of 2</div>
                    <h2 className="heading-md mb-2">What is your primary automation goal?</h2>
                    <p className="body-lg mb-6">Select the area where you're losing the most time or money.</p>
                    
                    <div className="options-grid">
                      {automationGoals.map(goal => (
                        <button 
                          key={goal}
                          className={`quiz-option ${selections.automationGoal === goal ? 'selected' : ''}`}
                          onClick={() => handleNext('automationGoal', goal)}
                        >
                          <Bot className="option-icon" size={20} />
                          {goal}
                          {selections.automationGoal === goal && <CheckCircle2 className="check-icon" size={20} />}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div 
                    key="step3"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="quiz-step booking-step"
                  >
                    <div className="booking-header">
                      <h2 className="heading-md text-gradient">Perfect. Let's build your strategy.</h2>
                      <p className="body-lg">
                        Pick a time below for a free 15-minute discovery call. No pressure, just value.
                      </p>
                    </div>
                    
                    <div className="cal-container">
                      <Cal 
                        namespace="arkansasautomated-15min"
                        calLink="andre-brassfield-lq4g9o/arkansasautomated-15min"
                        style={{width:"100%", height:"100%", overflow:"scroll"}}
                        config={{layout: 'month_view', useSlotsViewOnSmallScreen: 'true', theme: 'dark'}}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Modal Glow Effects */}
            <div className="modal-glow top-left"></div>
            <div className="modal-glow bottom-right"></div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuizModal;
