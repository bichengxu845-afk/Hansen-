import { motion } from "motion/react";

interface RadarChartProps {
  data: { label: string; value: number }[]; // value ranges from 0 to 100 or 0 to 12
  maxValue?: number;
  color?: string;
  fillColor?: string;
}

export default function RadarChart({
  data,
  maxValue = 10,
  color = "stroke-orange-500",
  fillColor = "fill-orange-500/20",
}: RadarChartProps) {
  const size = 300;
  const center = size / 2;
  const radius = center - 50;
  const totalPoints = data.length;

  // Calculate coordinates for index of points
  const getCoordinates = (index: number, val: number) => {
    const angle = (Math.PI * 2 / totalPoints) * index - Math.PI / 2;
    const factor = radius * (val / maxValue);
    const x = center + Math.cos(angle) * factor;
    const y = center + Math.sin(angle) * factor;
    return { x, y, angle };
  };

  // Generate outer polygon rings (5 rings)
  const rings = Array.from({ length: 5 }, (_, i) => {
    const ringVal = (maxValue / 5) * (i + 1);
    const pointsStr = data
      .map((_, idx) => {
        const { x, y } = getCoordinates(idx, ringVal);
        return `${x},${y}`;
      })
      .join(" ");
    return pointsStr;
  });

  // Generate spokes (lines from center to corners)
  const spokes = data.map((_, idx) => {
    const { x, y } = getCoordinates(idx, maxValue);
    return { x1: center, y1: center, x2: x, y2: y };
  });

  // Calculate the path for the actual data
  const dataPointsStr = data
    .map((d, idx) => {
      const { x, y } = getCoordinates(idx, d.value);
      return `${x},${y}`;
    })
    .join(" ");

  // Generate clean positioning for labels
  const labelOffsets = data.map((d, idx) => {
    const { x, y, angle } = getCoordinates(idx, maxValue + 1.8);
    let textAnchor = "middle";
    if (Math.cos(angle) > 0.1) textAnchor = "start";
    else if (Math.cos(angle) < -0.1) textAnchor = "end";

    let dy = "0.35em";
    if (Math.sin(angle) > 0.5) dy = "1em";
    else if (Math.sin(angle) < -0.5) dy = "-0.2em";

    return { label: d.label, x, y, textAnchor, dy };
  });

  return (
    <div className="relative flex flex-col items-center justify-center p-2 rounded-lg bg-stone-900/60 border border-stone-800/80 shadow-inner">
      <svg className="w-full max-w-[280px] h-auto aspect-square overflow-visible text-stone-300" viewBox={`0 0 ${size} ${size}`}>
        {/* Background rings */}
        {rings.map((r, i) => (
          <polygon
            key={i}
            points={r}
            className="fill-none stroke-stone-800/60 stroke-1"
            strokeDasharray={i % 2 === 1 ? "4,4" : undefined}
          />
        ))}

        {/* Level indicators */}
        <text
          x={center}
          y={center - radius * 0.4}
          className="text-[9px] fill-stone-600 font-mono text-center select-none pointer-events-none"
          textAnchor="middle"
        >
          40%
        </text>
        <text
          x={center}
          y={center - radius * 0.8}
          className="text-[9px] fill-stone-600 font-mono text-center select-none pointer-events-none"
          textAnchor="middle"
        >
          80%
        </text>

        {/* Outer spikes/spokes */}
        {spokes.map((s, i) => (
          <line
            key={i}
            x1={s.x1}
            y1={s.y1}
            x2={s.x2}
            y2={s.y2}
            className="stroke-stone-800/80 stroke-1"
          />
        ))}

        {/* Data area - animated */}
        <motion.polygon
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          points={dataPointsStr}
          className={`${fillColor} ${color} stroke-2 transition-all duration-300`}
        />

        {/* Data points */}
        {data.map((d, idx) => {
          const { x, y } = getCoordinates(idx, d.value);
          return (
            <g key={idx} className="group">
              <circle
                cx={x}
                cy={y}
                r="4"
                className="fill-sky-400 stroke-stone-900 stroke-2 cursor-pointer shadow-md group-hover:r-5 transition-all duration-150"
              />
              <text
                x={x}
                y={y - 8}
                className="opacity-0 group-hover:opacity-100 fill-sky-300 text-[10px] font-mono font-bold transition-opacity duration-150 pointer-events-none bg-stone-900"
                textAnchor="middle"
              >
                {d.value}
              </text>
            </g>
          );
        })}

        {/* Labels with optimal positioning */}
        {labelOffsets.map((l, idx) => (
          <text
            key={idx}
            x={l.x}
            y={l.y}
            textAnchor={l.textAnchor}
            dy={l.dy}
            className="fill-stone-400 font-mono text-[9px] font-medium tracking-tight select-none pointer-events-none"
          >
            {l.label}
          </text>
        ))}
      </svg>
    </div>
  );
}
