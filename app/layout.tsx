import "@/app/globals.css";
import styles from './main-content-styles.module.css'
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
        <main className={styles.container} >{children}</main>
        <Footer />
        </Providers>
      </body>
      
    </html>
  );
}
