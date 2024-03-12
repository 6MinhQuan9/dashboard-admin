import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components";
import { LayoutStyles } from "./layout.styles";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LayoutStyles>
          <NavBar />
          <div className="content-container">
            <div className="main-content">
              {children}
            </div>
            {/* <Footer /> */}
          </div>
        </LayoutStyles>
      </body>
    </html>
  );
}
