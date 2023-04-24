import Image from "next/image";
import PageHead from "@/components/PageHead";

export default function Home() {
  return (
    <>
      <PageHead title="Home" description="This is site." />
      <div className="z-10 flex-1 w-full max-w-4xl text-base flex flex-col items-center justify-start space-y-8">
        <span className="self-center p-4 text-2xl border-b border-zinc-700 dark:border-zinc-200">
          <h2 className="">Topic</h2>
        </span>
        <div className="self-start flex-1 w-full">
          <p>This is demo topic.</p>
          <p>This is demo topic.</p>
          <p>This is demo topic.</p>
          <p>This is demo topic.</p>
          <p>This is demo topic.</p>
          <p>This is demo topic.</p>
          <p>This is demo topic.</p>
          <p>This is demo topic.</p>
          <p>This is demo topic.</p>
          <p>This is demo topic.</p>
          <p>This is demo topic.</p>
          <p>This is demo topic.</p>
          <p>This is demo topic.</p>
          <p>This is demo topic.</p>
          <p>This is demo topic.</p>
        </div>
      </div>
    </>
  );
}
