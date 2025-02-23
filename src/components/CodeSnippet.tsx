
import { useCurrentFrame, interpolate } from "remotion";
import Highlight, { defaultProps } from "prism-react-renderer";
import darkTheme from "prism-react-renderer/themes/nightOwl";

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
        <Highlight {...defaultProps} code={codeSnippet} language="javascript" theme={darkTheme}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${className} text-lg`} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })} style={{
                  opacity: interpolate(
                    frame,
                    [i * 10, i * 10 + 20],
                    [0, 1],
                    { extrapolateRight: "clamp" }
                  )
                }}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};
