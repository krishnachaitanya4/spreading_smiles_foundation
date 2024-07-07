import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Login } from "./components/account/Login";
import AuthProvider from "./components/account/components/Providers";
export const metadata: Metadata = {
  title: "Spreading Smiles Foundation",
  description: "Spreading Smiles Foundation",
};
const mont = Montserrat({ subsets: ["cyrillic"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mont.className}>
      <body className={`bg-white`}>
        <AuthProvider>
          <Navbar>
            <Login />
          </Navbar>
          {children}

          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
