import { Instagram, ArrowRight } from 'lucide-react';

const instagramImages = [
  '/img/メイン画像1.jpg',
  '/img/メイン画像2.jpg',
  '/img/メイン画像3.jpg',
  '/img/メイン画像4.jpg',
  '/img/メイン画像5.jpg',
  '/img/メイン画像1.jpg',
  '/img/メイン画像2.jpg',
];

export default function InstagramSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1230px] mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <Instagram className="w-8 h-8 text-[#1a3d6b]" />
          <h2 className="text-4xl font-bold text-[#0f1f35]">INSTAGRAM</h2>
        </div>

        <p className="text-[#1a2b4a] text-lg mb-12 font-medium">
          日々の施工現場や最新情報を発信しています。<br />
          ぜひフォローして、私たちの活動をご覧ください。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {instagramImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <img
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center gap-2 bg-[#1a3d6b] hover:bg-[#2a4d7b] text-white px-8 py-4 rounded-full transition-colors group shadow-lg">
            <span className="font-medium">もっと見る</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
