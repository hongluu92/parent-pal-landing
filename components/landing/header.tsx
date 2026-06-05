import { useState, useEffect } from 'react';
import Image from 'next/image';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrolled = false;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 20;
          if (scrolled !== lastScrolled) {
            lastScrolled = scrolled;
            setIsScrolled(scrolled);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Chạy thử lần đầu để bắt đúng trạng thái khi load giữa trang
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full transition-all duration-300 pointer-events-none">
      <header className={`mx-auto flex items-center justify-between pointer-events-auto transition-all duration-500 ease-in-out ${
        isScrolled 
          ? "max-w-5xl rounded-full border border-white/60 bg-white/75 p-3 px-6 shadow-[0_12px_40px_rgba(30,27,75,0.06)] backdrop-blur-xl mt-4 mx-5 lg:mx-auto"
          : "max-w-6xl bg-transparent py-5 px-5 sm:px-8 border-b border-transparent mt-0"
      }`}>
        <a href="#" className="flex items-center gap-3 transition-transform hover:scale-[1.02]">
          <Image src="/logo-mark.png" width={38} height={38} alt="ParentPal logo" className="rounded-[11px]" />
          <span className="text-lg font-black tracking-tight text-[#1E1B4B]">
            parent<span className="text-[#FF7563]">pal</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-xs font-black uppercase tracking-wider text-[#1E1B4B]/60 md:flex">
          <a href="#story" className="hover:text-[#4F46E5] transition-colors">Vấn đề</a>
          <a href="#features" className="hover:text-[#4F46E5] transition-colors">Tính năng</a>
          <a href="#how" className="hover:text-[#4F46E5] transition-colors">Cách hoạt động</a>
          <a href="#v41" className="hover:text-[#4F46E5] transition-colors">V41</a>
        </nav>
        <a
          href="#download"
          className="rounded-full bg-[#F97316] px-5 py-2 text-xs font-black uppercase tracking-wider text-white shadow-[0_8px_20px_rgba(249,115,22,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EA580C] hover:shadow-[0_12px_24px_rgba(249,115,22,0.3)] active:scale-95"
        >
          Tải ứng dụng
        </a>
      </header>
    </div>
  );
}
