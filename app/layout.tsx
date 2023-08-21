import "@/app/globals.css";
import "./main-content-styles.css";
import Head from "next/head";
import { Footer } from "@/components/footer";
import { Providers } from "@/components/Providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Petya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main className="container">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
