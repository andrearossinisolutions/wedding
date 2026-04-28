import "./globals.css";

export const metadata = {
  title: "Invito Matrimonio",
  description: "Landing page parallax per invito evento matrimonio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
