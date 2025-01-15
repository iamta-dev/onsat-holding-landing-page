import type { Metadata } from "next";
import "~/styles/globals.css";

export const metadata: Metadata = {
  title: "Onsat Holding | สร้างความสำเร็จทางธุรกิจไปด้วยกัน",
  description:
    "บริษัทที่ปรึกษาธุรกิจครบวงจร พร้อมให้คำปรึกษาและสนับสนุนการเติบโตของธุรกิจคุณ ด้วยประสบการณ์กว่า 10 ปี",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;400;500;600;700&family=Prompt:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
