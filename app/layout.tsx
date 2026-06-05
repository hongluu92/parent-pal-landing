import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import 'antd/dist/reset.css';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: 'ParentPal - Con tự giác việc nhà, ba mẹ nhàn tênh',
  description: 'ParentPal là ứng dụng giúp bố mẹ giao việc nhà, rèn luyện thói quen tự lập cho con thông qua hệ thống điểm thưởng và người bạn đồng hành DinoPet đáng yêu. Giúp con tự giác mà không cần quát mắng.',
  keywords: ['parentpal', 'app giao việc cho con', 'dạy con tự lập', 'việc nhà cho bé', 'rèn luyện thói quen tốt', 'dinopet', 'nuôi dạy con gen z', 'v41'],
  authors: [{ name: 'V41', url: 'https://v41.vn' }],
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
  const fontVariables: CSSProperties = {
    '--font-plus-jakarta': "'Plus Jakarta Sans', 'Segoe UI', Arial, sans-serif",
    '--font-bricolage': "'Bricolage Grotesque', 'Segoe UI', Arial, sans-serif",
  } as CSSProperties;

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
    <html lang="vi" className="h-full" style={fontVariables}>
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
