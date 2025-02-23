
import { AbsoluteFill, Sequence, useCurrentFrame, spring, interpolate } from "remotion";
import { CodeSnippet } from "./CodeSnippet";
import { TextTransition } from "./TextTransition";
import { LogoReveal } from "./LogoReveal";

export const TechVideo: React.FC = () => {
  const frame = useCurrentFrame();
  
  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill className="bg-gradient-to-br from-gray-50 to-gray-100">
      <div style={{ opacity }} className="relative w-full h-full">
        <Sequence from={0} durationInFrames={100}>
          <LogoReveal />
        </Sequence>
        
        <Sequence from={90} durationInFrames={100}>
          <TextTransition
            text="Innovation through code"
            className="text-5xl font-semibold text-gray-900"
          />
        </Sequence>
        
        <Sequence from={180} durationInFrames={120}>
          <CodeSnippet />
        </Sequence>
      </div>
    </AbsoluteFill>
  );
};
