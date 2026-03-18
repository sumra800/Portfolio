import { useEffect, useState } from 'react';

interface SystemNavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: 'intro', label: '00_INIT' },
  { id: 'about', label: '01_ABOUT' },
  { id: 'projects', label: '02_WORK' },
  { id: 'skills', label: '03_STACK' },
  { id: 'experience', label: '04_PATH' },
  { id: 'contact', label: '05_CONNECT' },
];

export function SystemNav({ activeSection, onNavigate }: SystemNavProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          onNavigate(section.getAttribute('data-section') || 'intro');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onNavigate]);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      {/* Progress Bar */}
      <div className="absolute left-0 top-0 w-[1px] h-full bg-gray-800">
        <div 
          className="w-full bg-lime-400 transition-all duration-300"
          style={{ height: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Navigation Items */}
      <div className="pl-8 space-y-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`
              block text-left font-mono text-xs tracking-wider transition-all duration-300
              ${activeSection === item.id 
                ? 'text-lime-400 translate-x-2' 
                : 'text-gray-600 hover:text-gray-400'
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* System Status */}
      <div className="pl-8 mt-12 space-y-1">
        <div className="font-mono text-[10px] text-gray-700">STATUS</div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse"></div>
          <span className="font-mono text-[10px] text-lime-400">ONLINE</span>
        </div>
      </div>
    </nav>
  );
}
