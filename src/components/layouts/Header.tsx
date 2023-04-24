import Link from "next/link";
import { Raleway } from "next/font/google";
import Navbar from "@/components/layouts/Navbar";

const raleway = Raleway({ subsets: ["latin"] });

export default function Header() {
  return (
    <header className="z-50 sticky top-0 flex items-center justify-center w-full p-4 border-b border-zinc-100 dark:border-zinc-800 drop-shadow backdrop-blur">
      <div className="w-full max-w-5xl flex items-center justify-between">
        <Link href={"/"}>
          <h1 className={`font-mono text-2xl ${raleway.className}`}>wiyco</h1>
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
