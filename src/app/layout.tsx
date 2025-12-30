import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "kTechSolutions - Innovative Software Solutions",
  description: "Leading provider of School Management System and Laravel Dynamic Website solutions. Transform your institution with cutting-edge technology.",
  keywords: "School Management System, Laravel Dynamic Website, kTechSolutions, education software, web development",
  authors: [{ name: "kTechSolutions" }],
  openGraph: {
    title: "kTechSolutions - Innovative Software Solutions",
    description: "Leading provider of School Management System and Laravel Dynamic Website solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
