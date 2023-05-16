import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import Layout from "@/components/layouts/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
