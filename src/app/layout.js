import StoreProvider from "./StoreProvider";
import "./globals.css";

export const metadata = {
  title: "My Market",
  description: "Thoughtful picks for your wardrobe, home, and everyday living.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
