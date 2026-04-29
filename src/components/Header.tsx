import React from 'react';

export const Header = () => {
  return (
    <header className="flex flex-col gap-1 px-6 pt-8 pb-4">
      <h1 className="text-3xl font-medium tracking-tight text-white">
        Bonjour, <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Emily !</span>
      </h1>
      <p className="text-lg text-slate-400/80">
        Prête à explorer l’univers ?
      </p>
    </header>
  );
};
