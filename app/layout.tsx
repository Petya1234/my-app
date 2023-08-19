import "@/app/globals.css";
import './main-content-styles.css'
import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: 'Petya main'
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
        <main className='container' >{children}</main>
        <Footer />
        </Providers>
      </body>
      
    </html>
  );
}
