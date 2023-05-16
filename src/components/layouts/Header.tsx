import { Raleway } from "next/font/google";
import Link from "next/link";

import Navbar from "@/components/layouts/Navbar";

const raleway = Raleway({ subsets: ["latin"] });

export default function Header() {
  return (
    <header className="z-50 sticky top-0 flex items-center justify-center w-full p-4 drop-shadow backdrop-blur">
      <div className="w-full max-w-5xl flex items-center justify-between">
        <span className={`font-mono text-2xl ${raleway.className}`}>
          <Link href={"/"}>wiyco</Link>
        </span>
        <Navbar />
      </div>
    </header>
  );
}
