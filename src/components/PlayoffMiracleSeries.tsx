import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { playoffRounds } from "../data";
import { PlayoffRound } from "../types";
import { Award, ChevronRight, Zap, Target } from "lucide-react";

export default function PlayoffMiracleSeries() {
  const [selectedRoundIdx, setSelectedRoundIdx] = useState<number>(0);
  const currentRound = playoffRounds[selectedRoundIdx];

  // Colors mapping for opponents
  const rColors: Record<number, { text: string; bg: string; border: string }> = {
    0: { text: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/30" },
    1: { text: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/30" },
    2: { text: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/30" },
    3: { text: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/30" },
  };

  return (
    <div id="playoff-miracle" className="border border-orange-900/50 bg-stone-950/80 rounded-lg p-6 relative overflow-hidden backdrop-blur-md">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.03),transparent_50%)] pointer-events-none" />

      {/* Section Title */}
      <div className="border-b border-stone-800 pb-4 mb-6">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-2 bg-sky-500 rounded" />
          <div>
            <h2 className="text-xl font-sans font-bold text-stone-100 tracking-wider">
              1998-99 黑八奇迹全记录 <span className="font-mono text-sm text-stone-500 ml-2">EASTERN MIRACLE CAMPAIGN</span>
            </h2>
            <p className="text-xs text-stone-400 font-mono mt-0.5">
              ★★★ 尤因伤停、狂人狂飙、纽约黑帮首夺东部冠军悲壮史诗 / 1998-99 BLACK 8 CAMPAIGN ★★★
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Playoff Bracket / Step Progressor */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 pt-2">
        {playoffRounds.map((r, idx) => {
          const isActive = idx === selectedRoundIdx;
          const styling = rColors[idx];
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedRoundIdx(idx)}
              className={`p-3 rounded-lg border text-left transition-all relative overflow-hidden cursor-pointer ${
                isActive
                  ? `bg-stone-900 border-sky-500 shadow-lg shadow-sky-500/5`
                  : `bg-stone-950/60 border-stone-800 hover:border-stone-700`
              }`}
            >
              {/* Active ribbon */}
              {isActive && (
                <div className="absolute top-0 right-0 h-1.5 w-12 bg-sky-500" />
              )}
              <span className={`text-[9px] font-mono tracking-widest font-bold uppercase block ${isActive ? "text-sky-400" : "text-stone-500"}`}>
                ROUND {idx + 1} • {r.result === "win" ? "PASS" : "DEFEAT"}
              </span>
              <h3 className="text-[13px] font-sans font-bold text-stone-100 mt-1 truncate">
                {r.chineseOpponent.split(" (")[0]}
              </h3>
              <div className="flex items-center justify-between mt-2.5">
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${styling.bg} ${styling.text} border ${styling.border}`}>
                  {r.seriesResult}
                </span>
                <span className="text-[9px] font-mono text-stone-600">Details &raquo;</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Dynamic Detail Card Panels */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedRoundIdx}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2"
        >
          {/* Narrative / Chronicle block: 7 cols */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-stone-900/30 border border-stone-800 p-5 rounded-lg relative">
            <div className="absolute right-4 top-4 opacity-[0.02] text-8xl font-black font-mono select-none pointer-events-none">
              R{selectedRoundIdx + 1}
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono text-sky-400 uppercase tracking-widest font-black block mb-1">
                  TACTICAL CHRONICLE • 战役档案实录
                </span>
                <h4 className="text-xl font-sans font-extrabold text-stone-100">
                  {currentRound.chineseRoundName}
                </h4>
                <p className="text-[11px] font-mono text-stone-500 mt-1 uppercase tracking-wider">
                  NY KNICKS vs {currentRound.opponent}
                </p>
              </div>

              {/* Story */}
              <p className="text-xs text-stone-300 leading-relaxed font-sans bg-stone-950/40 p-4 rounded border border-stone-850/80">
                {currentRound.story}
              </p>
            </div>

            {/* Key game winner catalyst */}
            <div className="mt-5 p-4 bg-orange-600/5 border-l-2 border-orange-500 rounded border border-stone-850">
              <div className="flex space-x-2.5">
                <div className="bg-orange-600/10 text-orange-500 p-1 rounded-full h-fit border border-orange-500/10">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-orange-400 block uppercase tracking-widest leading-none font-bold">
                    SERIES MVP CATALYST • 系列赛功臣胜负手
                  </span>
                  <p className="text-xs font-sans font-bold text-stone-200 mt-1">
                    {currentRound.keyPlayer.name}
                  </p>
                  <p className="text-[11px] font-sans text-stone-400 mt-1 leading-relaxed">
                    {currentRound.keyPlayer.contribution}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Graphical/Metric block: 5 cols */}
          <div className="lg:col-span-6 bg-stone-900/50 border border-stone-800 p-5 rounded-lg flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-sky-400 uppercase tracking-widest font-black block mb-2 text-center">
                SERIES COMPARATIVE BOX • 战力指标核算
              </span>
              <p className="text-[9.5px] font-mono text-stone-500 text-center uppercase tracking-wide border-b border-stone-800 pb-2 mb-4">
                NY KNICKS (ORANGE) vs OPPONENT (BLUE/CYAN) STAT AVERAGE
              </p>

              {/* Responsive SVG bar metrics */}
              <div className="space-y-4">
                {/* PTS */}
                <div className="space-y-1">
                  <div className="flex justify-between items-baseline text-[11px] font-mono text-stone-300">
                    <span className="font-sans font-bold">场均得分 (POINTS)</span>
                    <div className="space-x-3 text-[10px]">
                      <span className="text-orange-500">NYK: {currentRound.stats.pts.knicks}</span>
                      <span className="text-stone-500">vs</span>
                      <span className="text-neutral-400">OPP: {currentRound.stats.pts.opp}</span>
                    </div>
                  </div>
                  <div className="h-6 bg-stone-950 rounded-md p-1 border border-stone-850 flex items-center relative select-none">
                    <div className="h-full bg-orange-600/80 rounded" style={{ width: `${(currentRound.stats.pts.knicks / 110) * 100}%` }} />
                    <div className="absolute inset-y-0 right-1 leading-none self-center h-fit text-[10px] font-mono text-stone-500 pr-1">Max 110</div>
                  </div>
                  {/* Opponent mirrored mini slide bar */}
                  <div className="h-1 bg-stone-950 rounded-full overflow-hidden w-full relative">
                    <div className="h-full bg-cyan-600/50 rounded" style={{ width: `${(currentRound.stats.pts.opp / 110) * 100}%` }} />
                  </div>
                </div>

                {/* REB */}
                <div className="space-y-1">
                  <div className="flex justify-between items-baseline text-[11px] font-mono text-stone-300">
                    <span className="font-sans font-bold">场均篮板 (REBOUNDS)</span>
                    <div className="space-x-3 text-[10px]">
                      <span className="text-orange-500">NYK: {currentRound.stats.reb.knicks}</span>
                      <span className="text-stone-500">vs</span>
                      <span className="text-neutral-400">OPP: {currentRound.stats.reb.opp}</span>
                    </div>
                  </div>
                  <div className="h-6 bg-stone-950 rounded-md p-1 border border-stone-850 flex items-center relative">
                    <div className="h-full bg-orange-600/80 rounded" style={{ width: `${(currentRound.stats.reb.knicks / 50) * 100}%` }} />
                    <div className="absolute inset-y-0 right-1 leading-none self-center h-fit text-[10px] font-mono text-stone-500 pr-1">Max 50</div>
                  </div>
                  <div className="h-1 bg-stone-950 rounded-full overflow-hidden w-full relative">
                    <div className="h-full bg-cyan-600/50 rounded" style={{ width: `${(currentRound.stats.reb.opp / 50) * 100}%` }} />
                  </div>
                </div>

                {/* AST */}
                <div className="space-y-1">
                  <div className="flex justify-between items-baseline text-[11px] font-mono text-stone-300">
                    <span className="font-sans font-bold">场均助攻 (ASSISTS)</span>
                    <div className="space-x-3 text-[10px]">
                      <span className="text-orange-500">NYK: {currentRound.stats.ast.knicks}</span>
                      <span className="text-stone-500">vs</span>
                      <span className="text-neutral-400">OPP: {currentRound.stats.ast.opp}</span>
                    </div>
                  </div>
                  <div className="h-6 bg-stone-950 rounded-md p-1 border border-stone-850 flex items-center relative">
                    <div className="h-full bg-orange-600/80 rounded" style={{ width: `${(currentRound.stats.ast.knicks / 30) * 100}%` }} />
                    <div className="absolute inset-y-0 right-1 leading-none self-center h-fit text-[10px] font-mono text-stone-500 pr-1">Max 30</div>
                  </div>
                  <div className="h-1 bg-stone-950 rounded-full overflow-hidden w-full relative">
                    <div className="h-full bg-cyan-600/50 rounded" style={{ width: `${(currentRound.stats.ast.opp / 30) * 100}%` }} />
                  </div>
                </div>

                {/* FG% */}
                <div className="space-y-1">
                  <div className="flex justify-between items-baseline text-[11px] font-mono text-stone-300">
                    <span className="font-sans font-bold">命中率 (FIELD GOAL %)</span>
                    <div className="space-x-3 text-[10px]">
                      <span className="text-orange-500">NYK: {currentRound.stats.fg.knicks}%</span>
                      <span className="text-stone-500">vs</span>
                      <span className="text-neutral-400">OPP: {currentRound.stats.fg.opp}%</span>
                    </div>
                  </div>
                  <div className="h-6 bg-stone-950 rounded-md p-1 border border-stone-850 flex items-center relative">
                    <div className="h-full bg-orange-600/80 rounded" style={{ width: `${(currentRound.stats.fg.knicks / 55) * 100}%` }} />
                    <div className="absolute inset-y-0 right-1 leading-none self-center h-fit text-[10px] font-mono text-stone-500 pr-1">Max 55%</div>
                  </div>
                  <div className="h-1 bg-stone-950 rounded-full overflow-hidden w-full relative">
                    <div className="h-full bg-cyan-600/50 rounded" style={{ width: `${(currentRound.stats.fg.opp / 55) * 100}%` }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Micro warning indicator */}
            <div className="mt-6 border-t border-stone-800/80 pt-3 flex items-center justify-between text-[10px] font-mono text-stone-500">
              <span className="flex items-center space-x-1.5">
                <Target className="w-3 h-3 text-sky-400" />
                <span>DYNAMIC SCRIPTS VERIFIED ON COURT</span>
              </span>
              <span>1998-99 EDITION</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
