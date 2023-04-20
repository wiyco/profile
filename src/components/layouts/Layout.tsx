import { ReactNode } from "react";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <Header classNameAdd="max-w-6xl" />
      <main className="w-full h-full p-4 max-w-6xl">{children}</main>
      <Footer classNameAdd="mt-auto" />
    </div>
  );
}
