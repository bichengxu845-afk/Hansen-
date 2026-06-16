import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { defensiveMetrics, globalTeamAttributes } from "../data";
import { Shield, ShieldAlert, HeartCrack, Volume2, HardHat, TrendingUp } from "lucide-react";

export default function DefensiveDNAPanel() {
  const [selectedSeason, setSelectedSeason] = useState<"91-92" | "92-93">("91-92");
  const [activePillar, setActivePillar] = useState<string>("rim");

  const pillars = [
    {
      id: "suppression",
      label: "投篮压制 (SHOT SUPPRESSION)",
      value: 93,
      desc: "利用疯狂的外线缠绕断阻对方传球轨，在外线迫使对手顶人高难度出手。哈珀与斯塔克斯构建外层窒息圈，切断战术传接。",
      status: "TOP 5 IN LEAGUE"
    },
    {
      id: "rim",
      label: "护筐威慑 (RIM PROTECTION)",
      value: 98,
      desc: "尤因绝对禁防神威。33号禁区核心镇守，在两扇肋部走廊布满飞掠大帽。任何企图进入油漆区的空切都会遭受最暴烈的迎面摧毁。",
      status: "RANK #1 FOR 2 YEARS"
    },
    {
      id: "rebound",
      label: "篮板控制 (REBOUND MIN)",
      value: 95,
      desc: "查尔斯·奥克利和尤因双人背身卡人，扼守后场生命线。以不惜撞断肋骨的坚毅搏下每一个防守和二次进攻篮板。",
      status: "LEAGUE DEFENSIVE TOP 1"
    },
    {
      id: "physical",
      label: "身体对抗 (PHYSICALITY)",
      value: 94,
      desc: "野蛮野兽般的贴身倾轧。奥克利与安东尼·梅森用宽厚敦实的身体卡住腰位、肋部和禁区盲区，通过不懈推搡对撼消耗对方王牌体能。",
      status: "LEAGUE RANKING #1"
    },
    {
      id: "communication",
      label: "防守沟通 (COMMUNICATION)",
      value: 91,
      desc: "全场呼喊与阵地轮转配合。德里克·哈珀像皮圈般牵扯其余四人在无球时形成局部多包一，协防弹簧圈始终能弹性收缩回位。",
      status: "ELITE SYSTEM DECK"
    }
  ];

  return (
    <div id="defensive-dna" className="border border-orange-900/50 bg-stone-950/80 rounded-lg p-6 relative overflow-hidden backdrop-blur-md">
      {/* Background neon style lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,130,32,0.03),transparent_50%)] pointer-events-none" />

      {/* Header section */}
      <div className="border-b border-stone-800 pb-4 mb-6">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-2 bg-orange-500 rounded" />
          <div>
            <h2 className="text-xl font-sans font-bold text-stone-100 tracking-wider">
              防守基因剖析 <span className="font-mono text-sm text-stone-500 ml-2">DEFENSIVE DNA MATRIX</span>
            </h2>
            <p className="text-xs text-stone-400 font-mono mt-0.5">
              ★★★ 纽约黑帮黑底磨砂钢骨骼防御机制，彻底打破常规的极致肉搏体系 ★★★
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: 5 Pillars Details Interactive Cards (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest font-black block mb-2">
            FIVE PILLARS OF GRIT ERA • 铁血防守五大支柱
          </span>

          <div className="space-y-3">
            {pillars.map((pil) => {
              const isActive = activePillar === pil.id;
              return (
                <div
                  key={pil.id}
                  onClick={() => setActivePillar(pil.id)}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    isActive
                      ? "bg-stone-900 border-orange-500/50 shadow-md shadow-orange-500/3"
                      : "bg-stone-950/40 border-stone-800 hover:border-stone-750 hover:bg-stone-900/15"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2.5">
                      <Shield className={`w-4 h-4 ${isActive ? "text-orange-500" : "text-stone-500"}`} />
                      <h4 className="text-sm font-sans font-bold text-stone-200">
                        {pil.label}
                      </h4>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className="text-[9px] font-mono bg-stone-900 border border-stone-800 px-1.5 py-0.5 rounded text-stone-400 text-right">
                        {pil.status}
                      </span>
                      <span className="font-mono font-black text-orange-500 text-sm">
                        {pil.value}%
                      </span>
                    </div>
                  </div>

                  {/* Collapsible/Expandable descriptive block */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 border-t border-stone-800/60 mt-3 flex items-start space-x-3">
                          <p className="text-xs text-stone-300 leading-relaxed font-sans">
                            {pil.desc}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: "No Easy Buckets" Comparative Table Tool (5 cols) */}
        <div className="lg:col-span-5 bg-stone-900/50 border border-stone-800 p-5 rounded-lg flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center border-b border-stone-800 pb-2 mb-4">
              <span className="text-[10px] font-mono text-orange-500 uppercase tracking-widest font-black leading-none">
                📊 NO EASY BUCKETS • 终极禁飞区数据对比
              </span>

              {/* Season Selection button tab */}
              <div className="flex rounded overflow-hidden border border-stone-800 p-0.5 bg-stone-950">
                <button
                  type="button"
                  onClick={() => setSelectedSeason("91-92")}
                  className={`px-2 py-1 text-[9px] font-mono rounded cursor-pointer ${
                    selectedSeason === "91-92"
                      ? "bg-orange-600/10 text-orange-400 font-bold"
                      : "text-stone-500 hover:text-stone-300"
                  }`}
                >
                  91-92
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedSeason("92-93")}
                  className={`px-2 py-1 text-[9px] font-mono rounded cursor-pointer ${
                    selectedSeason === "92-93"
                      ? "bg-orange-600/10 text-orange-400 font-bold"
                      : "text-stone-500 hover:text-stone-300"
                  }`}
                >
                  92-93
                </button>
              </div>
            </div>

            {/* Metrics List rendering with Visual progress lines */}
            <div className="space-y-5">
              {defensiveMetrics.map((met, idx) => {
                const is91 = selectedSeason === "91-92";
                const value = is91 ? met.era91_92 : met.era92_93;
                const rank = is91 ? met.era91_92_rank : met.era92_93_rank;

                // Max scale for visualization (points: 120, rating: 120, fg%: 60, paint: 55)
                let maxVal = 110;
                let numVal = typeof value === "string" ? parseFloat(value) : value;
                if (met.label.includes("Rating")) maxVal = 120;
                if (met.label.includes("FG%")) maxVal = 60;
                if (met.label.includes("Paint")) maxVal = 60;

                return (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between items-baseline text-xs font-mono">
                      <span className="text-stone-300 font-bold">{met.chineseLabel}</span>
                      <div className="space-x-1.5 text-[10px]">
                        <span className="text-orange-500 font-medium">{value}</span>
                        <span className="text-stone-600">|</span>
                        <span className="text-sky-400 font-bold">联盟第 {rank}</span>
                      </div>
                    </div>
                    {/* Visual custom bar with orange glowing rank color */}
                    <div className="h-5 bg-stone-950 border border-stone-850 rounded p-0.5 relative flex items-center">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(numVal / maxVal) * 100}%` }}
                        transition={{ duration: 0.5 }}
                        className="h-full bg-gradient-to-r from-orange-650 to-orange-550 rounded"
                      />
                      <div className="absolute right-2 text-[9px] font-mono text-stone-600 font-bold select-none pointer-events-none">
                        RANK {rank}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Core team global attributes widget */}
          <div className="border-t border-stone-800/80 pt-4 mt-5 space-y-3">
            <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest font-black block">
              ⭐ GLOBAL ATTRIBUTES • 尼克斯全队防守基线指数
            </span>
            <div className="grid grid-cols-2 gap-2.5">
              {globalTeamAttributes.slice(0, 4).map((attr, idx) => (
                <div key={idx} className="bg-stone-950 p-2.5 border border-stone-850 rounded flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-mono text-stone-500 uppercase block leading-none">
                      {attr.label.split(" (")[1].replace(")", "")}
                    </span>
                    <span className="text-[11px] font-sans font-bold text-stone-300 mt-1 block">
                      {attr.label.split(" (")[0]}
                    </span>
                  </div>
                  <span className="font-mono text-sm font-black text-orange-500">
                    {attr.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
