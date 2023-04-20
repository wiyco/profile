import Head from "next/head";

type PageHeadProps = {
  title: string;
  description: string;
};

export default function PageHead({ title, description }: PageHeadProps) {
  return (
    <Head>
      <title>{`wiyco's profile | ${title}`}</title>
      <meta property="og:title" content={`wiyco's profile | ${title}`} key={"title"} />
      <meta property="og:description" content={description} key={"description"} />
    </Head>
  );
}
