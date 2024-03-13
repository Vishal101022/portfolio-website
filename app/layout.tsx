import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/themeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vishal Kumar",
  description: "Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Provider>{children}</Provider>
        <SpeedInsights />
      </body>
    </html>
  );
}
