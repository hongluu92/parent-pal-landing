import { ChevronRight } from 'lucide-react';
import { appStoreUrl, playStoreUrl } from './constants';

export function AppStoreButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 rounded-[20px] bg-[#1E1B4B] border border-white/10 px-6 py-3 text-white shadow-[0_12px_28px_rgba(30,27,75,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#312E81] hover:border-white/20 hover:shadow-[0_16px_36px_rgba(30,27,75,0.25)] active:scale-95 ${className}`}
    >
      <svg className="size-6 fill-white shrink-0" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 51 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 47.5-24.4 76.5 26.9 2.4 51.2-16 68.3-38.9z" />
      </svg>
      <div className="text-left leading-tight">
        <p className="text-[10px] font-bold uppercase tracking-wider text-white/50">Tải trên</p>
        <p className="text-sm font-black tracking-tight text-white">App Store</p>
      </div>
    </a>
  );
}

export function PlayStoreButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 rounded-[20px] bg-[#1E1B4B] border border-white/10 px-6 py-3 text-white shadow-[0_12px_28px_rgba(30,27,75,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#312E81] hover:border-white/20 hover:shadow-[0_16px_36px_rgba(30,27,75,0.25)] active:scale-95 ${className}`}
    >
      <svg className="size-6 fill-white shrink-0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58 33.3-60.1-60.1L434.7 176c18.5-10.6 30.3-2 30.3 14.3v41c0 16.3-11.8 24.9-32.8 34.3zM104.6 499l220.7-220.7 60.1 60.1L104.6 499z" />
      </svg>
      <div className="text-left leading-tight">
        <p className="text-[10px] font-bold uppercase tracking-wider text-white/50">Tải trên</p>
        <p className="text-sm font-black tracking-tight text-white">Google Play</p>
      </div>
    </a>
  );
}

export function PrimaryCta() {
  return (
    <a
      href="#download"
      className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#F97316] px-8 text-base font-black text-white shadow-[0_16px_34px_rgba(249,115,22,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#EA580C] hover:shadow-[0_20px_40px_rgba(249,115,22,0.35)] active:scale-95"
    >
      Tải ứng dụng ngay
      <ChevronRight className="ml-2 size-4" />
    </a>
  );
}

export function SecondaryCta() {
  return (
    <a
      href="#how"
      className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-[#4F46E5]/18 bg-white px-8 text-base font-black text-[#4F46E5] shadow-[0_12px_28px_rgba(79,70,229,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#4F46E5]/35 hover:shadow-[0_16px_32px_rgba(79,70,229,0.15)] active:scale-95"
    >
      Xem cách hoạt động
    </a>
  );
}
