import { MainLayout } from "@/src/presentation/components/layout/MainLayout";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
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
    <html lang="th" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
