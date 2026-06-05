import { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import { faqs } from './constants';

function FaqItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    gsap.to(contentRef.current, {
      height: isOpen ? 'auto' : 0,
      opacity: isOpen ? 1 : 0,
      duration: 0.3,
      ease: 'power2.out',
      overwrite: 'auto',
    });
    gsap.to(arrowRef.current, {
      rotation: isOpen ? 180 : 0,
      duration: 0.3,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  }, [isOpen]);

  return (
    <div className="overflow-hidden rounded-[24px] border border-white bg-white/70 shadow-[0_10px_30px_rgba(30,27,75,0.02)] backdrop-blur-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-5 text-left text-base font-black text-[#1E1B4B] cursor-pointer hover:text-[#4F46E5] transition-colors"
      >
        <span>{q}</span>
        <span
          ref={arrowRef}
          className="ml-4 shrink-0 text-[#4F46E5]"
        >
          <ChevronDown className="size-5" />
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden h-0 opacity-0"
      >
        <p className="px-5 pb-5 leading-relaxed text-[#312E81]/80 font-medium border-t border-[#4F46E5]/5 pt-3 text-sm">
          {a}
        </p>
      </div>
    </div>
  );
}

export function FaqSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    ScrollTrigger.batch(containerRef.current?.querySelectorAll(".faq-wrapper-item") || [], {
      onEnter: (batch) => {
        gsap.fromTo(batch,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, stagger: 0.08, duration: 0.5, ease: "power2.out", overwrite: "auto" }
        );
      },
      start: "top 90%"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative bg-[#FAF8F5] py-24 border-t border-[#4F46E5]/10">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <h2 className="text-center text-3xl font-black -tracking-[0.02em] text-[#1E1B4B]">
          Câu hỏi phụ huynh thường quan tâm
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base leading-relaxed text-[#312E81]/80 font-medium">
          Một vài băn khoăn trước khi gia đình dùng ParentPal: quyền kiểm soát của ba mẹ, điểm thưởng, AI hỗ trợ và dữ liệu của con.
        </p>
        <div className="mt-12 space-y-4">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="faq-wrapper-item"
            >
              <FaqItem q={item.q} a={item.a} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
