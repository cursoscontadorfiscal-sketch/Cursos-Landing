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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://colegio-de-contadores.vercel.app"),
  title: "Membresía de Crecimiento para Contadores 2026 | Colegio de Contadores Valle Dorado",
  description: "Sistema mensual de crecimiento para contadores. Clases en vivo, actualización fiscal, comunidad VIP y herramientas para construir un despacho más rentable. Solo $997 MXN/mes.",
  keywords: ["membresía contadores", "capacitación contable", "actualización fiscal 2026", "crecimiento profesional contadores", "clases contabilidad", "colegio contadores", "despacho contable rentable"],
  authors: [{ name: "Colegio de Contadores Valle Dorado" }],
  openGraph: {
    title: "Membresía de Crecimiento para Contadores | Colegio de Contadores Valle Dorado",
    description: "Sistema mensual de crecimiento: clases en vivo, actualización fiscal, comunidad VIP. Construye un despacho más rentable por $997 MXN/mes.",
    type: "website",
    locale: "es_MX",
    siteName: "Colegio de Contadores Valle Dorado",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Membresía de Crecimiento para Contadores - Colegio de Contadores Valle Dorado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Membresía de Crecimiento para Contadores 2026",
    description: "Sistema mensual: clases en vivo, actualización fiscal y comunidad VIP para contadores.",
    images: ["/og-image.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
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
