import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./utility/context/context-api";
import Header from "./utility/layout/Header";
import Footer from "./utility/layout/Footer";
import HeaderMain from "./utility/layout/HeaderMain";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce",
  description: " ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <h1 className="bg-gray-600">
          <AuthProvider >
            <HeaderMain />
            <Header />
            {children}
            <Footer />
          </AuthProvider>
        </h1>
      </body>
    </html>
  );
}
