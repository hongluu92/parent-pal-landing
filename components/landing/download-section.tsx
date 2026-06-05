import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { AppStoreButton, PlayStoreButton } from './buttons';

function QrCodeVisual() {
  return (
    <svg className="size-36 text-[#1E1B4B]" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="160" height="160" rx="16" fill="white" />
      <rect x="12" y="12" width="32" height="32" rx="7" fill="currentColor" />
      <rect x="18" y="18" width="20" height="20" rx="4" fill="white" />
      <rect x="22" y="22" width="12" height="12" rx="2" fill="currentColor" />
      <rect x="116" y="12" width="32" height="32" rx="7" fill="currentColor" />
      <rect x="122" y="18" width="20" height="20" rx="4" fill="white" />
      <rect x="126" y="22" width="12" height="12" rx="2" fill="currentColor" />
      <rect x="12" y="116" width="32" height="32" rx="7" fill="currentColor" />
      <rect x="18" y="122" width="20" height="20" rx="4" fill="white" />
      <rect x="22" y="126" width="12" height="12" rx="2" fill="currentColor" />
      <rect x="124" y="124" width="12" height="12" rx="3" fill="currentColor" />
      <rect x="127" y="127" width="6" height="6" rx="1.5" fill="white" />
      <rect x="129" y="129" width="2" height="2" rx="0.5" fill="currentColor" />
      <path d="M52 14h4v4h-4zm8 0h8v4h-8zm12 0h4v4h-4zm8 0h12v4H80zm16 0h4v4h-4zm12 0h4v4h-4z" fill="currentColor" opacity="0.85" />
      <path d="M52 22h8v4h-8zm12 0h4v4h-4zm8 0h12v4H72zm16 0h8v4h-8zm12 0h4v4h-4z" fill="currentColor" opacity="0.85" />
      <path d="M52 30h4v4h-4zm8 0h4v4h-4zm16 0h8v4h-8zm12 0h8v4h-8zm8 0h4v4h-4z" fill="currentColor" opacity="0.85" />
      <path d="M52 38h12v4H52zm16 0h4v4h-4zm8 0h4v4h-4zm8 0h12v4H84zm16 0h4v4h-4z" fill="currentColor" opacity="0.85" />
      <path d="M14 52h4v8h-4zm8 0h8v4h-8zm12 0h8v8h-8zm8 0h4v4h-4zm16 0h12v4H58zm16 0h4v8h-4zm12 0h8v4h-8zm12 0h4v4h-4zm8 0h8v8h-8z" fill="currentColor" opacity="0.85" />
      <path d="M14 64h8v4h-8zm12 0h4v4h-4zm12 0h12v4H38zm16 0h4v8h-4zm12 0h8v4h-8zm16 0h4v4h-4zm8 0h8v4h-8z" fill="currentColor" opacity="0.85" />
      <path d="M14 76h4v4h-4zm8 0h8v8h-8zm16 0h4v4h-4zm8 0h12v4H46zm20 0h4v8h-4zm12 0h8v4h-8zm12 0h8v4h-8z" fill="currentColor" opacity="0.85" />
      <circle cx="80" cy="80" r="20" fill="white" />
      <circle cx="80" cy="80" r="16" fill="#F97316" />
      <path d="M77.5 73.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm5 0c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm-8 4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8 1.8-.8 1.8-1.8-.8-1.8-1.8-1.8zm11 0c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8 1.8-.8 1.8-1.8-.8-1.8-1.8-1.8zm-5.5 1c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" fill="white" />
      <path d="M52 116h8v4h-8zm12 0h4v4h-4zm16 0h12v4H80zm16 0h4v4h-4zm12 0h4v8h-4z" fill="currentColor" opacity="0.85" />
      <path d="M52 128h4v4h-4zm8 0h12v4H60zm16 0h4v4h-4zm8 0h8v4H84zm16 0h8v4h-8z" fill="currentColor" opacity="0.85" />
      <path d="M52 140h12v4H52zm16 0h4v4h-4zm8 0h8v8h-8zm16 0h4v4h-4zm12 0h4v4h-4z" fill="currentColor" opacity="0.85" />
    </svg>
  );
}

export function DownloadSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(containerRef.current?.querySelector(".download-card") || null, {
      opacity: 0,
      scale: 0.96,
      y: 35,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current?.querySelector(".download-card"),
        start: "top 85%"
      }
    });
  }, { scope: containerRef });

  return (
    <section id="download" ref={containerRef} className="relative isolate overflow-hidden px-5 py-24 sm:px-8 bg-[#FAF8F5] border-t border-[#4F46E5]/10">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-[#4F46E5]/4 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-[#F97316]/4 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl">
        <div
          className="download-card relative overflow-hidden rounded-[32px] border border-white/60 bg-white/70 p-8 shadow-[0_24px_60px_rgba(79,70,229,0.06)] backdrop-blur-xl sm:p-12 lg:p-16"
        >
          <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(90deg, rgba(79, 70, 229, 0.04) 1px, transparent 1px),
                                linear-gradient(rgba(79, 70, 229, 0.04) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF2FF] px-4 py-2 text-sm font-black text-[#4F46E5]">
                <Sparkles className="size-4 text-[#F97316]" />
                Ứng dụng chính thức
              </span>
              <h2 className="mt-6 text-3xl font-black leading-tight text-[#1E1B4B] sm:text-4xl lg:text-5xl">
                Sẵn sàng đồng hành cùng con yêu?
              </h2>
              <p className="mt-5 text-base leading-8 text-[#312E81]/80 max-w-xl">
                Tải ngay ParentPal trên App Store hoặc Google Play để bắt đầu hành trình xây dựng thói quen tự lập, trách nhiệm và gắn kết yêu thương cùng con.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <AppStoreButton />
                <PlayStoreButton />
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#4F46E5]/80">
                <CheckCircle2 className="size-4 text-[#22C55E]" />
                Hỗ trợ thiết bị chạy hệ điều hành iOS và Android.
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="group relative rounded-[28px] border border-white bg-white/80 p-6 shadow-[0_20px_45px_rgba(79,70,229,0.10)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(79,70,229,0.15)]">
                <div className="absolute inset-0 -z-10 rounded-[28px] bg-gradient-to-br from-[#4F46E5]/15 to-[#F97316]/15 opacity-0 transition group-hover:opacity-100 blur-md pointer-events-none" />

                <div className="rounded-[16px] bg-white p-3 flex items-center justify-center shadow-inner">
                  <Image
                    src="/qr-code-download-ios.png"
                    width={144}
                    height={144}
                    alt="Mã QR tải ứng dụng ParentPal"
                    className="rounded-[8px]"
                  />
                </div>
                <div className="mt-5 text-center pointer-events-none">
                  <p className="text-sm font-black text-[#1E1B4B]">Quét mã QR để tải</p>
                  <p className="mt-1 text-xs text-[#312E81]/60">Mở camera trên điện thoại để quét mã</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
