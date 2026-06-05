import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  CheckCircle2,
  ChevronRight,
  Coins,
  MailCheck,
  Sparkles,
} from 'lucide-react';
import { heroMarks } from './constants';
import { PrimaryCta, SecondaryCta } from './buttons';

function HeroBackgroundAnimation() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="animate-parentpal-hero-rail absolute left-[-9%] top-[18%] h-40 w-[118%] rotate-[-6deg] rounded-full border-y border-[#4F46E5]/10 bg-[linear-gradient(90deg,transparent_0%,rgba(79,70,229,0.10)_28%,rgba(249,115,22,0.12)_52%,rgba(34,197,94,0.08)_74%,transparent_100%)] bg-[length:180%_100%]" />
      <div className="animate-parentpal-hero-rail-reverse absolute bottom-[6%] left-[-12%] h-36 w-[124%] rotate-[5deg] rounded-full border-y border-[#F97316]/10 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.62)_20%,rgba(251,191,36,0.13)_46%,rgba(79,70,229,0.12)_70%,transparent_100%)] bg-[length:180%_100%]" />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(79,70,229,0.045) 1px, transparent 1px),
                            linear-gradient(rgba(79,70,229,0.045) 1px, transparent 1px)`,
          backgroundSize: '72px 72px',
        }}
      />
      <div className="hero-floating-item animate-parentpal-hero-card absolute left-[42%] top-[18%] hidden w-32 rounded-[24px] border border-white/70 bg-white/68 p-3 shadow-[0_18px_38px_rgba(79,70,229,0.14)] backdrop-blur-md sm:block" data-speed="25">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="size-5 text-[#22C55E]" />
          <div className="h-2 flex-1 rounded-full bg-[#4F46E5]/18" />
        </div>
        <div className="mt-3 h-2 w-3/4 rounded-full bg-[#F97316]/20" />
      </div>
      <div className="hero-floating-item animate-parentpal-hero-card-reverse absolute bottom-[14%] right-[43%] hidden w-28 rounded-[22px] border border-white/70 bg-white/62 p-3 shadow-[0_18px_38px_rgba(249,115,22,0.14)] backdrop-blur-md sm:block" data-speed="-20">
        <div className="flex items-center gap-2">
          <Coins className="size-5 text-[#FBBF24]" />
          <div className="h-2 flex-1 rounded-full bg-[#F97316]/20" />
        </div>
        <div className="mt-3 h-2 w-2/3 rounded-full bg-[#4F46E5]/18" />
      </div>
      {heroMarks.map(({ icon: Icon, className, delay }, index) => (
        <div
          key={index}
          className={`hero-floating-item animate-parentpal-hero-mark absolute hidden rounded-[22px] border border-white/70 bg-white/52 p-3 shadow-[0_16px_32px_rgba(79,70,229,0.12)] backdrop-blur sm:block ${className}`}
          style={{ animationDelay: delay }}
          data-speed={-15 - (index * 6)}
        >
          <Icon className="size-7" />
        </div>
      ))}
    </div>
  );
}

function MiniPhone({
  screenSrc,
  alt,
}: {
  screenSrc: string;
  alt: string;
}) {
  return (
    <div className="w-[155px] sm:w-[210px] rounded-[22px] sm:rounded-[30px] bg-[#1E1B4B] p-1.5 sm:p-2 shadow-[0_24px_54px_rgba(30,27,75,0.26)]">
      <div className="relative h-[310px] sm:h-[420px] overflow-hidden rounded-[16px] sm:rounded-[24px] bg-[#F0F0FB]">
        <Image
          src={screenSrc}
          alt={alt}
          fill
          sizes="(max-width: 640px) 155px, 210px"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto min-h-[440px] sm:min-h-[560px] w-full max-w-[610px]">
      <div className="absolute inset-x-4 bottom-6 top-6 sm:bottom-12 sm:top-8 rounded-[38px] border border-white/65 bg-[radial-gradient(circle_at_22%_20%,#FFF7ED_0%,transparent_34%),radial-gradient(circle_at_78%_30%,#E0E7FF_0%,transparent_38%),linear-gradient(145deg,#FFFFFF_0%,#EEF2FF_45%,#FFF7ED_100%)] bg-[length:180%_180%] shadow-[0_30px_80px_rgba(79,70,229,0.18)]" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full bg-[#1E1B4B] px-4 py-2 text-sm font-black text-white shadow-[0_12px_28px_rgba(30,27,75,0.22)] z-20">
        Ba mẹ giao việc, con nhận thưởng
      </div>
      <div
        className="hero-phone-left absolute left-2 top-20 sm:left-8 sm:top-28 z-10"
      >
        <MiniPhone screenSrc="/parentpal-parent-screen.png" alt="Giao diện phụ huynh ParentPal" />
      </div>
      <div
        className="hero-phone-right absolute right-2 top-10 sm:right-8 sm:top-16 z-10"
      >
        <MiniPhone screenSrc="/parentpal-child-screen.png" alt="Giao diện của con trong ParentPal" />
      </div>
      <div
        className="hero-mascot-badge absolute left-0 right-0 mx-auto top-[295px] hidden w-[210px] items-center gap-3 rounded-[22px] border border-white/70 bg-white/92 p-3 shadow-[0_18px_36px_rgba(79,70,229,0.18)] backdrop-blur sm:flex z-20"
      >
        <div className="relative size-14 overflow-hidden rounded-[18px] bg-[#EEF2FF] p-1 flex items-center justify-center">
          <Image
            src="/dinopet-mascot.png"
            width={56}
            height={56}
            alt="DinoPet"
            className="h-full w-full object-contain hero-mascot-img"
          />
        </div>
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[#F97316]">DinoPet</p>
          <p className="mt-1 text-sm font-black leading-tight text-[#1E1B4B]">Ghi nhận tiến bộ mỗi ngày</p>
        </div>
      </div>
      <div
        className="hero-status-bar absolute bottom-0 left-0 right-0 mx-auto w-[min(92%,430px)] rounded-[24px] border border-[#4F46E5]/12 bg-white p-5 shadow-[0_20px_44px_rgba(79,70,229,0.16)] z-20"
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.12em] text-[#F97316]">Kết quả trong ngày</p>
            <p className="mt-2 text-2xl font-black text-[#1E1B4B]">4 việc xong, +46 điểm</p>
          </div>
          <div className="rounded-[18px] bg-[#EEF2FF] px-4 py-3 text-center text-sm font-black text-[#4F46E5]">
            Bạn đồng hành<br />sắp lên cấp
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const heroContainerRef = useRef<HTMLDivElement>(null);

  useGSAP((context, contextSafe) => {
    if (!contextSafe) return;

    // 1. Hero text clip-path reveal
    gsap.from(".hero-title-word", {
      y: "100%",
      opacity: 0,
      stagger: 0.08,
      duration: 0.8,
      ease: "power4.out",
      delay: 0.2
    });

    // 1b. Text Gradient Glow Animation
    gsap.to(".text-gradient-glow", {
      backgroundPosition: "200% center",
      duration: 3,
      repeat: -1,
      ease: "none"
    });

    gsap.from(".hero-fade-in", {
      opacity: 0,
      y: 20,
      stagger: 0.12,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.6
    });

    // 2. Hero Phone visual entrance & Transform Origin Setup
    gsap.set([".hero-phone-left", ".hero-phone-right"], { transformOrigin: "50% 90%" });

    gsap.from(".hero-phone-left", {
      x: -80,
      rotation: -15,
      opacity: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.75)",
      delay: 0.8
    });
    gsap.from(".hero-phone-right", {
      x: 80,
      rotation: 15,
      opacity: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.75)",
      delay: 0.95
    });

    // 2b. Hero Phone floating loop (gentle sway pivoting at the bottom)
    gsap.to(".hero-phone-left", {
      rotation: "+=3",
      y: "+=6",
      duration: 3.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1.8
    });
    gsap.to(".hero-phone-right", {
      rotation: "-=3",
      y: "-=6",
      duration: 3.6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 2.0
    });

    // 2c. Hover effects for Hero Phones
    const phoneLeft = heroContainerRef.current?.querySelector(".hero-phone-left");
    const phoneRight = heroContainerRef.current?.querySelector(".hero-phone-right");

    const onLeftEnter = contextSafe(() => {
      if (phoneLeft) gsap.to(phoneLeft, { scale: 1.06, y: "-=10", duration: 0.4, ease: "power2.out", overwrite: "auto" });
    });
    const onLeftLeave = contextSafe(() => {
      if (phoneLeft) gsap.to(phoneLeft, { scale: 1.0, y: "+=10", duration: 0.4, ease: "power2.out", overwrite: "auto" });
    });
    const onRightEnter = contextSafe(() => {
      if (phoneRight) gsap.to(phoneRight, { scale: 1.06, y: "-=10", duration: 0.4, ease: "power2.out", overwrite: "auto" });
    });
    const onRightLeave = contextSafe(() => {
      if (phoneRight) gsap.to(phoneRight, { scale: 1.0, y: "+=10", duration: 0.4, ease: "power2.out", overwrite: "auto" });
    });

    if (phoneLeft) {
      phoneLeft.addEventListener("mouseenter", onLeftEnter);
      phoneLeft.addEventListener("mouseleave", onLeftLeave);
    }
    if (phoneRight) {
      phoneRight.addEventListener("mouseenter", onRightEnter);
      phoneRight.addEventListener("mouseleave", onRightLeave);
    }

    gsap.from(".hero-mascot-badge", {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
      delay: 1.3
    });

    gsap.from(".hero-status-bar", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 1.4
    });

    // 3. Mouse Parallax & DinoPet Head Tracking (Interactive)
    const floatingItems = gsap.utils.toArray(".hero-floating-item") as HTMLElement[];
    const mascotImg = heroContainerRef.current?.querySelector(".hero-mascot-img") as HTMLElement;

    const onMouseMove = contextSafe((e: MouseEvent) => {
      if (!heroContainerRef.current) return;
      const rect = heroContainerRef.current.getBoundingClientRect();
      const xRel = (e.clientX - rect.left) / rect.width - 0.5;
      const yRel = (e.clientY - rect.top) / rect.height - 0.5;

      floatingItems.forEach((item: any) => {
        const speed = parseFloat(item.dataset.speed || "20");
        gsap.to(item, {
          x: xRel * speed,
          y: yRel * speed,
          duration: 0.6,
          ease: "power2.out",
          overwrite: "auto"
        });
      });

      if (mascotImg) {
        gsap.to(mascotImg, {
          x: xRel * 12,
          y: yRel * 12,
          rotation: xRel * 10,
          duration: 0.5,
          ease: "power1.out",
          overwrite: "auto"
        });
      }
    });

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (phoneLeft) {
        phoneLeft.removeEventListener("mouseenter", onLeftEnter);
        phoneLeft.removeEventListener("mouseleave", onLeftLeave);
      }
      if (phoneRight) {
        phoneRight.removeEventListener("mouseenter", onRightEnter);
        phoneRight.removeEventListener("mouseleave", onRightLeave);
      }
    };
  }, { scope: heroContainerRef });

  return (
    <section ref={heroContainerRef} className="relative isolate overflow-hidden px-5 pb-16 pt-4 sm:px-8 lg:pb-20 paper-texture">
      <HeroBackgroundAnimation />

      {/* Floating hand-drawn doodles */}
      <div className="hero-floating-item absolute left-[8%] top-[15%] hidden lg:block text-[#FBBF24] opacity-75 animate-float-slow pointer-events-none" data-speed="-25">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6.4-4.8-6.4 4.8 2.4-7.2-6-4.8h7.6z" />
        </svg>
      </div>
      <div className="hero-floating-item absolute left-[3%] bottom-[12%] hidden lg:block text-[#F97316] opacity-70 animate-float-medium pointer-events-none" data-speed="35">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
      <div className="hero-floating-item absolute right-[52%] top-[25%] hidden lg:block text-[#0D9488] opacity-20 rotate-[25deg] animate-float-slow pointer-events-none" data-speed="-15">
        <Image
          src="/dinopet-mascot.png"
          width={36}
          height={36}
          alt=""
          className="grayscale saturate-0"
        />
      </div>
      <div className="hero-floating-item absolute right-[46%] bottom-[8%] hidden lg:block text-[#FBBF24] opacity-80 rotate-[-15deg] animate-float-medium pointer-events-none" data-speed="20">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="hero-fade-in mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#4F46E5] shadow-[0_8px_20px_rgba(79,70,229,0.10)]">
            <Sparkles className="size-4 text-[#F97316]" />
            Đã chính thức ra mắt trên iOS & Android!
          </div>

          {/* Split Title Reveal */}
          <h1 className="hero-title max-w-3xl text-[42px] font-black leading-[1.02] -tracking-[0.03em] text-[#1E1B4B] sm:text-[58px] overflow-hidden flex flex-wrap">
            <span className="inline-block overflow-hidden mr-2.5 sm:mr-3.5"><span className="hero-title-word inline-block">Con</span></span>
            <span className="inline-block overflow-hidden mr-2.5 sm:mr-3.5"><span className="hero-title-word inline-block">tự</span></span>
            <span className="inline-block overflow-hidden mr-2.5 sm:mr-3.5"><span className="hero-title-word inline-block">giác</span></span>
            <span className="inline-block overflow-hidden mr-2.5 sm:mr-3.5"><span className="hero-title-word inline-block">việc</span></span>
            <span className="inline-block overflow-hidden mr-2.5 sm:mr-3.5"><span className="hero-title-word inline-block">nhà,</span></span>
            <span className="inline-block overflow-hidden mr-2.5 sm:mr-3.5"><span className="hero-title-word inline-block">ba</span></span>
            <span className="inline-block overflow-hidden mr-2.5 sm:mr-3.5"><span className="hero-title-word inline-block">mẹ</span></span>
            <span className="inline-block overflow-hidden mr-2.5 sm:mr-3.5"><span className="hero-title-word inline-block text-gradient-glow bg-gradient-to-r from-[#F97316] via-[#FF7563] to-[#F97316] bg-[length:200%_auto] bg-clip-text text-transparent">nhàn</span></span>
            <span className="inline-block overflow-hidden"><span className="hero-title-word inline-block text-gradient-glow bg-gradient-to-r from-[#F97316] via-[#FF7563] to-[#F97316] bg-[length:200%_auto] bg-clip-text text-transparent">tênh</span></span>
          </h1>

          <p className="hero-fade-in mt-6 max-w-xl text-lg leading-relaxed text-[#312E81]/80 font-medium">
            ParentPal giúp con tự giác làm việc nhà qua ví điểm thưởng cùng DinoPet, ba mẹ nhàn tênh rảnh tay.
          </p>
          <div className="hero-fade-in mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryCta />
            <SecondaryCta />
          </div>
          <div id="notify" className="hero-fade-in mt-5 flex flex-wrap items-center gap-3 text-sm font-semibold text-[#6366F1]">
            <MailCheck className="size-4 text-[#F97316]" />
            Đã phát hành bản chính thức. Tải về miễn phí trên App Store & Google Play.
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
