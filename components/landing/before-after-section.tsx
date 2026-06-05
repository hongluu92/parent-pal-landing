import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { beforeItems } from './constants';

function BeforeAfterComparison() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal animation
    gsap.from(".before-story-card", {
      x: -40,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });

    gsap.from(".after-story-card", {
      x: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });

    // Stagger reveal of the right timeline steps
    gsap.from(".flow-step", {
      y: 20,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none none"
      }
    });
  }, { scope: containerRef });

  const solutionSteps = [
    {
      title: "Giao nhiệm vụ",
      desc: "Ba mẹ thiết lập việc cần làm trên ứng dụng.",
      color: "bg-[#4F46E5]/10 text-[#4F46E5] border-[#4F46E5]/20",
      numBg: "bg-[#4F46E5]",
    },
    {
      title: "Con gửi ảnh",
      desc: "Bé làm xong chụp ảnh gửi xác thực lập tức.",
      color: "bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20",
      numBg: "bg-[#10B981]",
    },
    {
      title: "Nhận thưởng",
      desc: "Ba mẹ duyệt bài, điểm cộng ví, DinoPet lên cấp.",
      color: "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20",
      numBg: "bg-[#F59E0B]",
    },
    {
      title: "Hình thành thói quen",
      desc: "Con tự giác tự lập hoàn thành mỗi ngày.",
      color: "bg-[#EC4899]/10 text-[#EC4899] border-[#EC4899]/20",
      numBg: "bg-[#EC4899]",
    }
  ];

  return (
    <div ref={containerRef} className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] items-stretch">
      {/* Left Card: Pain Point - Nhắc nhở liên tục */}
      <div className="before-story-card rounded-[32px] border border-[#F97316]/10 bg-[#FFF7ED] p-8 sm:p-10 shadow-[0_20px_50px_rgba(249,115,22,0.06)] flex flex-col justify-between">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#FFF2E2] px-4 py-2 text-sm font-black text-[#C2410C]">
            <XCircle className="size-5" />
            Nhắc nhở liên tục (Vòng lặp cũ)
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-[#7C2D12] leading-snug">
            Nuôi dạy con căng thẳng, bực mình vì liên tục nhắc nhở
          </h3>
          <p className="mt-4 text-sm text-[#7C2D12]/80 font-bold leading-relaxed">
            Trước đây, mỗi ngày đều là một cuộc chiến thương thuyết giữa ba mẹ và con cái:
          </p>
          <div className="mt-8 space-y-4">
            {beforeItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3 rounded-[18px] bg-white/70 p-4 text-sm font-bold text-[#7C2D12] border border-[#F97316]/10">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#FFEDD5] text-xs font-black text-[#C2410C]">
                  !
                </span>
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-[#F97316]/10 pt-6">
          <p className="text-xs font-black text-[#C2410C] uppercase tracking-wider">
            Hệ quả: Không khí gia đình nặng nề, con thụ động đối phó.
          </p>
        </div>
      </div>

      {/* Right Card: Solution Flow - ParentPal Cycle */}
      <div className="after-story-card rounded-[32px] border border-white/10 bg-[#1E1B4B] p-8 sm:p-10 shadow-[0_20px_50px_rgba(79,70,229,0.15)] relative overflow-hidden flex flex-col justify-between">
        <div className="absolute -right-24 -top-24 size-48 rounded-full bg-[#4F46E5]/15 blur-3xl pointer-events-none" />

        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-[#FBBF24]">
            <CheckCircle2 className="size-5" />
            Vòng lặp giải quyết cùng ParentPal
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">
            Quy trình tạo động lực tự nhiên và hạnh phúc
          </h3>
          <p className="mt-4 text-sm text-white/70 font-semibold leading-relaxed">
            Hệ thống hóa thói quen của bé thành 4 bước tự vận hành đầy niềm vui:
          </p>
        </div>

        {/* Vertical Flow Steps */}
        <div className="mt-8 relative pl-6 space-y-6">
          {/* Vertical connecting line */}
          <div className="absolute left-[11px] top-4 bottom-4 w-[2px] bg-white/10 border-dashed border-l" />

          {solutionSteps.map((step, index) => (
            <div key={index} className="flow-step relative flex gap-4 items-start group">
              {/* Dot / Number indicator */}
              <span className={`absolute -left-6 flex size-6 items-center justify-center rounded-full ${step.numBg} text-xs font-black text-white shadow-md z-10 group-hover:scale-110 transition-transform duration-200`}>
                {index + 1}
              </span>

              {/* Card wrapper */}
              <div className={`flex-1 rounded-2xl border p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/5 ${step.color}`}>
                <h4 className="font-black text-base text-white tracking-wide">{step.title}</h4>
                <p className="mt-1 text-xs text-white/70 leading-relaxed font-medium">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BeforeAfterSection() {
  return (
    <section id="story" className="relative overflow-hidden px-5 py-24 sm:px-8">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#FFF7ED_0%,#EEF2FF_40%,#F0F0FB_70%,#E0E7FF_100%)]" />
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#FBBF24]/20 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#818CF8]/20 to-transparent blur-3xl pointer-events-none" />
      </div>
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, rgba(79, 70, 229, 0.05) 1px, transparent 1px),
                            linear-gradient(rgba(79, 70, 229, 0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="max-w-3xl mb-12 text-center sm:text-left">
          <h2 className="text-3xl font-black leading-tight sm:text-4xl -tracking-[0.02em] text-[#1E1B4B]">
            Từ “ba mẹ nhắc mãi” thành vòng lặp con tự giác muốn hoàn thành.
          </h2>
          <p className="mt-4 text-base text-[#312E81]/70 font-semibold">
            Hãy so sánh sự thay đổi kỳ diệu khi đồng hành cùng ParentPal!
          </p>
        </div>

        <BeforeAfterComparison />
      </div>
    </section>
  );
}
