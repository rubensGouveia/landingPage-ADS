import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "@/utils/loaders/PrelineScript";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Acima do Solado | Escola de dança em João Pessoa",
  description:
    "Escola de dança em João Pessoa. O lugar para aprender a dançar enquanto se diverte!Aprenda forró, samba, soltinho, tango, zouk, kizomba e muito mais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <GoogleTagManager gtmId="GTM-MPDDZG8S" />
      <body className={inter.className}>{children}</body>
      <PrelineScript />
    </html>
  );
}
