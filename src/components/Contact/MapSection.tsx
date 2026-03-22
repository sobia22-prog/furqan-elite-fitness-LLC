import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, LocateFixed } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom Gold Marker Icon
const goldIcon = new L.DivIcon({
  className: 'custom-div-icon',
  html: `
    <div style="position: relative;">
      <div style="background-color: #D4AF37; width: 40px; height: 40px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 2px solid white; box-shadow: 0 5px 15px rgba(0,0,0,0.4);">
      </div>
      <div style="position: absolute; bottom: -8px; left: 50%; width: 10px; height: 10px; background-color: rgba(212, 175, 55, 0.4); border-radius: 50%; filter: blur(4px); transform: translateX(-50%) scale(2.5, 0.5);"></div>
    </div>
  `,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

// Component to handle recentering the map
const RecenterButton = ({ position }: { position: [number, number] }) => {
  const map = useMap();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        map.setView(position, 15, { animate: true });
      }}
      className="absolute top-6 right-6 z-[1000] bg-card border border-border p-3 rounded-full text-primary shadow-gold hover:bg-primary hover:text-black transition-all group"
      title="Recenter Map"
    >
      <LocateFixed size={24} className="group-hover:scale-110 transition-transform" />
    </button>
  );
};

const MapSection: React.FC = () => {
  const position: [number, number] = [25.0794, 55.1362]; // Dubai Marina Coordinates

  return (
    <section className="py-24 bg-dark relative z-10 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-widest"
          >
            Our <span className="text-primary">Location</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted max-w-2xl mx-auto"
          >
            Visit us at our premium partnered gyms in Dubai Marina for an elite training experience.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-border shadow-2xl h-[300px] md:h-[450px] relative z-10"
        >
          <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%' }}
          >
            <RecenterButton position={position} />
            {/* Premium Dark Theme Tile Layer that matches the Elite Fitness aesthetic */}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
            <Marker position={position} icon={goldIcon}>
              <Popup>
                <div className="overflow-hidden">
                  <div className="bg-primary flex items-center justify-center py-2 px-4 whitespace-nowrap">
                    <span className="text-black font-extrabold text-[10px] uppercase tracking-[0.2em]">Furqan Elite Fitness LLC</span>
                  </div>
                  <div className="p-5 bg-card">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-8 h-8 rounded bg-dark border border-border flex items-center justify-center text-primary shrink-0 mt-1">
                        <MapPin size={16} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Dubai Marina Hub</h4>
                        <p className="text-[10px] text-muted leading-relaxed">VIP Partner Gyms & Premium Training Facilities.</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5 mb-5 uppercase tracking-widest text-[9px] font-bold">
                      <div className="flex justify-between border-b border-border/50 pb-1">
                        <span className="text-muted/60">Training Type</span>
                        <span className="text-primary">1-on-1 VIP</span>
                      </div>
                    </div>

                    <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-2.5 bg-primary text-black text-[10px] font-bold uppercase tracking-[0.1em] hover:bg-white transition-all rounded-sm">
                      Message on WhatsApp
                    </a>
                  </div>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
