import localFont from "next/font/local";
import "./globals.css";
import { ActionLogProvider } from './context/ActionLogContext'

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
  title: "TrueMark Editor",
  description: "Created by Dhruv Shetty for TrueMark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ActionLogProvider>
        {children}
        </ActionLogProvider>
      </body>
    </html>
  );
}
