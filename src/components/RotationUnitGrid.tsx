import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Player } from "../types";
import { players } from "../data";
import RadarChart from "./RadarChart";
import { Shield, Sparkles, User, Crosshair, HelpCircle, Trophy } from "lucide-react";

interface RotationUnitGridProps {
  onSelectPlayer?: (player: Player) => void;
}

export default function RotationUnitGrid({ onSelectPlayer }: RotationUnitGridProps) {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const selectPlayerDetails = (player: Player) => {
    setSelectedPlayer(player);
    if (onSelectPlayer) {
      onSelectPlayer(player);
    }
  };

  const getRoleIcon = (role: string) => {
    const rLower = role.toLowerCase();
    if (rLower.includes("anchor") || rLower.includes("center")) return <Shield className="w-5 h-5 text-sky-400" />;
    if (rLower.includes("enforcer") || rLower.includes("guard")) return <Shield className="w-5 h-5 text-red-500" />;
    if (rLower.includes("shooter") || rLower.includes("spark")) return <Sparkles className="w-5 h-5 text-yellow-400" />;
    return <Crosshair className="w-5 h-5 text-orange-400" />;
  };

  return (
    <div id="rotation-unit" className="border border-orange-900/50 bg-stone-950/80 rounded-lg p-6 relative overflow-hidden backdrop-blur-md">
      {/* Background Grunge Texture Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(243,112,32,0.05),transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none text-right">
        <span className="font-mono text-5xl font-black block">SCOUT</span>
        <span className="font-mono text-xl block">ROTATION DECK</span>
      </div>

      <div className="border-b border-stone-800 pb-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-2 bg-orange-600 rounded" />
            <div>
              <h2 className="text-xl font-sans font-bold text-stone-100 tracking-wider">
                轮换铁军 <span className="font-mono text-sm text-stone-500 ml-2">ROTATION UNIT</span>
              </h2>
              <p className="text-xs text-stone-400 font-mono mt-0.5">
                ★★★ 90年代尼克斯极致防守轮换名录 / 1990s NY KNICKS CORE DECKS ★★★
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2 text-stone-500 font-mono text-[10px]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>ACTIVE DOSSIER SYNCED</span>
          </div>
        </div>
      </div>

      {/* Main Grid mapping players */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {players.map((p) => {
          const isFlipped = flippedCards[p.id] || false;
          return (
            <div
              key={p.id}
              className="relative h-[430px] group cursor-pointer [perspective:1000px] select-none"
              onClick={() => selectPlayerDetails(p)}
            >
              <motion.div
                className="w-full h-full relative [transform-style:preserve-3d] transition-transform duration-500"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
              >
                {/* CARD FRONT */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-lg border border-stone-800 bg-stone-900 flex flex-col justify-between overflow-hidden shadow-lg hover:border-orange-600/50 transition-all duration-300">
                  {/* Card top banner */}
                  <div className={`p-4 bg-gradient-to-br ${p.avatarBg} border-b border-stone-800 flex items-start justify-between relative`}>
                    <div className="absolute inset-0 bg-stone-950/20 pointer-events-none" />
                    <div>
                      <div className="flex items-center space-x-2">
                        {getRoleIcon(p.role)}
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-400">
                          {p.role.split(" / ")[0]}
                        </span>
                      </div>
                      <h3 className="text-lg font-sans font-bold text-stone-100 mt-1 tracking-tight leading-none">
                        {p.chineseName}
                      </h3>
                      <p className="text-[10px] font-mono text-stone-400 mt-1 uppercase tracking-tight">
                        {p.name}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="font-mono text-2xl font-black text-orange-500 block leading-none">
                        #{p.number}
                      </span>
                      <span className="text-[9px] font-mono bg-stone-950/80 px-1.5 py-0.5 rounded text-stone-500 inline-block mt-1">
                        NYK
                      </span>
                    </div>
                  </div>

                  {/* Card Front Center - Profile & Quick metrics */}
                  {p.portrait && (
                    <div className="relative h-[160px] w-full overflow-hidden bg-stone-950 border-b border-stone-850">
                      <img
                        src={p.portrait}
                        alt={`${p.chineseName} Action Shot`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover filter saturate-[1.15] contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Vignette/shadow overlay */}
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-stone-900 to-transparent" />
                    </div>
                  )}

                  <div className="p-3.5 flex-1 flex flex-col justify-between bg-stone-900/40 relative">
                    {/* Gritty overlay text */}
                    <div className="absolute bottom-4 right-4 opacity-[0.02] text-6xl font-black font-mono leading-none select-none pointer-events-none text-stone-200">
                      {p.number}
                    </div>

                    <div className="space-y-2">
                      <p className="text-[11px] text-stone-300 leading-snug font-sans line-clamp-2">
                        {p.roleDescription}
                      </p>

                      {/* Display key attributes */}
                      <div className="space-y-1 pt-1.5 border-t border-stone-800/60">
                        {p.stats.slice(0, 3).map((st, i) => (
                          <div key={i} className="flex justify-between items-center text-[11px] font-mono">
                            <span className="text-stone-500">{st.label}</span>
                            <span className="text-stone-300 font-bold">{st.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick radar teaser */}
                    <div className="mt-2 p-2 rounded bg-stone-950 border border-stone-800/80 flex items-center justify-between text-[10px] font-mono text-stone-400">
                      <div className="flex items-center space-x-1.5">
                        <Trophy className="w-3.5 h-3.5 text-orange-500/80" />
                        <span>查看能力雷达</span>
                      </div>
                      <span className="text-orange-500 group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </div>
                  </div>

                  {/* Card bottom details bar */}
                  <div className="px-4 py-3 bg-stone-950 border-t border-stone-800/60 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={(e) => toggleFlip(p.id, e)}
                      className="text-[10px] font-mono uppercase bg-orange-600/10 hover:bg-orange-600/20 text-orange-400 px-2.5 py-1 rounded border border-orange-500/10 hover:border-orange-500/30 transition-all cursor-pointer"
                    >
                      FLIP ARCHIVE &raquo;
                    </button>
                    <span className="text-[10px] font-mono text-stone-600">CONFIDENTIAL</span>
                  </div>
                </div>

                {/* CARD BACK */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg border border-amber-900/60 bg-stone-900 flex flex-col justify-between overflow-hidden shadow-lg p-4">
                  {/* Card Back Header */}
                  <div className="flex justify-between items-center border-b border-stone-800 pb-2">
                    <div className="flex items-center space-x-2">
                      <span className="p-1 rounded bg-orange-600/10 text-orange-500 font-mono text-xs">#{p.number}</span>
                      <h4 className="font-sans font-bold text-stone-100 text-sm">{p.chineseName}</h4>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => toggleFlip(p.id, e)}
                      className="text-[10px] font-mono text-amber-500/80 hover:text-amber-400"
                    >
                      &laquo; REVERT
                    </button>
                  </div>

                  {/* Card Back Content - Dynamic Attributes Radar Chart */}
                  <div className="flex-1 flex flex-col items-center justify-center py-2 relative">
                    <RadarChart
                      data={p.attributes.map(attr => ({
                        label: attr.label.split(" (")[0],
                        value: attr.value
                      }))}
                      color="stroke-orange-500"
                      fillColor="fill-orange-500/10"
                      maxValue={10}
                    />
                  </div>

                  {/* Quote stamp */}
                  <div className="pb-2">
                    <div className="bg-stone-950 p-2.5 rounded border border-stone-800 border-l-2 border-l-orange-500/80 text-[10.5px] italic font-sans text-stone-400 leading-snug cursor-text">
                      "{p.quote}"
                    </div>
                  </div>

                  {/* Card back footer */}
                  <div className="text-[9px] font-mono text-stone-600 border-t border-stone-800/80 pt-1 text-center uppercase tracking-wider">
                    SCOUT FILE NO: NYK-90S-E{p.number}
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Floating Detailed Modal (Dynamic dossier screen) */}
      <AnimatePresence>
        {selectedPlayer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedPlayer(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="w-full max-w-4xl bg-stone-900 border border-orange-500/20 rounded-xl overflow-hidden shadow-2xl p-6 md:p-8 relative max-h-[90vh] overflow-y-auto"
            >
              {/* Retro decorative elements */}
              <div className="absolute top-0 left-0 bg-orange-600/10 text-orange-500 font-mono text-[9px] px-3 py-1.5 uppercase font-bold tracking-widest border-r border-b border-stone-800 rounded-br leading-none">
                TOP SECRET / CASE FILE DEEP-DIVE
              </div>
              <button
                type="button"
                onClick={() => setSelectedPlayer(null)}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-100 font-mono text-xs bg-stone-950 px-3 py-1.5 rounded border border-stone-800/80 hover:bg-stone-800 transition shadow-sm leading-none"
              >
                CLOSE DOSSIER [Esc]
              </button>

              <div id="scout-dossier-inner" className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 animate-fade-in">
                {/* 1. PORTRAIT LEFT BLOCK */}
                {selectedPlayer.portrait && (
                  <div className="md:col-span-3 flex flex-col justify-start space-y-3">
                    <div className="relative overflow-hidden rounded-lg border border-orange-950 bg-stone-950 p-1 shadow-xl">
                      {/* Retro corner marks */}
                      <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-orange-500" />
                      <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-orange-500" />
                      <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-orange-500" />
                      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-orange-500" />

                      <img
                        src={selectedPlayer.portrait}
                        alt={selectedPlayer.name}
                        referrerPolicy="no-referrer"
                        className="w-full aspect-[3/4] object-cover rounded shadow filter saturate-[1.15] contrast-[1.05]"
                      />
                    </div>
                    <div className="bg-stone-950 p-2.5 rounded border border-stone-850 text-center">
                      <span className="text-[9px] font-mono text-stone-500 block uppercase tracking-wide">SCOUT FILE ID</span>
                      <span className="text-[10px] font-mono font-bold text-orange-500">NYK-90S-E{selectedPlayer.number}</span>
                    </div>
                  </div>
                )}

                {/* 2. STATS & BACKGROUND INFORMATION */}
                <div className={`${selectedPlayer.portrait ? "md:col-span-5" : "md:col-span-8"} space-y-4`}>
                  <div className="flex items-baseline space-x-3 pb-3 border-b border-stone-800/80">
                    <span className="text-4xl font-mono font-black text-orange-500 leading-none">#{selectedPlayer.number}</span>
                    <div>
                      <h3 className="text-2xl font-sans font-black text-stone-100 leading-none">
                        {selectedPlayer.chineseName}
                      </h3>
                      <p className="text-xs font-mono text-stone-500 leading-none mt-1.5 uppercase tracking-wide">
                        {selectedPlayer.name} / {selectedPlayer.role}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 bg-stone-950 border border-stone-800/60 rounded">
                      <span className="text-[10px] font-mono text-orange-400 block uppercase tracking-widest font-black mb-1">
                        ROLE DETAILS • 战术定位
                      </span>
                      <p className="text-xs text-stone-300 leading-relaxed font-sans mt-0.5">
                        {selectedPlayer.roleDescription}
                      </p>
                    </div>

                    <div className="p-3 bg-stone-950 border border-stone-800/60 rounded relative overflow-hidden">
                      {/* Red stamp watermark logo */}
                      <div className="absolute -bottom-2 -right-2 font-mono text-red-700/10 text-5xl font-black select-none pointer-events-none transform -rotate-12">
                        SIGNED
                      </div>
                      <span className="text-[10px] font-mono text-sky-400 block uppercase tracking-widest font-black mb-1">
                        MEMORABLE QUOTE • 铁血宣言
                      </span>
                      <p className="text-xs text-stone-300 italic font-sans leading-relaxed mt-0.5">
                        "{selectedPlayer.quote}"
                      </p>
                    </div>

                    {/* Stats Table */}
                    <div>
                      <span className="text-[10px] font-mono text-stone-500 block uppercase tracking-widest mb-1.5 font-black">
                        HISTORICAL DATA • 核心竞赛指标
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedPlayer.stats.map((s, idx) => (
                          <div key={idx} className="bg-stone-900/60 border border-stone-800/80 p-2 rounded flex flex-col justify-between h-14">
                            <span className="text-[9px] text-stone-500 font-mono leading-tight">{s.label}</span>
                            <span className="text-xs font-mono font-black text-stone-100 mt-0.5">{s.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. RADAR CHART RIGHT BLOCK */}
                <div className="md:col-span-4 flex flex-col justify-between bg-stone-950/40 border border-stone-800/60 p-4 rounded-lg">
                  <div>
                    <span className="text-[10px] font-mono text-orange-500 block uppercase tracking-widest font-black mb-1 text-center">
                      ATTRIBUTES RADAR • 核心战术维度评估
                    </span>
                    <p className="text-[9px] font-mono text-stone-500 text-center uppercase tracking-wide">
                      BASED ON 1990S COMBATED FOOTAGES & DEFENSIVE PLOYS
                    </p>
                  </div>

                  <div className="flex-1 flex items-center justify-center py-4">
                    <RadarChart
                      data={selectedPlayer.attributes.map(attr => ({
                        label: attr.label.split(" (")[0],
                        value: attr.value
                      }))}
                      color="stroke-orange-500"
                      fillColor="fill-orange-500/15"
                      maxValue={10}
                    />
                  </div>

                  <div className="border-t border-stone-800/80 pt-3 text-center">
                    <div className="inline-block px-3 py-1 bg-orange-600/10 text-orange-400 border border-orange-500/20 rounded font-mono text-[10px] uppercase">
                      Tactical Chemistry Signature Verified
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
