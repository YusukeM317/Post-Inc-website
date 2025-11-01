import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

export default function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadComplete(), 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 bg-[#1a2b4a] z-[100] flex items-center justify-center">
      <div className="text-center">
        <div className="w-40 h-40 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/30 mb-8 animate-pulse">
          <span className="text-4xl font-bold text-white">LOGO</span>
        </div>

        <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-white/70 mt-4 text-sm">Loading... {progress}%</p>
      </div>
    </div>
  );
}
