import "./globals.css";

export const metadata = {
  title: "M&K Agency — Home · Auto · Commercial Insurance | Florida",
  description:
    "Mikhail Kozlov & M&K Agency — bilingual insurance for home, auto & commercial across all of Florida. Accidents happen. We're here to protect you. Call 24/7 (305) 859-3953.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
