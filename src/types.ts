export interface Player {
  id: string;
  name: string;
  chineseName: string;
  number: string;
  portrait?: string;
  role: string;
  roleDescription: string;
  quote: string;
  stats: {
    label: string;
    value: string | number;
  }[];
  attributes: {
    label: string;
    value: number; // 0-10
  }[];
  avatarBg: string;
}

export interface OpponentTeam {
  id: string;
  name: string;
  chineseName: string;
  poster?: string;
  type: "rival" | "mortal" | "finals";
  wantedLevel: string; // ISSS, TOP SECRET, etc.
  scoutNotes: string[];
  tacticalStrengths: {
    label: string;
    value: number; // 1-10
  }[];
  keyThreats: {
    name: string;
    chineseName: string;
    role: string;
    threatDesc: string;
  }[];
  color: string;
}

export interface PlayoffRound {
  roundName: string;
  chineseRoundName: string;
  opponent: string;
  chineseOpponent: string;
  result: "win" | "loss";
  seriesResult: string;
  story: string;
  stats: {
    pts: { knicks: number; opp: number };
    reb: { knicks: number; opp: number };
    ast: { knicks: number; opp: number };
    fg: { knicks: number; opp: number };
  };
  keyPlayer: {
    name: string;
    contribution: string;
  };
}

export interface DefensiveMetric {
  label: string;
  chineseLabel: string;
  era91_92: number | string;
  era91_92_rank: number;
  era92_93: number | string;
  era92_93_rank: number;
}
