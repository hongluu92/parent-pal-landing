import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Xóa tài khoản - ParentPal',
  description: 'Hướng dẫn xóa tài khoản và dữ liệu trên ứng dụng ParentPal - Khủng Long Chăm Chỉ',
};

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-[#F0F0FB] text-[#1E1B4B]">
      {/* Header */}
      <header className="border-b border-[#4F46E5]/10 bg-white/80 px-5 py-4 backdrop-blur sm:px-8">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link href="/" className="text-lg font-bold text-[#4F46E5]">
            ParentPal
          </Link>
          <span className="text-sm text-[#1E1B4B]/50">Xóa tài khoản</span>
        </div>
      </header>

      {/* Content */}
      <article className="mx-auto max-w-3xl px-5 py-10 sm:px-8">
        <h1 className="mb-2 text-3xl font-bold">Yêu cầu Xóa Tài khoản</h1>
        <p className="mb-8 text-sm text-[#1E1B4B]/50">
          ParentPal - Khủng Long Chăm Chỉ &middot; Cập nhật: 25 tháng 5, 2026
        </p>

        <div className="space-y-8 text-[15px] leading-relaxed text-[#1E1B4B]/80">
          <Section title="Cách xóa tài khoản">
            <p>
              Bạn có thể tự xóa tài khoản trực tiếp trong ứng dụng ParentPal bằng các bước sau:
            </p>
            <ol className="ml-4 mt-3 list-decimal space-y-2">
              <li>Mở ứng dụng <strong>ParentPal</strong> và đăng nhập bằng tài khoản phụ huynh</li>
              <li>Vào <strong>Cài đặt</strong> (biểu tượng bánh răng ở góc trên)</li>
              <li>Cuộn xuống và chọn <strong>&quot;Xóa tài khoản&quot;</strong></li>
              <li>Xác nhận yêu cầu xóa — hệ thống sẽ yêu cầu bạn nhập lại mật khẩu để xác minh</li>
              <li>Tài khoản và toàn bộ dữ liệu liên quan sẽ được xóa</li>
            </ol>
          </Section>

          <Section title="Dữ liệu sẽ bị xóa">
            <p>Khi bạn xóa tài khoản, các dữ liệu sau sẽ bị xóa vĩnh viễn:</p>
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li>Thông tin tài khoản phụ huynh (email, tên, ảnh đại diện)</li>
              <li>Toàn bộ hồ sơ trẻ em trong gia đình (tên hiển thị, mã PIN)</li>
              <li>Ảnh chụp chứng minh hoàn thành nhiệm vụ</li>
              <li>Lịch sử nhiệm vụ, chiến dịch và giao dịch điểm</li>
              <li>Dữ liệu khủng long ảo (DinoPet), huy hiệu, mục tiêu tiết kiệm</li>
              <li>Mã thiết bị (FCM token) dùng cho thông báo đẩy</li>
            </ul>
          </Section>

          <Section title="Dữ liệu có thể được giữ lại">
            <ul className="ml-4 list-disc space-y-1">
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
            <ul className="ml-4 list-disc space-y-1">
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
            <div className="mt-2 rounded-lg bg-white/60 p-4">
              <p className="font-semibold text-[#1E1B4B]">Công ty Cổ phần Công nghệ Việt 41</p>
              <p>
                Email:{' '}
                <a href="mailto:info@v41.vn" className="text-[#4F46E5] underline">
                  info@v41.vn
                </a>
              </p>
              <p className="mt-1 text-sm text-[#1E1B4B]/50">
                Vui lòng ghi rõ email đăng ký tài khoản trong email yêu cầu xóa.
              </p>
            </div>
          </Section>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-[#4F46E5]/10 bg-[#1E1B4B] px-5 py-6 text-center text-sm text-white/70">
        <div className="flex items-center justify-center gap-4">
          <Link href="/privacy" className="hover:text-white">
            Chính sách Bảo mật
          </Link>
          <span>|</span>
          <Link href="/" className="hover:text-white">
            &larr; Quay về trang chủ
          </Link>
        </div>
      </footer>
    </main>
  );
}

/** Reusable section wrapper */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-xl font-bold text-[#1E1B4B]">{title}</h2>
      {children}
    </section>
  );
}
