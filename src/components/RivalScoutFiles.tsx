import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { opponentTeams } from "../data";
import { OpponentTeam } from "../types";
import RadarChart from "./RadarChart";
import { ShieldAlert, Crosshair, Skull, FileText, ChevronRight, Play } from "lucide-react";

export default function RivalScoutFiles() {
  const [activeTeamId, setActiveTeamId] = useState<string | null>(null);
  const activeTeam = opponentTeams.find((t) => t.id === activeTeamId) || null;

  // Selected hypothetical scenarios states
  const [scenarioSelect, setScenarioSelect] = useState<string>("");
  const [scenarioReport, setScenarioReport] = useState<string>("");

  const runHypotheticalMatchup = (scenario: string) => {
    setScenarioSelect(scenario);
    if (!activeTeam) return;

    if (activeTeam.id === "heat") {
      if (scenario === "fight") {
        setScenarioReport("🚨 [警告] 拼身体肉搏正中莱利下怀！莫宁和奥克利在篮下将发生剧烈摩擦。两队将陷入拉锯战，最后大概率通过一记防守抢断或罚球由尼克斯2分险胜，但代价是主力可能累积犯规过多。");
      } else if (scenario === "shoot") {
        setScenarioReport("🎯 [战术生效] 休斯顿与斯塔克斯开启中投牵制！拉克外线空间。大梦/莫宁因防不出来，火箭/热火防线被生生拉散，尼克斯转换进攻率上升15%，休斯顿0.8s奇迹在此重现！");
      } else {
        setScenarioReport("🔒 [窒息铁钳] 尤因禁区绝对屏障，哈珀全场领防哈达威，掐死热火转换。热火场均出手将压低至72次，尼克斯通过终极防守大锁，以88:80终结对手。");
      }
    } else if (activeTeam.id === "bulls") {
      if (scenario === "fight") {
        setScenarioReport("⚠️ [双刃剑] 与罗德曼及皮蓬拉扯对摔，虽然点燃麦迪逊热情，但乔丹会在泥潭里用致命低位后仰彻底收割比赛。尼克斯可能在第四节被公牛依靠反击一波流带走。");
      } else if (scenario === "shoot") {
        setScenarioReport("📊 [中投换分] Starks外线与Jordan对飙！需要拉里·约翰逊在低位疯狂背身要球，造成皮蓬协助包夹。一旦斯塔克斯和休斯顿冷箭三分投开，能强行咬住比分进入最后一攻生死局！");
      } else {
        setScenarioReport("👿 [杀神限制] 实施乔丹法则！奥克利与梅森进行强硬轮番合围，只要他在突破路线起跳便给予最极端的身体接触，逼迫皮蓬持球硬解。能限制乔丹命中率至41%以下，有机会在主场扳回一局。");
      }
    } else {
      // Rockets 1994
      if (scenario === "fight") {
        setScenarioReport("🌋 [巅峰博弈] 尤因与奥拉朱旺在低位正面血肉碰撞！奥拉朱旺‘梦幻舞步’依旧难防，但奥克利强硬顶腰消耗其体力。尼克斯凭借野蛮拼抢前场板，以微弱优势建立领先。");
      } else if (scenario === "shoot") {
        setScenarioReport("🏹 [冷枪反击] 针对火箭撤空内线的射手群。一旦哈珀在外线干扰下切断Kenny Smith的喂球轨，斯普雷维尔反击闪电劈扣能直接将马斯克底线拉垮，引爆麦迪逊。");
      } else {
        setScenarioReport("🛡️ [坚壁清野] 对奥拉朱旺实行前侧半包夹，防守中硬卡其下三盘。外线德里克·哈珀疯狗般堵截防空三分，将火箭限制在30%三分线外。尼克斯1994年一步之遥的历史悲剧在此被改写！");
      }
    }
  };

  const getTeamBadgeColor = (type: string) => {
    if (type === "mortal") return "bg-red-950 text-red-500 border-red-500/30";
    if (type === "finals") return "bg-yellow-950 text-yellow-500 border-yellow-500/30";
    return "bg-orange-950 text-orange-500 border-orange-500/30";
  };

  return (
    <div id="rival-wanted" className="border border-orange-900/50 bg-stone-950/80 rounded-lg p-6 relative overflow-hidden backdrop-blur-md">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(239,68,68,0.03),transparent_50%)] pointer-events-none" />

      {/* Header */}
      <div className="border-b border-stone-800 pb-4 mb-6">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-2 bg-red-600 rounded" />
          <div>
            <h2 className="text-xl font-sans font-bold text-stone-100 tracking-wider">
              宿敌悬赏通缉令 <span className="font-mono text-sm text-stone-500 ml-2">RIVAL WANTED DOSSIERS</span>
            </h2>
            <p className="text-xs text-stone-400 font-mono mt-0.5">
              ★★★ 1990年代尼克斯季后赛终极宿敌 / HEAD-TO-HEAD MORTAL ENEMY ARCHIVES ★★★
              </p>
          </div>
        </div>
      </div>

      {/* Main Grid: Three Dossier Badges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {opponentTeams.map((t) => {
          const isMortal = t.type === "mortal";
          const isFinals = t.type === "finals";
          return (
            <div
              key={t.id}
              onClick={() => {
                setActiveTeamId(t.id);
                setScenarioSelect("");
                setScenarioReport("");
              }}
              className="group cursor-pointer bg-stone-900/40 hover:bg-stone-900 border border-stone-800 hover:border-red-650 p-5 rounded-lg transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Top Warning Ribbon */}
              <div className="flex justify-between items-start">
                <span className={`text-[9px] font-mono uppercase tracking-widest font-black px-2 py-0.5 rounded border ${getTeamBadgeColor(t.type)}`}>
                  {t.wantedLevel}
                </span>
                <span className="font-mono text-xs text-stone-600">CONFIDENTIAL</span>
              </div>

              {/* Poster Body */}
              <div className="my-4 flex-1">
                {t.poster && (
                  <div className="relative aspect-[4/3] rounded-md overflow-hidden border border-stone-850 bg-stone-950 mb-3.5">
                    <img
                      src={t.poster}
                      alt={`${t.name} Retro Battle`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter saturate-[1.1] contrast-[1.05] group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-stone-900 to-transparent" />
                  </div>
                )}
                <div className="flex items-center justify-between pb-1 border-b border-stone-800">
                  <h3 className="text-base font-sans font-black text-stone-100 uppercase tracking-tight">
                    {t.name}
                  </h3>
                  <span className="text-xs font-mono font-bold text-stone-500">
                    {t.chineseName}
                  </span>
                </div>
                <p className="text-xs text-stone-400 font-sans mt-3 line-clamp-2 leading-relaxed">
                  {t.scoutNotes[0]}
                </p>
              </div>

              {/* Key threats listing banner */}
              <div className="border-t border-stone-800/60 pt-3 flex items-center justify-between text-xs font-mono text-stone-400">
                <div className="flex items-center space-x-1.5 text-stone-500">
                  <Skull className="w-3.5 h-3.5 text-red-500" />
                  <span>核心威胁: {t.keyThreats[0].chineseName}</span>
                </div>
                <span className="text-red-500 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Overlayer Dossier Sheet */}
      <AnimatePresence>
        {activeTeam && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) setActiveTeamId(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 25 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 25 }}
              transition={{ type: "spring", duration: 0.45 }}
              className="w-full max-w-5xl bg-stone-900 border border-red-550/20 rounded-xl overflow-hidden shadow-2xl p-6 md:p-8 max-h-[92vh] overflow-y-auto relative"
            >
              {/* Retro files decor */}
              <div className="absolute top-0 left-0 bg-red-600/10 text-red-500 font-mono text-[9px] px-3.5 py-1.5 uppercase font-bold tracking-widest border-r border-b border-stone-800 rounded-br leading-none">
                {activeTeam.wantedLevel} • INTERNAL SCOUT FILE
              </div>
              <button
                type="button"
                onClick={() => setActiveTeamId(null)}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-100 font-mono text-xs bg-stone-950 px-3 py-1.5 rounded border border-stone-800/80 hover:bg-stone-800 transition shadow-sm leading-none"
              >
                CLOSE DOSSIER [Esc]
              </button>

              <div id="rival-detailed-dossier" className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 animate-fade-in">
                {/* 1. PORTRAIT LEFT BLOCK: 4 columns */}
                {activeTeam.poster && (
                  <div className="lg:col-span-4 flex flex-col justify-start space-y-3">
                    <div className="relative overflow-hidden rounded-lg border border-red-950 bg-stone-950 p-1 shadow-xl">
                      {/* Retro corner marks */}
                      <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-red-500" />
                      <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-red-500" />
                      <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-red-500" />
                      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-red-500" />

                      <img
                        src={activeTeam.poster}
                        alt={activeTeam.name}
                        referrerPolicy="no-referrer"
                        className="w-full aspect-[4/3] object-cover rounded shadow filter saturate-[1.15] contrast-[1.05]"
                      />
                    </div>
                    <div className="bg-stone-950 p-2.5 rounded border border-stone-850 text-center">
                      <span className="text-[9px] font-mono text-stone-500 block uppercase tracking-wide">RIVAL CLASH DESIGN RECORD</span>
                      <span className="text-[10px] font-mono font-bold text-red-500 uppercase tracking-widest">{activeTeam.wantedLevel}</span>
                    </div>
                  </div>
                )}

                {/* 2. STATS & BACKGROUND INFORMATION: 4 or 8 columns */}
                <div className={`${activeTeam.poster ? "lg:col-span-4" : "lg:col-span-7"} space-y-4`}>
                  <div className="border-b border-stone-800/80 pb-3 flex items-baseline space-x-3">
                    <h3 className="text-xl font-sans font-black text-stone-100 tracking-wider">
                      {activeTeam.name}
                    </h3>
                    <span className="text-xs font-mono font-bold text-red-500">
                      {activeTeam.chineseName}
                    </span>
                  </div>

                  {/* Scout notes checklist */}
                  <div className="space-y-2.5">
                    <span className="text-[9px] font-mono text-stone-500 uppercase tracking-widest font-black block">
                      SCOUT NOTES • 特派教练战术札记
                    </span>
                    <ul className="space-y-2 bg-stone-950 p-3 rounded border border-stone-850/80">
                      {activeTeam.scoutNotes.map((note, idx) => (
                        <li key={idx} className="flex items-start text-[11px] text-stone-300 leading-relaxed">
                          <span className="text-red-500 mr-2 font-mono font-bold">[{idx + 1}]</span>
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key threats posters */}
                  <div className="space-y-2">
                    <span className="text-[9px] font-mono text-stone-500 uppercase tracking-widest font-black block">
                      KEY THREATS TARGETS • 核心威胁目标
                    </span>
                    <div className="grid grid-cols-1 gap-2.5">
                      {activeTeam.keyThreats.map((threat, idx) => (
                        <div key={idx} className="p-2.5 bg-stone-950 border border-stone-850 rounded relative flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-baseline border-b border-stone-800/60 pb-1 mb-1">
                              <h4 className="text-[11px] font-sans font-bold text-stone-200">{threat.chineseName}</h4>
                              <span className="text-[9px] font-mono text-red-500">{threat.role}</span>
                            </div>
                            <p className="text-[9px] font-mono text-stone-400 uppercase tracking-tight">{threat.name}</p>
                            <p className="text-[10px] text-stone-400 font-sans mt-1 leading-normal">
                              {threat.threatDesc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3. RADAR & MATCHUP PLOTS: 4 columns */}
                <div className="lg:col-span-4 flex flex-col justify-between bg-stone-950/40 border border-stone-800 p-4 rounded-lg">
                  <div>
                    <span className="text-[10px] font-mono text-red-500 block uppercase tracking-widest font-black mb-1 text-center">
                      TACTICAL CAPACITY RADAR • 对手战力沙盘
                    </span>
                    <p className="text-[9px] font-mono text-stone-500 text-center uppercase tracking-wide mb-4">
                      DERIVED FROM ACTUAL 90S PLAYOFF SERIES INTENSITY
                    </p>

                    <div className="flex items-center justify-center py-2">
                      <RadarChart
                        data={activeTeam.tacticalStrengths.map(s => ({
                          label: s.label.split(" (")[0],
                          value: s.value
                        }))}
                        color="stroke-red-500"
                        fillColor="fill-red-500/10"
                        maxValue={10}
                      />
                    </div>
                  </div>

                  {/* Interactive scenarios sandbox */}
                  <div className="border-t border-stone-800/80 pt-4 mt-4 space-y-3">
                    <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest font-black block">
                      🔥 HYPOTHETICAL MATCHUP SIMULATION • 战术兵盘推演
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => runHypotheticalMatchup("fight")}
                        type="button"
                        className={`px-2 py-1.5 rounded text-[10px] font-mono uppercase border cursor-pointer text-center leading-none ${
                          scenarioSelect === "fight"
                            ? "bg-red-500/15 text-red-400 border-red-500/40"
                            : "bg-stone-900 text-stone-400 border-stone-800 hover:border-stone-705"
                        }`}
                      >
                        ✊ 肌肉绞肉对撼
                      </button>
                      <button
                        onClick={() => runHypotheticalMatchup("shoot")}
                        type="button"
                        className={`px-2 py-1.5 rounded text-[10px] font-mono uppercase border cursor-pointer text-center leading-none ${
                          scenarioSelect === "shoot"
                            ? "bg-red-500/15 text-red-400 border-red-500/40"
                            : "bg-stone-900 text-stone-400 border-stone-800 hover:border-stone-705"
                        }`}
                      >
                        🎯 精准弹道中投
                      </button>
                      <button
                        onClick={() => runHypotheticalMatchup("defender")}
                        type="button"
                        className={`px-2 py-1.5 rounded text-[10px] font-mono uppercase border cursor-pointer text-center leading-none ${
                          scenarioSelect === "defender"
                            ? "bg-red-500/15 text-red-400 border-red-500/40"
                            : "bg-stone-900 text-stone-400 border-stone-800 hover:border-stone-705"
                        }`}
                      >
                        🔒 全场大锁封杀
                      </button>
                    </div>

                    <AnimatePresence mode="wait">
                      {scenarioReport && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="bg-stone-900 p-3 rounded border border-stone-800/60"
                        >
                          <p className="text-[11px] font-sans text-stone-300 leading-relaxed font-medium">
                            {scenarioReport}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
