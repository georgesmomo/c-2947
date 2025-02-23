
import { useCurrentFrame, interpolate } from "remotion";
import { Prism as SyntaxHighlighter } from "prism-react-renderer";
import { themes } from "prism-react-renderer";

const codeSnippet = `function createInnovation() {
  const future = await design.build({
    creativity: true,
    precision: 100,
    innovation: "unlimited"
  });
  
  return future.deploy();
}`;

export const CodeSnippet: React.FC = () => {
  const frame = useCurrentFrame();
  
  const progress = interpolate(frame, [0, 60], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div 
        className="bg-gray-900 rounded-lg p-8 shadow-xl transform transition-all"
        style={{
          opacity: progress,
          transform: `scale(${interpolate(progress, [0, 1], [0.9, 1])})`,
        }}
      >
        <SyntaxHighlighter
          language="javascript"
          style={themes.nightOwl}
          className="text-lg"
        >
          {codeSnippet}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
