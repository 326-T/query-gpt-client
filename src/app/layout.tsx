import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LoadingProvider } from "./contexts/LoadingContext";
import { AxiosProvider } from "./contexts/AxiosContext";
import { EnvProvider } from "./contexts/EnvContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className={inter.className}>
        <LoadingProvider>
          <EnvProvider>
            <AxiosProvider>{children}</AxiosProvider>
          </EnvProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
