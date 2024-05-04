import type { Metadata } from "next";
import ThemeProvider from "@/providers/ThemeProvider/ThemeProvider";

export const metadata: Metadata = {
  title: "Tamsa",
  description: "Tamsa-description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children} </ThemeProvider>
      </body>
    </html>
  );
}
