
import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "New next app"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body>
        <header>
        <Header />
        </header>
        <main className="container" >{children}</main>
        <footer><Footer /></footer>
      </body>
      
    </html>
  );
}
