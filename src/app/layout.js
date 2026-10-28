import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import StoreProvider from "@/StoreProvider";
import "./globals.css";

export const metadata = {
  title: "My Market",
  description: "Thoughtful picks for your wardrobe, home, and everyday living.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <NavBar />
          <main className="siteMain">{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
