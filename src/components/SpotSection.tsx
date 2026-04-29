import React from 'react';
import mapIcon from '../assets/map.svg';
import heartIcon from '../assets/filled.svg'; // Should be heart but using filled star if no heart in assets
import expandIcon from '../assets/agrandir.svg';
import routingIcon from '../assets/map.svg';
import { Button } from './ui/button';

// Using the AI generated images for spots as they are higher quality than the placeholders
import forestImg from '/images/forest.png';
import lakeImg from '/images/lake.png';
import coastImg from '/images/coast.png';

const SpotCard = ({ name, location, image }: { name: string, location: string, image: string }) => (
  <div className="w-[342px] min-h-[98px] bg-[#1C243F] border border-white rounded-[25px] p-[10px] flex items-center gap-[9px] mb-[12px] group hover:bg-[#252D4D] transition-all relative">
    <div className="w-[68px] h-[78px] rounded-[15px] overflow-hidden border-[0.5px] border-white shrink-0">
      <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    </div>
    <div className="flex-1 flex flex-col gap-[13px] min-w-0 pr-[28px]">
      <div className="flex items-center gap-[5px]">
        <img src={mapIcon} alt="" className="w-[10px] h-[13px]" />
        <h4 className="text-white font-bold text-[16px] truncate">{name}</h4>
      </div>
      <div className="flex items-center gap-[5px]">
        <img src={routingIcon} alt="" className="w-[19px] h-[19px]" />
        <span className="text-[14px] font-light text-[#DCCCFF] truncate">{location}</span>
      </div>
    </div>
    <button className="absolute right-[10px] top-[10px] p-1 transition-all">
      <img src={heartIcon} alt="Favorite" className="w-[24px] h-[24px] opacity-40 hover:opacity-100 transition-opacity" />
    </button>
  </div>
);

export const SpotSection = () => {
  return (
    <section className="px-[24px] mb-[120px]">
      <div className="mb-[24px]">
        <h2 className="text-[20px] font-bold text-white mb-1">Carte des meilleurs spots</h2>
        <p className="text-[16px] text-white font-normal leading-[19px]">Trouve et enregistre tes meilleurs spots d’observation.</p>
      </div>
      
      <div className="w-[342px] h-[188px] relative rounded-[25px] overflow-hidden border border-white/20 mb-[24px] group cursor-pointer">
        <div className="absolute inset-0 bg-[url('https://api.maptiler.com/maps/darkmatter/static/auto/600x300.png?key=get_your_own_key')] bg-cover bg-center opacity-70 group-hover:scale-105 transition-transform duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        <div className="absolute top-[16px] right-[16px] w-[32px] h-[32px] rounded-full bg-white/20 backdrop-blur-md border border-white/20 hover:bg-white/30 transition-all flex items-center justify-center">
          <img src={expandIcon} alt="Expand" className="w-[20px] h-[20px] invert" />
        </div>

        <div className="absolute bottom-[20px] left-[20px] flex items-center gap-2.5 bg-[#582FEF] backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]" />
          <span className="text-[14px] font-medium text-white uppercase">25/01 - <span className="font-bold">Bonnes conditions</span></span>
        </div>
      </div>

      <div className="mb-[24px]">
        <h3 className="text-[20px] font-bold text-white mb-1">Pour toi</h3>
        <p className="text-[16px] text-white font-normal leading-[19px]">Ces spots pourraient t’intéresser !</p>
      </div>

      <div className="flex flex-col">
        <SpotCard name="Forêt du Gâvre" location="45 km au nord de Nantes" image={forestImg} />
        <SpotCard name="Lac de grand lieu" location="25 km au sud de Nantes" image={lakeImg} />
        <SpotCard name="Piriac sur mer" location="90 km à l'ouest de Nantes" image={coastImg} />
      </div>

      <Button className="w-[342px] h-[40px] rounded-[25px] bg-gradient-to-r from-[#8862FE] to-[#544AE8] text-white font-normal text-base mt-[32px] shadow-[0_4px_14px_rgba(106,82,239,0.32)] hover:opacity-90 transition-all">
        Tout voir
      </Button>
    </section>
  );
};
