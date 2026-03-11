import { useState, useRef, useEffect } from 'react';
import { Globe, ChevronUp } from 'lucide-react';
import { useLanguage, useSidebar } from 'shared_store/Store';
import cn from '../libs/utils/cn';

const LANGUAGES = [
  { code: 'en', label: 'EN', full: 'English' },
  { code: 'pt', label: 'PT', full: 'Português' },
] as const;

function Footer() {
  const { language, setLanguage } = useLanguage();
  const { isOpen } = useSidebar();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <footer className={cn("w-full mt-auto bg-gray-900 border-t border-gray-700 p-2 flex", !isOpen && "justify-center items-center")}>
      <div className="relative" ref={ref}>
        {dropdownOpen && (
          <div className="absolute z-50 bottom-full mb-2 -right-24 bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden min-w-[110px]">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setDropdownOpen(false);
                }}
                className={`w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold tracking-widest transition-all duration-150
                  ${language === lang.code
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                  }`}
              >
                <span>{lang.label}</span>
                {isOpen && (
                  <span className="font-normal text-gray-400 tracking-normal normal-case">
                    {lang.full}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
        <button
          onClick={() => setDropdownOpen((prev) => !prev)}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold tracking-widest transition-all duration-200
            bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white`}
        >
          {isOpen ? (
            <>
              <Globe size={12} className="text-gray-400" />
              <span>{current.label}</span>
              <ChevronUp
                size={12}
                className={`text-gray-400 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
              />
            </>
          ) : (
            <Globe size={14} className="text-gray-400" />
          )}
        </button>
      </div>
    </footer>
  );
}

export default Footer;