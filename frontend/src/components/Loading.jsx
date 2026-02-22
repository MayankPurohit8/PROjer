import { useState } from "react";
import SplitText from "./ui/SplitText";

const Loading = () => {
  const [reloadKey, setReloadKey] = useState(0);

  const handleComplete = () => {
    setTimeout(() => {
      setReloadKey((prev) => prev + 1);
    }, 500); // delay before replay
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-200 ">
      <SplitText
        key={reloadKey}
        text="ProJer..."
        className="text-6xl animate-pulse font-semibold text-center font-brand text-violet-500"
        delay={50}
        duration={1.25}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleComplete}
        showCallback
      />
    </div>
  );
};

export default Loading;
