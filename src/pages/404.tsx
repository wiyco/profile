import FileNotFound from "public/icons/file-not-found.svg";
import PageMeta from "@/components/PageMeta";
import PageBackButton from "@/components/buttons/PageBackButton";

export default function Custom404() {
  return (
    <>
      <PageMeta title="404" description="Page Not Found" />
      <div className="page__ z-10 flex-1 w-full max-w-4xl text-base flex flex-col items-center justify-start space-y-6">
        <span className="self-center p-4 text-2xl border-b border-zinc-700 dark:border-zinc-200">
          <h1 className="">404</h1>
        </span>
        <div className="self-start flex-1 w-full p-2 flex flex-col items-center justify-center">
          <span className="inline-flex text-2xl">
            <FileNotFound className="stroke-current" />
          </span>
          <p className="">Not Found</p>
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
