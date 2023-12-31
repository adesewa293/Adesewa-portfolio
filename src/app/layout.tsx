import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopArrow from "./components/Scroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aishat-Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Header />
          {children}
          <ScrollToTopArrow />
          <Footer />
        </div>
      </body>
    </html>
  );
}
