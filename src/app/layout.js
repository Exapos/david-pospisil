import "./globals.css";
import Header from "@/components/nav";
import Footer from "@/components/footer"

export const metadata = {
  title: "David Pospíšil",
  description: "Portoflio trenéra Davida Pospíšila",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header 
            home={'Domu'}
            about={'O mně'}
            gallery={'Galerie'} />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
