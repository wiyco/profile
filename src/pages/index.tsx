import { Libre_Barcode_39_Text } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import PageMeta from "@/components/PageMeta";

const barcode = Libre_Barcode_39_Text({ weight: "400", preload: false });

export default function Home() {
  return (
    <>
      <PageMeta title="" description="wiyco's website." />
      <div className="z-10 flex-1 w-full max-w-5xl text-base flex flex-col items-center justify-start space-y-6">
        <span className="self-center p-4 text-2xl border-b border-zinc-700 dark:border-zinc-200">
          <h1 className="">Home</h1>
        </span>
        <div className="self-start flex-1 w-full p-2 flex flex-col md:flex-row items-center justify-center md:space-x-12 space-y-12 md:space-y-0">
          <div className="pt-5 flex flex-col items-center justify-center space-y-4">
            <span className="w-full flex items-center justify-center aspect-square object-cover rounded drop-shadow">
              <Image
                className="w-full h-full rounded object-contain"
                src={"/favicon/android-chrome-512x512.png"}
                alt={"Avatar"}
                width={640}
                height={640}
                sizes="100vw"
                priority
              />
            </span>
            <span className={`text-5xl ${barcode.className}`}>wiyco</span>
          </div>
          <div className="flex flex-col items-center md:items-start justify-center space-y-8">
            <div className="relative p-2 text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 shadow">
              <span className="-z-50 absolute bottom-0 left-[-4px] w-[30px] h-[15px] bg-cyan-500 skew-x-[-45deg] -skew-y-12 md:visible invisible"></span>
              <span>Welcome to my profile website!</span>
            </div>
            <div className="relative p-2 text-white rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 shadow">
              <span className="-z-50 absolute bottom-0 left-[-4px] w-[30px] h-[15px] bg-sky-500 skew-x-[-45deg] -skew-y-12 md:visible invisible"></span>
              <span>
                I tried to build a website from scratch. This is an original design! Did you like
                it?
              </span>
            </div>
            <div className="relative p-2 text-white rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 shadow">
              <span className="-z-50 absolute bottom-0 left-[-4px] w-[30px] h-[15px] bg-blue-500 skew-x-[-45deg] -skew-y-12 md:visible invisible"></span>
              <span>
                And... You can access to the{" "}
                <Link className="underline hover:decoration-dotted" href={"/blog"}>
                  blog
                </Link>{" "}
                page from top of right corner. Try it out!
              </span>
            </div>
            <div className="relative p-2 text-white rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 shadow">
              <span className="-z-50 absolute top-0 left-[-4px] w-[30px] h-[15px] bg-indigo-500 skew-x-[45deg] skew-y-12 md:visible invisible"></span>
              <span>
                BTW... This website were build w/{" "}
                <a
                  className="underline hover:decoration-dotted"
                  href="https://supabase.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Supabase
                </a>{" "}
                and{" "}
                <a
                  className="underline hover:decoration-dotted"
                  href="https://vercel.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel
                </a>
                .
              </span>
            </div>
            <div className="relative p-2 text-white rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow">
              <span className="-z-50 absolute top-0 left-[-4px] w-[30px] h-[15px] bg-violet-500 skew-x-[45deg] skew-y-12 md:visible invisible"></span>
              <span>Very nice & awesome services!</span>
            </div>
            <div className="relative p-2 text-white rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 shadow">
              <span className="-z-50 absolute top-0 left-[-4px] w-[30px] h-[15px] bg-purple-500 skew-x-[45deg] skew-y-12 md:visible invisible"></span>
              <span>
                To more details, check my{" "}
                <a
                  className="underline hover:decoration-dotted"
                  href="https://github.com/wiyco/profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub project
                </a>
                !
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
