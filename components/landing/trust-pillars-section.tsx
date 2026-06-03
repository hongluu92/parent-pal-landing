import { HeartHandshake, ShieldCheck, WalletCards } from 'lucide-react';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Ba mẹ duyệt trước',
    body: 'Điểm thưởng chỉ cộng sau khi phụ huynh xác nhận bài nộp.',
  },
  {
    icon: WalletCards,
    title: 'Thưởng theo cách của gia đình',
    body: 'Ba mẹ có thể dùng điểm, mục tiêu tiết kiệm hoặc phần thưởng nhỏ, không cần biến mọi việc thành tiền mặt.',
  },
  {
    icon: HeartHandshake,
    title: 'Đồng hành nhẹ nhàng',
    body: 'App giúp gia đình có hệ thống chung, không biến thưởng thành áp lực.',
  },
];

/** Three trust/value proposition cards */
export function TrustPillarsSection() {
  return (
    <section className="bg-[linear-gradient(135deg,#FFF7ED_0%,#F0F0FB_68%,#E0E7FF_100%)] px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
        {pillars.map(({ icon: Icon, title, body }) => (
          <article key={title} className="rounded-[22px] border border-[#F97316]/10 bg-white/86 p-6 shadow-[0_10px_28px_rgba(249,115,22,0.10)]">
            <Icon className="size-6 text-[#F97316]" />
            <h3 className="mt-4 text-lg font-black">{title}</h3>
            <p className="mt-3 leading-7 text-[#312E81]/72">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
