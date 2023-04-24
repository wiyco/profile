import React from "react";
import Link from "next/link";
import PageHead from "../../components/PageHead";

export default function Post() {
  return (
    <>
      <PageHead title="" description="This is site." />
      <div className="z-10 flex-1 w-full max-w-4xl text-base flex flex-col items-center justify-start space-y-8">
        <span className="self-center p-4 text-2xl border-b border-zinc-700 dark:border-zinc-200">
          <h2 className="">Slug</h2>
        </span>
        <div className="self-start flex-1 w-full">
          <p>Blog slug.</p>
        </div>
      </div>
    </>
  );
}
