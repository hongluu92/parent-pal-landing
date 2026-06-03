import Image from 'next/image';
import { PawPrint } from 'lucide-react';
import { features } from './landing-data';

/** Highlighted features grid on indigo background */
export function FeaturesSection() {
  return (
    <section id="features" className="relative isolate overflow-hidden bg-[#4338CA] px-5 py-16 text-white sm:px-8">
      <div className="animate-parentpal-gradient-flow pointer-events-none absolute inset-0 -z-30 bg-[linear-gradient(135deg,#312E81_0%,#4338CA_42%,#4F46E5_72%,#F97316_140%)] bg-[length:180%_180%]" />
      <Image
        src="/parentpal-hero-illustration.png"
        width={1200}
        height={900}
        alt=""
        aria-hidden="true"
        className="animate-parentpal-feature-drift pointer-events-none absolute -right-52 -top-32 -z-20 hidden w-[780px] max-w-none opacity-[0.18] mix-blend-screen saturate-150 lg:block"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px),
                            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                            linear-gradient(180deg, rgba(30,27,75,0.18), rgba(79,70,229,0.04))`,
          backgroundSize: '74px 74px, 74px 74px, auto',
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.12em] text-[#FDBA74]">Tính năng nổi bật</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Không chỉ quản lý việc nhà, ParentPal biến tiến bộ của con thành thứ cả nhà cùng nhìn thấy.
          </h2>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, body, stat }) => (
            <article
              key={title}
              className="relative overflow-hidden rounded-[24px] border border-white/35 bg-white/86 p-6 text-[#1E1B4B] shadow-[0_14px_34px_rgba(30,27,75,0.18)] backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/94"
            >
              <PawPrint className="pointer-events-none absolute -bottom-5 -right-5 size-24 text-[#EEF2FF]" />
              <div className="relative mb-6 flex items-center justify-between">
                <div className="inline-flex rounded-[18px] bg-[#EEF2FF] p-4 text-[#4F46E5]">
                  <Icon className="size-7" />
                </div>
                <span className="rounded-full bg-[#FFF7ED] px-3 py-1 text-xs font-black text-[#C2410C]">
                  {stat}
                </span>
              </div>
              <h3 className="relative text-xl font-black">{title}</h3>
              <p className="relative mt-3 leading-7 text-[#312E81]/72">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
