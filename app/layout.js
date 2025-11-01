import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog Template",
  description:
  "A diverse blog covering sustainable living, minimalist interior design, food culture, travel tips, digital trends, and creative photography. We share practical guides and thoughtful insights to help readers live more intentionally and stay inspired in today's evolving world.",

  title: "The Rise of Minimalist Interior Design",
description:
  "Discover how minimalist interior design transforms modern living with clean lines, functional spaces, and neutral tones that promote calm, clarity, and style.",
title: "Sustainable Travel Tips",
description:
  "Learn practical ways to travel responsibly by reducing your carbon footprint, supporting local communities, and protecting the environment.",
title: "The Foodie Guide",
description:
  "A complete guide to exploring local flavors, must-try dishes, and unique dining experiences for food lovers and travelers.",
title: "Eco-Friendly Living",
description:
  "Easy eco-friendly living strategies to reduce waste, save energy, and make sustainable lifestyle choices for a healthier planet.",
title: "Digital Culture",
description:
  "Explore how digital culture shapes creativity, communication, and society in a rapidly changing technological world.",
title: "The Art of Black and White Photography",
description:
  "Discover the expressive power of black and white photography through contrast, emotion, and timeless visual storytelling.",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
                <Header/>

        {children}
        <Footer/>
        
      </body>
    </html>
  );
}
