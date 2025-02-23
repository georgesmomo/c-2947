
import { Player } from "@remotion/player";
import { TechVideo } from "../components/TechVideo";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-semibold text-center mb-8 text-gray-900">Tech Showcase</h1>
        <div className="aspect-video w-full bg-white rounded-2xl shadow-lg overflow-hidden">
          <Player
            component={TechVideo}
            durationInFrames={300}
            compositionWidth={1920}
            compositionHeight={1080}
            fps={30}
            style={{
              width: "100%",
              height: "100%",
            }}
            controls
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
