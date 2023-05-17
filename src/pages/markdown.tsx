import MarkdownRenderer from "@/components/blocks/MarkdownRenderer";
import PageMeta from "@/components/PageMeta";

export default function Markdown() {
  const data = {
    title: "Markdown/Demo",
    body: `# Header# (h2)\n\n## Header## (h3)\n\n### Header### (h4)\n\n#### Header#### (h5)
    \n\nThis is text
    \n\nThis is horizontal separator
    \n\n---
    \n\n[This is an external link](https://github.com/wiyco/profile)
    \n\n[This is an internal link](/blog/test)
    \n\n**This is a strong text**
    \n\n> This is a quote text
    \n\n![This is an image](https://www.dropbox.com/s/ectb0kjn8gcnu8j/profile-supabase-erd.jpg?raw=1)
    \n\n- list 0
    \n- list 1
    \n\n\`\`\`This is a code-text between 3 backtick (0,1)\`\`\`
    \n\n\`\`\`python
    \ndef code_block():
    \n  print("This is a code-block (0,1)")
    \n  while True:
    \n    pass
    \n\`\`\`
    \n\n<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ZRtdQ81jPUQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    \n\nDEMO END
    `,
  };

  return (
    <>
      <PageMeta title={data.title} description="This is demo page of markdown." />
      <div className="markdown-wrap z-10 flex-1 w-full max-w-4xl text-base flex flex-col items-center justify-start space-y-6">
        <span className="self-center p-4 text-2xl border-b border-zinc-700 dark:border-zinc-200">
          <h1 className="">{data.title}</h1>
        </span>
        <div className="self-start flex-1 w-full p-2">
          <MarkdownRenderer>{data.body}</MarkdownRenderer>
        </div>
      </div>
    </>
  );
}
