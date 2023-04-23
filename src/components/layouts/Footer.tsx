import { GitHub, Twitter, Instagram } from "iconoir-react";

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
      ],
    },
    {
      head: "More",
      data: [
        { label: "Hello", href: "" },
        { label: "World", href: "" },
      ],
    },
  ];

  return (
    <footer className="z-40 w-full p-4 bg-zinc-800 text-white border-t border-zinc-100 dark:border-zinc-800">
      <div className="mt-7 text-sm">
        <ul className="flex flex-row items-start justify-evenly">
          {navItems.map((item, index) => (
            <li className="" key={`foot-nav-${index}`}>
              <h4 className="text-lg">{item.head}</h4>
              <ul className="flex flex-col justify-start space-y-2 mt-2">
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
          <span className="">&copy; wiyco {new Date().getFullYear()}</span>
          <ul className="flex items-center justify-center space-x-4 text-lg">
            <li className="inline-flex" key={"github"} title="GitHub">
              <a
                className=""
                href="https://github.com/wiyco"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="">
                  <GitHub />
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
                  <Twitter />
                </span>
              </a>
            </li>
            <li className="inline-flex" key={"instagram"} title="Instagram">
              <a
                className=""
                href="https://www.instagram.com/fujiikaze"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="">
                  <Instagram />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
