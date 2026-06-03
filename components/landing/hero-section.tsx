import Image from 'next/image';
import {
  Camera,
  CheckCircle2,
  ChevronRight,
  Coins,
  MailCheck,
  PawPrint,
  Sparkles,
  WalletCards,
} from 'lucide-react';
import { heroMarks } from './landing-data';

function PrimaryCta() {
  return (
    <a
      href="#notify"
      className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#F97316] px-7 text-base font-black text-white shadow-[0_16px_34px_rgba(249,115,22,0.28)] transition hover:-translate-y-0.5 hover:bg-[#EA580C]"
    >
      Đăng ký nhận bản thử nghiệm
      <ChevronRight className="ml-2 size-4" />
    </a>
  );
}

function SecondaryCta() {
  return (
    <a
      href="#how"
      className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-[#4F46E5]/18 bg-white px-7 text-base font-black text-[#4F46E5] shadow-[0_12px_28px_rgba(79,70,229,0.12)] transition hover:-translate-y-0.5 hover:border-[#4F46E5]/35"
    >
      Xem cách hoạt động
    </a>
  );
}

/** Animated background rails, cards, and floating marks */
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
      {/* Floating mini-cards */}
      <div className="animate-parentpal-hero-card absolute left-[42%] top-[18%] hidden w-32 rounded-[24px] border border-white/70 bg-white/68 p-3 shadow-[0_18px_38px_rgba(79,70,229,0.14)] backdrop-blur-md sm:block">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="size-5 text-[#22C55E]" />
          <div className="h-2 flex-1 rounded-full bg-[#4F46E5]/18" />
        </div>
        <div className="mt-3 h-2 w-3/4 rounded-full bg-[#F97316]/20" />
      </div>
      <div className="animate-parentpal-hero-card-reverse absolute bottom-[14%] right-[43%] hidden w-28 rounded-[22px] border border-white/70 bg-white/62 p-3 shadow-[0_18px_38px_rgba(249,115,22,0.14)] backdrop-blur-md sm:block">
        <div className="flex items-center gap-2">
          <Coins className="size-5 text-[#FBBF24]" />
          <div className="h-2 flex-1 rounded-full bg-[#F97316]/20" />
        </div>
        <div className="mt-3 h-2 w-2/3 rounded-full bg-[#4F46E5]/18" />
      </div>
      {/* Floating icon marks */}
      {heroMarks.map(({ icon: Icon, className, delay }, index) => (
        <div
          key={index}
          className={`animate-parentpal-hero-mark absolute hidden rounded-[22px] border border-white/70 bg-white/52 p-3 shadow-[0_16px_32px_rgba(79,70,229,0.12)] backdrop-blur sm:block ${className}`}
          style={{ animationDelay: delay }}
        >
          <Icon className="size-7" />
        </div>
      ))}
    </div>
  );
}

/** Phone mockup with screenshot */
function MiniPhone({ screenSrc, alt }: { screenSrc: string; alt: string }) {
  return (
    <div className="w-[210px] rounded-[30px] bg-[#1E1B4B] p-2 shadow-[0_24px_54px_rgba(30,27,75,0.26)]">
      <div className="relative h-[420px] overflow-hidden rounded-[24px] bg-[#F0F0FB]">
        <Image src={screenSrc} alt={alt} fill sizes="210px" className="object-cover" priority />
      </div>
    </div>
  );
}

/** Two-phone visual with DinoPet card and daily summary */
function HeroVisual() {
  return (
    <div className="relative mx-auto min-h-[560px] w-full max-w-[610px]">
      <div className="animate-parentpal-gradient-flow absolute inset-x-4 bottom-12 top-8 rounded-[38px] border border-white/65 bg-[radial-gradient(circle_at_22%_20%,#FFF7ED_0%,transparent_34%),radial-gradient(circle_at_78%_30%,#E0E7FF_0%,transparent_38%),linear-gradient(145deg,#FFFFFF_0%,#EEF2FF_45%,#FFF7ED_100%)] bg-[length:180%_180%] shadow-[0_30px_80px_rgba(79,70,229,0.18)]" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full bg-[#1E1B4B] px-4 py-2 text-sm font-black text-white shadow-[0_12px_28px_rgba(30,27,75,0.22)]">
        Ba mẹ giao việc, con nhận thưởng
      </div>
      <div className="animate-parentpal-phone-left absolute left-2 top-28 sm:left-8">
        <MiniPhone screenSrc="/parentpal-parent-screen.png" alt="Giao diện phụ huynh ParentPal" />
      </div>
      <div className="animate-parentpal-phone-right absolute right-2 top-16 sm:right-8">
        <MiniPhone screenSrc="/parentpal-child-screen.png" alt="Giao diện của con trong ParentPal" />
      </div>
      {/* DinoPet badge */}
      <div className="absolute left-1/2 top-[295px] hidden w-[210px] -translate-x-1/2 items-center gap-3 rounded-[22px] border border-white/70 bg-white/92 p-3 shadow-[0_18px_36px_rgba(79,70,229,0.18)] backdrop-blur sm:flex">
        <div className="relative size-14 overflow-hidden rounded-[18px] bg-[#EEF2FF]">
          <Image
            src="/parentpal-hero-illustration.png"
            width={180}
            height={180}
            alt="DinoPet"
            className="h-full w-full scale-[2.8] object-cover object-[88%_66%]"
          />
        </div>
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[#F97316]">DinoPet</p>
          <p className="mt-1 text-sm font-black leading-tight text-[#1E1B4B]">Ghi nhận tiến bộ mỗi ngày</p>
        </div>
      </div>
      {/* Daily summary card */}
      <div className="absolute bottom-0 left-1/2 w-[min(92%,430px)] -translate-x-1/2 rounded-[24px] border border-[#4F46E5]/12 bg-white p-5 shadow-[0_20px_44px_rgba(79,70,229,0.16)]">
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

/** Full hero section: headline, CTAs, and visual */
export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden px-5 pb-16 pt-4 sm:px-8 lg:pb-20">
      <div className="animate-parentpal-gradient-flow pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(120deg,#F0F0FB_0%,#EEF2FF_38%,#FFF7ED_64%,#E0E7FF_100%)] bg-[length:180%_180%]" />
      <HeroBackgroundAnimation />
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#4F46E5] shadow-[0_8px_20px_rgba(79,70,229,0.10)]">
            <Sparkles className="size-4 text-[#F97316]" />
            Sản phẩm chuẩn bị phát hành
          </div>
          <h1 className="max-w-3xl text-[42px] font-black leading-[1.04] tracking-normal text-[#1E1B4B] sm:text-[58px]">
            Cùng bé hoàn thành, Cùng bé trưởng thành
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#312E81]/78">
            ParentPal giúp ba mẹ giao việc, con tự xem nhiệm vụ, gửi ảnh hoàn thành và nhận điểm cùng DinoPet, tích lũy ví thưởng và xây thói quen tốt.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryCta />
            <SecondaryCta />
          </div>
          <div id="notify" className="mt-5 flex flex-wrap items-center gap-3 text-sm font-semibold text-[#6366F1]">
            <MailCheck className="size-4 text-[#F97316]" />
            Bản thử nghiệm sẽ mở đăng ký khi ParentPal sẵn sàng phát hành.
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
