import type { PropsWithChildren } from "react";

export default function DrawerButton({ children }: PropsWithChildren) {
  return (
    <div className="w-full z-[3] min-[1201px]:hidden">
      {children}
    </div>
  );
}