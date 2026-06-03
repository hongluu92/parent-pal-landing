import Link from 'next/link';

/** Site footer with company info */
export function LandingFooter() {
  return (
    <footer className="border-t border-[#4F46E5]/10 bg-[#1E1B4B] px-5 py-8 text-white sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm font-semibold text-white/70 md:flex-row md:items-center md:justify-between">
        <p>ParentPal by V41. Sản phẩm đang trong giai đoạn chuẩn bị phát hành.</p>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="underline underline-offset-2 hover:text-white">
            Chính sách Bảo mật
          </Link>
          <span>·</span>
          <p>Công ty Cổ phần Công nghệ Việt 41 - info@v41.vn</p>
        </div>
      </div>
    </footer>
  );
}
