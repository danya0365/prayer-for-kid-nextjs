import type { Metadata } from "next";
import { Navbar } from "@/src/presentation/components/layout/Navbar";
import { Footer } from "@/src/presentation/components/layout/Footer";
import "../public/styles/index.css";

export const metadata: Metadata = {
  title: "Prayer for Kids - เรียนรู้การละหมาดสำหรับเด็ก",
  description:
    "เรียนรู้การละหมาดอย่างสนุกสนาน ด้วยภาพสวยงาม สีสันสดใส เหมาะกับเด็กๆ ทุกวัย",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
