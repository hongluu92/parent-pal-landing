import Image from 'next/image';
import { CheckCircle2, Coins, PawPrint } from 'lucide-react';

/** DinoPet companion story section with illustration */
export function StoryIllustrationSection() {
  return (
    <section className="bg-[linear-gradient(135deg,#EEF2FF_0%,#FFF7ED_58%,#F0F0FB_100%)] px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.08em] text-[#F97316]">DinoPet đồng hành</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
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
              <div key={label} className="flex items-center gap-2 rounded-[18px] bg-[#F0F0FB] px-4 py-3 text-sm font-black text-[#4F46E5]">
                <Icon className="size-4 shrink-0 text-[#F97316]" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-[34px] border border-[#4F46E5]/10 bg-[#F0F0FB] p-3 shadow-[0_24px_60px_rgba(79,70,229,0.16)]">
          <Image
            src="/parentpal-hero-illustration.png"
            width={1200}
            height={900}
            alt="Gia đình sử dụng ParentPal cùng DinoPet"
            className="h-auto w-full rounded-[26px]"
          />
        </div>
      </div>
    </section>
  );
}
