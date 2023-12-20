import { Libre_Barcode_39_Text } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/utils/cn";

const libreBarcode39Text = Libre_Barcode_39_Text({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function Page() {
  return (
    <div className="z-10 flex w-full max-w-5xl flex-1 flex-col items-center justify-start space-y-6 text-base">
      <h1 className="self-center border-b border-zinc-700 p-4 text-2xl dark:border-zinc-200">
        <span>Home</span>
      </h1>
      <div className="flex w-full flex-1 flex-col items-center justify-center space-y-12 self-start p-2 md:flex-row md:space-x-12 md:space-y-0">
        <div className="flex flex-col items-center justify-center space-y-4 pt-5">
          <span className="flex aspect-square w-full items-center justify-center rounded object-cover drop-shadow">
            <Image
              className="h-full w-full rounded object-contain"
              src={"/favicon/android-chrome-512x512.png"}
              alt={"Avatar"}
              width={640}
              height={640}
              sizes="100vw"
              priority
            />
          </span>
          <span className={cn("text-5xl", libreBarcode39Text.className)}>wiyco</span>
        </div>
        <div className="flex flex-col items-center justify-center space-y-8 md:items-start">
          <div className="relative rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 p-2 text-white shadow">
            <span className="invisible absolute bottom-0 left-[-4px] -z-50 h-[15px] w-[30px] -skew-y-12 skew-x-[-45deg] bg-cyan-500 md:visible"></span>
            <span>Welcome to my profile website!</span>
          </div>
          <div className="relative rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 p-2 text-white shadow">
            <span className="invisible absolute bottom-0 left-[-4px] -z-50 h-[15px] w-[30px] -skew-y-12 skew-x-[-45deg] bg-sky-500 md:visible"></span>
            <span>
              I tried to build a website from scratch. This is an original design! Did you like it?
            </span>
          </div>
          <div className="relative rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 p-2 text-white shadow">
            <span className="invisible absolute bottom-0 left-[-4px] -z-50 h-[15px] w-[30px] -skew-y-12 skew-x-[-45deg] bg-blue-500 md:visible"></span>
            <span>
              And... You can access to the{" "}
              <Link className="underline hover:decoration-dotted" href={"/blog"}>
                blog
              </Link>{" "}
              page from top of right corner. Try it out!
            </span>
          </div>
          <div className="relative rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 p-2 text-white shadow">
            <span className="invisible absolute left-[-4px] top-0 -z-50 h-[15px] w-[30px] skew-x-[45deg] skew-y-12 bg-indigo-500 md:visible"></span>
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
          <div className="relative rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 text-white shadow">
            <span className="invisible absolute left-[-4px] top-0 -z-50 h-[15px] w-[30px] skew-x-[45deg] skew-y-12 bg-violet-500 md:visible"></span>
            <span>Very nice & awesome services!</span>
          </div>
          <div className="relative rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-2 text-white shadow">
            <span className="invisible absolute left-[-4px] top-0 -z-50 h-[15px] w-[30px] skew-x-[45deg] skew-y-12 bg-purple-500 md:visible"></span>
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
  );
}
