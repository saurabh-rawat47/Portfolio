interface BadgeProps {
  children: React.ReactNode;
  color?: "blue" | "violet" | "emerald" | "amber" | "gray";
  size?: "sm" | "md";
}

const colorMap = {
  blue:    "bg-blue-500/10 text-blue-400 border-blue-500/20",
  violet:  "bg-violet-500/10 text-violet-400 border-violet-500/20",
  emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  amber:   "bg-amber-500/10 text-amber-400 border-amber-500/20",
  gray:    "bg-white/5 text-text-secondary border-border",
};

const sizeMap = {
  sm: "text-[10px] px-2 py-0.5",
  md: "text-xs px-2.5 py-1",
};

export default function Badge({ children, color = "blue", size = "md" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border font-mono font-medium tracking-wide ${colorMap[color]} ${sizeMap[size]}`}
    >
      {children}
    </span>
  );
}
