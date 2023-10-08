import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
import Navbar from "@/components/Navbar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        <main className="container mx-auto h-[calc(100vh-0.5rem)] flex justify-center items-center">
        {children}
        </main>
       
      </body>
    </html>
  );
}
