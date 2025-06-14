import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import PageTransition from "@/components/page-transition";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/contexts/language-context";
import { client } from "@/sanity/lib/client";
import { metadataQuery } from "@/sanity/queries/metadata";

const inter = Inter({ subsets: ["latin"] });

async function getMetadata(language: string = "en") {
  const metadata = await client.fetch(metadataQuery, { language });
  return metadata;
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata();

  return {
    title: metadata?.title || "Aletech - Problem-Centered Technology Solutions",
    description:
      metadata?.description ||
      "Aletech is your committed outsourcing partner, delivering tailored end-to-end solutions by deeply understanding your unique challenges and ensuring user-centered outcomes.",
    icons: {
      icon: metadata?.logoUrl || "/favicon.ico",
    },
    openGraph: {
      title:
        metadata?.title || "Aletech - Problem-Centered Technology Solutions",
      description: metadata?.description || "c.",
      images: [
        {
          url: metadata?.thumbnailUrl || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: metadata?.title || "Aletech",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        metadata?.title || "Aletech - Problem-Centered Technology Solutions",
      description:
        metadata?.description ||
        "Aletech is your committed outsourcing partner, delivering tailored end-to-end solutions by deeply understanding your unique challenges and ensuring user-centered outcomes.",
      images: [metadata?.thumbnailUrl || "/og-image.jpg"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased overflow-x-hidden relative w-full max-w-[100vw]",
          inter.className
        )}
        suppressHydrationWarning
      >
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {/* <PageTransition> */}
            <div className="page-content fixed inset-0 overflow-y-auto">
              {children}
            </div>
            {/* </PageTransition> */}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
