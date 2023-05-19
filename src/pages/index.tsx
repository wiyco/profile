import MarkdownRenderer from "@/components/renderers/MarkdownRenderer";
import PageMeta from "@/components/PageMeta";

export default function Home() {
  const md = `# Welcome to my profile website!
  \n\nI tried to build a website from scratch. This is an original design! Did you like it?
  \n\nAnd... You can access to the [Blog](/blog) page from top of right corner. Try it out!
  \n\nBTW... This website were build w/ [Supabase](https://supabase.com/) & 
  [Vercel](https://vercel.com/).
  \n\nVery nice & awesome services!
  \n\nTo more details, check [my project](https://github.com/wiyco/profile)!
  `;
  return (
    <>
      <PageMeta title="" description="wiyco's website." />
      <div className="markdown-wrap z-10 flex-1 w-full max-w-4xl text-base flex flex-col items-center justify-start space-y-6">
        <span className="self-center p-4 text-2xl border-b border-zinc-700 dark:border-zinc-200">
          <h1 className="">Home</h1>
        </span>
        <div className="self-start flex-1 w-full p-2">
          <MarkdownRenderer>{md}</MarkdownRenderer>
        </div>
      </div>
    </>
  );
}
