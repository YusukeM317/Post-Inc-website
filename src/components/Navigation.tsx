import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItem {
  title: string;
  children?: string[];
}

const navItems: NavItem[] = [
  {
    title: '私たちについて',
    children: ['会社案内', '○○○○のあゆみ', '受賞歴一覧']
  },
  {
    title: 'ニュース'
  },
  {
    title: '業務内容',
    children: []
  },
  {
    title: '施工実績'
  },
  {
    title: 'CSR活動',
    children: []
  },
  {
    title: '採用情報',
    children: []
  },
  {
    title: 'お問い合わせ'
  }
];

export default function Navigation({ isOpen, onClose }: NavigationProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (title: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(title)) {
      newExpanded.delete(title);
    } else {
      newExpanded.add(title);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <nav
        className={`fixed top-0 left-0 h-full w-1/4 min-w-[300px] max-w-[400px] bg-[#1a2b4a] text-white z-50 transition-transform duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-8">
          <div className="mb-12 flex items-center justify-center">
            <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center border-2 border-white/30">
              <span className="text-2xl font-bold">LOGO</span>
            </div>
          </div>

          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.title}>
                <button
                  onClick={() => item.children && toggleItem(item.title)}
                  className="w-full text-left px-4 py-3 hover:bg-white/10 rounded transition-colors duration-200 flex items-center justify-between group"
                >
                  <span className="text-sm font-medium tracking-wide">{item.title}</span>
                  {item.children && item.children.length > 0 && (
                    expandedItems.has(item.title) ? (
                      <ChevronDown className="w-4 h-4 opacity-70" />
                    ) : (
                      <ChevronRight className="w-4 h-4 opacity-70" />
                    )
                  )}
                </button>

                {item.children && expandedItems.has(item.title) && (
                  <ul className="mt-2 ml-6 space-y-2 border-l-2 border-white/20">
                    {item.children.map((child) => (
                      <li key={child}>
                        <button className="w-full text-left px-4 py-2 hover:bg-white/5 text-sm text-white/80 hover:text-white transition-colors duration-200">
                          {child}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
