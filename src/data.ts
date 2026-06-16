import { Player, OpponentTeam, PlayoffRound, DefensiveMetric } from "./types";

import ewingPortrait from "./assets/images/ewing_portrait_1781596036400.jpg";
import oakleyPortrait from "./assets/images/oakley_portrait_1781596057572.jpg";
import masonPortrait from "./assets/images/mason_portrait_1781596139192.jpg";
import starksPortrait from "./assets/images/starks_portrait_1781596074545.jpg";
import harperPortrait from "./assets/images/harper_portrait_1781596122522.jpg";
import houstonPortrait from "./assets/images/houston_portrait_1781596104683.jpg";
import sprewellPortrait from "./assets/images/sprewell_portrait_1781596088194.jpg";

import heatPoster from "./assets/images/heat_rival_poster_1781596158163.jpg";
import bullsPoster from "./assets/images/bulls_rival_poster_1781596173571.jpg";
import rocketsPoster from "./assets/images/rockets_rival_poster_1781596189460.jpg";

export const players: Player[] = [
  {
    id: "ewing",
    name: "Patrick Ewing",
    chineseName: "帕特里克·尤因",
    number: "33",
    portrait: ewingPortrait,
    role: "Paint Anchor / Core",
    roleDescription: "33号禁区核心。尤因33号镇守禁区，奥克利、梅森、斯塔克斯组成铁血班底，重构90年代纽约尼克斯的硬汉篮球档案。",
    quote: "我基本不只是为了得分而战，我为捍卫禁区而生。我热爱防守，热爱把对方帽翻！",
    stats: [
      { label: "场均得分 (PPG)", value: 21.6 },
      { label: "场均篮板 (RPG)", value: 10.9 },
      { label: "场均盖帽 (BPG)", value: 3.45 },
      { label: "场均时间 (MIN)", value: 37.5 },
      { label: "季后赛场均篮板", value: 11.7 },
    ],
    attributes: [
      { label: "防守统领 (DEFENSE)", value: 9.8 },
      { label: "篮板狂怒 (REBOUND)", value: 9.6 },
      { label: "盖帽封锁 (BLOCKS)", value: 9.7 },
      { label: "强硬对抗 (PHYSICAL)", value: 9.5 },
      { label: "意志力量 (WILLPOWER)", value: 9.3 },
      { label: "领袖气质 (LEADERSHIP)", value: 9.0 },
    ],
    avatarBg: "from-sky-900 to-stone-900"
  },
  {
    id: "oakley",
    name: "Charles Oakley",
    chineseName: "查尔斯·奥克利",
    number: "34",
    portrait: oakleyPortrait,
    role: "The Enforcer",
    roleDescription: "大前锋 PF。纽约著名的保镖。负责干脏活累活，扫货地板球，绝不让任何对手在尼克斯禁区内散步，是不折不扣的硬骨头。",
    quote: "如果你没准备好和我们打拳击，就离底线远一点。",
    stats: [
      { label: "场均篮板 (RPG)", value: 9.6 },
      { label: "场均得分 (PPG)", value: 10.2 },
      { label: "场均抢断 (SPG)", value: 1.3 },
      { label: "身体犯规率", value: "A+" },
    ],
    attributes: [
      { label: "防守统领 (DEFENSE)", value: 9.4 },
      { label: "篮板狂怒 (REBOUND)", value: 9.2 },
      { label: "盖帽封锁 (BLOCKS)", value: 6.5 },
      { label: "强硬对抗 (PHYSICAL)", value: 10.0 },
      { label: "意志力量 (WILLPOWER)", value: 9.8 },
      { label: "领袖气质 (LEADERSHIP)", value: 8.5 },
    ],
    avatarBg: "from-orange-950 to-stone-900"
  },
  {
    id: "mason",
    name: "Anthony Mason",
    chineseName: "安东尼·梅森",
    number: "14",
    portrait: masonPortrait,
    role: "Two-Way Wing",
    roleDescription: "前锋 SF/PF。身体极其壮硕。既拥有像卡车一样的对抗身躯，又具备控球前锋的神奇传导能耐，外线贴身撕咬能力极强。",
    quote: "你可以在我身上得分，但代价是接下来一星期都需要冰敷。",
    stats: [
      { label: "场均得分 (PPG)", value: 11.6 },
      { label: "场均篮板 (RPG)", value: 8.4 },
      { label: "场均助攻 (APG)", value: 4.1 },
      { label: "体力持久度", value: "40.2m" },
    ],
    attributes: [
      { label: "防守统领 (DEFENSE)", value: 9.2 },
      { label: "篮板狂怒 (REBOUND)", value: 8.0 },
      { label: "盖帽封锁 (BLOCKS)", value: 6.0 },
      { label: "强硬对抗 (PHYSICAL)", value: 9.9 },
      { label: "意志力量 (WILLPOWER)", value: 9.5 },
      { label: "领袖气质 (LEADERSHIP)", value: 8.0 },
    ],
    avatarBg: "from-blue-950 to-amber-950"
  },
  {
    id: "starks",
    name: "John Starks",
    chineseName: "约翰·斯塔克斯",
    number: "3",
    portrait: starksPortrait,
    role: "Scoring Guard / Firebrand",
    roleDescription: "得分后卫 SG。从超市理货员打到全明星的硬地平民英雄。拥有极强的情感爆发力，其绝命隔扣乔丹被称为麦迪逊永远的经典。",
    quote: "我只要上场就是倾其所有。如果乔丹要过我，他必须踩着我倒下的身体。",
    stats: [
      { label: "场均得分 (PPG)", value: 14.3 },
      { label: "场均助攻 (APG)", value: 5.1 },
      { label: "场均三分命中", value: 1.8 },
      { label: "单季最高罚球", value: "85.2%" },
    ],
    attributes: [
      { label: "防守统领 (DEFENSE)", value: 8.5 },
      { label: "篮板狂怒 (REBOUND)", value: 4.0 },
      { label: "盖帽封锁 (BLOCKS)", value: 3.0 },
      { label: "强硬对抗 (PHYSICAL)", value: 8.8 },
      { label: "意志力量 (WILLPOWER)", value: 10.0 },
      { label: "领袖气质 (LEADERSHIP)", value: 8.2 },
    ],
    avatarBg: "from-sky-950 to-orange-950"
  },
  {
    id: "harper",
    name: "Derek Harper",
    chineseName: "德里克·哈珀",
    number: "11",
    portrait: harperPortrait,
    role: "Lockdown PG",
    roleDescription: "控球后卫 PG。冷酷智慧，老辣坚毅的更衣室指挥官。以极高强度的前场疯狂领防著称，是尼克斯全场窒息大锁的引擎所在。",
    quote: "防守不要指望靠单干，我们要构建的是五个人咬在一起的嗜血锁链。",
    stats: [
      { label: "场均得分 (PPG)", value: 12.0 },
      { label: "场均助攻 (APG)", value: 4.8 },
      { label: "场均抢断 (SPG)", value: 1.6 },
      { label: "前场施压率", value: "Elite" },
    ],
    attributes: [
      { label: "防守统领 (DEFENSE)", value: 9.6 },
      { label: "篮板狂怒 (REBOUND)", value: 3.5 },
      { label: "盖帽封锁 (BLOCKS)", value: 4.0 },
      { label: "强硬对抗 (PHYSICAL)", value: 8.2 },
      { label: "意志力量 (WILLPOWER)", value: 9.3 },
      { label: "领袖气质 (LEADERSHIP)", value: 9.0 },
    ],
    avatarBg: "from-stone-800 to-amber-950"
  },
  {
    id: "houston",
    name: "Allan Houston",
    chineseName: "阿兰·休斯顿",
    number: "20",
    portrait: houstonPortrait,
    role: "The Pure Shooter",
    roleDescription: "得分后卫 SG。中投王，中投教科书。1998-99赛季黑八征程中射落无数冷冷绝杀，用精准优雅的致命弹道打破肌肉泥潭。",
    quote: "即使在最粘稠窒息的防守网下，我的出手机构仍然是绝对完美的15度斜划。",
    stats: [
      { label: "场均得分 (PPG)", value: 16.5 },
      { label: "三分命中率", value: "40.7%" },
      { label: "中投百分比", value: "52.4%" },
      { label: "大心脏时刻", value: "Match Winner" },
    ],
    attributes: [
      { label: "防守统领 (DEFENSE)", value: 7.0 },
      { label: "篮板狂怒 (REBOUND)", value: 3.0 },
      { label: "盖帽封锁 (BLOCKS)", value: 2.5 },
      { label: "强硬对抗 (PHYSICAL)", value: 7.2 },
      { label: "意志力量 (WILLPOWER)", value: 8.8 },
      { label: "领袖气质 (LEADERSHIP)", value: 8.0 },
    ],
    avatarBg: "from-stone-900 to-sky-950"
  },
  {
    id: "sprewell",
    name: "LaTrell Sprewell",
    chineseName: "拉崔尔·斯普雷维尔",
    number: "8",
    portrait: sprewellPortrait,
    role: "The Slasher / Dynamo",
    roleDescription: "得分后卫/小前锋。狂人。1998-99黑八奇迹的主力狂飚发动机。打法泼辣狠毒，切入速度宛如雷霆万钧劈砍内线，意志极其不驯。",
    quote: "我可不是来做配角的。当所有人精疲力竭、泥潭厮杀时，我会用100码的时速把篮筐扯成粉碎！",
    stats: [
      { label: "得分强硬度 (PPG)", value: 16.4 },
      { label: "场均突破杀伤", value: "9.0" },
      { label: "持球拉开硬解", value: "6.0" },
      { label: "强硬防守破坏", value: "7.0" },
    ],
    attributes: [
      { label: "得分突破能力", value: 9.0 },
      { label: "篮下终结强爆", value: 6.3 },
      { label: "防守干扰破坏", value: 7.0 },
      { label: "强身硬朗对抗", value: 6.5 },
      { label: "灌篮激情爆发", value: 8.5 },
      { label: "持球单打拉开", value: 6.0 },
    ],
    avatarBg: "from-red-950 to-stone-900"
  }
];

export const opponentTeams: OpponentTeam[] = [
  {
    id: "heat",
    name: "Miami Heat",
    chineseName: "迈阿密热火",
    poster: heatPoster,
    type: "rival",
    wantedLevel: "宿敌特供-高危特辑",
    scoutNotes: [
      "由铁血尼克斯前任主帅帕特·莱利执掌，是尼克斯战术基因的镜像折射。",
      "内线由阿朗佐·莫宁死死扎根，防守强韧度比肩尤因，极其凶悍。",
      "1997、1998、1999、2000连续四年在季后赛撕咬搏杀，几乎每场都有肉搏乃至互殴冲突。",
      "1999年首轮，休斯顿以绝对不可思议的黑八飘移绝杀将迈阿密人扼杀于家门。"
    ],
    tacticalStrengths: [
      { label: "阵地勒防 (DEF PACE)", value:  9.3 },
      { label: "身体肌肉对抗 (PHYSICALITY)", value: 9.9 },
      { label: "内线围剿保护 (PAINT DEF)", value: 8.9 },
      { label: "关键球绞杀 (CLUTCH EXE)", value: 8.4 },
      { label: "全队战术硬度 (TEAM COHESION)", value: 9.4 }
    ],
    keyThreats: [
      {
        name: "Alonzo Mourning",
        chineseName: "阿朗佐·莫宁",
        role: "C / Paint Beast",
        threatDesc: "盖帽恶兽。不要正面在他头顶出手。防守不惜骨折，铁人意志。"
      },
      {
        name: "Tim Hardaway",
        chineseName: "蒂姆·哈达威",
        role: "PG / Crossover King",
        threatDesc: "变向奇快。外线冷血三分，转换快攻发动机。注意领防他的换手切入。"
      }
    ],
    color: "from-red-800 to-amber-950"
  },
  {
    id: "bulls",
    name: "Chicago Bulls",
    chineseName: "芝加哥公牛",
    poster: bullsPoster,
    type: "mortal",
    wantedLevel: "特等通缉-超级恶龙",
    scoutNotes: [
      "90年代不可撼动的绝对铁幕。1991、1992、1993、1996连续在王座之路狙击尼克斯。",
      "迈克尔·乔丹拥有无解的中投解法以及惊天的运动反击，堪称外线杀神。",
      "皮蓬与皮特曼、罗德曼构建了不可逾越的手臂外屏窒息圈，切断我们的前场配合。",
      "公牛在关键时刻对于皮球的掌控近乎魔幻。防守极其有针对性，会切断尤因的低位左侧转身。"
    ],
    tacticalStrengths: [
      { label: "降维进攻火力 (ATTACK POWER)", value: 10.0 },
      { label: "协防围追锁死 (TEAM DEFENSE)", value: 9.8 },
      { label: "惊人运动反击 (ATHLETICISM)", value: 9.7 },
      { label: "神化关键终结 (CLUTCH GOAT)", value: 9.9 },
      { label: "冠军金身护照 (CHAMPION AURA)", value: 10.0 }
    ],
    keyThreats: [
      {
        name: "Michael Jordan",
        chineseName: "迈克尔·乔丹",
        role: "SG / The GOAT",
        threatDesc: "超级无解的单兵刺客，用极限滞空和变态低位中距离打穿任何体系。需要双人合围。"
      },
      {
        name: "Scottie Pippen",
        chineseName: "斯科蒂·皮蓬",
        role: "SF / Point Forward",
        threatDesc: "外线大锁。手臂极长，全场飞驰抢断，在转换防守中极高频率摧毁传球线路。"
      },
      {
        name: "Dennis Rodman",
        chineseName: "丹尼斯·罗德曼",
        role: "PF / Rebound King",
        threatDesc: "不可理喻的篮板巨兽。负责用极尽挑衅的动作和不要命的拼抢摧残奥克利和尤因的心态。"
      }
    ],
    color: "from-red-900 to-black"
  },
  {
    id: "rockets",
    name: "Houston Rockets",
    chineseName: "休斯敦火箭",
    poster: rocketsPoster,
    type: "finals",
    wantedLevel: "终级悬赏-血泪决战",
    scoutNotes: [
      "1994年尼克斯离总冠军最近的一次。在3-2领衔的大好局面下，被奥拉朱旺在大梦禁区内无情遮退。",
      "哈基姆·奥拉朱旺拥有世界上最华丽繁复的‘梦幻舞步’，是尤因的一生之敌。",
      "火箭的三分神射群（肯尼·史密斯、卡塞尔、霍里）在空挡中极其冷静致命，克莱德·德雷克斯勒后期加入保驾护航。",
      "尼克斯必须在内线给予奥拉朱旺无时无刻的倾轧和推搡肉搏，消耗其体力。"
    ],
    tacticalStrengths: [
      { label: "内线梦幻统领 (PAINT REGAL)", value: 10.0 },
      { label: "外线三分冷箭 (3PT SNIPERS)", value: 9.1 },
      { label: "顶级防守应变 (DEF FLEX)", value: 9.5 },
      { label: "关键咬牙反扑 (CLUTCH RESP)", value: 9.6 },
      { label: "硬朗拼抢篮板 (REBOUND STG)", value: 9.4 }
    ],
    keyThreats: [
      {
        name: "Hakeem Olajuwon",
        chineseName: "哈基姆·奥拉朱旺",
        role: "C / The Dream",
        threatDesc: "难以置信的盖帽神威。梦幻舞步能将尤因骗倒，拥有大范围的中远投距离，不惧贴背对抗。"
      },
      {
        name: "Clyde Drexler",
        chineseName: "克莱德·德雷克斯勒",
        role: "SG / Glide",
        threatDesc: "后起主力保驾。拥有老辣的禁区空切，极快推进，防不胜防的攻防中坚。"
      },
      {
        name: "Kenny Smith",
        chineseName: "肯尼·史密斯",
        role: "PG / The Jet",
        threatDesc: "超级致命的外线高压拉冷枪，在奥拉朱旺吸附包夹时用冷箭直接绞杀尼克斯的防守线。"
      }
    ],
    color: "from-red-950 to-stone-900"
  }
];

export const playoffRounds: PlayoffRound[] = [
  {
    roundName: "First Round (1999)",
    chineseRoundName: "季后赛首轮惊天决战",
    opponent: "Miami Heat (No. 1 Seed)",
    chineseOpponent: "迈阿密热火 (老对手生死局)",
    result: "win",
    seriesResult: "3 - 2 Win",
    story: "死敌莫宁坐镇的头号种子热火本想轻松碾碎尼克斯。双方每一百回合仅打出80分左右的史诗窒息防守。生死第5战，阿兰·休斯顿在最后0.8秒投出一记奇幻飘逸的单脚绝命抛投，球砸框弹跳跌网！纽约实现了旷古绝今的‘黑八奇迹’！",
    stats: {
      pts: { knicks: 97.0, opp: 92.6 },
      reb: { knicks: 41.0, opp: 38.6 },
      ast: { knicks: 21.0, opp: 17.6 },
      fg: { knicks: 43.6, opp: 42.0 }
    },
    keyPlayer: {
      name: "Allan Houston (阿兰·休斯顿)",
      contribution: "第5战0.8秒神仙抛投，中弹致命绝杀！全场贡献22分，黑八总引擎。"
    }
  },
  {
    roundName: "Semi-Finals (1999)",
    chineseRoundName: "东部半决赛铁血围猎",
    opponent: "Atlanta Hawks (No. 4 Seed)",
    chineseOpponent: "亚特兰大老鹰 (空中禁飞区)",
    result: "win",
    seriesResult: "4 - 0 Sweep",
    story: "尼克斯将窒息包夹压榨到了顶点。老鹰队的大后卫和锋线每次切入都会遭受尤因和拉里·约翰逊的迎面飞掌。尼克斯没有给对手丝毫调整空间，在麦迪逊狂潮的吼叫中4-0横扫老鹰出局，惊呆世人。",
    stats: {
      pts: { knicks: 89.5, opp: 78.4 },
      reb: { knicks: 44.2, opp: 36.8 },
      ast: { knicks: 18.0, opp: 14.5 },
      fg: { knicks: 45.1, opp: 39.5 }
    },
    keyPlayer: {
      name: "LaTrell Sprewell (斯普雷维尔)",
      contribution: "场均飞掠乱战20.3分，极速防守转换断球，用不羁斗志跑散了老鹰阵脚。"
    }
  },
  {
    roundName: "Conference Finals (1999)",
    chineseRoundName: "东部决战铁血绞杀",
    opponent: "Indiana Pacers (No. 2 Seed)",
    chineseOpponent: "印第安纳步行者 (死掐雷吉·米勒)",
    result: "win",
    seriesResult: "4 - 2 Win",
    story: "宿怨纠结的经典豪烈对决。虽然尤因在第2场跟腱断裂报销，但无名悍将们咬紧牙根爆发出了恐怖烈度。第3场拉里·约翰逊神迹般的打进‘3+1’绝命救赎球，斯塔克斯和克里斯·柴尔斯像恶犬一样在三分线外缠绕步行者神射手米勒，将对手拖进深渊，纽约摘下东部冠军王冠！",
    stats: {
      pts: { knicks: 92.0, opp: 88.5 },
      reb: { knicks: 40.5, opp: 39.0 },
      ast: { knicks: 19.5, opp: 18.2 },
      fg: { knicks: 44.0, opp: 43.1 }
    },
    keyPlayer: {
      name: "Larry Johnson (拉里·约翰逊)",
      contribution: "季后赛史上无与伦比的3+1轰天怒吼！神殿级逆转狂澜。"
    }
  },
  {
    roundName: "NBA Finals (1999)",
    chineseRoundName: "总决赛单骑对铁塔",
    opponent: "San Antonio Spurs (No. 1 Seed)",
    chineseOpponent: "圣安东尼奥马刺 (双塔碾压局)",
    result: "loss",
    seriesResult: "1 - 4 Loss",
    story: "尤因完全缺席下，独挡双塔（邓肯、罗宾逊）的纽约断臂出征，悲壮无比。虽战至一兵一卒，拉崔尔·斯普雷维尔在第五战大砍35分，在邓肯面前疯狂突破拼下无限尊严，全队战斗至汽油焚尽、弹药精光。虽败犹荣，纽约铁骨名扬篮坛！",
    stats: {
      pts: { knicks: 80.2, opp: 84.8 },
      reb: { knicks: 35.6, opp: 43.4 },
      ast: { knicks: 15.1, opp: 19.8 },
      fg: { knicks: 39.2, opp: 44.5 }
    },
    keyPlayer: {
      name: "LaTrell Sprewell (斯普雷维尔)",
      contribution: "第5战血战到底爆砍35分，拼尽狂人最后的力气撕扯海军上将与石佛的封锁。"
    }
  }
];

export const defensiveMetrics: DefensiveMetric[] = [
  {
    label: "Points Allowed per Game",
    chineseLabel: "对手场均得分",
    era91_92: 96.9,
    era91_92_rank: 2,
    era92_93: 95.1,
    era92_93_rank: 2
  },
  {
    label: "Defensive Rating",
    chineseLabel: "防守效率值 (DRTG)",
    era91_92: 105.9,
    era91_92_rank: 2,
    era92_93: 104.1,
    era92_93_rank: 2
  },
  {
    label: "Opponent FG%",
    chineseLabel: "对手投篮命中率",
    era91_92: "43.6%",
    era91_92_rank: 1,
    era92_93: "42.7%",
    era92_93_rank: 1
  },
  {
    label: "Opponent Paint Points",
    chineseLabel: "对手内线得分 (Paint PTS)",
    era91_92: 40.1,
    era91_92_rank: 1,
    era92_93: 38.2,
    era92_93_rank: 1
  }
];

export const regularSeasonPointsTrend = [
  { month: "Nov (11月)", points: 16.3 },
  { month: "Dec (12月)", points: 17.6 },
  { month: "Jan (1月)", points: 19.5 },
  { month: "Feb (2月)", points: 18.0 },
  { month: "Mar (3月)", points: 18.0 }
];

export const globalTeamAttributes = [
  { label: "防守硬度 (DEFENSE)", value: 94 },
  { label: "统治篮板 (REBOUNDING)", value: 92 },
  { label: "铁血强韧 (TOUGHNESS)", value: 96 },
  { label: "得分侵略 (SCORING)", value: 85 },
  { label: "团队领袖 (LEADERSHIP)", value: 90 }
];
