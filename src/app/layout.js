import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

// For SEO 
export const metadata = {
  title: "Kochar Tech",
  description: "Tech company in Punjab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />

        {children}

      </body>
    </html>
  );
}
