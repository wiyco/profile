import Image from "next/image";
import { Inter } from "next/font/google";
import PageHead from "@/components/PageHead";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <PageHead title="Home" description="This is site." />
      <div className="z-10 w-full items-center justify-normal font-mono text-sm">
        <h2 className="text-lg">Topic</h2>
        <div className="">
          <p>This is a test topic.</p>
          <p>wanna wanna.</p>
        </div>
      </div>
    </>
  );
}
