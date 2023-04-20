import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";

type headerProps = {
  classNameAdd: string;
};

export default function Header({ classNameAdd }: headerProps) {
  return (
    <header
      className={`z-50 sticky top-0 w-full p-4 border-b border-zinc-100 dark:border-zinc-800 drop-shadow backdrop-blur ${classNameAdd}`}
    >
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <h1 className="font-semibold text-xl">wiyco</h1>
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
