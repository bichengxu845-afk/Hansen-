import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import RadarChart from "./RadarChart";
import { Flame, Star, Volume2, ShieldAlert } from "lucide-react";

export default function SprewellDial() {
  const [aggression, setAggression] = useState<number>(6.0); // 1.0 to 10.0
  const [focusMode, setFocusMode] = useState<"slasher" | "scorer" | "defender">("slasher");

  // Dynamically calculate attribute stats based on sliders and states
  const [attributes, setAttributes] = useState([
    { label: "得分突破能力 (SCORING)", value: 9.0 },
    { label: "篮下终结强爆 (FINISHING)", value: 6.3 },
    { label: "防守干扰破坏 (DEF DISRUPT)", value: 7.0 },
    { label: "强身硬朗对抗 (PHYSICALITY)", value: 6.5 },
    { label: "灌篮激情爆发 (DUNK EXPL)", value: 8.5 },
    { label: "持球单打拉开 (ISO PLAY)", value: 6.0 },
  ]);

  // Adjust attributes when sliders or mode changes
  useEffect(() => {
    let scoringFactor = 1.0;
    let finishingFactor = 1.0;
    let defenseFactor = 1.0;
    let physicalFactor = 1.0;
    let dunkFactor = 1.0;
    let isoFactor = 1.0;

    if (focusMode === "scorer") {
      scoringFactor = 1.15;
      isoFactor = 1.25;
      dunkFactor = 1.1;
      defenseFactor = 0.85;
    } else if (focusMode === "defender") {
      defenseFactor = 1.3;
      physicalFactor = 1.2;
      scoringFactor = 0.85;
      isoFactor = 0.85;
    } else {
      // slasher - balanced explosion
      scoringFactor = 1.05;
      finishingFactor = 1.15;
      dunkFactor = 1.2;
    }

    // Multiply by aggression multiplier
    const aggMultiplier = aggression / 6.0;

    setAttributes([
      { label: "得分突破能力 (SCORING)", value: Math.min(10, Math.round(9.0 * scoringFactor * aggMultiplier * 10) / 10) },
      { label: "篮下终结强爆 (FINISHING)", value: Math.min(10, Math.round(6.3 * finishingFactor * aggMultiplier * 10) / 10) },
      { label: "防守干扰破坏 (DEF DISRUPT)", value: Math.min(10, Math.round(7.0 * defenseFactor * ((12 - aggression) / 6.0) * 10) / 10) },
      { label: "强身硬朗对抗 (PHYSICALITY)", value: Math.min(10, Math.round(6.5 * physicalFactor * aggMultiplier * 10) / 10) },
      { label: "灌篮激情爆发 (DUNK EXPL)", value: Math.min(10, Math.round(8.5 * dunkFactor * aggMultiplier * 10) / 10) },
      { label: "持球单打拉开 (ISO PLAY)", value: Math.min(10, Math.round(6.0 * isoFactor * aggMultiplier * 10) / 10) },
    ]);
  }, [aggression, focusMode]);

  // Role output string
  const getRoleTitle = () => {
    if (aggression > 8.0 && focusMode === "scorer") return "狂飙单打野兽 (ISO SCORCHER)";
    if (aggression < 4.0 && focusMode === "defender") return "低调泥潭绞杀锁 (LOCKDOWN SHADOW)";
    if (focusMode === "defender") return "贴身撕咬防守铁闸 (CHOKE DEFENDER)";
    if (focusMode === "scorer") return "无限开火禁区刺客 (VOLUME ATTACKER)";
    return "铁血狂人劈扣拆解者 (SLASHING DYNAMO)";
  };

  const [soundTriggered, setSoundTriggered] = useState<boolean>(false);
  const playSprewellQuote = () => {
    setSoundTriggered(true);
    setTimeout(() => setSoundTriggered(false), 1200);
  };

  return (
    <div className="border border-orange-950 bg-stone-950 p-6 rounded-lg relative overflow-hidden">
      {/* Absolute rust sticker stamp style watermark */}
      <div className="absolute right-4 top-4 font-mono text-[9px] text-orange-500/10 border border-orange-500/10 px-2 py-1 rotate-6 select-none pointer-events-none">
        #8 / SG / GANG OF NY
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Dial Controls: 5 cols */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="flex items-center space-x-2 text-orange-500 mb-1">
              <Flame className="w-5 h-5 animate-pulse text-orange-500" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest">SPOTLIGHT PLAYER PROSPECTS</span>
            </div>
            <h3 className="text-2xl font-sans font-black text-stone-100 tracking-wider leading-none">
              拉崔尔·斯普雷维尔 <span className="font-mono text-lg text-orange-500 ml-1">#8 SPREWELL</span>
            </h3>
            <p className="text-xs text-stone-400 font-mono mt-1">
              "我可不是来做配角的！" — 98-99狂飚重炮发动机
            </p>
          </div>

          {/* Interactive Toggle tabs */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono text-stone-500 block uppercase tracking-widest font-bold">
              1. CHOOSE TACTICAL ASSIGNMENT • 战术职责切换
            </span>
            <div className="grid grid-cols-3 gap-2">
              {(["slasher", "scorer", "defender"] as const).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setFocusMode(mode)}
                  className={`px-2.5 py-2 rounded text-[10px] font-mono uppercase border transition-all cursor-pointer ${
                    focusMode === mode
                      ? "bg-orange-600/10 text-orange-400 border-orange-500/40 font-bold"
                      : "bg-stone-900 text-stone-400 border-stone-800 hover:border-stone-700 hover:text-stone-300"
                  }`}
                >
                  {mode === "slasher" && "⚡ 禁区突击"}
                  {mode === "scorer" && "🔥 无限开火"}
                  {mode === "defender" && "🛡️ 终极防守"}
                </button>
              ))}
            </div>
          </div>

          {/* Slider for Aggressiveness */}
          <div className="space-y-2">
            <div className="flex justify-between items-baseline">
              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest font-bold">
                2. AGGRESSION MULTIPLIER • 侵略性指数
              </span>
              <span className="text-sm font-mono font-black text-orange-500">{aggression.toFixed(1)} / 10</span>
            </div>
            <div className="p-3 bg-stone-900/60 rounded border border-stone-800 flex items-center space-x-3">
              <input
                type="range"
                min="1.0"
                max="10.0"
                step="0.5"
                value={aggression}
                onChange={(e) => setAggression(parseFloat(e.target.value))}
                className="flex-1 accent-orange-500 h-1 bg-stone-950 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Dynamic Analysis panel */}
          <div className="p-4 bg-stone-900 border border-stone-800 rounded relative">
            <span className="text-[10px] font-mono text-stone-500 block uppercase tracking-widest font-black leading-none mb-1.5">
              ESTIMATED CHEMICAL IMPACT • 战术推导输出
            </span>
            <div className="mt-1 flex items-start space-x-3">
              <div className="bg-orange-500/10 text-orange-500 p-2 rounded border border-orange-500/20">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-mono text-orange-400 font-bold tracking-tight">
                  {getRoleTitle()}
                </p>
                <p className="text-[11px] text-stone-400 font-sans mt-1 leading-relaxed">
                  {focusMode === "slasher" && "斯普雷维尔提供致命的转换砍伤。作为尼克斯反攻突击的核心，他的高速切入迫使对手收缩协防。"}
                  {focusMode === "scorer" && "狂人进入无限爆砍状态，单打欲望充盈！在尤因受伤时纽约的绝对解法，但在防守端可能会有些微散漫。"}
                  {focusMode === "defender" && "狂人收起利爪，化身全场缠绕锁匠。凭借身高臂长和超强求胜欲，封锁对方最锐利的外线终结核心。"}
                </p>
              </div>
            </div>
          </div>

          {/* Slogans quotes interactive trigger */}
          <div className="flex space-x-2 pt-2">
            <button
              onClick={playSprewellQuote}
              type="button"
              className="flex items-center space-x-2 px-3.5 py-2 rounded bg-stone-950 hover:bg-stone-900 text-stone-300 font-mono text-[10px] border border-stone-800 select-none cursor-pointer transition-all active:scale-95"
            >
              <Volume2 className={`w-3.5 h-3.5 ${soundTriggered ? "text-orange-500 hover:scale-125" : ""}`} />
              <span>STADIUM CHANT TRANSMISSION • 狂人怒吼</span>
            </button>
            {soundTriggered && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-[10.5px] text-orange-500 font-mono flex items-center bg-orange-600/5 px-2 py-1 rounded border border-orange-500/10"
              >
                🔊 "Don't write us off! GANG OF NEW YORK NEVER DIE!"
              </motion.div>
            )}
          </div>
        </div>

        {/* Dynamic Radar visualizers: 7 cols */}
        <div className="lg:col-span-7 flex flex-col md:flex-row items-center gap-6 justify-center bg-stone-900/40 border border-stone-800 p-4 rounded-lg relative">
          <div className="flex-1 w-full flex flex-col justify-center items-center">
            <span className="text-[10px] font-mono text-orange-500 uppercase tracking-widest font-black mb-3">
              POWER METRICS RADAR • 实战技能沙盘
            </span>
            <RadarChart
              data={attributes}
              color="stroke-orange-500"
              fillColor="fill-orange-500/15"
              maxValue={10}
            />
          </div>

          {/* Quick stats board */}
          <div className="w-full md:w-56 space-y-3.5">
            <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest font-black block">
              REAL-TIME OUTPUT • 雷达数据折算
            </span>
            <div className="space-y-2.5">
              {attributes.map((attr, idx) => (
                <div key={idx} className="bg-stone-950 p-2 rounded border border-stone-850 flex justify-between items-center text-xs font-mono">
                  <span className="text-stone-400 text-[10.5px] truncate">{attr.label.split(" (")[1].replace(")", "")}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-1.5 bg-stone-900 rounded-full overflow-hidden hidden sm:block">
                      <div className="h-full bg-orange-500 rounded-full" style={{ width: `${attr.value * 10}%` }} />
                    </div>
                    <span className="font-mono font-bold text-orange-500 w-6 text-right">{attr.value.toFixed(1)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
