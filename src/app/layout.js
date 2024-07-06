import { Inter } from "next/font/google";
import "./sass/main.scss";
import './globals.css'
import {ThemeProvider} from '../../context/ThemeContext'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PPA-Assignment",
  description: "Made By Khushboo",
};

export default function RootLayout({ children}){
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
