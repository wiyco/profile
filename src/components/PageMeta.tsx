import Head from "next/head";

type pageMetaProps = {
  title: string;
  description: string;
};

export default function PageMeta({ title, description }: pageMetaProps) {
  return (
    <Head>
      <title>{title === "" ? "wiyco" : `${title} | wiyco`}</title>
      <meta
        property="og:title"
        content={title === "" ? "wiyco" : `${title} | wiyco`}
        key={"title"}
      />
      <meta property="og:description" content={description} key={"description"} />
    </Head>
  );
}
