import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={quicksand.className}>
      <body className="bg-customBackgroundDark">
        <header>
          <Header />
        </header>
        <main className="bg-customBackgroundLight mx-auto max-w-screen-lg">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
