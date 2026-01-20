import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppBanner } from "@/components/sections/WhatsAppBanner";
import "./globals.css";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Régimen de Constructoras 2026 | Colegio de Contadores Valle Dorado",
  description: "Domina el régimen fiscal de constructoras 2026. Curso especializado para contadores que quieren convertirse en expertos del sector construcción. Incluye material, constancia y seguimiento.",
  keywords: ["régimen constructoras", "contadores", "fiscal 2026", "curso contabilidad", "constructoras México", "colegio contadores"],
  authors: [{ name: "Colegio de Contadores Valle Dorado" }],
  openGraph: {
    title: "Régimen de Constructoras 2026 | Colegio de Contadores Valle Dorado",
    description: "Domina el régimen fiscal de constructoras 2026. Curso especializado para contadores.",
    type: "website",
    locale: "es_MX",
    siteName: "Colegio de Contadores Valle Dorado",
  },
  twitter: {
    card: "summary_large_image",
    title: "Régimen de Constructoras 2026",
    description: "Curso especializado para contadores del sector construcción.",
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
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light' || theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', theme);
                  } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${dmSans.variable}`}>
        <ThemeProvider>
          <Header />
          {children}
          <WhatsAppButton phoneNumber="+524922473793" />
          <WhatsAppBanner
            text="Únete al Grupo de WhatsApp de Colegio de Contadores Valle Dorado"
            buttonText="Únete"
            href="https://chat.whatsapp.com/H0TIK4DtFEc2nBBwVcwqce"
          />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
