import React from 'react';
import { IconMapPin, IconHeart, IconCompass } from '@tabler/icons-react';
import { Button } from './ui/button';

const SpotCard = ({ name, location, image }: { name: string, location: string, image: string }) => (
  <div className="flex items-center gap-4 p-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md group hover:bg-white/10 transition-all mb-4">
    <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
      <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="text-white font-bold truncate mb-1">{name}</h4>
      <div className="flex items-center gap-1.5 text-slate-400 text-xs">
        <IconMapPin size={12} className="text-indigo-400" />
        <span className="truncate">{location}</span>
      </div>
    </div>
    <button className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-all">
      <IconHeart size={18} />
    </button>
  </div>
);

export const SpotSection = () => {
  return (
    <section className="px-6 mb-24">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white mb-1">Carte des meilleurs spots</h2>
        <p className="text-sm text-slate-500">Trouve et enregistre tes meilleurs spots d’observation.</p>
      </div>
      
      {/* Mini Map Placeholder */}
      <div className="relative h-48 rounded-3xl overflow-hidden bg-slate-800 border border-white/10 mb-8 group cursor-pointer">
        <div className="absolute inset-0 bg-[url('https://api.maptiler.com/maps/darkmatter/static/auto/600x300.png?key=get_your_own_key')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-indigo-500/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="text-[10px] font-bold text-white uppercase tracking-wider">25/01 - Bonnes conditions</span>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center border-4 border-white/10 animate-bounce">
            <IconCompass className="text-white" size={20} />
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold text-white mb-1">Pour toi</h3>
        <p className="text-sm text-slate-500">Ces spots pourraient t’intéresser !</p>
      </div>

      <div className="flex flex-col">
        <SpotCard name="Forêt du Gâvre" location="45 km au nord de Nantes" image="/images/forest.png" />
        <SpotCard name="Lac de grand lieu" location="25 km au sud de Nantes" image="/images/lake.png" />
        <SpotCard name="Piriac sur mer" location="90 km à l'ouest de Nantes" image="/images/coast.png" />
      </div>

      <Button className="w-full h-12 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold mt-2 shadow-lg shadow-indigo-500/20">
        Tout voir
      </Button>
    </section>
  );
};
