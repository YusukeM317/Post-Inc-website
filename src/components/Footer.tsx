import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a2b4a] text-white py-12">
      <div className="max-w-[1230px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center border-2 border-white/30 mb-4">
              <span className="text-xl font-bold">LOGO</span>
            </div>
            <h3 className="text-xl font-bold mb-2">株式会社○○○○</h3>
            <p className="text-white/70 text-sm">
              デザインから施工まで一貫対応
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">お問い合わせ</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white/70" />
                <span className="text-lg font-semibold">000-0000-0000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white/70" />
                <span className="text-sm">info@example.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white/70 mt-1" />
                <span className="text-sm">
                  〒000-0000<br />
                  ○○県○○市○○町1-2-3
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">営業時間</h4>
            <div className="space-y-2 text-sm">
              <p>平日：9:00 - 18:00</p>
              <p>土曜：9:00 - 17:00</p>
              <p className="text-white/70">日曜・祝日：休業</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-wrap justify-center gap-6 mb-4 text-sm">
            <a href="#" className="hover:text-white/70 transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-white/70 transition-colors">サイトマップ</a>
            <a href="#" className="hover:text-white/70 transition-colors">採用情報</a>
          </div>
          <p className="text-center text-sm text-white/60">
            &copy; 2025 ○○○○ All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
