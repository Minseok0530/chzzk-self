import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '/styles/global.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};
const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=optional"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#141517] text-white">{children}</body>
    </html>
  );
}
