import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RiCameraFill, RiSparklingFill } from '@remixicon/react';
import { features } from './constants';

function FeatureCard({
  icon: Icon,
  title,
  body,
  stat,
  className = '',
  bgColor = '',
  borderColor = '',
  defaultBorderColor = '',
  hoverBorderColor = '',
  visual,
  isSpecialAI = false,
}: {
  icon: React.ComponentType<any>;
  title: string;
  body: string;
  stat: string;
  className?: string;
  bgColor?: string;
  borderColor?: string;
  defaultBorderColor?: string;
  hoverBorderColor?: string;
  visual?: React.ReactNode;
  isSpecialAI?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isLarge = className.includes('lg:col-span-2');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercent = (x / rect.width) - 0.5;
    const yPercent = (y / rect.height) - 0.5;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);

    // 3D tilt + lift + scale
    gsap.to(card, {
      rotateY: xPercent * 10,
      rotateX: -yPercent * 10,
      transformPerspective: 1000,
      y: -12,
      scale: 1.03,
      borderColor: hoverBorderColor || (isSpecialAI ? "#8B5CF6" : "#E5E7EB"),
      boxShadow: isSpecialAI
        ? "0 35px 70px rgba(139, 92, 246, 0.22)"
        : "0 30px 60px rgba(30, 27, 75, 0.12)",
      ease: "power2.out",
      duration: 0.3,
    });

    // Parallax visual element translation
    const visual = card.querySelector('.visual-target');
    if (visual) {
      gsap.to(visual, {
        x: xPercent * 25,
        y: yPercent * 25,
        ease: "power2.out",
        duration: 0.3,
      });
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    // Reset card values
    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      y: 0,
      scale: 1,
      borderColor: defaultBorderColor || (isSpecialAI ? "#B39DFF" : "#E5E7EB"),
      boxShadow: isSpecialAI
        ? "0 15px 35px rgba(139, 92, 246, 0.10)"
        : "0 10px 30px rgba(30, 27, 75, 0.02)",
      ease: "power2.out",
      duration: 0.4,
    });

    // Reset visual value
    const visual = card.querySelector('.visual-target');
    if (visual) {
      gsap.to(visual, {
        x: 0,
        y: 0,
        ease: "power2.out",
        duration: 0.4,
      });
    }
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`feature-card group relative overflow-hidden rounded-[32px] border p-8 text-[#1E1B4B] shadow-[0_10px_30px_rgba(30, 27, 75, 0.02)] transition-all duration-300 ${bgColor} ${borderColor} ${className} ${isSpecialAI ? 'shadow-[0_15px_35px_rgba(139,92,246,0.18)] border-[#B39DFF]' : ''
        }`}
    >
      {/* Mouse spotlight overlay */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: isSpecialAI
            ? `radial-gradient(350px circle at var(--x, 0px) var(--y, 0px), rgba(139, 92, 246, 0.15), transparent 80%)`
            : `radial-gradient(350px circle at var(--x, 0px) var(--y, 0px), rgba(79, 70, 229, 0.10), transparent 80%)`
        }}
      />
      {isLarge ? (
        <div className="relative z-10 grid gap-6 items-center lg:grid-cols-[1.2fr_1fr] w-full h-full">
          <div>
            {/* Sát gần hơn - mb-4 thay vì mb-6 */}
            <div className="relative mb-4 flex items-center justify-between pointer-events-none">
              <div className={`inline-flex rounded-[20px] bg-white p-3.5 shadow-[0_4px_12px_rgba(79,70,229,0.06)] ${isSpecialAI ? 'text-[#8B5CF6] shadow-[0_6px_20px_rgba(139,92,246,0.15)] ring-2 ring-purple-100' : 'text-[#4F46E5]'
                }`}>
                <Icon className="size-5" />
              </div>
              <span className={`rounded-full px-3 py-0.5 text-[10px] font-black shadow-[0_2px_8px_rgba(194,65,12,0.03)] border ${isSpecialAI
                ? 'bg-purple-100/90 text-purple-700 border-purple-200/50'
                : 'bg-white/80 text-[#C2410C] border-[#C2410C]/10'
                }`}>
                {stat}
              </span>
            </div>
            <h3 className={`relative font-black -tracking-[0.01em] pointer-events-none text-gray-900 ${isSpecialAI ? 'text-3xl lg:text-[27px] xl:text-3xl text-purple-950' : 'text-2xl'
              }`}>{title}</h3>
            {/* Tăng độ tương phản lên text-gray-700 */}
            <p className="relative mt-3 leading-relaxed text-gray-700 font-medium pointer-events-none">{body}</p>
          </div>
          {visual && (
            <div className="visual-target relative flex items-center justify-center mt-6 lg:mt-0 pointer-events-none">
              {visual}
            </div>
          )}
        </div>
      ) : (
        <div className="relative z-10 h-full flex flex-col justify-between min-h-[300px]">
          <div>
            <div className="relative mb-4 flex items-center justify-between pointer-events-none">
              <div className="inline-flex rounded-[20px] bg-white p-3.5 text-[#4F46E5] shadow-[0_4px_12px_rgba(79,70,229,0.06)]">
                <Icon className="size-5" />
              </div>
              <span className="rounded-full bg-white/80 px-3 py-0.5 text-[10px] font-black text-[#C2410C] shadow-[0_2px_8px_rgba(194,65,12,0.03)] border border-[#C2410C]/10">
                {stat}
              </span>
            </div>
            <h3 className="relative text-2xl font-black -tracking-[0.01em] pointer-events-none text-gray-900">{title}</h3>
            <p className="relative mt-3 leading-relaxed text-gray-700 font-medium pointer-events-none pb-24">{body}</p>
          </div>
          {visual && (
            <div className="visual-target absolute bottom-0 right-0 pointer-events-none">
              {visual}
            </div>
          )}
        </div>
      )}
    </article>
  );
}

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(containerRef.current?.querySelector(".features-title") || null, {
      opacity: 0,
      x: -40,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current?.querySelector(".features-title"),
        start: "top 85%"
      }
    });

    gsap.from(containerRef.current?.querySelector(".features-desc") || null, {
      opacity: 0,
      x: 40,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current?.querySelector(".features-desc"),
        start: "top 85%"
      }
    });

    ScrollTrigger.batch(containerRef.current?.querySelectorAll(".feature-card") || [], {
      onEnter: (batch) => {
        gsap.fromTo(batch,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "power2.out", overwrite: "auto" }
        );
      },
      start: "top 85%"
    });
  }, { scope: containerRef });

  const bentoFeatures: Array<{
    icon: React.ComponentType<any>;
    title: string;
    body: string;
    stat: string;
    className: string;
    bgColor: string;
    borderColor: string;
    defaultBorderColor: string;
    hoverBorderColor: string;
    visual: React.ReactNode;
    isSpecialAI?: boolean;
  }> = [
      {
        ...features[4], // AI Review
        title: 'Ba mẹ thảnh thơi nhờ AI chấm bài nộp',
        className: 'lg:col-span-2',
        bgColor: 'bg-gradient-to-br from-[#F5F3FF] via-[#EAE2FF] to-[#DFD5FF]',
        borderColor: 'border-[#B39DFF]',
        defaultBorderColor: '#B39DFF',
        hoverBorderColor: '#8B5CF6',
        isSpecialAI: true,
        visual: (
          <div className="relative h-36 w-48 overflow-hidden rounded-2xl border border-purple-300/80 bg-white p-3 shadow-[0_12px_30px_rgba(139,92,246,0.08)] flex flex-col justify-between transform rotate-[3deg] group-hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-black uppercase tracking-wider text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                <RiSparklingFill className="size-3 animate-pulse text-purple-600" />
                AI Đang Quét...
              </span>
              <span className="text-[10px] font-black text-green-600">Độ sạch: 98%</span>
            </div>
            <div className="flex-1 my-2 flex flex-col justify-center bg-purple-50/50 rounded-xl p-2 border border-dashed border-purple-200">
              <div className="text-[10px] font-black text-purple-700 leading-tight">Dọn dẹp bàn học</div>
              <div className="text-[8px] text-gray-400 mt-0.5">Ảnh gửi lúc 18:30</div>
            </div>
            <div className="flex items-center gap-1.5 text-[9px] font-black text-gray-500 border-t pt-1.5 border-gray-100">
              <span className="size-1.5 rounded-full bg-green-500 animate-ping" />
              Gợi ý duyệt: +10 điểm
            </div>
          </div>
        )
      },
      {
        ...features[2], // DinoPet Companion
        title: 'Bé vui thấy mình tiến bộ cùng DinoPet',
        className: 'lg:col-span-1',
        bgColor: 'bg-[#FFF7ED]/95 backdrop-blur-sm',
        borderColor: 'border-[#FED7AA]',
        defaultBorderColor: '#FED7AA',
        hoverBorderColor: '#F97316',
        visual: (
          // Phóng to 1.5x (size-32) và quay mặt về bên trái (scale-x-[-1])
          <div className="absolute -bottom-5 -right-5 size-32 transform transition-all duration-300 scale-x-[-1] group-hover:scale-x-[-1] group-hover:scale-110 group-hover:-translate-y-2">
            <Image src="/dinopet-mascot.png" width={128} height={128} className="object-contain" alt="DinoPet Mascot" />
          </div>
        )
      },
      {
        ...features[3], // Family Wallet
        title: 'Ví điểm dạy con trân trọng nỗ lực',
        className: 'lg:col-span-1',
        bgColor: 'bg-[#EEF2FF]/95 backdrop-blur-sm',
        borderColor: 'border-[#C7D2FE]',
        defaultBorderColor: '#C7D2FE',
        hoverBorderColor: '#4F46E5',
        visual: (
          // Phóng to ví điểm
          <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl p-4 text-white shadow-xl rotate-[-8deg] border border-white/20 group-hover:rotate-0 group-hover:-translate-y-1.5 transition-all duration-300 w-36">
            <div className="text-[8px] font-bold uppercase opacity-75">Ví của Con</div>
            <div className="text-2xl font-black mt-1">2,450 XP</div>
            <div className="text-[8px] font-semibold mt-2 bg-white/20 px-2 py-0.5 rounded-full inline-block">Đổi 3 món quà</div>
          </div>
        )
      },
      {
        ...features[0], // Photo + Approval
        title: 'Nhìn thấy niềm vui tự lập của con',
        className: 'lg:col-span-2',
        bgColor: 'bg-[#F0FDF4]/95 backdrop-blur-sm',
        borderColor: 'border-[#A7F3D0]',
        defaultBorderColor: '#A7F3D0',
        hoverBorderColor: '#10B981',
        visual: (
          // Polaroid sinh động chi tiết với hình vẽ chiếc giường nhỏ xinh bằng CSS
          <div className="relative bg-white p-2.5 pb-6 rounded-lg shadow-lg rotate-[4deg] border border-emerald-200 w-40 mx-auto group-hover:rotate-[-2deg] transition-transform duration-300">
            <div className="h-24 w-full bg-emerald-50 rounded-md border border-emerald-100 flex flex-col items-center justify-between p-1.5 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/30 to-[#FAF8F5]/10" />
              <div className="w-full flex-1 flex items-center justify-center relative">
                {/* Clean Bedroom Vector Illustration */}
                <div className="relative w-16 h-10 bg-emerald-200/40 rounded-lg border border-emerald-300/30 flex items-end p-1 overflow-hidden">
                  <div className="absolute top-1 left-1.5 w-4 h-2 bg-emerald-300/60 rounded-sm animate-pulse" /> {/* Pillow */}
                  <div className="w-full h-5 bg-emerald-500/30 rounded-sm border-t border-emerald-500/20" /> {/* Blanket */}
                  <div className="absolute top-1.5 right-2 size-1.5 bg-yellow-400 rounded-full" />
                </div>
              </div>
              <div className="mt-1">
                <span className="text-[10px] font-black text-emerald-800 block leading-tight">Tự gấp chăn mền</span>
                <span className="text-[7px] text-emerald-600/80 mt-0.5 block leading-tight">Bảo Bảo • Hoàn thành lúc 17:15</span>
              </div>
            </div>
            <div className="absolute -bottom-2.5 -right-2.5 bg-emerald-500 text-white p-1.5 rounded-full shadow-md border-2 border-white">
              <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        )
      },
      {
        ...features[5], // Parents Control
        title: 'Dễ dàng quản lý theo cách của gia đình',
        className: 'lg:col-span-1',
        bgColor: 'bg-white/95 backdrop-blur-sm',
        borderColor: 'border-[#D1D5DB]',
        defaultBorderColor: '#D1D5DB',
        hoverBorderColor: '#9CA3AF',
        visual: (
          // Phóng to slider control
          <div className="absolute -bottom-5 -right-3 bg-white rounded-xl border border-gray-200 p-4 shadow-lg w-36 flex flex-col gap-2.5 rotate-[5deg] group-hover:rotate-0 group-hover:-translate-y-1.5 transition-all duration-300">
            <div className="flex items-center justify-between text-[8px] font-black text-gray-500">
              <span>Cần ảnh nộp</span>
              <span className="w-6 h-3.5 bg-indigo-600 rounded-full relative flex items-center px-0.5"><span className="size-2.5 bg-white rounded-full translate-x-2.5" /></span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-indigo-500" />
            </div>
            <div className="text-[8px] font-black text-[#F97316]">+20 Điểm thưởng</div>
          </div>
        )
      },
      {
        ...features[1], // Fair Rewards
        title: 'Con hăng hái khi công sức được ghi nhận',
        className: 'lg:col-span-2',
        bgColor: 'bg-[#FEF3C7]/95 backdrop-blur-sm',
        borderColor: 'border-[#FCD34D]',
        defaultBorderColor: '#FCD34D',
        hoverBorderColor: '#F59E0B',
        visual: (
          // Bảng điểm chi tiết đầy đặn hơn
          <div className="relative bg-white rounded-2xl border border-amber-200 p-3.5 shadow-md w-52 mx-auto rotate-[-3deg] group-hover:rotate-0 transition-all duration-300 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-black text-amber-600 uppercase tracking-wider">Bảng điểm tự lập</span>
              <span className="text-[9px] font-bold text-gray-400">Hôm nay</span>
            </div>
            <div className="flex items-center justify-between text-[11px] font-bold text-gray-700 bg-amber-50/50 p-2 rounded-xl border border-amber-100/50">
              <span>Quét dọn phòng khách</span>
              <span className="font-black text-amber-600">+10đ</span>
            </div>
            <div className="flex items-center justify-between text-[11px] font-bold text-gray-700 bg-amber-50/50 p-2 rounded-xl border border-amber-100/50">
              <span>Rửa bát đĩa sạch sẽ</span>
              <span className="font-black text-amber-600">+15đ</span>
            </div>
            <div className="flex items-center justify-between text-[11px] font-bold text-gray-700 bg-amber-50/50 p-2 rounded-xl border border-amber-100/50">
              <span>Tưới cây sân vườn</span>
              <span className="font-black text-amber-600">+5đ</span>
            </div>
            <div className="text-[9px] font-black text-amber-700 text-center mt-1 border-t pt-1.5 border-amber-100 border-dashed">
              Đổi thưởng: 30p xem TV (100đ)
            </div>
          </div>
        )
      },
    ];

  return (
    <section id="features" ref={containerRef} className="relative isolate overflow-hidden bg-[#FAF8F5] px-5 py-24 sm:px-8 border-t border-[#4F46E5]/10">
      {/* Background Subtle Radial Glow */}
      <div className="pointer-events-none absolute -left-40 top-40 -z-10 size-96 rounded-full bg-gradient-to-br from-[#4F46E5]/5 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-40 -z-10 size-96 rounded-full bg-gradient-to-br from-[#F97316]/5 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <div className="max-w-3xl mb-16 text-center sm:text-left">
          <h2 className="features-title text-3xl font-black sm:text-4xl -tracking-[0.02em] text-[#1E1B4B]">
            Không chỉ quản lý việc nhà, ParentPal biến tiến bộ của con thành thứ cả nhà cùng nhìn thấy.
          </h2>
          <p className="features-desc mt-4 text-base text-[#312E81]/70 font-semibold">
            Các tính năng thông minh giúp thiết lập một quy trình rèn luyện tự lập nhẹ nhàng, vui vẻ.
          </p>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {bentoFeatures.map(({ icon, title, body, stat, className, bgColor, borderColor, defaultBorderColor, hoverBorderColor, visual, isSpecialAI }) => (
            <FeatureCard
              key={title}
              icon={icon}
              title={title}
              body={body}
              stat={stat}
              className={className}
              bgColor={bgColor}
              borderColor={borderColor}
              defaultBorderColor={defaultBorderColor}
              hoverBorderColor={hoverBorderColor}
              visual={visual}
              isSpecialAI={isSpecialAI}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
