import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { useReveal } from '../lib/useReveal';
import './LiveMarkets.css';

const markets = [
  {
    name: 'Fort Smith Directory',
    url: 'https://www.fortsmithdirectory.com',
    host: 'fortsmithdirectory.com',
    region: 'Fort Smith & the River Valley',
    blurb:
      'The flagship hub. Local pros across service verticals from roofing to HVAC to moving, each vertical with its own dedicated site feeding one lead pipeline.',
    tag: 'Hub',
  },
  {
    name: 'Smart Home NWA',
    url: 'https://smarthomenwa.com',
    host: 'smarthomenwa.com',
    region: 'Northwest Arkansas',
    blurb:
      'Smart-home automation for Fayetteville, Bentonville, Rogers, and Springdale: cameras, lighting, whole-home control, and install.',
    tag: 'Live',
  },
  {
    name: 'Good Garage Co.',
    url: 'https://goodgarageco.com',
    host: 'goodgarageco.com',
    region: 'Fort Smith & NWA',
    blurb:
      'Garage cleanout, decluttering, and storage systems, connecting homeowners with local crews across two markets.',
    tag: 'Live',
  },
];

const LiveMarkets: React.FC = () => {
  const headRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  return (
    <section className="markets-section" id="markets">
      <div className="container">
        <div className="markets-header" ref={headRef}>
          <h2 className="heading-lg">
            One platform. <span className="accent">Real markets, live today.</span>
          </h2>
          <p className="body-lg markets-intro">
            Arkansas Automated builds and operates local directories that rank on Google,
            capture homeowner demand, and route exclusive leads to local businesses. These
            are live and taking requests right now.
          </p>
        </div>

        <div className="markets-grid" ref={gridRef}>
          {markets.map((m) => (
            <a
              key={m.host}
              href={m.url}
              target="_blank"
              rel="noopener noreferrer"
              className="market-card"
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
            </a>
          ))}
        </div>

        <p className="markets-footnote">
          More verticals and markets are rolling out across Arkansas.{' '}
          <a href="/list-your-business" className="markets-footnote-accent">
            List your business
          </a>{' '}
          to be part of them.
        </p>
      </div>
    </section>
  );
};

export default LiveMarkets;
