
import { useCurrentFrame, interpolate } from "remotion";
import { Circle } from "@remotion/shapes";

export const LogoReveal: React.FC = () => {
  const frame = useCurrentFrame();
  
  const progress = interpolate(frame, [0, 60], [0, 1], {
    extrapolateRight: "clamp",
  });

  const rotation = interpolate(frame, [0, 60], [0, 360]);
  
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        style={{
          transform: `scale(${progress}) rotate(${rotation}deg)`,
          opacity: progress,
        }}
        className="relative w-32 h-32"
      >
        <Circle
          radius={32}
          x={64}
          y={64}
          fill="none"
          stroke="#000"
          strokeWidth={2}
        />
        <svg className="absolute inset-0" width="128" height="128">
          <line
            x1="32"
            y1="64"
            x2="96"
            y2="64"
            stroke="#000"
            strokeWidth="2"
          />
          <line
            x1="64"
            y1="32"
            x2="64"
            y2="96"
            stroke="#000"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};
