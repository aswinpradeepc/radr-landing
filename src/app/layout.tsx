import type { Metadata } from "next";
import { Inter, Outfit, Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const openSans = Open_Sans({ 
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Radr.in | Digital Solutions, Simplified",
  description: "Innovative digital tools that solve real-world challenges. Explore LinkRadr and TicketRadr - Your gateway to efficient digital solutions.",
  keywords: ["LinkRadr", "TicketRadr", "URL shortener", "Event management", "Digital solutions", "CUSAT"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${openSans.variable} dark`}>
      <body className="font-open-sans antialiased bg-dark text-white">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
