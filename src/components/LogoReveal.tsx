
import { useCurrentFrame, interpolate } from "remotion";
import { Circle, Line } from "@remotion/shapes";

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
          x={64}
          y={64}
          r={32}
          fill="none"
          stroke="#000"
          strokeWidth={2}
        />
        <Line
          from={[32, 64]}
          to={[96, 64]}
          stroke="#000"
          strokeWidth={2}
        />
        <Line
          from={[64, 32]}
          to={[64, 96]}
          stroke="#000"
          strokeWidth={2}
        />
      </div>
    </div>
  );
};
