import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SanjanAthyady",
  description: "sanjan athyady portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <title>SanjanAthyady</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
