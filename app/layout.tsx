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
    </html>
  );
}
