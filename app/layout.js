import "./globals.css";
import Header from "../layout/Header"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
