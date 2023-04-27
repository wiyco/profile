import Link from "next/link";
import Image from "next/image";
import PageMeta from "@/components/PageMeta";

export default function Home() {
  return (
    <>
      <PageMeta title="" description="wiyco's website." />
      <div className="z-10 flex-1 w-full max-w-4xl text-base flex flex-col items-center justify-start space-y-8">
        <span className="self-center p-4 text-2xl border-b border-zinc-700 dark:border-zinc-200">
          <h2 className="">Topic</h2>
        </span>
        <div className="self-start flex-1 w-full p-2">
          <p>This is demo topic.</p>
        </div>
      </div>
    </>
  );
}
