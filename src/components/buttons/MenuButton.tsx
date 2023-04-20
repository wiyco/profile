import { Menu, Cancel } from "iconoir-react";

type NavbarProps = {
  setMounted: Function;
  mounted: boolean;
};

export default function MenuButton({ setMounted, mounted }: NavbarProps) {
  return (
    <button
      className=""
      title="Menu"
      aria-label="Toggle Menu"
      type="button"
      onClick={() => setMounted(!mounted)}
    >
      <span className="">{mounted ? <Cancel /> : <Menu />}</span>
    </button>
  );
}
