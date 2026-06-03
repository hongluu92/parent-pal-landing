import Image from 'next/image';
import { BookOpen, ChevronRight } from 'lucide-react';
import { steps, stepIcons } from './landing-data';

/** Step-by-step explanation of how ParentPal works */
export function HowItWorksSection() {
  return (
    <section id="how" className="relative isolate overflow-hidden bg-[#1E1B4B] py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(249,115,22,0.22),transparent_32%),radial-gradient(circle_at_86%_24%,rgba(129,140,248,0.24),transparent_34%),linear-gradient(135deg,#1E1B4B_0%,#312E81_62%,#1E1B4B_100%)]" />
      <Image
        src="/parentpal-hero-illustration.png"
        width={1200}
        height={900}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -left-24 hidden w-[620px] max-w-none opacity-[0.13] saturate-150 lg:block"
      />
      <div className="pointer-events-none absolute right-[10%] top-10 hidden h-28 w-28 rounded-full border border-[#FDBA74]/25 lg:block" />
      <div className="pointer-events-none absolute bottom-14 right-[42%] hidden h-16 w-16 rounded-full bg-[#F97316]/12 blur-sm lg:block" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.12em] text-[#FBBF24]">Cách hoạt động</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Một vòng lặp đơn giản cho cả nhà.</h2>
          <p className="mt-5 text-base leading-8 text-white/72">
            Ba mẹ thiết lập nhiệm vụ, con hoàn thành bằng hành động thực tế, cả gia đình cùng theo dõi tiến bộ qua điểm thưởng và bạn đồng hành DinoPet.
          </p>
          <a
            href="/Huong_Dan_Su_Dung_ParentPal.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full border border-white/18 bg-white px-5 text-sm font-black text-[#312E81] shadow-[0_16px_34px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-[#FFF7ED]"
          >
            <BookOpen className="size-5 text-[#F97316]" />
            Xem hướng dẫn sử dụng
            <ChevronRight className="size-4" />
          </a>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {steps.map((step, index) => {
            const StepIcon = stepIcons[index];
            return (
              <div key={step} className="rounded-[22px] bg-white/12 p-5 shadow-[0_18px_42px_rgba(15,23,42,0.12)] ring-1 ring-white/12 backdrop-blur">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-[#FBBF24]">0{index + 1}</span>
                  <StepIcon className="size-5 text-[#FDBA74]" />
                </div>
                <p className="mt-4 text-lg font-black leading-7">{step}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
