import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Aura Gold | Premium Australian Manuka Honey",
  description: "Experience the pinnacle of organic wellness with Aura Gold's bioactive Australian Manuka honey. Cold-pressed, MGO-tested, and harvested from pristine Australian bushland.",
  keywords: ["Manuka Honey", "Australian Honey", "Aura Gold", "Organic Wellness", "Bioactive Honey", "MGO"],
  authors: [{ name: "Aura Gold Australia" }],
  openGraph: {
    title: "Aura Gold | Premium Australian Manuka Honey",
    description: "Liquid Gold, Perfected. Discover the world's finest Australian Manuka.",
    url: "https://auragold.com.au",
    siteName: "Aura Gold",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aura Gold Premium Manuka Honey",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura Gold | Premium Australian Manuka Honey",
    description: "Liquid Gold, Perfected. Discover the world's finest Australian Manuka.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased scroll-smooth ${cormorant.variable} ${inter.variable} ${jetbrains.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) theme = 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* Plausible Analytics */}
        <script
          defer
          data-domain="auragold.com.au"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body className="selection:bg-gold-bright selection:text-obsidian font-sans">
        {children}
      </body>
    </html>
  );
}

