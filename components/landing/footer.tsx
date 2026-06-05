import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-[#4F46E5]/10 bg-[#1E1B4B] px-5 py-12 text-white sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 text-sm font-semibold text-white/70 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
          <p>ParentPal by V41. © 2026 Mọi quyền được bảo lưu.</p>
          <div className="flex items-center gap-3 text-xs text-white/40">
            <Link href="/privacy" className="hover:text-[#F97316] transition-colors">
              Chính sách bảo mật
            </Link>
            <span>|</span>
            <Link href="/delete-account" className="hover:text-[#F97316] transition-colors">
              Yêu cầu xóa tài khoản
            </Link>
          </div>
        </div>
        <p className="text-[#FDBA74]">Công ty Cổ phần Công nghệ Việt 41 &middot; info@v41.vn</p>
      </div>
    </footer>
  );
}
