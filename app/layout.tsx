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
  title: "Fabian Madriz — Data Engineering & Analytics",
  description:
    "Computer Systems Engineer and M.Sc. student in Visual Analytics and Big Data. Data intern building ETL pipelines, data-quality checks and analysis-ready models with Python and SQL.",
  keywords: ["Data Engineering", "Data Analyst", "ETL", "Python", "SQL", "Power BI", "Fabian Madriz", "Costa Rica"],
  authors: [{ name: "Fabian Madriz" }],
  openGraph: {
    title: "Fabian Madriz — Data Engineering & Analytics",
    description: "Turning messy spreadsheets into clean, documented, analysis-ready data. Open to data internships and junior roles.",
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
