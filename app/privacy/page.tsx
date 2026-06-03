import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chính sách Bảo mật - ParentPal',
  description: 'Chính sách bảo mật dữ liệu của ứng dụng ParentPal - Khủng Long Chăm Chỉ',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#F0F0FB] text-[#1E1B4B]">
      {/* Header */}
      <header className="border-b border-[#4F46E5]/10 bg-white/80 px-5 py-4 backdrop-blur sm:px-8">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link href="/" className="text-lg font-bold text-[#4F46E5]">
            ParentPal
          </Link>
          <span className="text-sm text-[#1E1B4B]/50">Chính sách Bảo mật</span>
        </div>
      </header>

      {/* Content */}
      <article className="mx-auto max-w-3xl px-5 py-10 sm:px-8">
        <h1 className="mb-2 text-3xl font-bold">Chính sách Bảo mật</h1>
        <p className="mb-8 text-sm text-[#1E1B4B]/50">Cập nhật lần cuối: 20 tháng 5, 2026</p>

        <div className="space-y-8 text-[15px] leading-relaxed text-[#1E1B4B]/80">
          <Section title="1. Giới thiệu">
            <p>
              Công ty Cổ phần Công nghệ Việt 41 (&quot;V41&quot;, &quot;chúng tôi&quot;) vận hành ứng dụng
              ParentPal - Khủng Long Chăm Chỉ (&quot;Ứng dụng&quot;). Chính sách này mô tả cách chúng tôi
              thu thập, sử dụng và bảo vệ thông tin của bạn và con bạn khi sử dụng Ứng dụng.
            </p>
            <p>
              Ứng dụng được thiết kế cho gia đình Việt Nam, trong đó phụ huynh quản lý và trẻ em
              sử dụng dưới sự giám sát của phụ huynh. Chúng tôi cam kết bảo vệ quyền riêng tư
              của trẻ em và tuân thủ các quy định về bảo vệ dữ liệu trẻ em (COPPA).
            </p>
          </Section>

          <Section title="2. Dữ liệu chúng tôi thu thập">
            <h4 className="mt-3 font-semibold text-[#1E1B4B]">2.1 Thông tin phụ huynh</h4>
            <ul className="ml-4 mt-1 list-disc space-y-1">
              <li>Email đăng ký và mật khẩu (được mã hóa)</li>
              <li>Họ tên và ảnh đại diện (tùy chọn)</li>
              <li>Thông tin đăng nhập mạng xã hội (Google, Apple) nếu sử dụng</li>
            </ul>

            <h4 className="mt-3 font-semibold text-[#1E1B4B]">2.2 Thông tin trẻ em</h4>
            <ul className="ml-4 mt-1 list-disc space-y-1">
              <li>Tên hiển thị (do phụ huynh tạo)</li>
              <li>Mã PIN đăng nhập (được mã hóa)</li>
              <li>Ảnh chụp khi hoàn thành nhiệm vụ</li>
              <li>Dữ liệu hoạt động: điểm thưởng, huy hiệu, trạng thái khủng long ảo</li>
            </ul>

            <h4 className="mt-3 font-semibold text-[#1E1B4B]">2.3 Dữ liệu gia đình</h4>
            <ul className="ml-4 mt-1 list-disc space-y-1">
              <li>Cấu trúc hộ gia đình và vai trò thành viên</li>
              <li>Nhiệm vụ, chiến dịch và lịch sử giao dịch điểm</li>
              <li>Mục tiêu tiết kiệm</li>
            </ul>

            <h4 className="mt-3 font-semibold text-[#1E1B4B]">2.4 Dữ liệu kỹ thuật</h4>
            <ul className="ml-4 mt-1 list-disc space-y-1">
              <li>Mã thiết bị (FCM token) để gửi thông báo</li>
              <li>Phiên bản ứng dụng và hệ điều hành</li>
            </ul>
          </Section>

          <Section title="3. Mục đích sử dụng dữ liệu">
            <ul className="ml-4 list-disc space-y-1">
              <li>Cung cấp và vận hành các tính năng của Ứng dụng</li>
              <li>Xác thực tài khoản phụ huynh và hồ sơ trẻ em</li>
              <li>Gửi thông báo về nhiệm vụ, phần thưởng và hoạt động gia đình</li>
              <li>Cải thiện chất lượng và trải nghiệm Ứng dụng</li>
              <li>Hỗ trợ kỹ thuật khi được yêu cầu</li>
            </ul>
            <p className="mt-2">
              Chúng tôi <strong>không</strong> bán, cho thuê hoặc chia sẻ dữ liệu cá nhân cho bên thứ ba
              vì mục đích quảng cáo hoặc tiếp thị.
            </p>
          </Section>

          <Section title="4. Bảo vệ dữ liệu trẻ em (COPPA)">
            <ul className="ml-4 list-disc space-y-1">
              <li>Trẻ em không thể tự đăng ký tài khoản — chỉ phụ huynh mới có quyền tạo hồ sơ cho trẻ</li>
              <li>Trẻ đăng nhập bằng mã PIN do phụ huynh thiết lập, không yêu cầu email riêng</li>
              <li>Ứng dụng không thu thập thông tin cá nhân nhạy cảm của trẻ (ngày sinh, địa chỉ, số điện thoại)</li>
              <li>Ảnh chụp nhiệm vụ chỉ hiển thị trong phạm vi hộ gia đình</li>
              <li>Không hiển thị quảng cáo cho trẻ em</li>
              <li>Phụ huynh có toàn quyền xem, chỉnh sửa và xóa dữ liệu của trẻ</li>
            </ul>
          </Section>

          <Section title="5. Bảo mật dữ liệu">
            <ul className="ml-4 list-disc space-y-1">
              <li>Mật khẩu và mã PIN được mã hóa (hash) trước khi lưu trữ</li>
              <li>Kết nối được mã hóa bằng TLS/SSL (HTTPS)</li>
              <li>Dữ liệu được lưu trữ trên máy chủ bảo mật với giới hạn truy cập</li>
              <li>Hệ thống ghi nhật ký kiểm toán cho các thao tác quản trị</li>
            </ul>
          </Section>

          <Section title="6. Quyền của người dùng">
            <p>Phụ huynh có các quyền sau:</p>
            <ul className="ml-4 mt-1 list-disc space-y-1">
              <li><strong>Quyền truy cập:</strong> Xem toàn bộ dữ liệu của gia đình trong Ứng dụng</li>
              <li><strong>Quyền chỉnh sửa:</strong> Cập nhật thông tin cá nhân và hồ sơ trẻ em</li>
              <li><strong>Quyền xóa:</strong> Yêu cầu xóa tài khoản và toàn bộ dữ liệu liên quan</li>
              <li><strong>Quyền rút lui:</strong> Ngừng sử dụng Ứng dụng bất cứ lúc nào</li>
            </ul>
            <p className="mt-2">
              Để thực hiện quyền xóa tài khoản, vui lòng liên hệ chúng tôi qua email bên dưới.
              Chúng tôi sẽ xử lý yêu cầu trong vòng 30 ngày.
            </p>
          </Section>

          <Section title="7. Dịch vụ bên thứ ba">
            <p>Ứng dụng sử dụng các dịch vụ bên thứ ba sau:</p>
            <ul className="ml-4 mt-1 list-disc space-y-1">
              <li><strong>Firebase Cloud Messaging (Google):</strong> Gửi thông báo đẩy</li>
              <li><strong>Google Sign-In / Apple Sign-In:</strong> Đăng nhập nhanh (tùy chọn)</li>
            </ul>
            <p className="mt-2">
              Các dịch vụ này có chính sách bảo mật riêng. Chúng tôi khuyến khích bạn tìm hiểu
              chính sách của từng dịch vụ.
            </p>
          </Section>

          <Section title="8. Lưu trữ và xóa dữ liệu">
            <ul className="ml-4 list-disc space-y-1">
              <li>Dữ liệu được lưu trữ trong suốt thời gian tài khoản hoạt động</li>
              <li>Khi tài khoản bị xóa, toàn bộ dữ liệu cá nhân sẽ được xóa trong vòng 30 ngày</li>
              <li>Dữ liệu ẩn danh có thể được giữ lại cho mục đích thống kê</li>
            </ul>
          </Section>

          <Section title="9. Thay đổi chính sách">
            <p>
              Chúng tôi có thể cập nhật chính sách này theo thời gian. Mọi thay đổi quan trọng
              sẽ được thông báo qua Ứng dụng hoặc email. Việc tiếp tục sử dụng Ứng dụng sau
              khi có thay đổi đồng nghĩa với việc bạn chấp nhận chính sách mới.
            </p>
          </Section>

          <Section title="10. Liên hệ">
            <p>
              Nếu bạn có câu hỏi về chính sách bảo mật hoặc muốn thực hiện quyền của mình,
              vui lòng liên hệ:
            </p>
            <div className="mt-2 rounded-lg bg-white/60 p-4">
              <p className="font-semibold text-[#1E1B4B]">Công ty Cổ phần Công nghệ Việt 41</p>
              <p>Email: info@v41.vn</p>
            </div>
          </Section>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-[#4F46E5]/10 bg-[#1E1B4B] px-5 py-6 text-center text-sm text-white/70">
        <Link href="/" className="hover:text-white">
          &larr; Quay về trang chủ
        </Link>
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
