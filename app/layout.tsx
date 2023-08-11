
import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components/footer";

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
        <main className="container" >{children}</main>
        <Footer />
      </body>
      
    </html>
  );
}
