import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sasha Bayan",
  description: "Artist, Producer, Collaborator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center">
        {children}
      </body>
    </html>
  );
}
