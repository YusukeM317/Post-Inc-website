import { Building2, Briefcase, Shield } from 'lucide-react';

const businessCards = [
  {
    title: 'Business',
    icon: Building2,
    image: '/img/pixta_92568481.jpg'
  },
  {
    title: 'Works',
    icon: Briefcase,
    image: '/img/outdoor_wall13.jpg'
  },
  {
    title: 'Safety',
    icon: Shield,
    image: '/img/slide_04.jpg'
  }
];

export default function BusinessSection() {
  return (
    <section className="py-20 bg-[#f5f7fa]">
      <div className="max-w-[1230px] mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-[#0f1f35] mb-4">BUSINESS</h2>
          <p className="text-[#1a2b4a] text-lg leading-relaxed font-medium">
            デザインから製作・施工まで一貫対応。<br />
            店舗や企業の魅力を引き立てる高品質なサイン工事をご提供します。<br />
            安心安全な施工で信頼にお応えします。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {businessCards.map((card) => (
            <div
              key={card.title}
              className="relative h-[300px] rounded-lg overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f35]/90 via-[#0f1f35]/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <card.icon className="w-12 h-12 mb-4 opacity-90" />
                <h3 className="text-2xl font-bold tracking-wider">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="relative h-[300px] rounded-lg overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
          <img
            src="/img/pixta_62346544.jpg"

            alt="Recruit"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f35]/85 to-transparent" />
          <div className="absolute top-8 right-8">
            <h3 className="text-white text-3xl font-bold tracking-wider">RECRUIT</h3>
          </div>
          <div className="absolute bottom-8 left-8">
            <p className="text-white text-3xl font-bold leading-relaxed">
              70年にわたり<br />
              「人」と「社会」を<br />
              つなげてきました
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
