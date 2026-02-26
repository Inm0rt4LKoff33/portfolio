import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fabian Madriz — DevOps & Cloud Engineer",
  description:
    "Computer Systems Engineer specializing in DevOps, Site Reliability Engineering, and AWS Cloud infrastructure.",
  keywords: ["DevOps", "SRE", "AWS", "Cloud Engineer", "Fabian Madriz", "Kubernetes", "Terraform"],
  authors: [{ name: "Fabian Madriz" }],
  openGraph: {
    title: "Fabian Madriz — DevOps & Cloud Engineer",
    description: "Building reliable, scalable infrastructure. Open to DevOps, SRE & Cloud Engineer roles.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (stored === 'dark' || (!stored && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className={`${fraunces.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
