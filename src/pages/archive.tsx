import CardFull from "@/components/cards/CardFull";
import PageMeta from "@/components/PageMeta";

type archiveProps = {
  title: string;
  href: string;
  src: string;
};

export default function Archive({ data }: { data: Array<archiveProps> }) {
  return (
    <>
      <PageMeta title="Archive" description="wiyco's archive." />
      <div className="z-10 flex-1 w-full max-w-4xl text-base flex flex-col items-center justify-start space-y-6">
        <span className="self-center p-4 text-2xl border-b border-zinc-700 dark:border-zinc-200">
          <h1 className="">Archive</h1>
        </span>
        <div className="self-start flex-1 w-full p-2">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-9 content-start">
            {data.map((item, index) => (
              <li className="" key={index} title={item.title}>
                <CardFull title={item.title} href={item.href} src={item.src} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(process.env.NEXT_PUBLIC_JSON_ARCHIVE!);
  if (!res.ok) throw new Error(`${res.status}`);
  const data = await res.json();

  return {
    props: {
      data: data,
    },
    revalidate: 300,
  };
}
