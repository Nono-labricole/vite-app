import React from 'react';
import { Button } from './ui/button';
import logo from '../assets/Logo.svg';

export const AuthPage = ({ onLogin }: { onLogin: () => void }) => {
  return (
    <div className="min-h-screen bg-[#101317] flex flex-col items-center justify-between px-[24px] py-[100px] font-sans text-white overflow-hidden relative">
      {/* Background Decorative Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-full h-full bg-indigo-600/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-full h-full bg-purple-600/5 rounded-full blur-[150px]" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full max-w-[342px]">
        {/* Logo */}
        <div className="mb-[67px] flex flex-col items-center gap-[11px] animate-in fade-in zoom-in duration-1000">
          <div className="w-[82px] h-[67px] relative">
            <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full animate-pulse" />
            <img src={logo} alt="Naos Logo" className="w-full h-full object-contain relative z-10" />
          </div>
          <span className="font-['Silom:Regular',sans-serif] text-[12.5px] tracking-[0.2em] text-[#DCCCFF] uppercase opacity-100">NAOS</span>
        </div>

        {/* Welcome Text */}
        <div className="text-center flex flex-col gap-[11px] animate-in slide-in-from-bottom duration-700 delay-200">
          <h1 className="text-[36px] font-bold leading-[48px] tracking-tight">Bienvenue !</h1>
          <p className="text-[20px] text-white/70 font-light max-w-[262px] mx-auto leading-[33px]">
            Prêts à explorer l’univers ?
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="w-[342px] flex flex-col gap-[18px] relative z-10 animate-in slide-in-from-bottom duration-700 delay-500">
        <Button 
          onClick={onLogin}
          className="w-[342px] h-[40px] rounded-[25px] bg-gradient-to-r from-[#8862FE] to-[#544AE8] text-white font-normal text-base shadow-[0_4px_14px_rgba(106,82,239,0.32)] hover:opacity-90 transition-all active:scale-95"
        >
          Connexion
        </Button>
        
        <Button 
          variant="outline"
          className="w-[342px] h-[40px] rounded-[25px] border border-white bg-[#DCCCFF]/20 hover:bg-[#DCCCFF]/30 text-white font-normal text-base transition-all active:scale-95 flex items-center justify-center"
        >
          Créer un compte
        </Button>
      </div>
    </div>
  );
};
