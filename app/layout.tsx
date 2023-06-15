import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter, Space_Mono, Work_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const space_mono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-space-mono",
});
const work_sans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
  variable: "--font-work-sans",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${space_mono.variable} ${work_sans.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
