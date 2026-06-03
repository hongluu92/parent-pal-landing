import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

/** V41 company branding section */
export function V41Section() {
  return (
    <section id="v41" className="bg-[#312E81] py-14 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="rounded-[24px] border border-white/12 bg-white p-6 shadow-[0_16px_34px_rgba(30,27,75,0.24)]">
          <Image src="/v41-logo.png" width={120} height={92} alt="V41 logo" className="h-auto w-24" />
          <p className="mt-4 text-sm font-black uppercase tracking-[0.12em] text-[#4F46E5]">
            Sản phẩm thuộc hệ sinh thái V41
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-black">Phát triển bởi Công ty Cổ phần Công nghệ Việt V41.</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/76">
            V41 định hướng phát triển hệ sinh thái AI dựa trên hạ tầng, dữ liệu và ứng dụng. ParentPal là một sản phẩm trong nhóm tự phát triển, tập trung hỗ trợ cha mẹ đồng hành cùng con trẻ.
          </p>
          <a href="https://v41.vn/" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#FDBA74]">
            Xem website V41 <ChevronRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
