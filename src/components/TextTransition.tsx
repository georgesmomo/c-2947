
import { useCurrentFrame, interpolate } from "remotion";

interface TextTransitionProps {
  text: string;
  className?: string;
}

export const TextTransition: React.FC<TextTransitionProps> = ({ text, className = "" }) => {
  const frame = useCurrentFrame();
  
  const words = text.split(" ");
  
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className={`flex flex-wrap justify-center gap-x-3 ${className}`}>
        {words.map((word, i) => {
          const delay = i * 15;
          const progress = interpolate(
            frame - delay,
            [0, 20],
            [0, 1],
            { extrapolateRight: "clamp" }
          );
          
          return (
            <span
              key={i}
              style={{
                opacity: progress,
                transform: `translateY(${interpolate(progress, [0, 1], [20, 0])}px)`,
              }}
              className="transition-all duration-300"
            >
              {word}
            </span>
          );
        })}
      </div>
    </div>
  );
};
