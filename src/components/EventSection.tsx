import React from 'react';
import { IconCalendar, IconExternalLink } from '@tabler/icons-react';

const EventCard = ({ title, date, description, image }: { title: string, date: string, description: string, image: string }) => (
  <div className="flex-none w-64 rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md group cursor-pointer hover:border-indigo-500/50 transition-all">
    <div className="relative h-40 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <div className="absolute top-3 right-3 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
        <IconExternalLink size={14} className="text-white" />
      </div>
    </div>
    <div className="p-5">
      <div className="flex items-center gap-2 text-indigo-400 mb-2">
        <IconCalendar size={14} />
        <span className="text-[10px] font-bold uppercase tracking-wider">{date}</span>
      </div>
      <h3 className="text-white font-bold mb-2 group-hover:text-indigo-300 transition-colors">{title}</h3>
      <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export const EventSection = () => {
  return (
    <section className="mb-10">
      <div className="px-6 mb-4">
        <h2 className="text-xl font-bold text-white mb-1">Évènements à venir</h2>
        <p className="text-sm text-slate-500">Active les rappels et ne rate aucuns événements !</p>
      </div>
      
      <div className="flex gap-4 px-6 overflow-x-auto pb-4 no-scrollbar">
        <EventCard 
          title="Lune rouge" 
          date="28/12" 
          description="C'est un spectacle rare visible directement depuis chez vous." 
          image="/images/blood_moon.png"
        />
        <EventCard 
          title="Eclipse solaire" 
          date="02/01" 
          description="Une éclipse partielle de Soleil a lieu lorsque la Lune passe..." 
          image="/images/solar_eclipse.png"
        />
      </div>
    </section>
  );
};
