import React from 'react';
import { IconMapPinFilled, IconEditCircle, IconArrowRight, IconArrowUpRight, IconStarFilled, IconTarget, IconAward } from '@tabler/icons-react';
import calendarIcon from '../assets/calendar.svg';

export const ProfilePage = () => {
  return (
    <div className="flex flex-col relative text-white animate-in fade-in zoom-in-95 duration-500">
      <div className="relative z-10 px-[24px] flex flex-col gap-[32px] pt-[22px]">
        {/* Header section w/ Time & Icons (Just placeholder layout for spacing, usually OS top bar) */}
        <div className="flex justify-between items-center h-[44px]">
          {/* Typically left blank or status bar items */}
        </div>

        {/* Greeting */}
        <p className="text-[35px] font-bold leading-tight -mt-4">
          <span className="font-light">Bonjour, </span><br />
          Emily !
        </p>

        {/* Profile Info */}
        <div className="flex flex-col gap-[32px]">
          <h1 className="text-[20px] font-bold">emss_44</h1>
          <div className="flex justify-between items-end">
            <div className="flex gap-[14px] items-center">
              <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-br from-[#8862FE] to-[#544AE8] overflow-hidden shrink-0 border border-white/10">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&auto=format&fit=crop" alt="Emily avatar" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-[8px]">
                <div className="flex flex-col">
                  <h2 className="text-[18px] font-bold">Emily</h2>
                  <div className="flex gap-[13px] text-[14px] font-light mt-[2px]">
                    <span>18 astres</span>
                    <span>25 badges</span>
                  </div>
                </div>
                <div className="flex items-center gap-[4px] text-[14px]">
                  <IconMapPinFilled size={16} className="text-[#DCCCFF]" />
                  <span>Nantes</span>
                </div>
              </div>
            </div>
            <button className="w-[28px] h-[28px] rounded-full bg-[#DCCCFF]/20 border border-white flex items-center justify-center shrink-0">
              <IconEditCircle size={16} className="text-white" />
            </button>
          </div>
        </div>

        {/* Mes badges Section */}
        <div className="flex flex-col gap-[19px]">
          <div className="flex flex-col gap-[2px]">
            <h2 className="text-[17px] font-bold">Mes badges</h2>
            <p className="text-[14px] font-light text-white/80">Débloques en de nouveau en jouant !</p>
          </div>
          
          <div className="flex gap-[10px] overflow-x-auto no-scrollbar -mx-[24px] px-[24px]">
            {/* Badge 1 */}
            <div className="shrink-0 w-[264px] bg-[#DCCCFF] border border-white/40 rounded-[25px] py-[8px] pl-[12px] pr-[16px] flex items-center gap-[8px]">
              <div className="w-[56px] h-[56px] rounded-xl flex items-center justify-center shrink-0">
                <IconStarFilled className="text-[#272727]" size={32} />
              </div>
              <div className="flex flex-col gap-[3px] text-[#272727]">
                <h3 className="text-[15px] font-semibold leading-tight">L'as des constellations</h3>
                <p className="text-[13px] font-light leading-snug opacity-80">Tu reconnais les figures du ciel comme un pro.</p>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="shrink-0 w-[234px] bg-[#582FEF] border border-white/40 rounded-[25px] py-[8px] pl-[12px] pr-[16px] flex items-center gap-[8px]">
              <div className="w-[56px] h-[56px] rounded-xl flex items-center justify-center shrink-0">
                <IconTarget className="text-white" size={32} />
              </div>
              <div className="flex flex-col gap-[3px] text-white">
                <h3 className="text-[14px] font-semibold leading-tight">Navigateur Céleste</h3>
                <p className="text-[12px] font-light leading-snug opacity-80">25 parties jouées: les étoiles n'ont presque plus de secrets pour toi.</p>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="shrink-0 w-[234px] bg-[#9C2FEF] border border-white/40 rounded-[25px] py-[8px] pl-[12px] pr-[16px] flex items-center gap-[8px]">
              <div className="w-[56px] h-[56px] rounded-xl flex items-center justify-center shrink-0">
                <IconAward className="text-white" size={32} />
              </div>
              <div className="flex flex-col gap-[3px] text-white">
                <h3 className="text-[14px] font-semibold leading-tight">Habitué du Dôme</h3>
                <p className="text-[12px] font-light leading-snug opacity-80">Un habitué du planétarium de ta ville !</p>
              </div>
            </div>
          </div>
          
          <button className="h-[40px] w-full rounded-[25px] bg-gradient-to-r from-[#8862FE] to-[#544AE8] flex items-center justify-center gap-[10px] text-[16px] shadow-[0px_4px_15px_rgba(106,82,239,0.32)]">
            <span>Jouer</span>
            <IconArrowRight size={20} />
          </button>
        </div>

        {/* Mes Astres et Constellations Section */}
        <div className="flex flex-col gap-[25px]">
          <div className="flex flex-col gap-[4px]">
            <h2 className="text-[17px] font-bold">Mes Astres et Constellations</h2>
            <p className="text-[14px] font-normal text-white/80 leading-snug">
              Retrouve tous les Astres et Constellations que tu as découverts dans le mode exploration ici !
            </p>
          </div>
          
          <div className="flex gap-[24px] overflow-x-auto no-scrollbar -mx-[24px] px-[24px] pt-[24px]">
            {/* Card 1 */}
            <div className="shrink-0 relative w-[148px] h-[182px] border border-white/20 rounded-[25px] p-[12px] pb-[20px] flex flex-col justify-end bg-[#070b0d]/60 overflow-visible">
               {/* Background image effect */}
               <div className="absolute inset-0 z-0 bg-black/60 rounded-[25px]"></div>
               <img src="https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?q=80&w=200&h=200&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover rounded-[25px] opacity-40 mix-blend-screen" alt="Moon bg" />
               
               {/* Planet image overhanging top right */}
               <div className="absolute -top-[15px] -right-[15px] w-[80px] h-[80px] z-10">
                 <img src="https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?q=80&w=200&h=200&auto=format&fit=crop" className="w-full h-full object-cover rounded-full drop-shadow-xl border border-white/10" alt="Moon" />
               </div>
               
               <div className="relative z-10 flex flex-col gap-[10px]">
                 <div>
                   <h3 className="text-[16px] font-semibold">La lune</h3>
                   <p className="text-[14px] font-light text-white/80 leading-snug mt-1">La Lune, illumine nos rêves</p>
                 </div>
                 <button className="h-[28px] rounded-full border border-white bg-[#DCCCFF]/20 flex items-center justify-center gap-[6px] text-[16px]">
                   <span>Voir plus</span>
                   <IconArrowRight size={16} />
                 </button>
               </div>
            </div>

            {/* Card 2 */}
            <div className="shrink-0 relative w-[148px] h-[182px] border border-white/20 rounded-[25px] p-[12px] pb-[20px] flex flex-col justify-end bg-[#070b0d]/60 overflow-visible">
               {/* Background image effect */}
               <div className="absolute inset-0 z-0 bg-black/60 rounded-[25px]"></div>
               <img src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=200&h=200&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover rounded-[25px] opacity-40 mix-blend-screen" alt="Neptune bg" />
               
               {/* Planet image overhanging top right */}
               <div className="absolute -top-[18px] -right-[10px] w-[85px] h-[85px] z-10">
                 <img src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=200&h=200&auto=format&fit=crop" className="w-full h-full object-cover rounded-full drop-shadow-xl border border-white/10" alt="Neptune" />
               </div>
               
               <div className="relative z-10 flex flex-col gap-[10px]">
                 <div>
                   <h3 className="text-[16px] font-semibold">Neptune</h3>
                   <p className="text-[14px] font-light text-white/80 leading-snug mt-1">Neptune, joyau bleu du lointain.</p>
                 </div>
                 <button className="h-[28px] rounded-full border border-white bg-[#DCCCFF]/20 flex items-center justify-center gap-[6px] text-[16px]">
                   <span>Voir plus</span>
                   <IconArrowRight size={16} />
                 </button>
               </div>
            </div>
            
            {/* Card 3 */}
            <div className="shrink-0 relative w-[148px] h-[182px] border border-white/20 rounded-[25px] p-[12px] pb-[20px] flex flex-col justify-end bg-[#070b0d]/60 overflow-visible">
               {/* Background image effect */}
               <div className="absolute inset-0 z-0 bg-black/60 rounded-[25px]"></div>
               <img src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=200&h=200&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover rounded-[25px] opacity-40 mix-blend-screen" alt="Saturne bg" />
               
               {/* Planet image overhanging top right */}
               <div className="absolute -top-[24px] -right-[5px] w-[95px] h-[95px] z-10">
                 <img src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=200&h=200&auto=format&fit=crop" className="w-full h-full object-cover rounded-full drop-shadow-xl border border-white/10" alt="Saturne" />
               </div>
               
               <div className="relative z-10 flex flex-col gap-[10px]">
                 <div>
                   <h3 className="text-[16px] font-semibold">Saturne</h3>
                   <p className="text-[14px] font-light text-white/80 leading-snug mt-1">Saturne, géante aux anneaux d'or.</p>
                 </div>
                 <button className="h-[28px] rounded-full border border-white bg-[#DCCCFF]/20 flex items-center justify-center gap-[6px] text-[16px]">
                   <span>Voir plus</span>
                   <IconArrowRight size={16} />
                 </button>
               </div>
            </div>
          </div>

          <button className="h-[40px] w-full rounded-[25px] border border-white bg-[#DCCCFF]/20 flex items-center justify-center gap-[10px] text-[16px]">
            <span>Tout voir</span>
            <IconArrowRight size={20} />
          </button>
        </div>

        {/* Prochains événements Section */}
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[2px]">
            <h2 className="text-[17px] font-bold">Prochains événements</h2>
            <p className="text-[14px] font-normal text-white/80">Retrouve tous les événements que tu as enregistrés.</p>
          </div>

          <div className="flex gap-[24px] overflow-x-auto no-scrollbar -mx-[24px] px-[24px] pb-4">
             {/* Event 1 */}
             <div className="shrink-0 w-[191px] h-[239px] rounded-[25px] border border-white p-[10px] relative overflow-hidden flex flex-col justify-end">
               {/* Background Cover */}
               <div className="absolute inset-0">
                 <img src="https://images.unsplash.com/photo-1504505322960-482a5c2ce916?q=80&w=300&h=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Lune rouge" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
               </div>
               
               {/* Action button */}
               <div className="absolute top-[9px] right-[9px] w-[32px] h-[32px] rounded-full bg-[#B8B8B8]/45 flex items-center justify-center z-10">
                 <IconArrowUpRight size={20} className="text-white" />
               </div>

               {/* Content */}
               <div className="relative z-10 flex flex-col gap-[13px] h-[100px] justify-end">
                 <div className="flex flex-col gap-[4px]">
                   <h3 className="text-[18px] font-bold">Lune rouge</h3>
                   <div className="flex items-center gap-[2px] text-[14px]">
                     <img src={calendarIcon} alt="calendar" className="w-[17px] h-[17px] filter invert" />
                     <span>28/12</span>
                   </div>
                 </div>
                 <p className="text-[14px] font-light text-[#BABABA] leading-tight">
                   C'est un spectacle rare visible directement...
                 </p>
               </div>
             </div>

             {/* Event 2 */}
             <div className="shrink-0 w-[191px] h-[239px] rounded-[25px] border border-white p-[10px] relative overflow-hidden flex flex-col justify-end">
               {/* Background Cover */}
               <div className="absolute inset-0">
                 <img src="https://images.unsplash.com/photo-1532053744655-0814400c2509?q=80&w=300&h=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Eclipse solaire" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
               </div>
               
               {/* Action button */}
               <div className="absolute top-[9px] right-[9px] w-[32px] h-[32px] rounded-full bg-[#B8B8B8]/45 flex items-center justify-center z-10">
                 <IconArrowUpRight size={20} className="text-white" />
               </div>

               {/* Content */}
               <div className="relative z-10 flex flex-col gap-[13px] h-[100px] justify-end">
                 <div className="flex flex-col gap-[4px]">
                   <h3 className="text-[18px] font-bold">Eclipse solaire</h3>
                   <div className="flex items-center gap-[2px] text-[14px]">
                     <img src={calendarIcon} alt="calendar" className="w-[17px] h-[17px] filter invert" />
                     <span>02/01</span>
                   </div>
                 </div>
                 <p className="text-[14px] font-light text-[#BABABA] leading-tight">
                   Une éclipse partielle de Soleil a lieu lorsque...
                 </p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
