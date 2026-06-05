import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Footer } from '@/components/landing/footer';

export const metadata: Metadata = {
  title: 'Xóa tài khoản - ParentPal',
  description: 'Hướng dẫn xóa tài khoản và dữ liệu trên ứng dụng ParentPal - Khủng Long Chăm Chỉ',
};

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1E1B4B] paper-texture flex flex-col justify-between">
      <div>
        {/* Header */}
        <header className="mx-auto w-full max-w-6xl flex items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo-mark.png" width={42} height={42} alt="ParentPal logo" className="rounded-[14px]" />
            <span className="text-xl font-black tracking-tight">
              parent<span className="text-[#FF7563]">pal</span>
            </span>
          </Link>
          <Link
            href="/"
            className="rounded-full border border-[#4F46E5]/18 bg-white px-4 py-2 text-xs sm:text-sm font-bold text-[#4F46E5] shadow-[0_4px_12px_rgba(79,70,229,0.05)] transition hover:-translate-y-0.5 hover:bg-neutral-50"
          >
            Về trang chủ
          </Link>
        </header>

        {/* Content Container */}
        <article className="mx-auto my-6 sm:my-12 w-full max-w-4xl px-5 sm:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-[32px] border border-white/70 shadow-[0_30px_80px_rgba(79,70,229,0.06)] p-6 sm:p-12">
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1E1B4B] mb-2">Yêu cầu Xóa Tài khoản</h1>
            <p className="text-sm font-semibold text-[#F97316] mb-8">
              ParentPal - Khủng Long Chăm Chỉ &middot; Cập nhật: 25 tháng 5, 2026
            </p>

            <div className="space-y-10 text-[15px] leading-relaxed text-[#312E81]/80">
              <Section title="Cách xóa tài khoản">
                <p>
                  Bạn có thể tự xóa tài khoản trực tiếp trong ứng dụng ParentPal bằng các bước sau:
                </p>
                <ol className="ml-4 mt-3 list-decimal space-y-2 pl-2">
                  <li>Mở ứng dụng <strong>ParentPal</strong> và đăng nhập bằng tài khoản phụ huynh</li>
                  <li>Vào <strong>Cài đặt</strong> (biểu tượng bánh răng ở góc trên)</li>
                  <li>Cuộn xuống và chọn <strong>&quot;Xóa tài khoản&quot;</strong></li>
                  <li>Xác nhận yêu cầu xóa — hệ thống sẽ yêu cầu bạn nhập lại mật khẩu để xác minh</li>
                  <li>Tài khoản và toàn bộ dữ liệu liên quan sẽ được xóa</li>
                </ol>
              </Section>

              <Section title="Dữ liệu sẽ bị xóa">
                <p>Khi bạn xóa tài khoản, các dữ liệu sau sẽ bị xóa vĩnh viễn:</p>
                <ul className="ml-4 mt-2 list-disc space-y-1 pl-2">
                  <li>Thông tin tài khoản phụ huynh (email, tên, ảnh đại diện)</li>
                  <li>Toàn bộ hồ sơ trẻ em trong gia đình (tên hiển thị, mã PIN)</li>
                  <li>Ảnh chụp chứng minh hoàn thành nhiệm vụ</li>
                  <li>Lịch sử nhiệm vụ, chiến dịch và giao dịch điểm</li>
                  <li>Dữ liệu khủng long ảo (DinoPet), huy hiệu, mục tiêu tiết kiệm</li>
                  <li>Mã thiết bị (FCM token) dùng cho thông báo đẩy</li>
                </ul>
              </Section>

              <Section title="Dữ liệu có thể được giữ lại">
                <ul className="ml-4 list-disc space-y-1 pl-2">
                  <li>
                    <strong>Dữ liệu ẩn danh:</strong> Thống kê tổng hợp không thể liên kết với cá nhân
                    (ví dụ: tổng số nhiệm vụ hoàn thành trên toàn hệ thống) có thể được giữ lại cho
                    mục đích phân tích.
                  </li>
                  <li>
                    <strong>Bản ghi pháp lý:</strong> Nhật ký kiểm toán liên quan đến bảo mật có thể
                    được giữ tối đa 90 ngày theo yêu cầu pháp lý.
                  </li>
                </ul>
              </Section>

              <Section title="Thời gian xử lý">
                <p>
                  Việc xóa tài khoản được thực hiện <strong>ngay lập tức</strong> khi bạn xác nhận
                  trong ứng dụng. Dữ liệu sẽ được xóa hoàn toàn khỏi hệ thống trong vòng
                  <strong> 30 ngày</strong>.
                </p>
              </Section>

              <Section title="Lưu ý quan trọng">
                <ul className="ml-4 list-disc space-y-1 pl-2">
                  <li>Việc xóa tài khoản là <strong>không thể hoàn tác</strong></li>
                  <li>Tất cả hồ sơ trẻ em trong gia đình sẽ bị xóa cùng tài khoản phụ huynh</li>
                  <li>Điểm thưởng và tiến trình sẽ không thể khôi phục</li>
                </ul>
              </Section>

              <Section title="Liên hệ hỗ trợ">
                <p>
                  Nếu bạn không thể truy cập ứng dụng hoặc cần hỗ trợ xóa tài khoản, vui lòng gửi
                  email cho chúng tôi:
                </p>
                <div className="mt-4 rounded-2xl bg-[#EEF2FF] border border-[#4F46E5]/10 p-5">
                  <p className="font-black text-[#1E1B4B] text-[16px]">Công ty Cổ phần Công nghệ Việt 41</p>
                  <p className="mt-1 font-semibold text-[#4F46E5]">
                    Email:{' '}
                    <a href="mailto:info@v41.vn" className="underline hover:text-[#4F46E5]/80 transition-colors">
                      info@v41.vn
                    </a>
                  </p>
                  <p className="mt-2 text-xs text-[#312E81]/60 font-semibold">
                    * Vui lòng ghi rõ email đăng ký tài khoản trong email yêu cầu xóa.
                  </p>
                </div>
              </Section>
            </div>
          </div>
        </article>
      </div>

      <Footer />
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-l-4 border-[#F97316] pl-4 sm:pl-6">
      <h2 className="mb-3 text-xl sm:text-2xl font-black text-[#1E1B4B]">{title}</h2>
      <div className="text-[#312E81]/80 space-y-2 font-medium">{children}</div>
    </section>
  );
}
