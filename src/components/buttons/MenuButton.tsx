import Cancel from "public/icons/cancel.svg";
import Menu from "public/icons/menu.svg";

type menuButtonProps = {
  setMounted: any;
  mounted: boolean;
};

export default function MenuButton({ setMounted, mounted }: menuButtonProps) {
  return (
    <button
      className=""
      title="Menu"
      aria-label="Toggle Menu"
      type="button"
      onClick={() => setMounted(!mounted)}
    >
      <span className="">
        {mounted ? <Cancel className="stroke-current" /> : <Menu className="stroke-current" />}
      </span>
    </button>
  );
}
