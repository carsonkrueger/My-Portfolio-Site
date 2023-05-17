import "./globals.css";

export const metadata = {
  title: "Carson's Portfolio",
  description: "Information about Carson Krueger",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      {/* <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js" /> */}
    </html>
  );
}
