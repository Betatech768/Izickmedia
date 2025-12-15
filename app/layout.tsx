import type { Metadata } from "next";
import {
  Host_Grotesk,
  Inter,
  Poppins,
  Cinzel,
  Libre_Caslon_Text,
} from "next/font/google";
import "./globals.css";
import { Heading } from "./components/Header";
import Footer from "./components/Footer";

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const calson = Libre_Caslon_Text({
  variable: "--font-calson",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "IzickMedia",
  description: "Touching the Souls of Men through Heavenly Sounds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${hostGrotesk.variable} ${inter.variable} ${cinzel.variable} ${calson.variable} antialiased fonts-poppins font-medium`}
      >
        <main className="font-poppins">
          <Heading />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
