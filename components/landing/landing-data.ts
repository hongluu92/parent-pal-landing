import {
  Camera,
  CheckCircle2,
  Coins,
  PawPrint,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from 'lucide-react';

/** Feature cards displayed in the highlights section */
export const features = [
  {
    icon: Camera,
    title: 'Không chỉ tick cho xong',
    body: 'Con gửi ảnh minh chứng, ba mẹ duyệt trước khi điểm thưởng được cộng.',
    stat: 'Ảnh + duyệt',
  },
  {
    icon: Coins,
    title: 'Thưởng rõ ràng, dễ hiểu',
    body: 'Mỗi nhiệm vụ có điểm riêng để con nhìn thấy công sức của mình ngay trong app.',
    stat: '+ điểm',
  },
  {
    icon: PawPrint,
    title: 'DinoPet ghi nhận tiến bộ',
    body: 'Điểm, chuỗi ngày và huy hiệu giúp con thấy nỗ lực của mình có kết quả mỗi ngày.',
    stat: 'Bạn đồng hành',
  },
  {
    icon: WalletCards,
    title: 'Ví điểm và tiết kiệm',
    body: 'Ba mẹ theo dõi số dư, mục tiêu tiết kiệm và tỷ lệ quy đổi theo cách của gia đình.',
    stat: 'Ví gia đình',
  },
  {
    icon: Sparkles,
    title: 'AI hỗ trợ chấm bài nộp',
    body: 'AI xem ảnh minh chứng và gợi ý kết quả để ba mẹ duyệt nhanh hơn, vẫn giữ quyền quyết định cuối cùng trong tay phụ huynh.',
    stat: 'AI review',
  },
  {
    icon: ShieldCheck,
    title: 'Quy tắc thưởng do ba mẹ đặt',
    body: 'Ba mẹ quyết định nhiệm vụ nào cần ảnh, bao nhiêu điểm và cách đổi thưởng phù hợp với nếp sinh hoạt của gia đình.',
    stat: 'Ba mẹ kiểm soát',
  },
];

/** How-it-works step labels */
export const steps = [
  'Ba mẹ tạo hồ sơ và chọn nhiệm vụ phù hợp',
  'Con mở app xem việc hôm nay và tự hoàn thành',
  'Con gửi ảnh minh chứng để ba mẹ duyệt',
  'Điểm cộng vào ví, DinoPet ghi nhận tiến bộ của con',
];

export const stepIcons = [PawPrint, CheckCircle2, Camera, Coins];

/** Before/After comparison items */
export const beforeItems = [
  'Ba mẹ phải nhắc lại nhiều lần',
  'Con quên việc hoặc không rõ cần làm gì',
  'Thưởng phạt dễ bị cảm tính',
];

export const afterItems = [
  'Nhiệm vụ hôm nay hiển thị rõ ràng',
  'Con gửi ảnh, ba mẹ duyệt ngay trên app',
  'Điểm thưởng và tiến bộ được ghi nhận tự động',
];

/** FAQ entries */
export const faqs = [
  {
    q: 'ParentPal đã có trên App Store hoặc Google Play chưa?',
    a: 'Sản phẩm đang ở giai đoạn chuẩn bị phát hành. Website này giới thiệu giá trị cốt lõi trước khi mở tải chính thức.',
  },
  {
    q: 'App này dành cho ai?',
    a: 'ParentPal hướng tới gia đình Việt có con nhỏ, muốn biến việc nhà, thói quen tốt và quản lý tiền thưởng thành một hành trình dễ theo dõi hơn.',
  },
  {
    q: 'ParentPal khác gì một app nhắc việc thông thường?',
    a: 'ParentPal không chỉ nhắc con làm việc. App tạo một vòng lặp đầy đủ: ba mẹ giao nhiệm vụ, con xem việc cần làm, gửi ảnh minh chứng, ba mẹ duyệt và điểm thưởng được ghi nhận để cả nhà thấy tiến bộ rõ ràng.',
  },
  {
    q: 'Ba mẹ có kiểm soát được điểm thưởng không?',
    a: 'Có. Con gửi bài, ba mẹ duyệt trước khi điểm được cộng. Tỷ lệ quy đổi và cách thưởng cũng do ba mẹ cấu hình.',
  },
  {
    q: 'Điểm thưởng có bắt buộc quy đổi thành tiền không?',
    a: 'Không bắt buộc. Mỗi gia đình có thể dùng điểm như một cách ghi nhận nỗ lực, đổi thành phần thưởng nhỏ, mục tiêu tiết kiệm hoặc quy tắc riêng phù hợp với nếp sinh hoạt của nhà mình.',
  },
  {
    q: 'DinoPet có làm app giống game quá không?',
    a: 'DinoPet được đặt vai trò là bạn đồng hành ghi nhận tiến bộ, không phải trò chơi chính. Mục tiêu là giúp con thấy việc tốt của mình có kết quả mỗi ngày, trong khi quyền giao việc, duyệt bài và đặt thưởng vẫn nằm ở ba mẹ.',
  },
  {
    q: 'AI chấm bài nộp hoạt động như thế nào?',
    a: 'AI hỗ trợ xem ảnh minh chứng và gợi ý kết quả để ba mẹ duyệt nhanh hơn. Quyết định cuối cùng vẫn thuộc về phụ huynh, nên AI đóng vai trò trợ lý kiểm tra chứ không tự thay ba mẹ thưởng phạt.',
  },
  {
    q: 'Ảnh minh chứng và dữ liệu của con có bị công khai không?',
    a: 'Không. Ảnh bài nộp và tiến độ của con được thiết kế để phục vụ việc theo dõi trong phạm vi gia đình. Khi phát hành chính thức, ParentPal sẽ công bố chính sách bảo mật và điều khoản sử dụng rõ ràng để phụ huynh nắm được cách dữ liệu được xử lý.',
  },
  {
    q: 'Nếu con chưa có điện thoại riêng thì dùng được không?',
    a: 'Có thể dùng theo cách linh hoạt hơn, ví dụ con dùng thiết bị chung của gia đình dưới sự hướng dẫn của ba mẹ. Trọng tâm của ParentPal vẫn là giúp gia đình thống nhất nhiệm vụ, bằng chứng hoàn thành và cách ghi nhận.',
  },
  {
    q: 'Ba mẹ có thể thay đổi nhiệm vụ sau khi tạo không?',
    a: 'Có. Ba mẹ có thể điều chỉnh nhiệm vụ, điểm thưởng, yêu cầu ảnh minh chứng hoặc cách đổi thưởng để phù hợp với độ tuổi của con và lịch sinh hoạt từng giai đoạn.',
  },
];

/** Floating icon marks for hero background */
export const heroMarks = [
  { icon: CheckCircle2, className: 'left-[46%] top-[32%] text-[#4F46E5]', delay: '-1s' },
  { icon: Camera, className: 'left-[36%] top-[11%] text-[#F97316]', delay: '-3s' },
  { icon: Coins, className: 'right-[12%] top-[24%] text-[#FBBF24]', delay: '-5s' },
  { icon: PawPrint, className: 'left-[18%] bottom-[7%] text-[#22C55E]', delay: '-2s' },
  { icon: WalletCards, className: 'right-[30%] bottom-[14%] text-[#4F46E5]', delay: '-6s' },
  { icon: Sparkles, className: 'right-[6%] bottom-[36%] text-[#F97316]', delay: '-4s' },
];
