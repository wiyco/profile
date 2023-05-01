import Link from "next/link";
import Image from "next/image";
import PageMeta from "@/components/PageMeta";

export default function Home() {
  return (
    <>
      <PageMeta title="" description="wiyco's website." />
      <div className="z-10 flex-1 w-full max-w-4xl text-base flex flex-col items-center justify-start space-y-6">
        <span className="self-center p-4 text-2xl border-b border-zinc-700 dark:border-zinc-200">
          <h2 className="">Home</h2>
        </span>
        <div className="self-start flex-1 w-full p-2">
          <p>Welcome to my profile website! &#x1F609;</p>
          <p>
            I tried to build a website from scratch. This is an original design! Did you like it?
          </p>
          <p>
            And... You can access to <Link href={`/blog`}>the 'Blog' page</Link> from top of right
            corner. Try it out!
          </p>
          <p>
            BTW... This website were build w/{" "}
            <a href="https://supabase.com/" target="_blank" rel="noopener noreferrer">
              Supabase
            </a>{" "}
            &{" "}
            <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
              Vercel
            </a>
            .
          </p>
          <p>Very nice & awesome services!</p>
          <p>
            To more details, check{" "}
            <a href="https://github.com/wiyco/profile" target="_blank" rel="noopener noreferrer">
              my project
            </a>
            !
          </p>
        </div>
      </div>
    </>
  );
}
