import React from 'react';
import { Button } from './ui/button';
import { IconMeteor } from '@tabler/icons-react';

export const AuthPage = ({ onLogin }: { onLogin: () => void }) => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-between px-8 py-20 font-sans text-white overflow-hidden relative">
      {/* Background Decorative Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] bg-purple-600/10 rounded-full blur-[150px]" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative z-10">
        {/* Logo */}
        <div className="mb-12 flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-1000">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-indigo-500/20 rotate-12">
            <IconMeteor size={40} className="text-white -rotate-12" />
          </div>
          <span className="text-2xl font-bold tracking-[0.2em] text-indigo-200">NAOS</span>
        </div>

        {/* Welcome Text */}
        <div className="text-center space-y-4 animate-in slide-in-from-bottom duration-700 delay-200">
          <h1 className="text-4xl font-bold tracking-tight">Bienvenue !</h1>
          <p className="text-xl text-slate-400 font-light max-w-[240px] mx-auto leading-relaxed">
            Prêts à explorer l’univers ?
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="w-full max-w-sm space-y-4 relative z-10 animate-in slide-in-from-bottom duration-700 delay-500">
        <Button 
          onClick={onLogin}
          className="w-full h-14 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg shadow-xl shadow-indigo-500/30 transition-all active:scale-95"
        >
          Connexion
        </Button>
        
        <Button 
          variant="outline"
          className="w-full h-14 rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium text-lg backdrop-blur-md transition-all active:scale-95"
        >
          Créer un compte
        </Button>
      </div>
    </div>
  );
};
