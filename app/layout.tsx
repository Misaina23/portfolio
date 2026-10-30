import type { Metadata, Viewport } from "next";
import { Playfair_Display, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { profile } from "@/lib/data";
import { LanguageProvider } from "@/contexts/LanguageContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://devmisaina.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.fullName} — ${profile.title}`,
    template: `%s | ${profile.fullName}`,
  },
  description: profile.tagline,
  applicationName: "DevMisaina Portfolio",
  authors: [{ name: profile.fullName }],
  creator: profile.fullName,
  keywords: [
    "Développeur Full Stack",
    "Next.js",
    "React",
    "Vue.js",
    "Laravel",
    "Django",
    "Flutter",
    "React Native",
    "Portfolio",
    "Madagascar",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "DevMisaina",
    title: `${profile.fullName} — ${profile.title}`,
    description: profile.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.fullName} — ${profile.title}`,
    description: profile.tagline,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#070b16" },
  ],
};

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${ibmPlexMono.variable} h-full`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
