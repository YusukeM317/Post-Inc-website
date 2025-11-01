export default function FloatingLogo() {
  return (
    <div className="fixed bottom-8 right-8 z-40">
      <div className="relative">
        <div className="absolute inset-0 animate-ping-slow">
          <div className="w-16 h-16 rounded-full bg-[#1a3d6b]/30" />
        </div>

        <div className="relative w-16 h-16 bg-[#1a3d6b] rounded-full flex items-center justify-center border-2 border-white shadow-2xl animate-float">
          <span className="text-white font-bold text-sm">LOGO</span>

          <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-sparkle" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-300 rounded-full animate-sparkle-delay" />
        </div>
      </div>
    </div>
  );
}
