import React from 'react';
import { IconSearch } from '@tabler/icons-react';

export const SearchBar = () => {
  return (
    <div className="px-6 mb-6">
      <div className="relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-indigo-400 transition-colors">
          <IconSearch size={18} />
        </div>
        <input
          type="text"
          placeholder="Rechercher un conseil, un article..."
          className="w-full h-12 pl-11 pr-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/50 transition-all backdrop-blur-md"
        />
      </div>
    </div>
  );
};
