import Image from 'next/image';

/** Top navigation bar with logo and CTA */
export function LandingHeader() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
      <a href="#" className="flex items-center gap-3">
        <Image src="/logo-mark.png" width={42} height={42} alt="ParentPal logo" className="rounded-[14px]" />
        <span className="text-xl font-black tracking-tight">
          parent<span className="text-[#FF7563]">pal</span>
        </span>
      </a>
      <nav className="hidden items-center gap-7 text-sm font-bold text-[#1E1B4B]/70 md:flex">
        <a href="#story" className="hover:text-[#4F46E5]">Vấn đề</a>
        <a href="#features" className="hover:text-[#4F46E5]">Tính năng</a>
        <a href="#how" className="hover:text-[#4F46E5]">Cách hoạt động</a>
        <a href="#v41" className="hover:text-[#4F46E5]">V41</a>
      </nav>
      <a
        href="#notify"
        className="rounded-full bg-[#F97316] px-4 py-2 text-sm font-bold text-white shadow-[0_10px_22px_rgba(249,115,22,0.22)] transition hover:-translate-y-0.5 hover:bg-[#EA580C]"
      >
        Sắp ra mắt
      </a>
    </header>
  );
}
