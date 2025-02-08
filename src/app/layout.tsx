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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" }
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" },
      { rel: "msapplication-TileColor", url: "#da532c" },
    ]
  },
  manifest: "/site.webmanifest",
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
