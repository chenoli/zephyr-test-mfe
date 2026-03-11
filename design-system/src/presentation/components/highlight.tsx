import { PropsWithChildren } from "react";

export function Highlight({ children }: PropsWithChildren) {
  return (
    <strong className="relative inline-block text-[20px]
                       after:content-[''] after:absolute after:bottom-0
                       after:left-0 after:right-0 after:h-[10px] after:bg-[#ffcde560] after:-z-10
    ">
      {children}
    </strong>
  );
}
