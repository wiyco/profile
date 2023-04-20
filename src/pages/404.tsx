import PageHead from "@/components/PageHead";

export default function Custom404() {
  return (
    <>
      <PageHead title="404" description="Page not found." />
      <div className="z-10 w-full flex items-center justify-center font-mono text-sm">
        <div className="flex flex-col items-center justify-center space-y-8">
          <h2 className="text-2xl">404</h2>
        </div>
      </div>
    </>
  );
}
