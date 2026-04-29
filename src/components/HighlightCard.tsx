import React from 'react';
import { Button } from './ui/button';
import { IconArrowRight } from '@tabler/icons-react';

export const HighlightCard = () => {
  return (
    <div className="px-6 mb-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-slate-900/40 border border-white/10 p-6 backdrop-blur-xl">
        {/* Background glow effect */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">💡</span>
            <h2 className="text-lg font-bold text-white tracking-tight">Le savais tu ?</h2>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-[280px]">
            On voit le passé dans le ciel : certaines étoiles que tu observes n’existent peut-être déjà plus.
          </p>
          
          <Button 
            className="rounded-full bg-white/10 hover:bg-white/20 border-white/10 text-white gap-2 transition-all group"
            variant="ghost"
          >
            En apprendre plus
            <IconArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};
