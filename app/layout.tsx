import "./globals.css";

export const metadata = {
  title: "Movie Watchlist",
  description: "A Solo Project",
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
