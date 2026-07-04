import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScroll";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Ballena | Fine Dining Restaurant in San José del Cabo, Los Cabos",
  description:
    "Shaped by sea. Grounded in land. An international kitchen rooted in territory, led by warmth, and made to be shared. Ballena — where gathering comes naturally.",
  keywords: [
    "Ballena",
    "San José del Cabo",
    "Los Cabos",
    "fine dining",
    "restaurant",
    "Grupo Hunan",
  ],
  openGraph: {
    title: "Ballena | San José del Cabo",
    description:
      "Shaped by sea. Grounded in land.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-[var(--color-1)] text-[var(--color-2)] antialiased">
        <SmoothScrollProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
