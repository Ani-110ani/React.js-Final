import { Suspense } from "react";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
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
        <NavBar />
        <main className="siteMain">
          <Suspense fallback={<p role="status">Loading your store...</p>}>
            <StoreProvider>{children}</StoreProvider>
          </Suspense>
        </main>
        <Footer />
      </body>
    </html>
  );
}
