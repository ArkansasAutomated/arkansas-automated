import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, TrendingUp, Clock, Zap, Users, Brain } from 'lucide-react';
import './ProblemSolution.css';

const ProblemSolution: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="section ps-section" id="problem-solution">
      <div className="container">
        <div className="ps-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="heading-lg"
          >
            The Traditional Way is <span className="text-gradient-subtle">Broken.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="body-lg ps-subtitle"
          >
            Arkansas businesses are bleeding revenue through manual processes and outdated systems. AI flips the script.
          </motion.p>
        </div>

        <div className="ps-grid">
          {/* Problem Column */}
          <motion.div 
            className="ps-column problem-column glass-panel"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="heading-md ps-col-title">
              <TrendingDown className="icon-red" /> The Old Way
            </h3>
            <ul className="ps-list">
              <motion.li variants={itemVariants} className="ps-item">
                <div className="ps-icon-wrap bg-red-dim"><Clock size={20} /></div>
                <div>
                  <h4>Time Wasted</h4>
                  <p>Employees spend 40% of their day on repetitive, manual tasks instead of growth.</p>
                </div>
              </motion.li>
              <motion.li variants={itemVariants} className="ps-item">
                <div className="ps-icon-wrap bg-red-dim"><Users size={20} /></div>
                <div>
                  <h4>High Overhead</h4>
                  <p>Scaling requires hiring more staff, increasing payroll and management complexity.</p>
                </div>
              </motion.li>
              <motion.li variants={itemVariants} className="ps-item">
                <div className="ps-icon-wrap bg-red-dim"><TrendingDown size={20} /></div>
                <div>
                  <h4>Missed Leads</h4>
                  <p>After-hours inquiries go unanswered, sending potential customers to competitors.</p>
                </div>
              </motion.li>
            </ul>
          </motion.div>

          {/* Solution Column */}
          <motion.div 
            className="ps-column solution-column glass-panel highlight-panel"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="heading-md ps-col-title">
              <TrendingUp className="icon-cyan" /> The AI Way
            </h3>
            <ul className="ps-list">
              <motion.li variants={itemVariants} className="ps-item">
                <div className="ps-icon-wrap bg-cyan-dim"><Zap size={20} /></div>
                <div>
                  <h4>Instant Automation</h4>
                  <p>Custom agents handle data entry, scheduling, and admin tasks in milliseconds.</p>
                </div>
              </motion.li>
              <motion.li variants={itemVariants} className="ps-item">
                <div className="ps-icon-wrap bg-cyan-dim"><Brain size={20} /></div>
                <div>
                  <h4>Infinite Scale</h4>
                  <p>Add 10x the workload without adding a single person to your payroll.</p>
                </div>
              </motion.li>
              <motion.li variants={itemVariants} className="ps-item">
                <div className="ps-icon-wrap bg-cyan-dim"><Clock size={20} /></div>
                <div>
                  <h4>24/7 Operation</h4>
                  <p>AI sales and support agents close deals and answer questions around the clock.</p>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="ps-bg-glow"></div>
    </section>
  );
};

export default ProblemSolution;
