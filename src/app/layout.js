import localFont from "next/font/local";
import Footer from "./components/(share)/Footer";
import NavbarComponent from "./components/(share)/NavbarComponent";
import "./globals.css";
import { Providers } from "./providers";
import BannerSlider from "./component/BannerSlider";
import Feature from "./component/Feature";
import Review from "./component/Review";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <nav>
            <NavbarComponent />
          </nav>
          <BannerSlider />
          <Feature/>
          <Review/>
          <div className="h-screen">{children}</div>
         <Footer/>
        </Providers>
      </body>
    </html>
  );
}
