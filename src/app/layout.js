import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Tech Community",
  description: "A community for all the technologists",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`bg-seasalt ${montserrat.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
