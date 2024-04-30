import { Snippet } from "@nextui-org/react";

export function PreBlock(props: React.ComponentProps<"pre">) {
  return (
    <div className="relative h-fit w-full overflow-hidden">
      <Snippet
        hideSymbol
        classNames={{
          base: "mb-6 mt-1 pl-5 pr-11 w-full overflow-x-auto leading-[1.375rem]",
          copyButton: "mb-6 mt-1 absolute right-2 top-[7px] backdrop-blur-xl",
          pre: "py-1.5 whitespace-pre",
        }}
      >
        {props.children}
      </Snippet>
    </div>
  );
}
