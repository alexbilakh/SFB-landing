import "./globals.css";
import Header from "../layout/Header"
import Footer from "../layout/Footer"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
