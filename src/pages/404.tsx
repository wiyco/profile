import PageHead from "@/components/PageHead";
import PageBackButton from "@/components/buttons/PageBackButton";

export default function Custom404() {
  return (
    <>
      <PageHead title="404" description="Page not found." />
      <div className="z-10 flex-1 w-full max-w-4xl text-base flex flex-col items-center justify-start space-y-8">
        <span className="self-center p-4 text-2xl border-b border-zinc-800 dark:border-zinc-100">
          <h2 className="">404</h2>
        </span>
        <div className="self-start flex-1 w-full">
          <p>Not found</p>
        </div>
        <div className="self-end flex-1 flex items-end justify-center">
          <span className="inline-flex text-lg">
            <PageBackButton />
          </span>
        </div>
      </div>
    </>
  );
}
