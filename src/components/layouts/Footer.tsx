import GitHub from "public/icons/github.svg";
import Instagram from "public/icons/instagram.svg";
import Twitter from "public/icons/twitter.svg";

export default function Footer() {
  const navItems = [
    {
      head: "Map",
      data: [
        { label: "Home", href: "/" },
        { label: "Archive", href: "/archive" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      head: "About",
      data: [
        { label: "GitHub", href: "https://github.com/wiyco" },
        { label: "Twitter", href: "https://twitter.com/elonmusk" },
        { label: "Instagram", href: "https://www.instagram.com/jacobcollier" },
      ],
    },
    {
      head: "More",
      data: [
        { label: "Vercel", href: "https://vercel.com/" },
        { label: "Supabase", href: "https://supabase.com/" },
      ],
    },
  ];

  return (
    <footer className="z-40 w-full p-4 bg-zinc-800 text-white">
      <div className="mt-7 text-sm">
        <ul className="flex flex-row items-start justify-evenly">
          {navItems.map((item, index) => (
            <li className="" key={`foot-nav-${index}`}>
              <h2 className="text-lg">{item.head}</h2>
              <ul className="flex flex-col items-start justify-start space-y-2 mt-2">
                {item.data.map((data, index) => (
                  <li className="" key={`foot-nav-child-${index}`}>
                    <a href={data.href} target="_blank" rel="noopener noreferrer">
                      {data.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between mt-8">
          <span className="">&copy; {new Date().getFullYear()} wiyco</span>
          <ul className="flex items-center justify-center space-x-4 text-lg">
            <li className="inline-flex" key={"github"} title="GitHub">
              <a
                className=""
                href="https://github.com/wiyco"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="">
                  <GitHub className="stroke-white" />
                </span>
              </a>
            </li>
            <li className="inline-flex" key={"twitter"} title="Twitter">
              <a
                className=""
                href="https://twitter.com/elonmusk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="">
                  <Twitter className="stroke-white" />
                </span>
              </a>
            </li>
            <li className="inline-flex" key={"instagram"} title="Instagram">
              <a
                className=""
                href="https://www.instagram.com/jacobcollier"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="">
                  <Instagram className="stroke-white" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
