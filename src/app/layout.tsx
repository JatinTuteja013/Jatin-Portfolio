import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PortfolioProvider } from "@/context/PortfolioContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jatin - Professional Web Developer & Digital Marketing Expert | Portfolio",
  description: "Expert full-stack web developer and digital marketing strategist. Specializing in React, Next.js, SEO optimization, and growth marketing. Proven track record of 50+ successful projects and 100+ satisfied clients.",
  keywords: [
    "web developer",
    "full stack developer",
    "react developer",
    "next.js developer",
    "digital marketing",
    "SEO expert",
    "web development services",
    "digital marketing services",
    "custom web development",
    "e-commerce development",
    "web design",
    "frontend developer",
    "backend developer",
    "UI/UX design",
    "performance optimization",
    "technical SEO",
    "content marketing",
    "social media marketing",
    "paid advertising",
    "analytics and reporting",
    "web development company",
    "freelance web developer",
    "responsive web design",
    "mobile app development",
    "web application development"
  ],
  authors: [{ name: "Jatin", url: "https://jatin-portfolio.com" }],
  creator: "Jatin",
  publisher: "Jatin",
  metadataBase: new URL('https://jatin-portfolio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jatin-portfolio.com',
    siteName: 'Jatin Portfolio',
    title: 'Jatin - Professional Web Developer & Digital Marketing Expert',
    description: 'Expert full-stack web developer and digital marketing strategist. Specializing in React, Next.js, SEO optimization, and growth marketing.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jatin - Web Developer & Digital Marketing Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jatin - Professional Web Developer & Digital Marketing Expert',
    description: 'Expert full-stack web developer and digital marketing strategist specializing in modern web technologies.',
    creator: '@jatinportfolio',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://jatin-portfolio.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PortfolioProvider>
          {children}
        </PortfolioProvider>
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jatin",
              "jobTitle": "Web Developer & Digital Marketing Expert",
              "url": "https://jatin-portfolio.com",
              "sameAs": [
                "https://linkedin.com/in/jatin",
                "https://github.com/jatin",
                "https://twitter.com/jatin"
              ],
              "description": "Expert full-stack web developer and digital marketing strategist with 5+ years of experience.",
              "knowsAbout": [
                "Web Development",
                "React",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "Digital Marketing",
                "SEO",
                "Content Marketing",
                "Social Media Marketing"
              ],
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Professional Certificate"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
