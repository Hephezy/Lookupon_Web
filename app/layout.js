import "./globals.css";
import Nav from "../components/navBar/page";
import Footer from "../components/footer/page";


export const metadata = {
  title: "Lookupon",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
        </body>
    </html>
  );
}
