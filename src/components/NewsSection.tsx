import { ArrowRight } from 'lucide-react';

interface NewsItem {
  date: string;
  isNew: boolean;
  title: string;
}

const newsItems: NewsItem[] = [
  {
    date: '2025.10.28',
    isNew: true,
    title: '新規事業拡大のお知らせ'
  },
  {
    date: '2025.10.15',
    isNew: true,
    title: '施工実績を更新しました'
  },
  {
    date: '2025.10.01',
    isNew: false,
    title: '安全衛生優良企業として表彰されました'
  },
  {
    date: '2025.09.20',
    isNew: false,
    title: '採用情報を更新しました'
  },
  {
    date: '2025.09.10',
    isNew: false,
    title: '夏季休業のお知らせ'
  }
];

export default function NewsSection() {
  return (
    <section className="bg-[#0f1f35] py-20">
      <div className="max-w-[1230px] mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-white">NEWS</h2>
          <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group">
            <span className="text-sm font-medium">一覧をみる</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="bg-[#1a2f50] rounded-lg shadow-xl overflow-hidden border border-[#2a4070]">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6 px-8 py-6 border-b last:border-b-0 border-[#2a4070] hover:bg-[#2a4070] transition-colors cursor-pointer"
            >
              <span className="text-[#7fa3c7] font-medium text-sm min-w-[100px]">
                {item.date}
              </span>

              {item.isNew && (
                <span className="bg-[#c41e3a] text-white text-xs font-bold px-3 py-1 rounded">
                  NEW
                </span>
              )}

              <p className="text-white/90 flex-1 font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
