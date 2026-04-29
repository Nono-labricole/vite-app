import React from 'react';
import searchIcon from '../assets/search.svg';

export const SearchBar = () => {
  return (
    <div className="px-[24px] mb-[24px]">
      <div className="w-[342px] h-[38px] bg-[#1C243F] border border-white/20 rounded-[25px] flex items-center px-[20px] gap-[16px]">
        <img src={searchIcon} alt="" className="w-[20px] h-[20px] opacity-70" />
        <input
          type="text"
          placeholder="Rechercher un conseil, un article..."
          className="bg-transparent border-none outline-none text-[14px] font-light text-[#BBB] placeholder:text-[#BBB] w-full"
        />
      </div>
    </div>
  );
};
