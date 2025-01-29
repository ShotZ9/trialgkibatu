import "./globals.css";
import Navbar from "../components/Navbar";

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
      <body className="bg-gray-100">
        <Navbar />
        <main className="">{children}</main>
      </body>
    </html>
  );
}