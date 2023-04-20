import { ReactNode } from "react";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col justify-center min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <Header />
      <main className="w-full p-4">{children}</main>
      <Footer />
    </div>
  );
}
