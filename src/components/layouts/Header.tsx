import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";

export default function Header() {
  return (
    <header className="z-50 sticky top-0 w-full p-4 border-b border-zinc-100 dark:border-zinc-800 drop-shadow backdrop-blur">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <h1 className="font-mono text-xl">wiyco</h1>
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
