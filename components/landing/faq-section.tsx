import { faqs } from './landing-data';

/** Frequently asked questions accordion */
export function FaqSection() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
      <h2 className="text-center text-3xl font-black">Câu hỏi phụ huynh thường quan tâm</h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-base leading-7 text-[#312E81]/72">
        Một vài băn khoăn trước khi gia đình dùng ParentPal: quyền kiểm soát của ba mẹ, điểm thưởng, AI hỗ trợ và dữ liệu của con.
      </p>
      <div className="mt-8 space-y-3">
        {faqs.map((item) => (
          <details key={item.q} className="rounded-[18px] border border-[#4F46E5]/10 bg-white/88 p-5 shadow-[0_8px_22px_rgba(79,70,229,0.08)]">
            <summary className="cursor-pointer text-base font-black">{item.q}</summary>
            <p className="mt-3 leading-7 text-[#312E81]/72">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
