import Header from "@/components/Header";
import "./globals.css";
import WishlistContextProvider from "./context/WishlistContextProvider";

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
      <body>
        <WishlistContextProvider>
          <Header />
          {children}
        </WishlistContextProvider>
      </body>
    </html>
  );
}
