import { ReactNode } from "react";

import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

type layoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: layoutProps) {
  return (
    <div className="flex flex-col items-center justify-between space-y-4 w-full min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <Header />
      <main className="flex-1 w-full p-4 flex flex-col items-center justify-start">{children}</main>
      <Footer />
    </div>
  );
}
