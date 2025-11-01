import { ChevronLeft } from 'lucide-react';

interface HeroProps {
  onMenuOpen: () => void;
}

export default function Hero({ onMenuOpen }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src="/img/outdoor_wall13.jpg"
        alt="Hero background"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f35]/70 to-transparent" />

      <button
        onClick={onMenuOpen}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#1a3d6b] hover:bg-[#2a4d7b] text-white p-6 rounded-r-lg shadow-2xl transition-all duration-300 z-30 group"
        aria-label="Open menu"
      >
        <ChevronLeft className="w-8 h-8 group-hover:scale-110 transition-transform" />
      </button>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center text-white z-10">
        <h1 className="text-5xl font-bold mb-4 tracking-wide drop-shadow-lg tategaki">
          人と情報をつなぎ、 豊かな社会をデザインする

        </h1>
        <p className="text-xl tracking-widest opacity-90">
          70年の歴史と技術
        </p>
      </div>
    </section>
  );
}
