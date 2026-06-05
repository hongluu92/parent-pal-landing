import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { CheckCircle2, Coins, PawPrint } from 'lucide-react';

export function StoryIllustration() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".story-text", {
      opacity: 0,
      x: -40,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current?.querySelector(".story-text"),
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    gsap.from(".story-image-container", {
      opacity: 0,
      scale: 0.95,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current?.querySelector(".story-image-container"),
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    gsap.to(".story-image", {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current?.querySelector(".story-image-container"),
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[linear-gradient(135deg,#EEF2FF_0%,#FFF7ED_58%,#F0F0FB_100%)] px-5 py-24 sm:px-8 overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="story-text">
          <h2 className="text-3xl font-black leading-tight sm:text-4xl -tracking-[0.02em] text-[#1E1B4B]">
            Một bạn đồng hành nhỏ để con thấy nỗ lực của mình có kết quả.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#312E81]/76">
            DinoPet giữ vai trò như một dấu hiệu ghi nhận tiến bộ: con hoàn thành nhiệm vụ, nhận điểm, giữ chuỗi ngày và nhìn thấy nỗ lực của mình đang tạo ra kết quả.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { icon: CheckCircle2, label: 'Việc hoàn thành' },
              { icon: Coins, label: 'Điểm được cộng' },
              { icon: PawPrint, label: 'Tiến bộ được ghi nhận' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 rounded-[18px] bg-[#F0F0FB] px-4 py-3 text-sm font-black text-[#4F46E5] hover:scale-105 transition-transform duration-300">
                <Icon className="size-4 shrink-0 text-[#F97316]" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="story-image-container overflow-hidden rounded-[34px] border border-[#4F46E5]/10 bg-[#F0F0FB] p-3 shadow-[0_24px_60px_rgba(79,70,229,0.16)]">
          <div className="relative overflow-hidden rounded-[26px] h-[340px] sm:h-[450px]">
            <Image
              src="/parentpal-hero-illustration.png"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
              alt="Gia đình sử dụng ParentPal cùng DinoPet"
              className="story-image object-cover scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
