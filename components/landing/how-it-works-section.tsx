import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Camera, ChevronRight, Coins } from 'lucide-react';
import { steps, stepIcons } from './constants';

export function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Pin right side phone frame
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top+=80px",
        end: "bottom bottom",
        pin: phoneRef.current,
        pinSpacing: false,
        scrub: true,
      });

      // Progress line scroll trigger
      ScrollTrigger.create({
        trigger: containerRef.current?.querySelector(".step-blocks-container"),
        start: "top center+=120px",
        end: "bottom center+=120px",
        scrub: true,
        animation: gsap.fromTo(
          containerRef.current?.querySelector(".progress-bar") || null,
          { scaleY: 0 },
          { scaleY: 1, ease: "none" }
        )
      });

      // Animate active steps and screen images
      const stepElements = gsap.utils.toArray(containerRef.current?.querySelectorAll(".step-block") || []) as HTMLElement[];
      const screenElements = gsap.utils.toArray(containerRef.current?.querySelectorAll(".phone-screen") || []) as HTMLElement[];

      stepElements.forEach((step: any, index: number) => {
        ScrollTrigger.create({
          trigger: step,
          start: "top center+=120px",
          end: "bottom center",
          onEnter: () => {
            gsap.to(step, { opacity: 1, scale: 1.03, duration: 0.3, ease: "power2.out" });
            stepElements.forEach((s: any, idx) => {
              if (idx !== index) gsap.to(s, { opacity: 0.35, scale: 0.97, duration: 0.3 });
            });
            gsap.to(screenElements[index], { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
            screenElements.forEach((scr: any, idx) => {
              if (idx !== index) gsap.to(scr, { opacity: 0, y: 20, duration: 0.4 });
            });
          },
          onEnterBack: () => {
            gsap.to(step, { opacity: 1, scale: 1.03, duration: 0.3, ease: "power2.out" });
            stepElements.forEach((s: any, idx) => {
              if (idx !== index) gsap.to(s, { opacity: 0.35, scale: 0.97, duration: 0.3 });
            });
            gsap.to(screenElements[index], { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
            screenElements.forEach((scr: any, idx) => {
              if (idx !== index) gsap.to(scr, { opacity: 0, y: -20, duration: 0.4 });
            });
          }
        });
      });
    });

    return () => {
      mm.revert();
    };
  }, { scope: containerRef });

  return (
    <section id="how" ref={containerRef} className="relative bg-[#FAF8F5] pt-16 pb-24 lg:pt-12 text-[#1E1B4B] overflow-hidden border-t border-[#4F46E5]/10">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(249,115,22,0.03),transparent_32%),radial-gradient(circle_at_86%_24%,rgba(129,140,248,0.04),transparent_34%)] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left Side: Scrollable Steps info */}
          <div ref={stepsRef} className="space-y-16 py-12">
            <div className="max-w-md">
              <span className="text-sm font-black uppercase tracking-[0.12em] text-[#F97316]">Cách hoạt động</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black leading-tight -tracking-[0.02em] text-[#1E1B4B]">Một vòng lặp đơn giản cho cả nhà.</h2>
              <p className="mt-5 text-base leading-relaxed text-[#312E81]/80 font-medium">
                Ba mẹ thiết lập nhiệm vụ, con hoàn thành bằng hành động thực tế, cả gia đình cùng theo dõi tiến bộ qua điểm thưởng và bạn đồng hành DinoPet.
              </p>

              <a
                href="/Huong_Dan_Su_Dung_ParentPal.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full border border-[#4F46E5]/18 bg-white px-5 text-sm font-black text-[#4F46E5] shadow-[0_8px_20px_rgba(79,70,229,0.05)] transition hover:-translate-y-0.5 hover:bg-[#FFF7ED] hover:shadow-[0_12px_24px_rgba(79,70,229,0.12)] active:scale-95"
              >
                <BookOpen className="size-5 text-[#F97316]" />
                Xem hướng dẫn sử dụng
                <ChevronRight className="size-4" />
              </a>
            </div>

            {/* Vertical Progress Line & 4 Step Blocks */}
            <div className="step-blocks-container relative pl-8 sm:pl-12">
              {/* Background thin guide line */}
              <div className="absolute left-3.5 sm:left-[21px] top-6 bottom-6 w-[2px] bg-[#4F46E5]/10 hidden lg:block" />
              {/* Foreground animated progress bar */}
              <div className="progress-bar absolute left-3.5 sm:left-[21px] top-6 bottom-6 w-[2px] bg-[#F97316] origin-top scale-y-0 hidden lg:block" />

              <div className="space-y-12 sm:space-y-16">
                {steps.map((step, index) => {
                  const StepIcon = stepIcons[index];
                  return (
                    <div
                      key={index}
                      className="step-block transition-all duration-300 opacity-90 lg:opacity-30 rounded-[28px] bg-white/70 border border-[#4F46E5]/10 p-8 shadow-[0_12px_32px_rgba(30,27,75,0.02)] backdrop-blur-md text-[#1E1B4B]"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-black text-[#F97316]">0{index + 1}</span>
                        <div className="rounded-full bg-[#EEF2FF] p-3 text-[#4F46E5] shadow-sm">
                          <StepIcon className="size-5" />
                        </div>
                      </div>
                      <h3 className="mt-6 text-xl sm:text-2xl font-black leading-snug text-[#1E1B4B]">{step}</h3>
                      <p className="mt-3 text-sm text-[#312E81]/80 leading-relaxed font-medium">
                        {index === 0 && "Ba mẹ thiết lập hồ sơ gia đình, lựa chọn danh sách nhiệm vụ rèn luyện bổ ích phù hợp hoặc tạo thêm nhiệm vụ mới theo thói quen sinh hoạt."}
                        {index === 1 && "Con mở ứng dụng trên điện thoại/máy tính bảng, kiểm tra việc cần làm trong ngày và chủ động thực hiện mà không cần đợi ba mẹ giục giã."}
                        {index === 2 && "Con chụp ảnh sản phẩm hoàn thành (bàn học đã xếp gọn, bát đũa đã rửa sạch...) để gửi bằng chứng xác nhận về tài khoản của ba mẹ."}
                        {index === 3 && "Ba mẹ nhấn duyệt bài, điểm thưởng tự động cộng vào ví của con. DinoPet ghi nhận tiến bộ và tích lũy cấp độ để bé luôn hào hứng."}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side: Pinned Mock Mobile Phone (Only Desktop) */}
          <div
            ref={phoneRef}
            className="hidden lg:flex h-[560px] items-start justify-center pointer-events-none"
          >
            <div className="relative w-[280px] h-[560px] rounded-[44px] bg-[#1E1B4B] p-3.5 shadow-[0_24px_64px_rgba(30,27,75,0.15)] border-4 border-white">
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-[#1E1B4B] z-30" />
              <div className="relative w-full h-full overflow-hidden rounded-[32px] bg-[#EEF2FF]">
                {/* Screen 1 */}
                <div className="phone-screen absolute inset-0 opacity-100 transition-transform duration-300">
                  <Image src="/parentpal-child-screen-viec.jpg" fill sizes="280px" className="object-cover" alt="Parent screen" />
                </div>

                {/* Screen 2 */}
                <div className="phone-screen absolute inset-0 opacity-0 transition-transform duration-300">
                  <Image src="/parentpal-child-screen.png" fill sizes="280px" className="object-cover" alt="Child screen" />
                </div>

                {/* Screen 3 */}
                <div className="phone-screen absolute inset-0 opacity-0 transition-transform duration-300 bg-black flex flex-col justify-center items-center">
                  <Image src="/parentpal-child-screen.png" fill sizes="280px" className="object-cover opacity-60" alt="Child camera" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white z-10">
                    <div className="rounded-full bg-white/20 p-4 mb-4 backdrop-blur-md animate-pulse">
                      <Camera className="size-8 text-[#F97316]" />
                    </div>
                    <p className="font-black text-sm">Gửi ảnh minh chứng</p>
                    <p className="text-xs text-white/70 mt-1">Con chụp ảnh việc đã xong để ba mẹ duyệt</p>
                  </div>
                </div>

                {/* Screen 4 */}
                <div className="phone-screen absolute inset-0 opacity-0 transition-transform duration-300 bg-gradient-to-b from-[#FFF7ED] to-[#EEF2FF] flex flex-col items-center justify-center p-6 text-center">
                  <div className="relative size-32 mb-4 animate-float-medium">
                    <Image src="/dinopet-mascot.png" fill sizes="128px" className="object-contain" alt="DinoPet Mascot" />
                  </div>
                  <h4 className="font-black text-[#F97316] text-lg uppercase tracking-wider">Thành công!</h4>
                  <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#FBBF24]/20 px-4 py-1.5 text-sm font-black text-[#B45309]">
                    <Coins className="size-4 text-[#F97316]" />
                    +46 điểm thưởng
                  </div>
                  <p className="text-xs text-[#1E1B4B]/60 mt-3 font-semibold">DinoPet sắp thăng cấp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
