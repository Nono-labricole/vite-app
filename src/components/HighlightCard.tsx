import React from 'react';
import { Button } from './ui/button';
import arrowIcon from '../assets/up right.svg'; // Using up right for arrow forward if similar

export const HighlightCard = () => {
  return (
    <div className="px-[24px] mb-[36px]">
      <div className="bg-[rgba(0,0,0,0.2)] border border-[#2C2C2C] rounded-[25px] p-[16px] relative overflow-hidden h-[214px] flex flex-col justify-between">
        <div className="flex flex-col gap-[6px]">
          <div className="flex items-center gap-[2px]">
            <h2 className="text-[18px] font-bold text-white">Le savais tu ?</h2>
            <span className="text-[24px]">💡</span>
          </div>
          <p className="text-white text-[16px] leading-[normal] font-normal max-w-[297px]">
            On voit le passé dans le ciel : certaines étoiles que tu observes n’existent peut-être déjà plus.
          </p>
        </div>
        
        <div className="flex justify-end">
          <Button 
            className="h-[28px] min-w-[120px] rounded-[25px] bg-[rgba(220,204,255,0.2)] border border-white text-white text-[16px] font-normal gap-[10px] px-[10px] hover:bg-[rgba(220,204,255,0.3)] transition-all"
            variant="outline"
          >
            En apprendre plus
            <img src={arrowIcon} alt="" className="w-[20px] h-[20px] rotate-45" />
          </Button>
        </div>
      </div>
    </div>
  );
};
