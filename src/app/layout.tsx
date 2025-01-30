import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata = {
  title: "GKI Batu",
  description: "Website resmi gereja GKI Batu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="relative">
        <CustomCursor />
        <Navbar />
        <main className="">{children}</main>
        <ScrollToTop />
        {/* <ThemeToggle /> */}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}