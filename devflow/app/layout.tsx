import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/context/Them";
import Navbar from "@/components/navigation/navbar";

const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900",
})
const spaceGrotesk = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "100 200 300 400 500 600 700 800 900",
})

export const metadata: Metadata = {
  title: "Easy DevFlow",
  description: "A comunity-driven platform for developers to share and discover tools, resources, and workflows. Join us in building a comprehensive database of developer tools and resources, and help us create a better experience for developers everywhere. Explore, contribute, and connect with other developers to enhance your workflow and productivity.",
  icons:{
    icon:"/images/site-logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ThemeProvider 
        attribute={"class"} 
        defaultTheme="system" 
        enableSystem 
        disableTransitionOnChange>

          <Navbar />
        {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}
