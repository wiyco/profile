import FloppyDisk from "@icons/floppy-disk.svg";
import Home from "@icons/home.svg";
import PageEdit from "@icons/page-edit.svg";

const navItems = [
  { label: "home", icon: <Home />, url: "/" },
  { label: "archive", icon: <FloppyDisk />, url: "/archive" },
  { label: "blog", icon: <PageEdit />, url: "/blog?page=1" },
];

export { navItems };
