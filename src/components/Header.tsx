import React from 'react';

export const Header = () => {
  return (
    <header className="w-full px-[24px] pt-[100px] pb-[38px] flex flex-col items-start gap-[11px]">
      <h1 className="font-bold text-[36px] leading-[48px] text-white">
        Bonjour, <span className="text-[#DCCCFF]">Emily !</span>
      </h1>
      <p className="font-light text-[20px] leading-[33px] text-white opacity-80">
        Prête à explorer l’univers ?
      </p>
    </header>
  );
};
