import { ReactNode } from "react";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col items-center justify-between space-y-4 w-full min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <Header />
      <main className="flex-1 w-full p-4 flex flex-col items-center justify-start">{children}</main>
      <Footer />
    </div>
  );
}
