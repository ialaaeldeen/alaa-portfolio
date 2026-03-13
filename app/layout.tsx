import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Alaaeldeen | Cybersecurity Engineer",
    template: "%s | Alaaeldeen",
  },

  description:
    "Portfolio of Alaaeldeen, a Cybersecurity Engineer specializing in cybersecurity, AI security, network defense, DevSecOps, and secure system design.",

  keywords: [
    "Alaaeldeen",
    "Cybersecurity Engineer",
    "Cybersecurity Portfolio",
    "AI Security",
    "DevSecOps",
    "Network Security",
    "Ethical Hacking",
    "Penetration Testing",
    "Cyber Defense",
  ],

  authors: [{ name: "Alaaeldeen" }],

  creator: "Alaaeldeen",

  metadataBase: new URL("https://alaaeldeen.dev"), // change after deployment

  openGraph: {
    title: "Alaaeldeen | Cybersecurity Engineer",
    description:
      "Cybersecurity portfolio showcasing projects in AI security, network defense, penetration testing, and DevSecOps.",
    url: "https://alaaeldeen.dev",
    siteName: "Alaaeldeen Portfolio",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alaaeldeen Cybersecurity Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Alaaeldeen | Cybersecurity Engineer",
    description:
      "Cybersecurity engineer specializing in AI security, network defense, DevSecOps, and secure system development.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">

      <head>
        {/* Devicon Icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Theme Color */}
        <meta name="theme-color" content="#000000" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>

    </html>
  );}