import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import './LiveMarkets.css';

const markets = [
  {
    name: 'Fort Smith Directory',
    url: 'https://www.fortsmithdirectory.com',
    host: 'fortsmithdirectory.com',
    region: 'Fort Smith & the River Valley',
    blurb:
      'The flagship hub. Vetted local pros across 11 service verticals — roofing, HVAC, moving, and more — each with its own landing site feeding one lead pipeline.',
    tag: 'Hub',
  },
  {
    name: 'Smart Home NWA',
    url: 'https://smarthomenwa.com',
    host: 'smarthomenwa.com',
    region: 'Northwest Arkansas',
    blurb:
      'Smart-home automation for Fayetteville, Bentonville, Rogers, and Springdale — cameras, lighting, whole-home control, and install.',
    tag: 'Live',
  },
  {
    name: 'Good Garage Co.',
    url: 'https://goodgarageco.com',
    host: 'goodgarageco.com',
    region: 'Fort Smith & NWA',
    blurb:
      'Garage cleanout, decluttering, and storage systems — connecting homeowners with local crews across two markets.',
    tag: 'Live',
  },
];

const LiveMarkets: React.FC = () => {
  return (
    <section className="markets-section" id="markets">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="markets-header"
        >
          <div className="markets-eyebrow">
            <MapPin size={16} /> <span>Live Markets</span>
          </div>
          <h2 className="heading-lg">
            One platform. <span className="text-gradient">Real markets, live today.</span>
          </h2>
          <p className="body-lg markets-intro">
            Arkansas Automated builds and operates local directories that rank on Google,
            capture homeowner demand, and route exclusive leads to local businesses. These
            are live and taking requests right now.
          </p>
        </motion.div>

        <div className="markets-grid">
          {markets.map((m, i) => (
            <motion.a
              key={m.host}
              href={m.url}
              target="_blank"
              rel="noopener noreferrer"
              className="market-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="market-card-top">
                <span className={`market-tag market-tag-${m.tag.toLowerCase()}`}>{m.tag}</span>
                <ArrowUpRight className="market-arrow" size={20} />
              </div>
              <h3 className="market-name">{m.name}</h3>
              <div className="market-region">
                <MapPin size={13} /> {m.region}
              </div>
              <p className="market-blurb">{m.blurb}</p>
              <div className="market-host">{m.host}</div>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="markets-footnote"
        >
          More verticals and markets are rolling out across Arkansas.{' '}
          <span className="markets-footnote-accent">Own a local business?</span> Get listed and
          receive exclusive local leads.
        </motion.p>
      </div>
    </section>
  );
};

export default LiveMarkets;
