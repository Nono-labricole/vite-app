import React from 'react';
import calendarIcon from '../assets/calendar.svg';
import expandIcon from '../assets/up right.svg';
import event1Img from '../assets/Event.png';
import event2Img from '../assets/Event2.png';

const EventCard = ({ title, date, description, image }: { title: string, date: string, description: string, image: string }) => (
  <div className="flex-none w-[191px] h-[239px] relative rounded-[25px] overflow-hidden border border-white group cursor-pointer transition-all">
    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100" />
    
    <div className="absolute top-[9px] right-[11px] w-[32px] h-[32px] rounded-full bg-[#B8B8B8]/45 backdrop-blur-md flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
      <img src={expandIcon} alt="" className="w-6 h-6" />
    </div>

    <div className="absolute bottom-0 left-0 right-0 p-[15px] flex flex-col gap-[13px]">
      <div className="flex flex-col gap-1">
        <h3 className="text-[18px] font-bold text-white leading-tight">{title}</h3>
        <div className="flex items-center gap-[2px] opacity-100">
          <img src={calendarIcon} alt="" className="w-[17px] h-[17px]" />
          <span className="text-[14px] font-normal text-white">{date}</span>
        </div>
      </div>
      <p className="text-[#BABABA] text-[14px] leading-relaxed line-clamp-2 font-light">
        {description}
      </p>
    </div>
  </div>
);

export const EventSection = () => {
  return (
    <section className="mb-[32px]">
      <div className="px-[24px] mb-[24px]">
        <h2 className="text-[20px] font-bold text-white mb-1">Évènements à venir</h2>
        <p className="text-[16px] text-white font-normal leading-[19px]">Active les rappels et ne rate aucuns événements !</p>
      </div>
      
      <div className="flex gap-[24px] px-[24px] overflow-x-auto pb-4 no-scrollbar">
        <EventCard 
          title="Lune rouge" 
          date="28/12" 
          description="C'est un spectacle rare visible directement depuis chez vous." 
          image={event1Img}
        />
        <EventCard 
          title="Eclipse solaire" 
          date="02/01" 
          description="Une éclipse partielle de Soleil a lieu lorsque la Lune passe..." 
          image={event2Img}
        />
      </div>
    </section>
  );
};
