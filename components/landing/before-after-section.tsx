import { CheckCircle2, XCircle } from 'lucide-react';
import { beforeItems, afterItems } from './landing-data';

/** Before vs After comparison cards */
export function BeforeAfterSection() {
  return (
    <section className="relative overflow-hidden px-5 py-16 sm:px-8">
      {/* Multi-layer gradient background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#FFF7ED_0%,#EEF2FF_40%,#F0F0FB_70%,#E0E7FF_100%)]" />

      {/* Animated gradient overlays */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#FBBF24]/20 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#818CF8]/20 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#FCCF31]/15 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(79, 70, 229, 0.05) 1px, transparent 1px),
                              linear-gradient(rgba(79, 70, 229, 0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.12em] text-[#F97316]">
            &ldquo;Nâng cấp&rdquo; giáo dục, nuôi dạy con
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
            Từ &ldquo;ba mẹ nhắc mãi&rdquo; thành một vòng lặp con tự nhìn thấy và muốn hoàn thành.
          </h2>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {/* Before card */}
          <article className="group rounded-[28px] border border-[#F97316]/25 bg-white/85 p-6 shadow-[0_18px_40px_rgba(249,115,22,0.12)] backdrop-blur-sm transition hover:border-[#F97316]/40 hover:shadow-[0_20px_50px_rgba(249,115,22,0.18)]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#FFF7ED] px-4 py-2 text-sm font-black text-[#C2410C]">
              <XCircle className="size-4" />
              Trước đây
            </div>
            <div className="space-y-3">
              {beforeItems.map((item) => (
                <div key={item} className="rounded-[18px] bg-[#FFF7ED] p-4 text-base font-bold text-[#7C2D12]">
                  {item}
                </div>
              ))}
            </div>
          </article>
          {/* After card */}
          <article className="group rounded-[28px] border border-[#4F46E5]/25 bg-[#1E1B4B]/92 p-6 text-white shadow-[0_18px_40px_rgba(30,27,75,0.20)] backdrop-blur-sm transition hover:border-[#4F46E5]/40 hover:shadow-[0_20px_50px_rgba(79,70,229,0.24)]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-black text-[#FBBF24]">
              <CheckCircle2 className="size-4" />
              Với ParentPal
            </div>
            <div className="space-y-3">
              {afterItems.map((item) => (
                <div key={item} className="rounded-[18px] bg-white/10 p-4 text-base font-bold ring-1 ring-white/10">
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
