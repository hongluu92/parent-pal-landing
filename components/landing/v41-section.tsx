import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ChevronRight } from 'lucide-react';

export function V41Section() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(containerRef.current?.querySelector(".v41-logo") || null, {
      opacity: 0,
      x: -40,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current?.querySelector(".v41-logo"),
        start: "top 85%"
      }
    });
    gsap.from(containerRef.current?.querySelector(".v41-text") || null, {
      opacity: 0,
      x: 40,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current?.querySelector(".v41-text"),
        start: "top 85%"
      }
    });
  }, { scope: containerRef });

  return (
    <section id="v41" ref={containerRef} className="bg-[#FAF8F5] py-24 text-[#1E1B4B] overflow-hidden border-t border-[#4F46E5]/10">
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:gap-16 px-5 sm:px-8 lg:grid-cols-[240px_1fr]">
        <div
          className="v41-logo mx-auto lg:mx-0 flex w-full max-w-[240px] flex-col items-center text-center rounded-[28px] border border-white bg-white/70 p-6 shadow-[0_10px_30px_rgba(30,27,75,0.02)] backdrop-blur-md"
        >
          <Image src="/v41-logo.png" width={110} height={84} alt="V41 logo" className="h-auto w-20" />
          <p className="mt-4 text-xs font-black uppercase tracking-[0.12em] text-[#4F46E5] leading-relaxed">
            Sản phẩm thuộc<br />hệ sinh thái V41
          </p>
        </div>
        <div className="v41-text">
          <h2 className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-black -tracking-[0.02em] text-[#1E1B4B] lg:whitespace-nowrap">
            Phát triển bởi Công ty Cổ phần Công nghệ Việt V41.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#312E81]/80 font-medium">
            V41 định hướng phát triển hệ sinh thái AI dựa trên hạ tầng, dữ liệu và ứng dụng. ParentPal là một sản phẩm trong nhóm tự phát triển, tập trung hỗ trợ cha mẹ đồng hành cùng con trẻ.
          </p>
          <a href="https://v41.vn/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1.5 text-sm font-black text-[#F97316] hover:underline active:scale-95 transition-transform">
            Xem website V41 <ChevronRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
