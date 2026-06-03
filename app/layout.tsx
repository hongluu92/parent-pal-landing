import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ParentPal - Cùng bé hoàn thành, Cùng bé trưởng thành',
  description: 'Gamified chore management for Vietnamese families. Ba mẹ giao việc, con tự hoàn thành và nhận thưởng cùng DinoPet.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className="h-full">
      <body className="h-full" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
