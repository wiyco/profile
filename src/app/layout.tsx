import "@/styles/globals.scss";

import type { Metadata } from "next";

import { Footer } from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: "wiyco",
    template: "%s | wiyco",
  },
  description: "wiyco's personal website.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
