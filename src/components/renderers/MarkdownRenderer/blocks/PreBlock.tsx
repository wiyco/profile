import { Snippet } from "@nextui-org/snippet";

export function PreBlock(props: React.ComponentProps<"pre">) {
  return (
    <div className="relative h-fit w-full overflow-hidden">
      <Snippet
        hideSymbol
        classNames={{
          base: "mb-[1.875rem] pl-5 pr-11 w-full overflow-x-auto leading-[1.375rem]",
          copyButton: "mb-[1.875rem] absolute right-2 top-[7px] backdrop-blur-xl",
          pre: "py-1.5 whitespace-pre",
        }}
      >
        {props.children}
      </Snippet>
    </div>
  );
}
