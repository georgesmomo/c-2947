
import { useCurrentFrame, interpolate } from "remotion";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

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
        <div className="text-lg">
          <SyntaxHighlighter
            language="javascript"
            style={nightOwl}
            customStyle={{
              background: "transparent",
              margin: 0,
              padding: 0,
            }}
          >
            {codeSnippet}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};
