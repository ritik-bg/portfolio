import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ritik-Portfolio",
  description: "This website is portfolio website of ritik",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
       
        </body>
    </html>
  );
}
