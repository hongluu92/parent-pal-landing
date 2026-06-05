import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeartHandshake, ShieldCheck, WalletCards } from 'lucide-react';

export function TrustSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    ScrollTrigger.batch(containerRef.current?.querySelectorAll(".info-card") || [], {
      onEnter: (batch) => {
        gsap.fromTo(batch,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, stagger: 0.12, duration: 0.6, ease: "power2.out", overwrite: "auto" }
        );
      },
      start: "top 85%"
    });
  }, { scope: containerRef });

  const infoCards = [
    {
      icon: ShieldCheck,
      title: 'Ba mẹ duyệt trước',
      body: 'Điểm thưởng chỉ cộng sau khi phụ huynh xác nhận bài nộp.',
    },
    {
      icon: WalletCards,
      title: 'Thưởng theo cách của gia đình',
      body: 'Ba mẹ có thể dùng điểm, mục tiêu tiết kiệm hoặc phần thưởng nhỏ, không cần biến mọi việc thành tiền mặt.',
    },
    {
      icon: HeartHandshake,
      title: 'Đồng hành nhẹ nhàng',
      body: 'App giúp gia đình có hệ thống chung, không biến thưởng thành áp lực.',
    },
  ];

  return (
    <section ref={containerRef} className="relative bg-[#FAF8F5] px-5 py-24 sm:px-8 overflow-hidden border-t border-[#4F46E5]/10">
      {/* Background Subtle Gradient Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(79,70,229,0.03),transparent_40%)]" />

      <div className="relative mx-auto max-w-5xl grid gap-6 lg:grid-cols-3">
        {infoCards.map(({ icon: Icon, title, body }) => (
          <article
            key={title}
            className="info-card rounded-[28px] border border-white bg-white/70 p-8 shadow-[0_10px_30px_rgba(30,27,75,0.02)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_20px_45px_rgba(249,115,22,0.08)] hover:-translate-y-1"
          >
            <div className="inline-flex rounded-[20px] bg-[#EEF2FF] p-4 text-[#4F46E5] shadow-sm">
              <Icon className="size-6 text-[#F97316]" />
            </div>
            <h3 className="mt-6 text-xl font-black text-[#1E1B4B]">{title}</h3>
            <p className="mt-3 leading-relaxed text-[#312E81]/80 font-medium text-sm">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
