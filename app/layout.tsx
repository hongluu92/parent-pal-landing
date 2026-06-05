import type { Metadata } from 'next';
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from 'next/font/google';
import 'antd/dist/reset.css';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-bricolage',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ParentPal - Con tự giác việc nhà, ba mẹ nhàn tênh',
  description: 'ParentPal là ứng dụng giúp bố mẹ giao việc nhà, rèn luyện thói quen tự lập cho con thông qua hệ thống điểm thưởng và người bạn đồng hành DinoPet đáng yêu. Giúp con tự giác mà không cần quát mắng.',
  keywords: ['parentpal', 'app giao việc cho con', 'dạy con tự lập', 'việc nhà cho bé', 'rèn luyện thói quen tốt', 'dinopet', 'nuôi dạy con gen z', 'v41'],
  authors: [{ name: 'V41', url: 'https://v41.vn' }],
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'ParentPal - Con tự giác việc nhà, ba mẹ nhàn tênh',
    description: 'ParentPal là ứng dụng giúp bố mẹ giao việc nhà, rèn luyện thói quen tự lập cho con thông qua hệ thống điểm thưởng và người bạn đồng hành DinoPet đáng yêu.',
    url: 'https://parentpal.vn',
    siteName: 'ParentPal',
    type: 'website',
    locale: 'vi_VN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ParentPal - Con tự giác việc nhà, ba mẹ nhàn tênh',
    description: 'ParentPal là ứng dụng giúp bố mẹ giao việc nhà, rèn luyện thói quen tự lập cho con thông qua hệ thống điểm thưởng và người bạn đồng hành DinoPet đáng yêu.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': 'ParentPal',
    'operatingSystem': 'iOS, Android',
    'applicationCategory': 'ParentingApplication',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'VND',
    },
    'description': 'ParentPal là ứng dụng giúp bố mẹ giao việc nhà, rèn luyện thói quen tự lập cho con thông qua hệ thống điểm thưởng và người bạn đồng hành DinoPet đáng yêu. Giúp con tự giác mà không cần quát mắng.',
    'publisher': {
      '@type': 'Organization',
      'name': 'V41',
      'url': 'https://v41.vn'
    }
  };

  return (
    <html lang="vi" className={`h-full ${bricolage.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="h-full" suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
